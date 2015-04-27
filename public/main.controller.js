app.controller('MainController', ['$scope', 'FlashCardsFactory', function ($scope, $FlashCardsFactory) {
	// $scope.flashCards = $whateverName;
	$FlashCardsFactory.getFlashCards().then(function(cards) {
		console.log(cards);
	})
	// console.log(FlashCardsFactory.getFlashCards();
	// console.log($flashCardsFactory.getFlashCards());
	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
}]);