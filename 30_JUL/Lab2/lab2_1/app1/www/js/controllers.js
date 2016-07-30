angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('listCtrl', function($scope) {

})
   
.controller('toggleCtrl', function($scope) {

})
   
.controller('formsCtrl', function($scope) {

})

.controller('dynListController', function($scope) {
    console.log('entro al controller -> dynListController');
    $scope.items = ["currency", "date", "filter", "json", "limitTo", "lowercase", "number", "orderBy", "uppercase"];
})
 