module.exports = (app, bodyParser, mongoose) => {
  const User = mongoose.model('users');

  // Body Parser Middleware
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  app.post('/api/update_reminders', (req, res) => {
    console.log('REQ 🍕:', req.body.reminders);

    res.send({ message: 'Reminders saved!' });
  });
};
