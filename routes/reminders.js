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
    const id = req.user._id;
    const updatedRemindersArr = { reminders: req.body.reminders };

    User.findByIdAndUpdate(id, updatedRemindersArr)
      .then(() => {
        console.log('Reminders were updated and saved! ');
        res.send({ success: true });
      })
      .catch((err) => {
        console.log('Reminders were not updated and saved: ', err);
        res.send({ success: false });
      });
  });
};
