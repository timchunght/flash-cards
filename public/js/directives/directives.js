var appDirectives = angular.module('AppDirectives', [])

appDirectives.directive('loader', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/loader/loader.html'
    };
});

appDirectives.directive('flashCard', function () {
  return {
    restrict: 'E',
    scope: {
      card: '=',
      answerFunction: '='
    },
    templateUrl: 'js/directives/flashcard/flashcard.html'
  };
});

appDirectives.directive('borderOnHover', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('mouseout', function () {
        element.css('border-width', '1px');
      });
      element.on('mouseenter', function () {
        element.css('border-width', '2px');
      });
    }
  };
});