/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    cssnextOptions: {
      url: false
    },
    fingerprint: {
      replaceExtensions: [ 'html', 'css', 'js', 'xml' ],
      exclude: [
        'topaxich.css'
      ]
    }
  });

  app.import('vendor/fontfaceobserver.js')

  return app.toTree();
};
