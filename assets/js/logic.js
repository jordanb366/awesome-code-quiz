var startGame = document.querySelector(".start-game");
var timer = document.getElementById("countdown-timer");
var startGameSection = document.querySelector("#start-game-section");
var scoreSubmitSection = document.querySelector("#score-submit-section");
var submitEl = document.querySelector("#submit");
var initials = document.querySelector("#initials");


// Timer Countdown function
function timerCountdown() {
var timeLeft = 30;

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
    startGameSection.style.visibility = "hidden";
    questionsContainer.style.visibility = "visible";
    // Starts timer
    timerCountdown();
    grabQuestions();

    // Pulls in questions
    console.log(questions);
    console.log(grabQuestions);
}); 

var questionsContainer = document.querySelector("#questions-container");

function grabQuestions() {

   
    var questionsParagraph = document.querySelector("#questions-paragraph");
    var button1 = document.querySelector("#button1");
    var button2 = document.querySelector("#button2");
    var button3 = document.querySelector("#button3");
    var button4 = document.querySelector("#button4");
    var questionsOL = document.querySelector("ol");
   
    questionsParagraph.textContent = questions[0].questionsText;
  


    var answer = button1.textContent;
    questionsContainer.append(questionsParagraph);
    questionsContainer.append(questionsOL);

var pulledQuestions = "";
  for (var i = 0; i < questions.length; i++) {
    pulledQuestions += questions[i].choices;
    
    button1.textContent = pulledQuestions;
  
    
  }
}

//////////////////////////// Submit score functions below - still working to get to work correct
var score = 0;

var actualScore = document.querySelector("#score");
var userHighScore = document.querySelector("#user-high-score");

function scores() {
actualScore.textContent = score;
console.log(actualScore);

}

// Function when game is over user is able to enter initials to submit to the score board on the scores page
function endOfGame() {
   scoreSubmitSection.style.visibility = "visible";
   questionsContainer.style.display = "none";
}

function scoreSubmitFunction(event) {
  event.preventDefault();
  var response = score + " " + initials.value; 
  userHighScore.textContent = response;
}


// Add listener to submit element
submitEl.addEventListener("click", scoreSubmitFunction);





