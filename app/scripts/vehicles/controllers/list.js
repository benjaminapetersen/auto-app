'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.list', [
		'$log',
		'$scope',
		'vehicles',
		function($log, $scope, vehicles) {
			$log.log('/vehicles/');

			vehicles.all()
					.then(function(vehicles) {
						console.log('vehicles', vehicles);
						angular.extend($scope, {
							vehicles: vehicles
						});
					});
		}]);


x.function() = RESULT
	then(function(RESULT) {sdkgndskng})
