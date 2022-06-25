"use strict";
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const newGame = document.querySelector(".btn");
const batting = document.querySelector(".playBat");
const userValue = document.querySelector(".guess");
const bowling = document.querySelector(".playBowl");
const prepareBowl = document.querySelector(".prepareBowl");
const prepareBat = document.querySelector(".prepareBat");
const secondBowl = document.querySelector(".secondaryBowl");
const secondBat = document.querySelector(".secondaryBat");
const bowling2 = document.querySelector(".playBowl2");
const batting2 = document.querySelector(".playBat2");

let overs = 1;
let balls = overs * 6;
let score = 0;
let target = 0;
let start = true;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

function notDisplayButtons() {
  btn1.classList.add("hidden");
  btn2.classList.add("hidden");
}

function displayButtons() {
  btn1.classList.remove("hidden");
  btn2.classList.remove("hidden");
}

document.querySelector(".newBtn").addEventListener("click", function () {
  displayButtons();
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 0;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".target").textContent = 0;
  document.querySelector(".status").textContent = "Let's Play cricket";
  document.querySelector(".guess").classList.remove("hidden");
  document.location.reload();
});

function bat() {
  document.querySelector(".status").textContent = "You chose to Bat";
  notDisplayButtons();
  prepareBat.classList.remove("hidden");
}

function Batfirst() {
  prepareBat.classList.add("hidden");
  target = Number(document.querySelector(".target").textContent);
  overs = 1;
  balls = overs * 6;
  score = 0;
  document.querySelector(".score").textContent = 0;
  batting.classList.remove("hidden");
  userValue.classList.remove("hidden");
  document.querySelector(".status").textContent = "You are batting";
  document.querySelector(".balls").textContent = balls;
}

function strikefirst() {
  document.querySelector(".status").textContent = "Strike!!!!";
  let computerScore = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".number").textContent = computerScore;
  let guess = Number(userValue.value);
  if (guess === computerScore) {
    --balls;
    document.querySelector(".balls").textContent = balls;
    document.querySelector("body").style.backgroundColor = "#c94646";
    displayMessage("out...!!!!!");
    target = score + 1;
    document.querySelector(".target").textContent = target;
    userValue.classList.add("hidden");
    batting.classList.add("hidden");
    prepareBowl.classList.remove("hidden");
  } else if (guess !== computerScore && balls >= 1) {
    score = score + guess;
    balls--;
    displayMessage("Next strike!!!!");
    document.querySelector(".score").textContent = score;
    document.querySelector(".balls").textContent = balls;
  }
  if (balls === 0) {
    document.querySelector(".balls").textContent = balls;
    document.querySelector("body").style.backgroundColor = "#6b7d8a";
    displayMessage("Innings over");
    target = score + 1;
    document.querySelector(".target").textContent = target;
    userValue.classList.add("hidden");
    batting.classList.add("hidden");
    prepareBowl.classList.remove("hidden");
  }
}

function Bowlnext() {
  document.querySelector("body").style.backgroundColor = "#1d8daf";
  prepareBowl.classList.add("hidden");
  userValue.classList.remove("hidden");
  bowling.classList.remove("hidden");
  target = Number(document.querySelector(".target").textContent);
  overs = 1;
  balls = overs * 6;
  score = 0;
  document.querySelector(".score").textContent = 0;
  document.querySelector(".balls").textContent = balls; //|| balls < 1
  document.querySelector(".number").textContent = "?";
  document.querySelector(".status").textContent = "You are bowling";
}

function deliverynext() {
  document.querySelector(".status").textContent = "You are bowling";
  let computerScore = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".number").textContent = computerScore;
  let guess = Number(userValue.value);
  if (guess === computerScore) {
    --balls;
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayMessage(`You won by  wicket`);
    bowling.classList.add("hidden");
    userValue.classList.add("hidden");
    document.querySelector(".label-score").classList.add("hidden");
    document.querySelector(".label-highscore").classList.add("hidden");
    document.querySelector(".label-count").classList.add("hidden");
    document.querySelector(".balls").textContent = balls;
  } else if (guess !== computerScore && balls >= 1 && target >= 0) {
    target = target - computerScore;
    score = score + computerScore;
    balls--;
    displayMessage("Next ball!!!");
    document.querySelector(".target").textContent = target;
    document.querySelector(".balls").textContent = balls;
  }
  if (target <= 0) {
    document.querySelector("body").style.backgroundColor = "#c94646";
    displayMessage("You lose");
    bowling.classList.add("hidden");
    userValue.classList.add("hidden");
    document.querySelector(".label-score").classList.add("hidden");
    document.querySelector(".label-highscore").classList.add("hidden");
    document.querySelector(".label-count").classList.add("hidden");
    document.querySelector(".balls").textContent = balls;
  }
  if (balls === 0) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayMessage(`You won by ${target} runs`);
    bowling.classList.add("hidden");
    userValue.classList.add("hidden");
    document.querySelector(".label-score").classList.add("hidden");
    document.querySelector(".label-highscore").classList.add("hidden");
    document.querySelector(".label-count").classList.add("hidden");
    document.querySelector(".balls").textContent = balls;
  }
}

