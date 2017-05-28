angular.module('app-bootstrap').controller('HomeController',
  ['booksService', 'logInService', '$state', 'sessionService',
  function (booksService, logInService, $state, sessionService) {

    booksService.getBooks().then((books) => {
      this.books = books.data.results;
    });

    this.onLogOut = function () {
      logInService.logOutUser().then(() => {
        sessionService.resetActualUser();
        $state.go('log_in');
      });
    }

  }]
);
