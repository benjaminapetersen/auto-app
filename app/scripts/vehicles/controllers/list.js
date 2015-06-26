'use strict';

angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.list', [
		'$log',
		'$scope',
		'vehicles',
		function($log, $scope, vehicles) {
			$log.log('/vehicles/');

			vehicles.getAll()
					.then(function(items) {
						console.log('vehicles', items);
						angular.extend($scope, {
							items: items
						});
					});
		}]);