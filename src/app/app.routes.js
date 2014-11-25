(function () {
  'use strict';

  angular
    .module('routes', ['ngRoute'])
    .config(routes);

  function routes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/home/home.html'
      })
      .when('/plane', {
        templateUrl: '/app/plane/plane.html'
      })
      .when('/car', {
        templateUrl: '/app/car/car.html'
      })
      .when('/bicycle', {
        templateUrl: '/app/bicycle/bicycle.html'
      })
      .otherwise({ redirectTo: '/' });
  }

}());


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
//         templateUrl: '/app/home/home.html'
//       })
//       .state('planes', {
//         url: '/planes',
//         templateUrl: '/app/planes/planes.html'
//       })
//       .state('cars', {
//         url: '/cars',
//         templateUrl: '/app/cars/cars.html'
//       });
//   };

//   angular.module('myApp').config('routeProvider', routeProvider);
//   routeProvider.$inject = ['$stateProvider', '$urlRouterProvider'];

// }());

