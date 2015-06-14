'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.schedule.list', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/schedule');

			angular.extend($scope, {
				// pass to view
			});
		}]);