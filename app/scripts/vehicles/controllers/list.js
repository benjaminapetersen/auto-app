'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.list', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/');

			angular.extend($scope, {
				// pass to view
			});
		}]);