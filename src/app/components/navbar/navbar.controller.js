(function () {
  'use strict';

  angular.module('angularjsServicesInDepth')
    .controller('NavbarCtrl', NavbarController);

  NavbarController.$inject = ['$location', 'constants'];

  function NavbarController($location, constants) {
    var vm = this;

    // values
    vm.appTitle = constants.APP_TITLE;
    vm.date = new Date();

    // methods
    vm.isActive = isActive;

    /**
     * make current link active
     * @param {String} link
     * @returns {boolean}
     */
    function isActive(link) {
      return link === $location.path();
    }

  }

})();
