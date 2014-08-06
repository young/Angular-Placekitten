angular.module('Angular-Placekitten', [])
  .directive('kitten', function() {
    return {
      restrict: 'E',
      scope: {
        width: '=',
        height: '='
      },
      template: '<img src="http://placekitten.com/g/{{width || 400}}/{{height || 500}}" />'
    };
  });
