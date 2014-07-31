angular.module('Angular-Placekitten', []).directive('kitten', function() {
  return {
    restrict: 'E',
    scope: {
      height: '=',
      width: '='
    },
    template: '<img src="http://placekitten.com/g/200/300" />'
  };

});