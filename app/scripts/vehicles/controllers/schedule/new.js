'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.schedule.new', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/schedule/new');

			angular.extend($scope, {
				// pass to view
			});
		}]);