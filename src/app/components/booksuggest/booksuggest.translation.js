angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      SUGGEST: {
        TITLE: 'Sugerir libros',
        NAME: 'Nombre',
        AUTHOR: 'Autor',
        PRICE: 'Precio',
        YEAR: 'Año',
        EDITORIAL: 'Editorial',
        LINK: 'Link',
        BUT_SUGGEST: 'Sugerir',
        BUT_CANCEL: 'Cancelar',
        ERROR_NAME: '* Campo nombre requerido',
        ERROR_YEAR: '* Año inválido'
      },
      CTRL: {
        SUG_BOOK: 'El libro fue agregado correctamente a las sugerencias.'
      }
    });
  }
]);
