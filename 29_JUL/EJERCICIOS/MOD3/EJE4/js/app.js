angular.module('lab1d', ['ngRoute','lab1d.controllers'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Eje1', {
		templateUrl: 'views/eje1.html',
		controller: 'lab1aController'
	}).
      when('/Eje2', {
		templateUrl: 'views/eje2.html',
		controller: 'lab1bController'
      }).
      when('/Eje3', {
		templateUrl: 'views/eje3.html',
		controller: 'lab1cController'
      }).
      otherwise({
		redirectTo: '/index.html'
      });
}]);