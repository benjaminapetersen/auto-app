'use strict';

angular.module('auto.auth')
  .controller('auto.auth.signup', [
    '$log',
    '$location',
    '$scope',
    'auth',
    function($log, $location, $scope, auth) {
      $log.log('/signup');

      var newUser = {
            // for now, we don't really care about the name...
            name: {
              first: '',
              last: ''
            },
            username: undefined,
            email: undefined,
            password: undefined
          }

      angular.extend($scope, {
        user: newUser,
        actions: {
          create: function() {
            auth.signup(newUser)
                .then(function(user) {
                  console.log('signup success:', user);
                  $location.path('/dashboard');
                });
          }
        }
      });
    }
  ]);
