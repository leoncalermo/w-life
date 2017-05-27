angular.module('app-bootstrap').controller('UpdateProfController',
  ['sessionService', 'profileService', '$state', 'growl',
  function (sessionService, profileService, $state, growl) {

    this.passPattern = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;

    profileService.getProfile().then((response) => {
      this.updateSubmit = response.data;
    })

    this.validation = (updateForm) => {
      if (this.updateSubmit.password === this.updateSubmit.passwordConf) {
        updateForm.passwordConf.$setValidity('MissMatch', true);
      } else {
        updateForm.passwordConf.$setValidity('MissMatch', false);
      }
    }

    this.updateChanges = (isValid) => {
      if (isValid) {
        this.updateSubmit = _.pickBy(this.updateSubmit, (val) => val.length > 0);
        delete this.updateSubmit.passwordConf;
        profileService.postUpdateProf(this.updateSubmit)
        .then(() => {
          if (this.updateSubmit.password) {
            sessionService.resetActualUser();
            this.clickSuccess();
            $state.go('log_in');
          } else {
            $state.go('principal.profile');
            this.clickSuccess();
          }
        })
        .catch(() => {
          growl.error('CTRL.MSG_ERROR');
        })
      }
    }

    this.clickSuccess = () => {
      growl.success('CTRL.MSG_SUC');
    }
  }
]);
