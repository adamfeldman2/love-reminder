module.exports = (app, bodyParser, mongoose) => {
  const User = mongoose.model('users');

  // Body Parser Middleware
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  // find user by id and return reminders
  app.get('/api/get_reminders', async (req, res) => {
    const id = req.user._id;
    const { reminders } = await User.findOne({
      _id: id
    });

    res.send(reminders);
  });

  // find user by id and return recipient
  app.get('/api/get_recipient', async (req, res) => {
    const id = req.user._id;
    const { recipient } = await User.findOne({
      _id: id
    });

    res.send(recipient);
  });

  // find user by id and update reminders
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

  app.post('/api/set_recipient', (req, res) => {
    const id = req.user._id;
    const { recipient } = req.body;

    User.findByIdAndUpdate(id, { recipient })
      .then(() => {
        console.log("The recipient's email address was saved!");
        res.send({ success: true });
      })
      .catch((err) => {
        console.log("The recipient's email address could not be saved", err);
        res.send({ success: false });
      });
  });
};
