angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {
    $translateProvider.translations ('es', {
      LOG_IN: {
        TITLE: 'Logueo de usuarios',
        USERNAME: 'Nombre de usuario',
        PASSWORD: 'Contraseña',
        LOG: 'Loguear',
        REQ: 'Campo requerido.'
      },
      CTRL: {
        LOG_ERROR: 'Combinación usuario contraseña inválido',
        MISS_FIELDS: 'Faltan campos'
      }
    });
  }
]);
