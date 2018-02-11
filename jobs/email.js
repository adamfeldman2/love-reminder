module.exports = (schedule, mailgun) => {
  const job = schedule.scheduleJob('0 * * * *', function() {
    const now = new Date();

    var data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: ['feldman238@gmail.com'],
      subject: 'Hello',
      text: `This email was sent at: ${now}`
    };

    mailgun.messages().send(data, function(error, body) {
      console.log(body);
    });
  });
};
