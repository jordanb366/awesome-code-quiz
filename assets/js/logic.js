var startGame = document.querySelector(".start-game");
var timer = document.getElementById("countdown-timer");
var startGameSection = document.querySelector("#start-game-section");
var scoreSubmitSection = document.querySelector("#score-submit-section");
var submitEl = document.querySelector("#submit");
var initials = document.querySelector("#initials");
var questionsContainer = document.querySelector("#questions-container");
var questionsList = document.querySelector("#choices");
var showCorrectIncorrectHTML = document.querySelector("#show-correct-incorrect");
var currentQuestion = 0;

//Global variable for time
var timeLeft = 30;

// Timer Countdown function
function timerCountdown() {


var timerInterval = setInterval(function() {

    timer.textContent = timeLeft;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        
       endOfGame();
       scores();
    }

}, 1000);
}



// Starts the game
startGame.addEventListener("click", function() {
    startGameSection.style.display = "none";
    questionsContainer.style.display = "block";
    showCorrectIncorrectHTML.style.display = "block";
    // Starts timer
    timerCountdown();
    grabQuestions(currentQuestion);
    grabAnswers();

  
}); 


//Grab the Questions
function grabQuestions(i) {
  var questionToGrab = questions[i];
  questionsContainer.textContent = questionToGrab.questionsText;
  grabAnswers();

}

//Grab the answers
function grabAnswers() {
  questionsList.innerHTML = "";
  var question = questions[currentQuestion];
  var choicesToGrab = question.choices;
  questionsContainer.appendChild(questionsList);

  var answerCorrect = question.answer;

// For each loop to grab each choice
  choicesToGrab.forEach(function(choice, index) {
    var choiceElement = document.createElement("button");
    choiceElement.textContent = choice;
    questionsList.append(choiceElement);


    choiceElement.addEventListener("click", function(){
    checkAnswer(choiceElement.textContent);
    });
 });
}

// Variables for incorrect and correct answers
var incorrectHTML = document.createElement("p");
incorrectHTML.textContent = "";

var correctHTML = document.createElement("p");
correctHTML.textContent = "";

// Checks the answers
function checkAnswer(ans) {
  if (ans === questions[currentQuestion].answer) {
    score++;
    localStorage.setItem("score", score);
    incorrectHTML.textContent = "";
    correctHTML.textContent = "Answer correct!";
    showCorrectIncorrectHTML.append(correctHTML);
    console.log(correctHTML);
    
  } else {
    correctHTML.textContent = "";
    incorrectHTML.textContent = "Answer incorrect!";
    showCorrectIncorrectHTML.append(incorrectHTML);
    console.log(incorrectHTML);
    timeLeft -= 5;
  }
  currentQuestion++;
  console.log(currentQuestion);
   if (questions.length <= currentQuestion) {
    endOfGame();
    scores();
   }
   else {
    grabQuestions(currentQuestion);
    
   }
}


// Function when game is over user is able to enter initials to submit to the score board on the scores page
function endOfGame() {
  timeLeft = 0;
  scoreSubmitSection.style.display = "block";
  questionsContainer.style.display = "none";
  
}



// Add event listener to submit element
submitEl.addEventListener("click", scoreSubmitFunction);


var score = 0;

var actualScore = document.querySelector("#score");
var userHighScore = document.querySelector("#user-high-score");

function scores() {
actualScore.textContent = score;
}



function scoreSubmitFunction(event) {
  event.preventDefault();
  var initialsValue = initials.value;

  localStorage.setItem("userScore", score);
  localStorage.setItem("userInitials", initialsValue);

  scoreSubmitSection.style.display = "none";
  showCorrectIncorrectHTML.style.display = "none";

  var thanksForPlaying = document.createElement("h1");

  document.body.append(thanksForPlaying);
  thanksForPlaying.textContent = "Thanks for Playing the Quiz Game!";

}



