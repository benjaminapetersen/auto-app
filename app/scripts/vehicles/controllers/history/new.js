'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.history.new', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/vehicles/history/new');

			angular.extend($scope, {
				// pass to view
			});
		}]);