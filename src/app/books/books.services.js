(function () {
  'use strict';

  angular.module('books.services', [])
    .factory('bookFactory', bookFactory);

  function bookFactory() {

    var books = [
      {
        id: 1,
        name: 'To Kill a Mockingbird'
      },
      {
        id: 2,
        name: 'Eloquent Javascript'
      }
    ];

    return {
      getBooks: function () { return books; }
    };
  }

}());

