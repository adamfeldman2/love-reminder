const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app, bodyParser, mongoose) => {
  const User = mongoose.model('users');

  app.post('/api/stripe', (req, res) => {});
};
