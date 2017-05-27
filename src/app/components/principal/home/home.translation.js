angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      HOME: {
        BUT_PROFILE: 'Perfil',
        BUT_LOG_OUT: 'Cerrar sesión',
        BUT_NOT: 'Futuras notificaciones',
        SELECT: 'Seleccionar filtro',
        SEARCH: 'Buscar...'
      },
      CTRL: {
        ERROR: 'Error al reslizar el log out'
      }
    });
  }
]);

