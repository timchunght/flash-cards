app.controller('MainController', function ($scope, whateverName, FlashCardsFactory) {
	$scope.flashCards = whateverName;
	console.log(FlashCardsFactory);

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}
});