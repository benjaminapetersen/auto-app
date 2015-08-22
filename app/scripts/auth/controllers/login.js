'use strict';

angular.module('auto.auth')
  .controller('auto.auth.login', [
    '$log',
    '$location',
    '$scope',
    'auth',
    function($log, $location, $scope, auth) {
      $log.log('/login');

      var newUser = {
        username: '',
        email: '',
        password: ''
      }

      angular.extend($scope, {
        user: newUser,
        actions: {
          login: function() {
            auth.login(newUser)
                .then(function(user) {
                  console.log('lgoin success:', user);
                  $location.path('/dashboard');
                });
          }
        }
      });
    }
  ]);





