(function () {
  'use strict';

  angular.module('books', ['books.services'])

  .config(function ($stateProvider) {

    var BooksCtrl = function ($rootScope, bookFactory, turnOnViews) {
      turnOnViews($rootScope, ['left', 'right']);
      this.books = bookFactory.getBooks();
    };

    var BookCtrl = function () {
      this.book = 'Here are some book details!';
    };

    $stateProvider.state('books', {
      url: '/books',
      views: {
        'list': {
          templateUrl: '/app/books/books.html',
          controller: BooksCtrl,
          controllerAs: 'blc'
        },
        'details': {
          templateUrl: '/app/books/book.html',
          controller: BookCtrl,
          controllerAs: 'bdc'
        }
      }
    });
  });

}());

