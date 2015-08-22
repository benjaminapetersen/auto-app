'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.edit', [
		'$location',
		'$log',
		'$scope',
		'$routeParams',
    'vehicles',
		function($location, $log, $scope, $routeParams, vehicles) {
			$log.log('/vehicles/:vid/edit');

		vehicles
			.get($routeParams.vid)
			.then(function(vehicle) {
				console.log("vehicle make is", vehicle.make);
				angular.extend($scope, {
					vehicle: vehicle,
					update: function() {

						vehicles
							.update(vehicle)
							.then(function() {
								$location.path("/vehicles")
							});
					}

					// vehicle.updated_at = Date.now();
				})
			});

		}]);
