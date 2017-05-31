$(document).ready(function() {

var question;
var answers = "";	
var haveQuestion = false;
var timer = 30;
var timerId = setInterval(countdown, 1000);
var gameTrivia = [
{
	question: "Which Beatle crossed Abbey Road first?",
	options: ["John", "Paul", "George", "Ringo"],
	answer: "John"
}, 

{
	question: "Who was the original drummer for the Beatles?",
	options: ["Keith Moon", "Charlie Watts", "Pete Best", "Ringo Star"],
	answer: "Pete Best"
}

];

var currentQuestion = 0;
var correct = 0;
var total = gameTrivia.length;
var score = "Score: " + correct + " / " + total;

$("#timer").hide();
$("#playerScore").hide();


//Start button to start the game.
$("#startBtn").click(function() {
	$(this).hide();
	$("#timer").show();
	$("#playerScore").show();
	startGame();
	countdown();
});

function startGame() {

	$('.questions').html(gameTrivia[currentQuestion].question);		//Sets up question
	var options = gameTrivia[currentQuestion].options;
	var userGuess = gameTrivia[currentQuestion].options[i];

	//builds the Answers/Options and adds the array object stats
	for(var i = 0; i < options.length; i++) {
		answers += "<div class='answers'><h3>" + gameTrivia[currentQuestion].options[i] + "</h3></div>";
	}	

	$("#answers").html(answers);
	$("#playerScore").html(score);
	$("#timer").html(timer);

	//Check the answer
	$(".answers").click(function() {
		console.log("You Pressed: " + gameTrivia[currentQuestion].options[i]);
		console.log(userGuess);
		if(gameTrivia[currentQuestion].answer ==  userGuess) {
			console.log("Correct!");
		} else {
			console.log("Wrong Answer");
		}

	});

}






function countdown() {
		if (timer == 0) {
			clearTimeout(timerId);
		} else {
			$("#timer").html("Time: " + timer);
			timer--;
		}
	}











});




