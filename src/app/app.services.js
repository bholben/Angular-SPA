(function () {
  'use strict';

  angular.module('app.services', [])

  .value('minWidth', {

    phone: 0,
    phablet: 600,
    tablet: 768,  // Bootstrap sm-min
    desktop: 992, // Bootstrap md-min
    wide: 1200    // Bootstrap lg-min
  })

  .factory('turnOnViews', function () {

    return function ($rootScope, views) {
      // If a view name is not in the views array, .indexOf will return -1.
      // Adding 1 to this will yield 0 which is a falsey value.
      $rootScope.isFullView  = Boolean(views.indexOf('full')  + 1);
      $rootScope.isLeftView  = Boolean(views.indexOf('left')  + 1);
      $rootScope.isRightView = Boolean(views.indexOf('right') + 1);
    };
  });

}());

