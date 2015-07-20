'use strict';

angular.module('auto.user')
  .factory('user', [
    '$log',
    'localStore',
    function($log, storage) {

      return {
        // user CRUD (create,read,update,delete)
        // how should this work?
        create: function(user) {
          return $.when(storage.save('user', user));
        },
        read: function() {
          return $.when();
        },
        update: function() {

        },
        delete: function() {
          return $.when();
        }
      }
    }
  ]);
