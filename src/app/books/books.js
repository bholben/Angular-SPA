(function () {
  'use strict';

  // angular.module('books', ['ui.router'])
  //   .config(route)
  angular.module('books', ['books.services'])
    .controller('BooksCtrl', BooksCtrl)
    .controller('BookCtrl', BookCtrl);

  // function route($stateProvider) {
  //   $stateProvider.state('books', {
  //     url: '/books',
  //     views: {
  //       'list': {
  //         templateUrl: '/app/books/books.html',
  //         controller: 'BooksCtrl',
  //         controllerAs: 'bc'
  //       },
  //       'details': {
  //         templateUrl: '/app/book/book.html',
  //         controller: 'BookCtrl',
  //         controllerAs: 'bcd'
  //       }
  //     }
  //   });
  // }

  function BooksCtrl(bookFactory) {
    this.books = bookFactory.getBooks();
  }

  function BookCtrl() {
    this.book = 'Got booooooooooooooook!';
  }

}());

