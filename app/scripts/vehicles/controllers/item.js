'use strict';

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