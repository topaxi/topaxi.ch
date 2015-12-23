/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    cssnextOptions: {
      url: false
    },
    fingerprint: {
      exclude: [
        'topaxich.css'
      ]
    }
  });

  app.import('vendor/fontfaceobserver.js')
  app.import('vendor/shims/font-face-observer.js')

  return app.toTree();
};
