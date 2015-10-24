/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      exclude: [
        'sleepy-topcatinja__dark-eyes.png',
        'topaxich.css',
        'assets/pictures/portfolio'
      ]
    }
  });

  app.import('vendor/fontfaceobserver.js')

  return app.toTree();
};
