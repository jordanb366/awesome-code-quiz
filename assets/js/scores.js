
var userHighScore = document.querySelector("#user-high-score");
var scoreLI = document.createElement("li");
var clearScoreBtn = document.querySelector("#clear-highscores");




function grabHighScore() {
    var userScore = localStorage.getItem("userScore");
    var userInitials = localStorage.getItem("userInitials");
  
    userHighScore.textContent = "Score" + ": " + userScore + " - Initials: " + userInitials;
  }

grabHighScore();


clearScoreBtn.addEventListener("click", clearScore);

function clearScore(event) {
  event.preventDefault();
  
  localStorage.clear();
  

}


