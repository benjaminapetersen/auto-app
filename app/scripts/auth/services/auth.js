'use strict';

angular.module('auto.auth')
  .factory('auth', [
    '$log',
    function($log) {

      // user data model?
      // var user = {
      //   name: {
      //     first: '',
      //     last: ''
      //   },
      //   username: '',
      //   email: '',
      //   password: ''
      // }
      var loggedInUser = null,
          // temporarily the storage key will just be username:email
          // this will improve later.
          storageKey = _.template('<%= username %>:<%= email %>');

      // auth should care about authentication only.
      // tokens.
      // login, logout.  nothing more. no users
      return {
        // get an access token, if it is there.
        getToken: function() {

        },
        // save a new token
        setToken: function() {

        },
        // is the token expired?
        expired: function() {

        },
        // 'impure' auth below.
        // - these functions are related to our temp
        //   auth setup.  Eventually we will replace
        //   with a real auth implementation of some
        //   sort, either Google, Facebook, etc.
        // create new account
        //
        // getStorageKey returns a key unique to this user for
        // storing data to localStorage.  For now, is a concat
        // of the user's data.
        getStorageKey: function() {
          return loggedInUser ?
                 storageKey(loggedInUser) :
                 null;
        },
        signup: function(user) {
          if(user && (user.username && user.email)) {
            return $.when(storageKey(user));
          }
          return $.when(null);
        },
        // login user
        login: function(user) {
          if(user && (user.username && user.password)) {
            loggedInUser = user;
            return $.when(storageKey(user));
          }
          return $.when(null);
        },
        // logout user
        logout: function() {
          loggedInUser = null;
          return $.when(loggedInUser);
        }
      }
    }

  ]);
