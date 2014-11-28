(function () {
  'use strict';

  angular.module('angularSPA', [
    'ngAnimate',
    'ui.router',
    'app.services',
    'nav',
    'nav.services',
    'books'
  ])

  .config(function ($stateProvider, staticViews) {

    // The state of all static 'full' views with no controller are captured
    // here.  Non-standard views are managed from their respective script files.
    staticViews.forEach(function (viewState) {
      $stateProvider.state(viewState, {
        url: '/' + viewState,
        views: {
          'full': {
            templateUrl: '/app/' + viewState + '/' + viewState + '.html',
            controller: function ($rootScope, turnOnViews) {
              turnOnViews($rootScope, ['full']);
            }
          }
        }
      });
    });

  });

}());

