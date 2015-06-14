'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.history.item', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/history/:hid');

			angular.extend($scope, {
				// pass to view
			});
		}]);