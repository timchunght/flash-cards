var appFactories = angular.module('AppFactories', [])

appFactories.factory('FlashCardsFactory', ['$http', function($http) {
  return { 
    getFlashCards: function (category) {

        var queryParams = {};

        if (category) {
            queryParams.category = category;
        }

        return $http.get('/cards', {
            params: queryParams
        }).then(function (response) {
            return response.data;
        });

    }
  }
}]);

appFactories.factory('ScoreFactory', function () {
 
    return { 
        correct: 0,
        incorrect: 0
    };

});