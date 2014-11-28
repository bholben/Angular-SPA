(function () {
  'use strict';

  angular.module('books', ['books.services'])

  .config(function ($stateProvider) {

    var BooksCtrl = function ($rootScope, books, turnOnViews) {
      turnOnViews($rootScope, ['left', 'right']);
      this.books = books.getBooks();
    };

    var BookCtrl = function () {
      this.book = 'Here are some book details!';
    };

    // var books = {
    //   name: 'books',
    //   url: '/books',
    //   views: {
    //     'list': {
    //       templateUrl: '/app/books/books.html',
    //       resolve: {books: 'bookFactory'},
    //       controller: BooksCtrl,
    //       controllerAs: 'blc'
    //     },
    //     'details': {
    //       templateUrl: '/app/books/book.html',
    //       controller: BookCtrl,
    //       controllerAs: 'bdc'
    //     }
    //   }
    // };

    $stateProvider
    .state('books', {
      url: '/books',
      resolve: {books: 'bookFactory'},
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
      },
      onEnter: function ($timeout, $rootScope) {
        // Update the view title.
        $rootScope.viewName = 'Books';

        // Activate the menu tab.
        $timeout(function () {
          angular.element(document.querySelector('.fa-picture-o').parentNode)
          .trigger('click');
        }, 100);
      }
    });

    // .state('books:book', {
    //   url: '/books',
    //   resolve: {books: 'bookFactory'},
    //   views: {
    //     'details': {
    //       templateUrl: '/app/books/book.html',
    //       controller: BookCtrl,
    //       controllerAs: 'bdc'
    //     }
    //   }
    // });

  });

}());

