angular.module('app-bootstrap').filter('cut', [
  function () {
    return (value, max) => {
      if (value.length <= max) {
        return value
      } else {
        value = value.substr(0, max);
        return `${value} …`
      }
    };
  }
]);
