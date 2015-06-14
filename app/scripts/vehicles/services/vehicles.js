'use strict';

angular.module('auto.vehicles')
	.factory('vehicles', [
		'$log',
		function($log) {
			$log.log('auto.vehicles [service]');

			// for prototyping, simply using CRUD as an API model
			// this will probably not work long term, as the vehicles
			// list in memory, vs on disk or a remote store will be 
			// different.
			return {
				create: function() {

				},
				read: function(vid) {
					console.log('todo: return list of vehicles if no :vid provided');
				},
				update: function(vid) {

				},
				delete: function(vid) {

				}
			}
		}
	])