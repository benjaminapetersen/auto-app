

'use strict';

angular.module('auto', [
    // angular core libs
    'ngRoute',
    // vendor libs
    'ngMaterial',
    'pubsub',
    // app modules
    'auto.auth',
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
				redirectTo: '/login'
			});
	}
])
// .config([
//     '$mdThemingProvider',
//     function($mdThemingProvider) {
//       $mdThemingProvider.theme('default')
//             .primaryPalette('grey')
//             .accentPalette('blue');
//     }
// ])
;
