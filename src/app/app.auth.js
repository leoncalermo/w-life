angular.module('app-bootstrap').run([
  '$rootScope', '$state', 'sessionService',
  function ($rootScope, $state, sessionService) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
      if (toState.data.requireLogin && !sessionService.loginState()) {
        $state.go('log_in');
        event.preventDefault();
      } else if (!toState.data.requireLogin && sessionService.loginState()) {
        $state.go('principal.home');
        event.preventDefault();
      }
    });
  }
]);
