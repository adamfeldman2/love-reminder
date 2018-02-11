module.exports = (app, bodyParser, mailgun) => {
  // Body Parser Middleware
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  app.get('/send-email', (req, res) => {
    const output = `
      <h3>YOU HAVE A NEW REMINDER!</h3>
      <p>You are the very best!</p>
    `;

    const data = {
      from: `Somebody Who Loves You <a@a.com>`,
      to: ['feldman238@gmail.com'],
      subject: 'NEW REMINDER! || 365 Reasons Why',
      text: 'Some text',
      html: output
    };

    mailgun.messages().send(data, (error, body) => {
      if (error) {
        console.log('Form Error 🚫: ', error);
        res.send({ sent: false });
      } else {
        console.log('Form Sent 📩: ', body);
        res.send({ sent: true });
      }
    });
  });
};
