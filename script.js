"use strict";
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const newGame = document.querySelector(".btn");
const batting = document.querySelector(".playBat");
const userValue = document.querySelector(".guess");
const bowling = document.querySelector(".playBowl");
const prepare = document.querySelector(".prepare");

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
  notDisplayButtons();
  batting.classList.remove("hidden");
  userValue.classList.remove("hidden");
}

let overs = 1;
let balls = overs * 6;
let score = 0;
let target = 0;
var chase;

function strike() {
  document.querySelector(".status").textContent = "You are batting";
  let computerScore = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".number").textContent = computerScore;
  let guess = Number(userValue.value);
  if (guess === computerScore) {
    displayMessage("out...!!!!!");
    target = score + 1;
    document.querySelector(".target").textContent = target;
    userValue.classList.add("hidden");
    batting.classList.add("hidden");
    prepare.classList.remove("hidden");
    //bowling.classList.remove("hidden");
    // document.querySelector(".score").textContent = 0;
    // document.querySelector(".target").classList.add("hidden");
    // document.querySelector(".label-highscore").classList.add("hidden");
    // document.querySelector(".label-highscore2").classList.remove("hidden");
    // document.querySelector(".target2").textContent =
    //   document.querySelector(".target").textContent;
  } else if (guess !== computerScore && balls >= 1) {
    score = score + guess;
    balls--;
    displayMessage("play");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = computerScore;
    //document.querySelector(".guess").value = "";
    //document.querySelector(".number").textContent = "?";
  } else {
    displayMessage("Innings over");
    target = score + 1;
    //document.querySelector(".number").textContent = "?";
    document.querySelector(".target").textContent = target;
    userValue.classList.add("hidden");
    batting.classList.add("hidden");
    prepare.classList.remove("hidden");
    //bowling.classList.remove("hidden");
    //document.querySelector(".score").textContent = 0;
    //document.querySelector(".target").classList.add("hidden");
    //document.querySelector(".label-highscore").classList.add("hidden");
    //document.querySelector(".label-highscore2").classList.remove("hidden");
    //document.querySelector(".target2").textContent =
    //document.querySelector(".target").textContent;
  }
}

function delivery() {
  document.querySelector(".status").textContent = "You are bowling";
  let computerScore = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".number").textContent = computerScore;
  let guess = Number(userValue.value);
  if (guess === computerScore || balls < 1) {
    displayMessage("You won");
    bowling.classList.add("hidden");
  } else if (guess !== computerScore && balls >= 1 && target >= 0) {
    target = target - computerScore;
    score = score + computerScore;
    balls--;
    displayMessage("play");
    document.querySelector(".target").textContent = target;
  }
  if (target <= 0) {
    displayMessage("You lose");
    bowling.classList.add("hidden");
  }

  // else if (target <= 1) {
  //   displayMessage("You lose");
  //   bowling.classList.add("hidden");
  // }
  //  else if (balls < 1) {
  //   displayMessage("Innings over");
  //   bowling.classList.add("hidden");
  // }
}

function initiate() {
  prepare.classList.add("hidden");
  userValue.classList.remove("hidden");
  bowling.classList.remove("hidden");
  target = Number(document.querySelector(".target").textContent);
  overs = 1;
  balls = overs * 6;
  score = 0;
  document.querySelector(".score").textContent = 0;
}
