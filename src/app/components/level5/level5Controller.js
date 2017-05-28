angular.module('app-bootstrap').controller('Level5Controller',
  ['levelsService',
  function (levelsService) {

    this.level = levelsService.actualLevel();
    this.passLevel = levelsService.toLevel5();

  }]
);
