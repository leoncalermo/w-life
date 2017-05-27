angular.module('app-bootstrap').controller('RegisterController', [
  'registrationService', '$translate',
  function(registrationService, $translate) {

    this.passPattern = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;

    this.submitFormm = (isValid) => {
      if (isValid) {
        registrationService.postUser(this.submitForm)
          .then(() => {
            alert($translate.instant('ALERT.OK'));
            this.submitForm = {}; //  Pone en blanco el form
          })
          .catch((response) => {
            alert(response.data.error);
          });
      } else {
        alert($translate.instant('ALERT.NO_OK'));
      }
    }
  }]
);
