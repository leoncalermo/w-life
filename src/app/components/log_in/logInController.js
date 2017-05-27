angular.module('app-bootstrap').controller('LogInController', [
  'logInService', 'sessionService', '$state', '$translate',
  function(logInService, sessionService, $state, $translate) {
    this.requestLogIn = (isValid) => {
      if (isValid) {
        const params = {
          username: this.requestLogInn.username,
          password: this.requestLogInn.password
        }
        logInService.logInUser({ params }).then((data) => {
          sessionService.setActualUser(data);
          $state.go('principal.home');
        })
        .catch(() => {
          alert($translate.instant('CTRL.LOG_ERROR'));
        });

      } else {
        alert($translate.instant('CTRL.MISS_FIELDS'));
      }
    }
  }
]);
