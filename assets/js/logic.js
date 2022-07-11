var startGame = document.querySelector(".start-game");
var timer = document.getElementById("countdown-timer");
var startGameSection = document.querySelector("#start-game-section");
var scoreSubmitSection = document.querySelector("#score-submit-section");
var submitEl = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var questionsContainer = document.querySelector("#questions-container");
var questionsList = document.querySelector("#choices");
var currentQuestion = 0;


// Timer Countdown function
function timerCountdown() {
var timeLeft = 10;

var timerInterval = setInterval(function() {

    timer.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        score++;
       endOfGame();
       scores();
    }

}, 1000);
}



// Starts the game
startGame.addEventListener("click", function() {
    startGameSection.style.display = "none";
    questionsContainer.style.display = "block";
    // Starts timer
    timerCountdown();
    grabQuestions(currentQuestion);
    grabAnswers();

  
}); 


function grabQuestions(i) {
  var questionToGrab = questions[i];
  questionsContainer.textContent = questionToGrab.questionsText;
  grabAnswers();

}

function grabAnswers() {
  questionsList.innerHTML = "";
  var question = questions[currentQuestion];
  var choicesToGrab = question.choices;
  questionsContainer.appendChild(questionsList);

  var answerCorrect = question.answer;
 // console.log(answerCorrect);



  choicesToGrab.forEach(function(choice, index) {
    var choiceElement = document.createElement("button");
    choiceElement.textContent = choice;
    questionsList.append(choiceElement);
    


    choiceElement.addEventListener("click", function(){
   // console.log(choiceElement.textContent);
    checkAnswer(choiceElement.textContent);
    });
 });
}

function checkAnswer(ans) {
if (ans === questions[currentQuestion].answer) {
  console.log("answer Correct");
} else {
  console.log("Answer Incorrect");
}

  
   
   if (currentQuestion <= 4) {
    
     currentQuestion++;
      //console.log(currentQuestion);
      grabQuestions(currentQuestion);
     
   }
   else {
    endOfGame();
   }
}
// Function when game is over user is able to enter initials to submit to the score board on the scores page
function endOfGame() {
 
  scoreSubmitSection.style.visibility = "visible";
  questionsContainer.style.display = "none";
  
  console.log(currentQuestion);
   

}



// Add listener to submit element
submitEl.addEventListener("click", scoreSubmitFunction);


var score = 0;

var actualScore = document.querySelector("#score");
var userHighScore = document.querySelector("#user-high-score");

function scores() {
actualScore.textContent = score;


}


function scoreSubmitFunction(event) {
  event.preventDefault();
  var response = score + " " + initials.value; 
  userHighScore.textContent = response;
}

//for (var i = 0; i < choicesToGrab.length; i++) {
  //  var choiceElement = document.createElement("button");
  // choiceElement.textContent = choicesToGrab[i];
  // questionsList.append(choiceElement);
 // console.log(questionsList);
 // }

