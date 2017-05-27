angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      PROFILE: {
        FIRSTNAME: 'Nombre:',
        LASTNAME: 'Apellido:',
        USERNAME: 'Nombre de usuario:',
        EMAIL: 'Email:',
        CREATAT: 'Fecha de alta:',
        SUBMIT: 'Actualizar perfil'
      }
    });
  }
]);
