'use strict';

angular.module('auto.auth', [])
  .config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'scripts/auth/views/login.html',
          controller: 'auto.auth.login'
        })
        .when('/logout', {
          templateUrl: 'scripts/auth/views/logout.html',
          controller: 'auto.auth.logout'
        })
        .when('/signup', {
          templateUrl: 'scripts/auth/views/signup.html',
          controller: 'auto.auth.signup'
        })
    }
  ]);
