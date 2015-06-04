(function () {
  'use strict';

  // routes
  angular.module('angularjsServicesInDepth', ['ngCookies', 'ngResource', 'ngRoute'])
    .config(function ($routeProvider, booksProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

      booksProvider.setIncludeVersionInTitle(true);

    });

  // books provider
  angular.module('angularjsServicesInDepth')
    .provider('books', function () {
      this.$get = function () {

        var appName = 'Book Logger';
        var appDesc = 'Track which books you read.';

        var version = '1.0';

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

    });

})();
