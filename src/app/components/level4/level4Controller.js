angular.module('app-bootstrap').controller('Level4Controller',
  ['levelsService',
  function (levelsService) {
    this.level = levelsService.actualLevel();
    console.log(this.level);
    this.passLevel = levelsService.toLevel4();
  }
]);
