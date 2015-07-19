'use strict';

angular.module('auto.auth')
  .controller('auto.auth.logout', [
    '$log',
    '$location',
    '$scope',
    function($log, $location, $scope) {
      $log.log('/logout');

      var user = {
          username: '',
          password: ''
        }

      angular.extend($scope, {
        user: user,
        actions: {
          login: function() {
            $location.path('/login');
          }
        }
      });
    }
  ]);
