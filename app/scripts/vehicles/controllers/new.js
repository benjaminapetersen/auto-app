'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.new', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/new');

			angular.extend($scope, {
				// pass to view
			});
		}]);