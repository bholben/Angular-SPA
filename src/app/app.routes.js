(function () {
  'use strict';

  angular
    .module('routes', ['ui.router'])
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: '/app/home/home.html'
      })
      .state('plane', {
        url: '/plane',
        templateUrl: '/app/plane/plane.html'
      })
      .state('car', {
        url: '/car',
        templateUrl: '/app/car/car.html'
      })
      .state('bicycle', {
        url: '/bicycle',
        templateUrl: '/app/bicycle/bicycle.html'
      });
  }

}());

