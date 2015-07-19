'use strict';

angular.module('auto.auth')
  .controller('auto.auth.login', [
    '$log',
    '$location',
    '$scope',
    function($log, $location, $scope) {
      $log.log('/login');

      var user = {
        username: '',
        password: ''
      }

      angular.extend($scope, {
        user: user,
        actions: {
          login: function() {
            console.log('Do login!', user);
          }
        }
      });
    }
  ]);