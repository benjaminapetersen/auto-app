'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.history.edit', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/history/:hid/edit');

			angular.extend($scope, {
				// pass to view
			});
		}]);