'use strict';

angular.module('auto.vehicles')
	.factory('vehicles', [
		'$log',
		function($log) {
			$log.log('auto.vehicles [service]');

			// Thinking about what data to track for a vehicle
			// Initially we don't need much, but it may be 
			// beneficial to allow a user to fill in as much 
			// information as desired 
			// - extended info should be added in a detail interface
			// - ensure initial car input is as simple as possible
			var vehicleExample = {
				year: '',	
				make: '', 				// Honda, Toyota, etc
				model: '',				// Civic, Sienna, etc
				style: '', 				// CE, LE, XLE, etc
				color: '',
				vin: '',				// not needed, but handy to have!
				license_plate: '',
				miles: [
					{amt: '19000', date: 1434923102956}
				], 						
				// typical sellable components to a car...
				features: ['ac', 'power windows', 'cruise control', 'am/fm radio', 'cd', 'mp3', 'etc'],
				// specific engineering of vehicle
				equipment: {
					engine: '',
					transmission: '',
					drivetrain: '',  	// FWD, AWD, etc
					braking: '' 		// ABS, etc
				}
			}


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