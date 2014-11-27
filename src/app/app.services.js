(function () {
  'use strict';

  angular.module('app.services', [])
    .value('minWidth', {
      phone: 0,
      phablet: 600,
      tablet: 768,  // Bootstrap sm-min
      desktop: 992, // Bootstrap md-min
      wide: 1200    // Bootstrap lg-min
    });

}());

