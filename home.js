'use strict';

// Your function handler
module.exports.home = function (event, context, callback) {
  const html = `<!DOCTYPE html><html lang=en><meta charset=utf-8><meta content="width=device-width,initial-scale=1"name=viewport><title>Nightshell</title><link href=https://d3fk9rmuefewkk.cloudfront.net/style.css rel=stylesheet><link href="https://fonts.googleapis.com/css?family=Roboto"rel=stylesheet><link href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css rel=stylesheet><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon.ico rel="shortcut icon"><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon.ico rel=icon sizes="16x16 32x32 64x64"><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-192.png rel=icon sizes=196x196 type=image/png><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-160.png rel=icon sizes=160x160 type=image/png><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-96.png rel=icon sizes=96x96 type=image/png><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-64.png rel=icon sizes=64x64 type=image/png><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-32.png rel=icon sizes=32x32 type=image/png><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-16.png rel=icon sizes=16x16 type=image/png><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-57.png rel=apple-touch-icon><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-114.png rel=apple-touch-icon sizes=114x114><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-72.png rel=apple-touch-icon sizes=72x72><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-144.png rel=apple-touch-icon sizes=144x144><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-60.png rel=apple-touch-icon sizes=60x60><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-120.png rel=apple-touch-icon sizes=120x120><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-76.png rel=apple-touch-icon sizes=76x76><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-152.png rel=apple-touch-icon sizes=152x152><link href=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-180.png rel=apple-touch-icon sizes=180x180><meta content=#FFFFFF name=msapplication-TileColor><meta content=https://raw.githubusercontent.com/siliconmagi/pictures/master/favicon-144.png name=msapplication-TileImage><meta content=https://raw.githubusercontent.com/siliconmagi/pictures/master/browserconfig.xml name=msapplication-config><div id=app></div><script src=https://d3fk9rmuefewkk.cloudfront.net/app.js></script><script>mazda.core.init()</script>`;

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
