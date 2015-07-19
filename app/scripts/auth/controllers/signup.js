'use strict';

angular.module('auto.auth')
  .controller('auto.auth.signup', [
    '$log',
    '$location',
    '$scope',
    function($log, $location, $scope) {
      $log.log('/signup');

      var user = {
        username: '',
        email: '',
        password: ''
      }

      angular.extend($scope, {
        user: user,
        actions: {
          signup: function() {
            console.log('Signup', user);
          }
        }
      });
    }
  ]);
