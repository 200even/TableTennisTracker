﻿
/// This is your main module
/// Angular's main module
/// Use a proper name for your module

angular.module("myApp", [
    // User defined modules
    'myApp.Pages', // Pages
    'myApp.Core', // Core

    // Angular modules
    'ui.router', // state routing
])
.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }]);
