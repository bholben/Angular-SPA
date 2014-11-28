(function () {
  'use strict';

  angular.module('books', ['books.services'])
    .config(configureView)
    // .controller('BooksCtrl', BooksCtrl)
    .controller('BookCtrl', BookCtrl);

  function configureView($stateProvider) {
    $stateProvider.state('books', {
      url: '/books',
      views: {
        'list': {
          templateUrl: '/app/books/books.html',
          controller: BooksCtrl,
          controllerAs: 'bc'
        },
        'details': {
          templateUrl: '/app/books/book.html',
          controller: 'BookCtrl as bcd'
        }
      }
    });
  }

  function BooksCtrl($rootScope, bookFactory, turnOnViews) {
    turnOnViews($rootScope, ['left', 'right']);
    this.books = bookFactory.getBooks();
  }

  function BookCtrl() {
    this.book = 'Here are some book details!';
  }

}());

