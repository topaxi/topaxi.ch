/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'topaxich',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none' topaxi.codes:443",
      'script-src': "'self' 'sha256-MHx6e2DNTYYvNm/YAmCjLXDVg3uEK7sI7xP7oy5kIjs=' www.google-analytics.com",
      'font-src': "'self'",
      'connect-src': "'self' topaxi.codes:443",
      'img-src': "'self' www.gravatar.com",
      'style-src': "'self'",
      'media-src': "'self'"
    },

    'topaxi.codes': {
      url:          'https://topaxi.codes',
      clientId:     'topaxi.ch',
      clientSecret: 'FpzBm55k0V'
    }

  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = 'https://topaxi.ch/';
  }

  return ENV;
};
