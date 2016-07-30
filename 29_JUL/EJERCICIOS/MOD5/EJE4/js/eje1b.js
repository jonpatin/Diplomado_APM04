angular.module('lab1b', [])
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
              });