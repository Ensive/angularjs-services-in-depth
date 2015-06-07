(function () {
  'use strict';

  angular.module('angularjsServicesInDepth')
    .service('logger', BookAppLogger);

  function LoggerBase() {

  }

  // describe logger base
  LoggerBase.prototype.output = function (message) {
    console.log('LoggerBase: ' + message);
  };

  // describe book app logger
  function BookAppLogger() {

    LoggerBase.call(this);

    this.logBook = function (book) {
      console.log('Book: ' + book.title);
    };
  }

  BookAppLogger.prototype = Object.create(LoggerBase.prototype);

})();
