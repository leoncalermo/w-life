angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      HEADER: {
        BUT_PROFIL: 'Perfil',
        BUT_LOG_OUT: 'Cerrar sesión',
        BUT_NOT: 'Futuras notificaciones'
      },
      CTRL: {
        ERROR: 'Ocurrió un error al cerrar sesión.'
      }
    });
  }
]);
