(function () {
  'use strict';

  angular.module('books.services', [])

  .factory('bookFactory', function () {

    var books = [
      {
        id: 1,
        name: 'ng-book'
      },
      {
        id: 2,
        name: 'Eloquent Javascript'
      }
    ];

    return {
      getBooks: function () { return books; }
    };

  });

}());

