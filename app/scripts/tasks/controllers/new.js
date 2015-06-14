'use strict';

angular.module('auto')
	.controller('auto.tasks.new', [
		'$log',
		'$scope',
		function($log, $scope) {
			$log.log('/tasks/new');

			angular.extend($scope, {
				// pass to view
			});
		}]);