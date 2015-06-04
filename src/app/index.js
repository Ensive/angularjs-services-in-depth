(function () {
  'use strict';

  // routes
  angular.module('angularjsServicesInDepth', ['ngCookies', 'ngResource', 'ngRoute'])
    .config(['$routeProvider', 'booksProvider', 'constants', 'dataServiceProvider',
      function ($routeProvider, booksProvider, constants, dataServiceProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
          })
          .otherwise({
            redirectTo: '/'
          });

        booksProvider.setIncludeVersionInTitle(true);

        console.log('title from constants service: ' + constants.APP_TITLE);

        console.log(dataServiceProvider.$get);

      }]);

  // books provider
  angular.module('angularjsServicesInDepth')
    .provider('books', ['constants', function () {
      this.$get = function (constants) {

        var appName = constants.APP_TITLE;
        var appDesc = constants.APP_DESCRIPTION;
        var version = constants.APP_VERSION;

        if (includeVersionInTitle) {
          appName += ' ' + version;
        }

        return {
          appName: appName,
          appDesc: appDesc
        };
      };

      var includeVersionInTitle = false;
      this.setIncludeVersionInTitle = function (value) {
        includeVersionInTitle = value;
      };

    }]);

})();
