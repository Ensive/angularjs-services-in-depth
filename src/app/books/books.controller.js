(function () {
  'use strict';

  angular.module('angularjsServicesInDepth')
    .controller('BooksController',['books', 'dataService', 'logger', 'badgeService', BooksController]);

  function BooksController(books, dataService, logger, badgeService) {
    var vm = this;

    vm.appName = books.appName;
    vm.appDesc = books.appDesc;

    // get all books
    dataService.getAllBooks()
      .then(getBooksSuccess, null, getBooksNotification)
      .catch(errorCallback)
      .finally(getAllBooksComplete);

    // get all readers
    dataService.getAllReaders()
      .then(getReadersSuccess)
      .catch(errorCallback)
      .finally(getAllReadersComplete);

    // success callback
    function getBooksSuccess(books) {
      //throw 'error in success handler';
      vm.allBooks = books;
    }

    // error callback
    //function getBooksError(message) {
    //  console.log(message);
    //}

    function errorCallback(errorMsg) {
      console.log('Error message: ' + errorMsg);
    }

    function getBooksNotification(notification) {
      console.log('Promise notification: ' + notification);
    }

    function getAllBooksComplete() {
      console.log('getAllBooks has completed');
    }

    function getReadersSuccess(readers) {
      vm.allReaders = readers;
    }

    function getAllReadersComplete() {
      console.log('getAllReaders has completed');
    }

    vm.allReaders = dataService.getAllReaders();

    vm.getBadge = badgeService.retrieveBadge;

    //logger.output('BooksController has been created.');

  }

})();
