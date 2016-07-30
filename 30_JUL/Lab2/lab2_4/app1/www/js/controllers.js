angular.module('app.controllers', [])
  
.controller('loginCtrl', function($scope,$state) {
    $scope.login = function(email,pwd){
        console.log('entro al login');
        console.log(email);
        console.log(pwd);
        localStorage.setItem('user',email);
        localStorage.setItem('pwd',pwd);
        $state.go('page');
    }
})
   
.controller('pageCtrl', function($scope) {
    console.log('entro a pageCtrl');
    console.log(localStorage.getItem('user'));
    console.log(localStorage.getItem('pwd'));
    $scope.user = localStorage.getItem('user');
    $scope.pwd = localStorage.getItem('pwd');
})
 