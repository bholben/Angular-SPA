(function () {
  'use strict';

  angular.module('angularSPA', [
    'ngAnimate',
    'ui.router',
    'app.services',
    'nav',
    'books'
  ])

  // This entire config routes section is a placeholder until each view is
  // built out.  It can go away once views are built and routing is built
  // into each view's script file.
  .config(routes);

  function routes($stateProvider) {

    var views = [
      'plane', 'car', 'bicycle', 'bus', 'rocket', 'shopping-cart', 'space-shuttle', 'taxi',
      'relaxing', 'dining', 'shopping', 'sight_seeing', 'sporting_events', 'gameing',
      'cc-visa', 'cc-mastercard', 'cc-amex', 'cc-discover',
      'about', 'support', 'terms',
      'profile', 'settings', 'logout'
    ];

    views.forEach(createView);

    function createView(viewState) {
      $stateProvider
        .state(viewState, {
          url: '/' + viewState,
          views: {
            'full': {
              templateUrl: '/app/' + viewState + '/' + viewState + '.html'
            }
          }
        });
    }
  }

}());