function bowl() {
  document.querySelector(".status").textContent = "You chose to Bowl";
  notDisplayButtons();
  secondBowl.classList.remove("hidden");
}

function Bowlfirst() {
  secondBowl.classList.add("hidden");
  target = Number(document.querySelector(".target").textContent);
  overs = 1;
  balls = overs * 6;
  score = 0;
  document.querySelector(".score").textContent = 0;
  bowling2.classList.remove("hidden");
  userValue.classList.remove("hidden");
  document.querySelector(".status").textContent = "You are bowling";
  document.querySelector(".balls").textContent = balls;
}

function deliveryfirst() {
  document.querySelector(".status").textContent = "Bowl!!!!";
  let computerScore = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".number").textContent = computerScore;
  let guess = Number(userValue.value);
  if (guess === computerScore) {
    --balls;
    document.querySelector(".balls").textContent = balls;
    document.querySelector("body").style.backgroundColor = "#c94646";
    displayMessage("out...!!!!!");
    target = score + 1;
    document.querySelector(".target").textContent = target;
    userValue.classList.add("hidden");
    bowling2.classList.add("hidden");
    secondBat.classList.remove("hidden");
  } else if (guess !== computerScore && balls >= 1) {
    score = score + computerScore;
    balls--;
    displayMessage("Next ball!!!!");
    document.querySelector(".score").textContent = score;
    document.querySelector(".balls").textContent = balls;
  }
  if (balls === 0) {
    document.querySelector(".balls").textContent = balls;
    document.querySelector("body").style.backgroundColor = "#6b7d8a";
    displayMessage("Innings over");
    target = score + 1;
    document.querySelector(".target").textContent = target;
    userValue.classList.add("hidden");
    bowling2.classList.add("hidden");
    secondBat.classList.remove("hidden");
  }
}

function Batnext() {
  secondBat.classList.add("hidden");
  target = Number(document.querySelector(".target").textContent);
  overs = 1;
  balls = overs * 6;
  score = 0;
  document.querySelector(".score").textContent = 0;
  batting2.classList.remove("hidden");
  userValue.classList.remove("hidden");
  document.querySelector(".status").textContent = "You are batting";
  document.querySelector(".balls").textContent = balls;
}

function strikenext() {
  document.querySelector(".status").textContent = "You are batting";
  let computerScore = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".number").textContent = computerScore;
  let guess = Number(userValue.value);
  if (guess === computerScore) {
    --balls;
    document.querySelector("body").style.backgroundColor = "#c94646";
    displayMessage(`You lose by  wicket`);
    batting2.classList.add("hidden");
    userValue.classList.add("hidden");
    document.querySelector(".label-score").classList.add("hidden");
    document.querySelector(".label-highscore").classList.add("hidden");
    document.querySelector(".label-count").classList.add("hidden");
    document.querySelector(".balls").textContent = balls;
  } else if (guess !== computerScore && balls >= 1 && target >= 0) {
    score = score + guess;
    target = target - score;
    balls--;
    displayMessage("strike!!!");
    document.querySelector(".target").textContent = target;
    document.querySelector(".balls").textContent = balls;
    document.querySelector(".score").textContent = score;
  }
  if (target <= 0) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    displayMessage("You won");
    batting2.classList.add("hidden");
    userValue.classList.add("hidden");
    document.querySelector(".label-score").classList.add("hidden");
    document.querySelector(".label-highscore").classList.add("hidden");
    document.querySelector(".label-count").classList.add("hidden");
    document.querySelector(".balls").textContent = balls;
  }
  if (balls === 0) {
    document.querySelector("body").style.backgroundColor = "#c94646";
    displayMessage(`You lose by ${target} runs`);
    batting2.classList.add("hidden");
    userValue.classList.add("hidden");
    document.querySelector(".label-score").classList.add("hidden");
    document.querySelector(".label-highscore").classList.add("hidden");
    document.querySelector(".label-count").classList.add("hidden");
    document.querySelector(".balls").textContent = balls;
  }
}
