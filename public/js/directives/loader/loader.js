var appDirectives = angular.module('AppDirectives', [])

appDirectives.directive('loader', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/loader/loader.html'
    };
});