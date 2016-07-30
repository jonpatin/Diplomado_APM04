angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.toggle', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/toggle.html',
        controller: 'toggleCtrl'
      }
    }
  })

  .state('menu.forms', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/forms.html',
        controller: 'formsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.list', {
    url: '/list',
    views: {
      'side-menu21': {
        templateUrl: 'templates/list.html',
        controller: 'listCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/home')

  

});