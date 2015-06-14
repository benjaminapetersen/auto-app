'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.schedule.edit', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/schedule/:sid/edit');

			angular.extend($scope, {
				// pass to view
			});
		}]);