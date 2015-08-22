// I don't understand this js file and how two-way binding works.

'use strict';

// I guess this line refers to the vehicles.js file,
angular.module('auto.vehicles')
	.controller('auto.vehicles.vehicle.new', [
    '$location',
		'$log',
		'$scope',
    'vehicles',
		function($location, $log, $scope, vehicles) {
			$log.log('/vehicles/new');


      // When using ng-model in the view, it will
      var vehicle = {
        year: '',
        make: '',
        model: '',
        color: '',
      }

			angular.extend($scope, {

        vehicle: vehicle,

				create: function() {

          vehicle.id = Date.now();
          vehicles
            .create(vehicle)
            .then(function() {
              $location.path("/vehicles")
            });
        }

			});
		}]);


// Services <-> Controller (JS) <-> Views (HTML)
// Button .save -> vehicle service.save(vehicle)



// localStorage.setItem('user_id_vehicles', {});
// [{},{},{}] <-- array of vehicles
