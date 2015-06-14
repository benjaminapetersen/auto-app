'use strict';

angular.module('auto.dashboard', [])
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/dashboard', {
					templateUrl: 'scripts/dashboard/views/dashboard.html',
					controller: 'auto.dashboard.dashboard'
				});
		}
	]);
/* 
	TODO: 
	- decide if we need additional top level urls for these domains
	/history  - view a aggregated history of all vehicles
	/reports  - view an aggregated list of all reports for all vehicles
*/