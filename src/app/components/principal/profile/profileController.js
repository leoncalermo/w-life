angular.module('app-bootstrap').controller('ProfileController',
  ['profileService',
  function(profileService) {

    profileService.getProfile().then((response) => {
      this.profile = response.data;
    });

  }]
);
