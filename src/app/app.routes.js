angular.module('app-bootstrap').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('log_in');
    });

    // Now set up the states
    $stateProvider
      .state('centered', {
        abstract: true,
        data: {
          requireLogin: true
        },
        views: {
          main: {
            templateUrl: '../app/components/centered/centered.html'
          }
        }
      })
      .state('centered.state1', {
        url: '/state1',
        views: {
          content: {
            templateUrl: '../app/components/centered/component1/component1.html',
            controller: 'Component1Controller',
            controllerAs: 'comp1Ctrl'
          }
        }
      })
      .state('centered.state2', {
        url: '/state2',
        views: {
          content: {
            templateUrl: '../app/components/centered/component2/component2.html',
            controller: 'Component2Controller',
            controllerAs: 'comp2Ctrl'
          }
        }
      })
      .state('principal', {
        abstract: true,
        data: {
          requireLogin: false
        },
        views: {
          main: {
            templateUrl: '../app/components/principal/principal.html',
            controller: 'PrinController',
            controllerAs: 'prinCtrl'
          }
        }
      })
      .state('principal.home', {
        url: '/home',
        views: {
          'rest-page': {
            templateUrl: '../app/components/principal/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
          }
        }
      })
      .state('principal.map', {
        url: '/map',
        views: {
          'rest-page': {
            templateUrl: '../app/components/map/map.html',
            controller: 'MapController',
            controllerAs: 'mapCtrl'
          }
        }
      })
      .state('principal.books', {
        url: '/books/{objectId}',
        views: {
          'rest-page': {
            templateUrl: '../app/components/principal/bookDetail/book.html',
            controller: 'BookController',
            controllerAs: 'bookCtrl'
          }
        }
      })
      .state('principal.profile', {
        url: '/profile',
        views: {
          'rest-page': {
            templateUrl: '../app/components/principal/profile/profile.html',
            controller: 'ProfileController',
            controllerAs: 'profileCtrl'
          }
        }
      })
      .state('principal.updateProf', {
        url: '/updateProf',
        views: {
          'rest-page': {
            templateUrl: '../app/components/principal/updateProf/updateProf.html',
            controller: 'UpdateProfController',
            controllerAs: 'updateProfCtrl'
          }
        }
      })
      .state('register', {
        url: '/register',
        data: {
          requireLogin: false
        },
        views: {
          main: {
            templateUrl: '../app/components/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'regCtrl'
          }
        }
      })
      .state('log_in', {
        url: '/log_in',
        data: {
          requireLogin: false
        },
        views: {
          main: {
            templateUrl: '../app/components/log_in/log_in.html',
            controller: 'LogInController',
            controllerAs: 'logInCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
