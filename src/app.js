//! app.js

(function () {
  'use strict';

  angular.module('myApp', ['ngRoute', 'ngAnimate']);

  angular.module('myApp').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        // controller: 'HomeCtrl',
        templateUrl: '/components/home/home.html'
      })
      .when('/planes', {
        // controller: 'PlanesCtrl',
        templateUrl: '/components/planes/planes.html'
      })
      .when('/cars', {
        // controller: 'PlanesCtrl',
        templateUrl: '/components/cars/cars.html'
      })
      .when('/planes/:planeID', {
        // controller: 'PlanesCtrl',
        templateUrl: '/components/planes/planes.html'
      })
      .otherwise({ redirectTo: '/' });
  });

}());

// Global configuration
var myAppConfigs = {
  maxWidth: {
    phone: 360,
    phablet: 736,
    tablet: 768,
    desktop: 992,
    wide: 1200
  }
};



// (function () {
//   'use strict';

//   angular.module('myApp', ['ui.router']);

//   var routeProvider = function ($stateProvider, $urlRouterProvider) {

//     // For unmatched routes
//     $urlRouterProvider.otherwise('/');

//     // Application routes
//     $stateProvider
//       .state('index', {
//         url: '/',
//         templateUrl: '/components/home/home.html'
//       })
//       .state('planes', {
//         url: '/planes',
//         templateUrl: '/components/planes/planes.html'
//       })
//       .state('cars', {
//         url: '/cars',
//         templateUrl: '/components/cars/cars.html'
//       });
//   };

//   angular.module('myApp').config('routeProvider', routeProvider);
//   routeProvider.$inject = ['$stateProvider', '$urlRouterProvider'];

// }());

