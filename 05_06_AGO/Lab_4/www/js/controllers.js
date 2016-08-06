angular.module('app.controllers', ['ngCordova'])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$cordovaDevice',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('capturarCtrl', ['$scope', '$stateParams', '$cordovaDevice', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDevice) {
    $scope.capturarInfo = function(){
		var device = $cordovaDevice.getDevice();

    	var cordova = $cordovaDevice.getCordova();

    	var model = $cordovaDevice.getModel();

    	var platform = $cordovaDevice.getPlatform();

    	var uuid = $cordovaDevice.getUUID();

    	var version = $cordovaDevice.getVersion();

        console.log(device, cordova, model, platform, uuid, version);

        localStorage.setItem('device',device);
        localStorage.setItem('cordova',cordova);
        localStorage.setItem('model',model);
        localStorage.setItem('platform',platform);
        localStorage.setItem('uuid',uuid);
        localStorage.setItem('version',version);
    }

}])
   
.controller('mostrarCtrl', ['$scope', '$stateParams', '$cordovaNetwork' ,// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaNetwork) {
    console.log('entro a mostrarCtrl');
/*
    var device = localStorage.getItem('device');
    var cordova = localStorage.getItem('cordova');
    var model = localStorage.getItem('model');
    var platform = localStorage.getItem('platform');
    var uuid = localStorage.getItem('uuid');
    var version = localStorage.getItem('version');
    
    console.log(device, cordova, model, platform, uuid, version);
    
    $scope.item1 = device;
    $scope.item2 = cordova;
    $scope.item3 = model;
    $scope.item4 = platform;
    $scope.item5 = uuid;
    $scope.item6 = version;   
*/
    $scope.network = $cordovaNetwork.getNetwork();
    if($cordovaNetwork.isOnline()) {
        $scope.status = "Online -> " + $cordovaNetwork.isOnline();
    } else {
        $scope.status = "Offline -> " + $cordovaNetwork.isOffline();
    }
    

}])
    