
'use strict';

angular.module('auto', [
    // angular core libs
    'ngRoute',
    // vendor libs
    'ngMaterial',
    // app modules
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
