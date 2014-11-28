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

  .config(function ($stateProvider, menus) {

    // The state of all static 'full' views with no controller are captured
    // in the loop at the bottom.  Routing for non-standard views (i.e.
    // 'viewsNotNeedingRouter') is captured in the individual script files.

    var viewsNotNeedingRouter = ['books'];

    var viewNeedsRouter = function (view) {
      return viewsNotNeedingRouter.indexOf(view) === -1;
    };

    // TODO:
    // 1. setViewRouterA, B, C are begging for consolidation.  The only
    //    difference is the icon variable.  Currently downright ugly.
    // 2. Use $document instead of document (querySelector line).

    var setViewRouterA = function (menu) {
      var icon = '.fa-suitcase';
      if (viewNeedsRouter(menu.state)) {
        $stateProvider.state(menu.state, {
          url: '/' + menu.state,
          views: {
            'full': {
              templateUrl: '/app/' + menu.state + '/' + menu.state + '.html',
              controller: function ($rootScope, turnOnViews) {
                turnOnViews($rootScope, ['full']);
              }
            }
          },
          onEnter: function ($timeout, $rootScope) {
            // Update the view title.
            $rootScope.viewName = menu.name;

            // Activate the menu tab.
            $timeout(function () {
              angular.element(document.querySelector(icon).parentNode)
              .trigger('click');
            }, 100);
          }
        });
      }
    };

    var setViewRouterB = function (menu) {
      var icon = '.fa-picture-o';
      if (viewNeedsRouter(menu.state)) {
        $stateProvider.state(menu.state, {
          url: '/' + menu.state,
          views: {
            'full': {
              templateUrl: '/app/' + menu.state + '/' + menu.state + '.html',
              controller: function ($rootScope, turnOnViews) {
                turnOnViews($rootScope, ['full']);
              }
            }
          },
          onEnter: function ($timeout, $rootScope) {
            // Update the view title.
            $rootScope.viewName = menu.name;

            // Activate the menu tab.
            $timeout(function () {
              angular.element(document.querySelector(icon).parentNode)
              .trigger('click');
            }, 100);
          }
        });
      }
    };

    var setViewRouterC = function (menu) {
      var icon = '.fa-credit-card';
      if (viewNeedsRouter(menu.state)) {
        $stateProvider.state(menu.state, {
          url: '/' + menu.state,
          views: {
            'full': {
              templateUrl: '/app/' + menu.state + '/' + menu.state + '.html',
              controller: function ($rootScope, turnOnViews) {
                turnOnViews($rootScope, ['full']);
              }
            }
          },
          onEnter: function ($timeout, $rootScope) {
            // Update the view title.
            $rootScope.viewName = menu.name;

            // Activate the menu tab.
            $timeout(function () {
              angular.element(document.querySelector(icon).parentNode)
              .trigger('click');
            }, 100);
          }
        });
      }
    };

    var setViewRouterOther = function (menu) {
      if (viewNeedsRouter(menu.state)) {
        $stateProvider.state(menu.state, {
          url: '/' + menu.state,
          views: {
            'full': {
              templateUrl: '/app/' + menu.state + '/' + menu.state + '.html',
              controller: function ($rootScope, turnOnViews) {
                turnOnViews($rootScope, ['full']);
              }
            }
          }
        });
      }
    };

    for (var menuGroup in menus) {
      if (menus[menuGroup].name === 'menuA') {
        menus[menuGroup].items.forEach(setViewRouterA);
      } else if (menus[menuGroup].name === 'menuB') {
        menus[menuGroup].items.forEach(setViewRouterB);
      } else if (menus[menuGroup].name === 'menuC') {
        menus[menuGroup].items.forEach(setViewRouterC);
      } else {
        menus[menuGroup].items.forEach(setViewRouterOther);
      }
    }

  });

}());

