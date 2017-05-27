angular.module('app-bootstrap').config([
  'RestangularProvider', 'configuration', 'localStorageServiceProvider', '$httpProvider', 'growlProvider',
  function (RestangularProvider, configuration, localStorageServiceProvider, $httpProvider, growlProvider) {

    // Restangular Setup
    RestangularProvider.setBaseUrl(configuration.apiUrl);
    RestangularProvider.setDefaultHeaders({ 'Content-Type': 'application/json' });

    // Local Storage Setup
    localStorageServiceProvider.setPrefix(window.btoa('app-/* @echo environment */'));

    // Headers Base
    $httpProvider.defaults.headers.common['Content-Type'] = configuration.CONTENT_TYPE;
    $httpProvider.defaults.headers.common['X-Parse-Application-Id'] =
      configuration.X_PARSE_APPLICATION_ID;
    $httpProvider.defaults.headers.common['X-Parse-REST-API-Key'] =
      configuration.X_PARSE_REST_API_KEY;

    growlProvider.globalTimeToLive(5000);
  }
]);
