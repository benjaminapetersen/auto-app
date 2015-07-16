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
				id: 100,
				year: '2008',
				make: 'Toyota', 				// Honda, Toyota, etc
				model: 'Sienna',				// Civic, Sienna, etc
				style: 'LE',	 				// CE, LE, XLE, etc
				color: 'Silver',
				vin: 'xxx-xxx-xxx-xxx',			// not needed, but handy to have!
				license_plate: '123-ABC',
				mileage: [
					// simulate 1 entry per week
					// TODO: this should be a separate service
					// to get the mileage entries for a car
					{miles: '87654', date: 1435279255222},
					{miles: '87431', date: 1435278650422},
					{miles: '86750', date: 1435278045622},
					{miles: '85901', date: 1435277440822}
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
			};

			var vehicles = _.times(15, function() {
						var vehicle = _.cloneDeep(vehicleExample);
						vehicle.id = _.uniqueId('vehicle_');
						return vehicle;
					});


			// for prototyping, simply using CRUD as an API model
			// this will probably not work long term, as the vehicles
			// list in memory, vs on disk or a remote store will be
			// different.
			return {
				create: function(vehicle) {
					// Just a test to see if I can retrieve the vehicle from the view.
					console.log("vehicle is ", vehicle);
				},
				read: function(vid) {
					console.log('todo: return list of vehicles if no :vid provided');
				},
				update: function(vid) {

				},
				delete: function(vid) {

				},
				getAll: function() {
					// simulate an http request by returning a
					// promise for an array of 10 cars, which
					// are all replicas of the above car.
					return $.when(vehicles);
				},
				get: function(vid) {
					return $.when(_.find(vehicles, function(vehicle) {
						return vehicle.id == vid;
					}));

					// _.find(collection, [predicate=_.identity], [thisArg])
					// (_.find(users, function(chr) {return chr.age < 40;}), 'user');
				}
			}
		}
	])
