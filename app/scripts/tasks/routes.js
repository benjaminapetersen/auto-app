'use strict';

angular.module('auto.tasks', [])
	.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/tasks', {
					templateUrl: 'scripts/tasks/views/list.html',
					controller: 'auto.tasks.list'
				})
				.when('/tasks/new', {
					templateUrl: 'scripts/tasks/views/new.html',
					controller: 'auto.tasks.new'
				})
				.when('/tasks/:tid', {
					templateUrl: 'scripts/tasks/views/item.html',
					controller: 'auto.tasks.item'
				})
				.when('/tasks/:tid/edit', {
					templateUrl: 'scripts/tasks/views/edit.html',
					controller: 'auto.tasks.edit'
				});
		}
	]);

