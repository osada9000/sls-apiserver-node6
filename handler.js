const helloSample = require('./src/hello');

module.exports.hello = (event, context, callback) => {
  const responseBody = helloSample.main(event.body);

  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };

  callback(null, response);
};
