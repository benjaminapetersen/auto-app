'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.reports.new', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/reports/new');

			angular.extend($scope, {
				// pass to view
			});
		}]);