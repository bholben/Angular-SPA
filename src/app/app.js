(function () {
  'use strict';

  angular.module('angularSPA', [
    'ngAnimate',
    'ui.router',
    'app.services',
    'nav',
    'books'
  ])

  .config(configureSimpleViews);

  function configureSimpleViews($stateProvider) {
    // The state of all 'full' views with no controller are captured here.
    // All non-standard views are managed from their respective script files.
    var views = [
      'plane', 'car', 'bicycle', 'bus', 'rocket', 'shopping-cart', 'space-shuttle', 'taxi',
      'relaxing', 'dining', 'shopping', 'sight_seeing', 'sporting_events', 'gameing',
      'cc-visa', 'cc-mastercard', 'cc-amex', 'cc-discover',
      'about', 'support', 'terms',
      'profile', 'settings', 'logout'
    ];

    views.forEach(createView);

    function createView(viewState) {
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
    }

  }

}());

