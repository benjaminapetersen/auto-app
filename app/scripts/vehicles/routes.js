'use strict';

// auto.vehicles
// - vehicles is the most complex module
// - each individual vehicle has a lot of potential nested data,
//   such as maintenance history, upcoming maintenance schedule, etc.
//
angular.module('auto.vehicles', [])
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				// view all vehicles as a list
				.when('/vehicles', {
					templateUrl: 'scripts/vehicles/views/list.html',
					controller: 'auto.vehicles.vehicle.list'
				})
				// view to create new vehicle
				.when('/vehicles/new', {
					templateUrl: 'scripts/vehicles/views/new.html',
					controller: 'auto.vehicles.vehicle.new'
				})
				// view a single vehicle
				.when('/vehicles/:vid', {
					templateUrl: 'scripts/vehicles/views/item.html',
					controller: 'auto.vehicles.vehicle.item'
				})
				// view to edit an existing vehicle
				.when('/vehicles/:vid/edit', {
					templateUrl: 'scripts/vehicles/views/edit.html',
					controller: 'auto.vehicles.vehicle.edit'
				})
				// view a vehicle's maintenance history
				.when('/vehicles/:vid/history', {
					templateUrl: 'scripts/vehicles/views/history/list.html',
					controller: 'auto.vehicles.history.list'
				})
				.when('/vehicles/:vid/history/:hid', {
					templateUrl: 'scripts/vehicles/views/history/item.html',
					controller: 'auto.vehicles.history.item'
				})
				.when('/vehicles/:vid/history/new', {
					templateUrl: 'scripts/vehicles/views/history/new.html',
					controller: 'auto.vehicles.history.new'
				})
				// view reports for a vehicle
				.when('/vehicles/:vid/reports', {
					templateUrl: 'scripts/vehicles/views/reports/list.html',
					controller: 'auto.vehicles.reports.list'
				})
				.when('/vehicles/:vid/reports/new', {
					templateUrl: 'scripts/vehicles/views/reports/new.html',
					controller: 'auto.vehicles.reports.new'
				})
				.when('/vehicles/:vid/reports/:rid', {
					templateUrl: 'scripts/vehicles/views/reports/item.html',
					controller: 'auto.vehicles.reports.item'
				})
				// view a vehicle's upcoming schedule
				.when('/vehicles/:vid/schedule', {
					templateUrl: 'scripts/vehicles/views/schedule/list.html',
					controller: 'auto.vehicles.schedule.list'
				})
				.when('/vehicles/:vid/schedule/:sid', {
					templateUrl: 'scripts/vehicles/views/schedule/item.html',
					controller: 'auto.vehicles.schedule.item'
				})
				.when('/vehicles/:vid/schedule/new', {
					templateUrl: 'scripts/vehicles/views/schedule/new.html',
					controller: 'auto.vehicles.schedule.new'
				})
				// schedule by timelines, such as year, month, week...
				.when('/vehicles/:vid/schedule/:year', {
					templateUrl: 'scripts/vehicles/views/schedule/year.html',
					controller: 'auto.vehicles.schedule.year'
				})
				.when('/vehicles/:vid/schedule/:year/month/:month', {
					templateUrl: 'scripts/vehicles/views/schedule/month.html',
					controller: 'auto.vehicles.schedule.month'
				})
				.when('/vehicles/:vid/schedule/:year/month/:month/week/:week', {
					templateUrl: 'scripts/vehicles/views/schedule/week.html',
					controller: 'auto.vehicles.schedule.week'
				});
		}
	]);

