'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.history.list', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/history');

			angular.extend($scope, {
				// pass to view
			});
		}]);