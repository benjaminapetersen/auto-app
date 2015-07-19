'use strict';

angular.module('auto.auth')
  .controller('auto.auth.login', [
    '$log',
    '$scope',
    function($log, $scope) {
      $log.log('/login');
    }
  ]);
