angular.module('lab1a', [])
              .controller('lab1aController', function($scope, $http){
              	console.log('entro');
              	$scope.name = 'Nombre completo';
              	$scope.salary = 10000000;
              	$scope.profesion = 'Ingeniero';
              	$scope.address = 'Calle 45 # 12-15';
              	$scope.phone = '(571) 4561230';
              });