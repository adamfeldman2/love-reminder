const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app, bodyParser, mongoose) => {
  const User = mongoose.model('users');

  app.post('/api/stripe', (req, res) => {
    // send stripe charge to stripe — returns a promise
    stripe.charges
      .create({
        amount: 300,
        currency: 'CAD',
        description: '$3.00 for 365 emails',
        source: req.body.id
      })
      // store update to hasPaid on database
      .then(() => {
        const id = req.user._id;

        req.user.hasPaid = true;
        const user = req.user;

        User.findByIdAndUpdate(id, user)
          .then(() => {
            console.log("User's payment was recorded");
            res.send({
              success: true,
              user
            });
          })
          .catch((err) => {
            console.log("User's payment was not recorded", err);
            res.send({
              success: false,
              user
            });
          });
      });
  });
};
