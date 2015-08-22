'use strict';

angular.module('auto.vehicles')
	.factory('vehicles', [
		'$log',
		'localStore',
		function($log, storage) {
			$log.log('auto.vehicles [service]');
			var key = "auto:vehicles";

			// for prototyping, simply using CRUD as an API model
			// this will probably not work long term, as the vehicles
			// list in memory, vs on disk or a remote store will be
			// different.

			return {
      // get all
      	all: function(items) {
     	   return items ?
               storage.all(key, items) :
               storage.all(key);
      	},
	      create: function(item) {
	        return storage.create(key, item);
	      },
	      update: function(item) {
	        return storage.update(key, item);
	      },
	      get: function(id) {
	        return storage.get(key, id);
	      },
	      remove: function(id) {
	        return storage.remove(key, id);
	      },
	      clear: function() {
	        return storage.clear(id);
	      }
    	};
		}
	])
