'use strict';

angular.module('auto.storage')
  .factory('localStore', [
    '$log',
    function($log) {
      var storage = window.localStorage;

      // another promise API, to
      return {
        save: function(key, value) {
          if(_.isObject(value)) {
            value = JSON.stringify(value);
          }
          return $.when(storage.setItem(key, value));
        },
        get: function(key) {
          return $.when(storage.getItem(key));
        },
        remove: function(key) {
          return $.when(storage.removeItem(key));
        }
      }
    }
  ]);
