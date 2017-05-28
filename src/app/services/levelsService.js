angular.module('app-bootstrap').factory('levelsService', [
  function () {
    let actualStep = 3;

    return {
      toLevel4: () => {
        actualStep = 4;
      },

      toLevel5: () => {
        actualStep = 5;
      },

      actualLevel: () => {
        return actualStep;
      }
    };

  }
]);
