angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      FORM: {
        TITLE: 'Registro de usuarios',
        FIRSTNAME: 'Nombre',
        LASTNAME: 'Apellido',
        USERNAME: 'Nombre de usuario',
        PASSWORD: 'Contraseña',
        EMAIL: 'Email',
        REGISTER: 'Registrar',
        ERROR_REQUIRED: 'Campo requerido',
        ERROR_DESC: 'Campo requerido. Debe poseer al menos 8 caracteres, un dígito y una letra.'
      },
      ALERT: {
        OK: 'Alta exitosa',
        NO_OK: 'Faltan campos'
      }
    });
  }
]);
