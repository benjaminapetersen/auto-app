'use strict';

angular.module('auto')
	.controller('auto.dashboard.dashboard', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/dashboard');

			angular.extend($scope, {
				// pass to view
			});
		}]);