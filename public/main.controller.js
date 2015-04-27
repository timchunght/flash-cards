var appControllers = angular.module('appControllers', [])

appControllers.controller('MainController', ['$scope', 'FlashCardsFactory', function ($scope, $flashCardsFactory) {
	// $scope.flashCards = $whateverName;
	$flashCardsFactory.getFlashCards().then(function(cards) {
		console.log(cards);
		$scope.flashCards = cards;
	});
	// console.log(FlashCardsFactory.getFlashCards();
	// console.log($flashCardsFactory.getFlashCards());
	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	};

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];

	$scope.getCategoryCards = function(category) {
		console.log(category);
		$scope.category = category;
		$flashCardsFactory.getFlashCards(category).then(function(filteredCards) {
			console.log(filteredCards);
			$scope.flashCards = filteredCards;
		});
	};

	$scope.activeCategory = function (category) {
		if($scope.category === category) {
			// console.log("true");
			return true;
		}
		else{
			// console.log("false");
			false;
		}
	};

	$scope.resetCategory = function() {
		$flashCardsFactory.getFlashCards().then(function(cards) {
			$scope.flashCards = cards
		});
		console.log($scope.flashCards)
	}

}]);

// appControllers.controller('StatsController', ['$scope', 'ScoreFactory', function($scope, $scoreFactory) {
// 	// $scope.scores = $scopeFactory;
// 	// console.log($scopeFactory);
// }]);