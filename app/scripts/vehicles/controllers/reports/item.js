'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.reports.item', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/reports/:rid');

			angular.extend($scope, {
				// pass to view
			});
		}]);