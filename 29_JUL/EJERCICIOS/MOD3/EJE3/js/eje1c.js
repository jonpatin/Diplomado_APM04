angular.module('lab1c', [])
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