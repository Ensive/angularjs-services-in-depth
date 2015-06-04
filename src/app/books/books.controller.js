(function () {
  'use strict';

  angular.module('angularjsServicesInDepth')
    .controller('BooksController',['books', BooksController]);

  function BooksController(books) {
    var vm = this;

    vm.appName = books.appName;

  }

})();
