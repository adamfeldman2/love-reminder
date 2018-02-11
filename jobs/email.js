module.exports = (schedule, mailgun, mongoose, moment) => {
  const User = mongoose.model('users');

  // set job's schedule
  const job = schedule.scheduleJob('* 4 * * *', function() {
    // today's date
    const today = moment().format('MMM D, YYYY');

    // find all users in the database
    User.find({}).then((user) => {
      // iterate over all users
      for (let i = 0; i < user.length; i++) {
        // iterate over all reminders
        for (let j = 0; j < 365; j++) {
          // if today's day matches the sendDate AND today's reminder has text
          if (
            user[i].reminders[j].sendDate === today &&
            user[i].reminders[j].text
          ) {
            // build email's html
            const output = `
              <h4>New 365 Reasons Why message from ${user[i].givenName}!</h4>
              <p>${user[i].reminders[j].text}</p>
            `;

            // build email info
            var data = {
              from: `${user[i].givenName} <${user[i].email}>`,
              to: user[i].recipient,
              subject: 'New Message From 365 Reasons Why!',
              text: `New 365 Reasons Why message from ${user[i].givenName}: ${
                user[i].reminders[j].text
              }`,
              html: output
            };
            //send message via mailgun
            mailgun.messages().send(data, function(err, body) {
              if (err) {
                console.log('ERROR: ', err);
              } else {
                console.log('BODY: ', body);
              }
            });
          }
        }
      }
    });
  });
};
