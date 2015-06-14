
'use strict';

angular.module('auto', [
    // angular
    'ngRoute',
    // modules
    'auto.dashboard',
    'auto.tasks',
    'auto.vehicles',
    'auto.env'
    // filters
    // routes..?
    // directives
])

.config([
	'$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/dashboard'
			});
	}
]);

