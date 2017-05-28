angular.module('app-bootstrap').controller('MapController',
  ['levelsService',
    function (levelsService) {
      this.level = levelsService.actualLevel();
      console.log(this.level);
    }
  ]
);
