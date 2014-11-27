(function () {
  'use strict';

  angular.module('myApp', ['ngAnimate', 'ui.router', 'app.services', 'nav', 'books'])
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: '/app/home/home.html'
      });

    var views = [
      'plane', 'car', 'bicycle', 'bus', 'rocket', 'shopping-cart', 'space-shuttle', 'taxi',
      'relaxing', 'dining', 'shopping', 'sight_seeing', 'sporting_events', 'gameing',
      'cc-visa', 'cc-mastercard', 'cc-amex', 'cc-discover',
      'about', 'support', 'terms',
      'profile', 'settings', 'logout'
    ];
    var viewsWithController = ['books'];

    views.forEach(createView);
    viewsWithController.forEach(createControlledView);

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

    function createControlledView(viewState) {
      // Comments illustrate example where viewState = 'books'
      $stateProvider
        .state(viewState, {
          // ex:  url = '/books'
          url: '/' + viewState,
          views: {
            'list': {
              // ex:  templateURL = '/app/books/books.html'
              templateUrl: '/app/' + viewState + '/' + viewState + '.html',
              // ex:  controller = 'BooksCtrl'
              controller: capitalize(viewState) + 'Ctrl',
              // ex:  controllerAs = 'bc'
              controllerAs: viewState[0] + 'c'
            },
            'details': {
              // ex:  templateURL = '/app/books/books.html'
              templateUrl: '/app/' + viewState + '/' + viewState.slice(0, -1) + '.html',
              // ex:  controller = 'BooksCtrl'
              controller: capitalize(viewState.slice(0, -1)) + 'Ctrl',
              // ex:  controllerAs = 'bc'
              controllerAs: viewState[0] + 'cd'
            }
          }
        });
    }
  }

  function capitalize(s) { return s[0].toUpperCase() + s.slice(1); }

}());

