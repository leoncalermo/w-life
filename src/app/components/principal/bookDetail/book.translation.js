angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      BOOK: {
        BACK: '< volver',
        BUT_RENT: 'Alquilar',
        BUT_WISH: 'Wishlist',
        DATE: '*Devolver antes de {{ dateParam | date:"dd/MM/yy"}}',
        WISH: '*No se encuentra disponible',
        ADD_WISH: 'Agregado a la lista de libros deseados',
        COM_TITLE: 'Comentarios',
        BUT_COMMENT: 'Enviar'
      },
      CTRL: {
        SUCC_W: 'Libro agregado correctamente a la lista de deseados.',
        SUCC_R: 'Libro alquilado correctamente.',
        ERROR: 'Error al procesar la solicitud.'
      }
    });
  }
]);
