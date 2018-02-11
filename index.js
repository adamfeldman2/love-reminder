const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const moment = require('moment');
const passport = require('passport');
const keys = require('./config/keys');
const schedule = require('node-schedule');
const mailgun = require('mailgun-js')({
  apiKey: keys.mailgunApiKey,
  domain: keys.mailgunDomain
});

require('./models/user');
require('./services/passport')(passport, keys, mongoose);

mongoose.connect(keys.mongoURI);
console.log('Database Connection ⚡️⚡️', mongoose.connection.readyState);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days as miliseconds
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth')(app, bodyParser, passport, mongoose);
require('./routes/reminders')(app, bodyParser, mongoose);
require('./routes/mailgun')(app, bodyParser, mailgun);

require('./jobs/email')(schedule, mailgun, mongoose, moment);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
