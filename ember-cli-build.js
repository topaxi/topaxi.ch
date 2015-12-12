/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    cssnextOptions: {
      url: false
    },
    fingerprint: {
      exclude: [
        'sleepy-topcatinja__dark-eyes.png',
        'topaxich.css'
      ]
    }
  });

  app.import('vendor/fontfaceobserver.js')

  return app.toTree();
};
