'use strict';

angular.module('auto')
	.controller('auto.tasks.list', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/tasks/');

			angular.extend($scope, {
				// pass to view
			});
		}]);