'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.reports.edit', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/reports/:rid/edit');

			angular.extend($scope, {
				// pass to view
			});
		}]);