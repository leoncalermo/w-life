angular.module('app-bootstrap').controller('PrinController',
  ['logInService', '$translate', 'sessionService', 'profileService', '$state', '$uibModal',
  function (logInService, $translate, sessionService, profileService, $state, $uibModal) {

    profileService.getProfile().then((response) => {
      this.user = response.data;
      this.user.imageUrl = 'http://placehold.it/100x100';
      sessionService.setActualUser(response.data);
    });

    this.onLogOut = function () {
      logInService.logOutUser().then(() => {
        sessionService.resetActualUser();
        $state.go('log_in');
      })
      .catch(() => {
        alert($translate.instant('CTRL.ERROR'));
      });
    }

    this.suggestBook = () => {
      $uibModal.open({
        animation: true,
        bindToController: true,
        templateUrl: '../app/components/booksuggest/booksuggest.html',
        controller: 'SuggestController',
        controllerAs: 'suggestCtrl'
      });
    }
  }]
);
