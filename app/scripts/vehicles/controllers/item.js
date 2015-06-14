'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.item', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/:vid');

			angular.extend($scope, {
				// pass to view
			});
		}]);