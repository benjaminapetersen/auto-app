'use strict';

angular.module('auto')
	.controller('auto.tasks.item', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/tasks/:tid');

			angular.extend($scope, {
				// pass to view
			});
		}]);