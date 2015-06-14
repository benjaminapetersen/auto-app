'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.edit', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/:vid/edit');

			angular.extend($scope, {
				// pass to view
			});
		}]);