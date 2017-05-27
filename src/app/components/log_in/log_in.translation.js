angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {
    $translateProvider.translations ('es', {
      LOG_IN: {
        TITLE: 'Comenzar aventura',
        MAIL: 'Mail de Wolox',
        BUDDY: 'Escribe el nombre de tu buddy',
        START: 'Comenzar'
      }
    });
  }
]);
