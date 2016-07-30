angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('list', {
    url: '/page1',
    templateUrl: 'templates/list.html',
    controller: 'listCtrl'
  })

  .state('toggle', {
    url: '/page2',
    templateUrl: 'templates/toggle.html',
    controller: 'toggleCtrl'
  })

  .state('forms', {
    url: '/page3',
    templateUrl: 'templates/forms.html',
    controller: 'formsCtrl'
  })

  .state('dynamicList', {
    url: '/dynamicList',
    templateUrl: 'templates/dynamicList.html',
    controller: 'dynListController'
  })

$urlRouterProvider.otherwise('/home')

  

});