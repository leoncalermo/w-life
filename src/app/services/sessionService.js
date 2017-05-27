angular.module('app-bootstrap').factory('sessionService', [
  'localStorageService', '$http',
  function (localStorageService, $http) {

    let login = !!localStorageService.get('logUser');
    let user;
    if (login) {
      $http.defaults.headers.common['X-Parse-Session-Token'] = localStorageService.get('logUser');
    }

    return {
      setActualUser: (userData) => {
        login = true;
        user = userData;
        localStorageService.set('logUser', userData.sessionToken);
        $http.defaults.headers.common['X-Parse-Session-Token'] = userData.sessionToken;
      },

      getActualUser: () => {
        return user;
      },

      resetActualUser: () => {
        login = false;
        user = null;
        localStorageService.remove('logUser');
        delete $http.defaults.headers.common['X-Parse-Session-Token'];
      },

      loginState: () => {
        return login;
      }

    };
  }]
);
