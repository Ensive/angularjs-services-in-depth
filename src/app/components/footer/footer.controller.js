(function () {
  'use strict';

  angular.module('angularjsServicesInDepth')
    .controller('FooterController', FooterController);

  FooterController.$inject = ['constants'];

  function FooterController(constants) {
    var vm = this;

    vm.appName = constants.APP_TITLE;
    vm.appDesc = constants.APP_DESCRIPTION;
  }

})();
