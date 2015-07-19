'use strict';

angular.module('auto.auth')
  .controller('auto.auth.logout', [
    '$log',
    '$scope',
    function($log, $scope) {
      $log.log('/logout');
    }
  ]);
