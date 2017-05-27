angular.module('app-bootstrap').factory('profileService',
  ['$http',
  function ($http) {

    return {
      getProfile: () => {
        return $http.get('https://api.parse.com/1/users/me');
      },

      postUpdateProf: (data) => {
        return $http.put(`https://api.parse.com/1/users/${data.objectId}`, data);
      },

      getUserName: (user) => {
        return $http.get(`https://api.parse.com/1/users/${user}`)
      }

    };
  }]
);
