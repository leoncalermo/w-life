angular.module('app-bootstrap').factory('registrationService', [
  '$http',
  function ($http) {

    return {
      postUser: (data) => {
        return $http.post('https://api.parse.com/1/users', data);
      }
    }
  }
]);
