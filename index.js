require('@babel/register')({ presets: ['@babel/preset-env'] });
require('@babel/polyfill');

const appPromise = require('./server').appPromise;
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

appPromise.then(function (app) {
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
});
