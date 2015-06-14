'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.schedule.item', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/schedule/:sid');

			angular.extend($scope, {
				// pass to view
			});
		}]);