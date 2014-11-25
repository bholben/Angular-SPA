(function () {
  'use strict';

  angular
    .module('globals', [])
    .run(globals);

  function globals($rootScope) {
    $rootScope.minWidth = {
      phone: 0,
      phablet: 600,
      tablet: 768,
      desktop: 992,
      wide: 1200
    };
  }

}());

