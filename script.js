"use strict";

// random number creator variable
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// other variables
let score = 20;
let highScore = 0;

//show message functions
function showMassage(message) {
  document.querySelector(".message").textContent = message;
}

function showScore(currentScore) {
  document.querySelector(".score").textContent = currentScore;
}

function showHighScore(currentHighScore) {
  document.querySelector('.highscore').textContent = currentHighScore;
}

// click event functions
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // win condition
  if (guess === secretNumber) {
    showMassage("😍 You got the number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.borderRadius = "30rem";
    document.querySelector('.number').textContent = secretNumber;

    // high score condition
    if (score > highScore) {
      highScore = score;
      showHighScore(score);
    }

    // blank input condition
  } else if (!guess) {
    showMassage("🎈 Please input your number!");

    // not in range number condition
  } else if (guess < 0 || guess > 20) {
    showMassage("🎲 Put a number between 1 and 20!");

    // high and guess condition
  } else if (score > 2) {
    showMassage(guess > secretNumber ? "🙄 TO HIGH" : "😔 TO LOW");
    score -= 2;
    showScore(score);

    // lose condition
  } else {
    showMassage("🎃 U Lost!");
    document.querySelector("body").style.backgroundColor = "#ff1153";
    showScore("0");
  }
});

// reset functions
document.querySelector(".again").addEventListener("click", function () {
  // secretNumber reset
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // score reset
  score = 20;
  showScore(score);
  // message reset
  showMassage('Start guessing...');
  // background reset
  document.querySelector('body').style.backgroundColor = '#222';
  // style reset
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.borderRadius = "0";
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = "";

  // high score reset condition
  if (highScore >= 20) {
    score = 0;
    showHighScore('0');
  }
});
