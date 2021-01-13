require('dotenv').config();
const mailgun = require('mailgun-js');

exports.handler = (event, _contex, callback) => {
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

  const data = JSON.parse(event.body);
  console.log(data);
  if (data.sticky) {
    console.log('honeypot!!!');
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'sorry you are a bot' }),
    };
  }
  const email = {
    from: `${data.name} <${data.email}>`,
    to: 'tagunovaleksandr5@gmail.com',
    subject: data.subject,
    text: data.body,
  };
  mg.messages().send(email, (error, response) => {
    callback(error, {
      statusCode: 200,
      body: JSON.stringify(response),
    });
  });
};
