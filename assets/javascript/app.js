var counter = 60;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;

$(".results").hide();







//Function for selecting answer
function selectAnswer() {
	//get button that was clicked i.e. 'this'
	var btn = $(this);
	//add selected class to button
	btn.addClass("selected").siblings().removeClass("selected");
}



//Function to start countdown
function startCountDown() {
	//start timer
	window.timer = setInterval(function(){
		//subtract 1 from counter
		counter--;
		//show time remaining in DOM
		if (counter > 9) {
			$("#stop-clock").html("0:" + counter); 
		} 	else {
			$("#stop-clock").html("0:0" + counter);
		}
	}, 1000);

}

//Function to end game
function endGame() {

}

//Function to check answers
function checkAnswers() {

}







// Function to start the game
function startGame () {
	//hide the start button
	$("#start").hide();
	//show questions
	$(".questions").show();
	//start countdown
	startCountDown();
}

$("#start").on("click", startGame);

//setup the event listener on buttons
$(".questions button").on("click", selectAnswer);
