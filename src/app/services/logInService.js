angular.module('app-bootstrap').factory('logInService',
  ['$http', 'sessionService', '$state',
  function ($http, sessionService, $state) {

    return {
      logInUser: (params) => {
        return $http.get('https://api.parse.com/1/login', params).then((response) => {
          return response.data;
        });
      },
      logOutUser: () => {
        return $http.post('https://api.parse.com/1/logout', {})
        .finally(() => {
          sessionService.resetActualUser();
          $state.go('log_in');
        });
      }

    }
  }
]);
