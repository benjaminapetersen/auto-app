'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.reports.list', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/reports');

			angular.extend($scope, {
				// pass to view
			});
		}]);