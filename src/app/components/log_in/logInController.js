angular.module('app-bootstrap').controller('LogInController', [
  '$state',
  function($state) {
    this.requestLogIn = () => {
      $state.go('principal.home');
    }
  }
]);
