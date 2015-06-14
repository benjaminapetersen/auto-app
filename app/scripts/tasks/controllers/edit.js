'use strict';

angular.module('auto')
	.controller('auto.tasks.edit', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/tasks/:tid/edit');

			angular.extend($scope, {
				// pass to view
			});
		}]);