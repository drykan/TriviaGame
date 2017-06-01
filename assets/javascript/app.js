$(document).ready(function() {

var question;
var answers = "";
var message = "";
var image = "";
var timer = 30;
var timerId;
var gameTrivia = [
{
	question: "Which Beatle crossed Abbey Road first?",
	options: ["John", "Paul", "George", "Ringo"],
	answer: 0,
	message: "John was the first Beatle to cross Abbey Road in the famous album cover. The photograph was taken at approximately 11:35 AM on Friday, August 8, 1969. A British Bobby held up traffic for 10 minutes as six pictures were taken.",
	image: 'assets/images/answerQ1.jpg'
}, 
{
	question: "Who was the original drummer for the Beatles?",
	options: ["Keith Moon", "Charlie Watts", "Pete Best", "Ringo Star"],
	answer: 2,
	message: "Pete Best was the original drummer for the Beatles, performing with the band during its formative years in the early 1960s. He was replaced by Ringo Starr only a few days before The Beatles recorded their first hit single, 'Love Me Do.'",
	image: 'assets/images/answerQ2.jpg'
},
{
	question: "What name did the group go by before they were the Beatles?",
	options: ["Johnny's Band", "The Quarrymen", "The Basements", "The Liverpool Quartet"],
	answer: 1,
	message: "The Beatles called The Quarrymen before changing their name in 1960",
	image: 'assets/images/answerQ3.jpg'
},
{
	question: "In the song, 'Martha My Dear'; Who was Martha?",
	options: ["Pauls' Girlfriend", "Georges' Mother", "Johns' Cat", "Pauls' Dog"],
	answer: 3,
	message: "Here’s the history of “Martha” who is included in thousands of photos with McCartney and with The Beatles. Soon after buying his house on Cavendish Avenue, Paul McCartney bought his first pet, an Old English sheepdog puppy that he named Martha.  She was born June 16, 1966.",
	image: 'assets/images/answerQ4.jpg'
},
{
	question: "The Beatles gave their first live U.S. television performance on what show?",
	options: ["The Tonight Show", "The Ed Sullivan Show", "Late Night USA", "Good Morning America"],
	answer: 1,
	message: "On February 9, 1964, the Beatles gave their first live U.S. television performance on The Ed Sullivan Show, watched by approximately 73 million viewers in over 23 million households.",
	image: 'assets/images/answerQ5.gif'
}

];

var currentQuestion = 0;
var correct = 0;
var total = gameTrivia.length;

$("#timer").hide();
$("#playerScore").hide();
$("#nextBtn").hide();
$("#answers").hide();


//Start button to start the game.
$("#startBtn").click(function() {
	$(this).hide();
	$("#timer").show();
	$("#playerScore").show();
	$("#answers").show();
	startGame();
	timerId = setInterval(countdown, 1000);
	countdown();
});

function startGame() {

	
	$(".questions").html(gameTrivia[currentQuestion].question);		//Sets up question
	var options = gameTrivia[currentQuestion].options;				//logs the options for buttons
	$(".correct").hide();											//Hides the Correct or Incorrect alert
	$("#message").hide();											//Hides the correct message screen upon start game
	message = gameTrivia[currentQuestion].message;					//Populates the message with the text
	image = "<img src= " + gameTrivia[currentQuestion].image + ">";	//Populates the message with the image
	var score = "Score: " + correct + " / " + total;


	//builds the Answers/Options and adds the array object stats
	for(var i = 0; i < options.length; i++) {
		var button = $('<button class="answers">');
		button.text(gameTrivia[currentQuestion].options[i]);
		button.attr('data-id', i);
		$("#answers").append(button);
	}
	
	$("#playerScore").html(score);
	$("#timer").html(timer);

	//Check the answer
	$(".answers").click(function() {
		var userGuess = $(this).data("id")
		if(timer > 1) {	
			if(gameTrivia[currentQuestion].answer == userGuess) {
				correct++;
				score = "Score: " + correct + " / " + total;
				$("#playerScore").html(score);
				$("#question").hide();
				$("#answers").hide();
				$(".correct").show();
				$(".correct").html("Correct!");	
				$(".correct").removeClass("wrongMessage");
				$(".correct").addClass("correctMessage");
				$("#message").show();
				$("#message").html(message);
				$("#image").show();
				$("#image").html(image);
				$("#nextBtn").show();
				timer = 80;
			} else {
				$("#question").hide();
				$("#answers").hide();
				$(".correct").show();
				$(".correct").html("Wrong Answer");
				$(".correct").removeClass("correctMessage");
				$(".correct").addClass("wrongMessage");
				$("#message").show();
				$("#message").html(message);
				$("#image").show();
				$("#image").html(image);
				$("#nextBtn").show();
				timer = 10;
			}
		} else {
			nextQuestion();
		}

	});

}

$("#nextBtn").click( function() {
	if(currentQuestion < total - 1) {
		currentQuestion++;
		console.log(currentQuestion);
		console.log(total);
		$("#question").show();
		$("#image").hide();
		$("#answers").html("");
		$("#answers").show();
		$("#message").html("");
		$("#nextBtn").hide();
		timer = 30;
		startGame();
		console.log(currentQuestion + " of " + total);
	} else {
		currentQuestion = 0;
		$("#startBtn").show();
		$(".correct").hide();
		$("#message").hide();
		$("#nextBtn").hide();
		$("#image").hide();
		$(".question").html("You scored: " + score);
		timer = 30;
		console.log(currentQuestion);
	}
});

function nextQuestion() {
	if(currentQuestion < total) {
		currentQuestion++;
		console.log(currentQuestion);
		console.log(total);
		$("#question").show();
		$("#image").hide();
		$("#answers").html("");
		$("#answers").show();
		$("#message").html("");
		$("#nextBtn").hide();
		startGame();
	} else {
		currentQuestion = 0;
		$("#startBtn").show();
		$(".correct").hide();
		$("#message").hide();
		$("#nextBtn").hide();
		$("#image").hide();
		timer = 30;
		timerId = clearInterval(timer);
	}
}

function countdown() {
	if (timer == 0) {
		timer = 30;
		$(".answers").html("");
		$(".correct").hide();
		nextQuestion();

	} else {
		$("#timer").html("Time: " + timer);
		timer--;
	}
}











});




