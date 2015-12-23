(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['FontFaceObserver'] };
  }

  define('font-face-observer', [], vendorModule);
})();
