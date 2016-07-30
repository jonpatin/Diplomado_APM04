angular.module('lab1d.controllers', [])
              .controller('lab1aController', function($scope, $http){
              	console.log('entro');
              	$scope.name = 'Nombre completo';
              	$scope.salary = 10000000;
              	$scope.profesion = 'Ingeniero';
              	$scope.address = 'Calle 45 # 12-15';
              	$scope.phone = '(571) 4561230';
              })
              .controller('lab1bController', function($scope, $http){
              	console.log('entro');
              	$scope.filtros = ["currency", "date", "filter", "json", "limitTo", "lowercase", "number", "orderBy", "uppercase"];
            $scope.inputs = [
                {
                    type: "text"                    
                },
                {
                    type: "date"
                },
                {
                    type: "datetime-local"
                },
                {
                    type: "time"
                },
                {
                    type: "week"
                },
                {
                    type: "month"
                }
            ];
              })
              .controller('lab1cController', function($scope, $http){
              	console.log('entro');
                //$scope.showBt1 = false;
               // $scope.showBt2 = true;
              	$scope.model = 'http://dummyimage.com/200x200/000/34ffddaa';
                $scope.change = function(){
                    console.log('entro al change');
                    $scope.model = 'http://dummyimage.com/400x400/000/34ffddaa';
                    //$scope.showBt1 = true;
                    //$scope.showBt2 = false;
                }
                $scope.change_init = function(){
                    console.log('entro al change_init');
                    $scope.model = 'http://dummyimage.com/200x200/000/34ffddaa';
                    //$scope.showBt1 = false;
                    //$scope.showBt2 = true;
                }
            
              });