/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    cssnextOptions: {
      url: false
    },
    fingerprint: {
      exclude: [
        'topaxich.css',
        'assets/pictures/portfolio'
      ]
    }
  });

  app.import('vendor/fontfaceobserver.js')

  return app.toTree();
};
