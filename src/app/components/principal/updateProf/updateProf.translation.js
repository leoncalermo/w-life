angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      UPDT: {
        TITLE: 'Actualización del perfil',
        FIRSTNAME: 'Nombre: ',
        LASTNAME: 'Apellido: ',
        USERNAME: 'Nombre de usuario: ',
        PASSWORD_1: 'Contraseña: ',
        PASSWORD_2: 'Repetir contraseña: ',
        ERROR_PASS1: 'Contraseña inválida.',
        ERROR_PASS2: 'No coinciden contraseñas.',
        SUBMIT: 'Actualizar',
        CANCEL: 'Cancelar'
      },
      CTRL: {
        OK: 'Actualizado el: {{updatedAt}}',
        ERROR: 'Error al cargar las Actualizacióones',
        SUBMIT: 'Actualizar',
        MSG_SUC: 'El perfil se actualizó correctamente',
        MSG_ERROR: 'Se produjo un error al actualizar el perfil'
      }
    });
  }
]);
