'use strict';

// 4. give this vehile to the view (scope)
// 5. print the vehilce stuff in the item.html file

angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.item', [
		'$log',
		'$routeParams',
		'$scope',
		'vehicles',


		function($log, $routeParams, $scope, vehicles) {
			$log.log('/vehicles/:vid');

			vehicles.get($routeParams.vid)
					.then(function(vehicle) {
						angular.extend($scope, {
							item: vehicle
						});
					});

		}]);