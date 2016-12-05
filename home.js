'use strict';

// Your function handler
module.exports.home = function (event, context, callback) {
  const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://s3.amazonaws.com/night-dev-zergs3-9hxv27xdysnv/style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <div id="app">
      <h2>Figwheel template</h2>
      <p>Checkout your developer console.</p>
    </div>
    <script src="https://d3fk9rmuefewkk.cloudfront.net/zerg.js" type="text/javascript"></script>
  </body>
  </html>
`;

const response = {
  statusCode: 200,
  headers: {
    'Content-Type': 'text/html',
  },
  body: html,
};
// callback will send HTML back
callback(null, response);
};
