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