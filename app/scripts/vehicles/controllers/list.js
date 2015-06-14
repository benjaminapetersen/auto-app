'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.list', [
		'$log',
		'$scope',
		'vehicles',
		function($log, $scope, vehicles) {
			$log.log('/vehicles/');

			vehicles.read();
			
			angular.extend($scope, {
				// pass to view
			});
		}]);