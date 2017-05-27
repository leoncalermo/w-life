angular.module('app-bootstrap').controller('SuggestController',
  ['booksService', '$uibModalInstance', 'growl', '$state',
  function (booksService, $uibModalInstance, growl, $state) {

    this.suggestBook = (isValid) => {
      if (isValid) {
        booksService.postSuggest(this.suggestData).then(() => {
          $state.go('principal.home');
          $uibModalInstance.close();
          growl.success('CTRL.SUG_BOOK');
        })
      }
    }

    this.cancel = () => {
      $uibModalInstance.dismiss('cancel');
    }
  }]
);
