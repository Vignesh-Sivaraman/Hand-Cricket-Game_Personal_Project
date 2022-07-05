"use strict";

var favicon_images = [
    "Favicon/favicon1.ico",
    "Favicon/favicon2.ico",
    "Favicon/favicon3.ico",
    "Favicon/favicon4.ico",
    "Favicon/favicon5.ico",
    "Favicon/favicon6.ico",
    "Favicon/favicon7.ico",
    "Favicon/favicon8.ico",
    "Favicon/favicon9.ico",
  ],
  image_counter = 0; // To keep track of the current image

setInterval(function () {
  // remove current favicon
  if (document.querySelector("link[rel='icon']") !== null)
    document.querySelector("link[rel='icon']").remove();
  if (document.querySelector("link[rel='shortcut icon']") !== null)
    document.querySelector("link[rel='shortcut icon']").remove();

  // add new favicon image
  document
    .querySelector("head")
    .insertAdjacentHTML(
      "beforeend",
      '<link rel="icon" href="' +
        favicon_images[image_counter] +
        '" type="image/gif">'
    );

  // If last image then goto first image
  // Else go to next image
  if (image_counter == favicon_images.length - 1) image_counter = 0;
  else image_counter++;
}, 500);

const toss = document.querySelector(".btn3");
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
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");

let overs = 1;
let balls = overs * 6;
let score = 0;
let target = 0;
let start = true;
let tossStatus = [];

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
  document.location.reload();
});

function tossSelector() {
  // document.querySelector(".newBtn").classList.add("hidden");
  toss.classList.add("hidden");
  document.querySelector(".status").textContent = "Choose Heads or Tails";
  document.querySelector(".btn4").classList.remove("hidden");
  document.querySelector(".btn5").classList.remove("hidden");
  // document.querySelector(".forToss").classList.remove("hidden");
}

function heads() {
  document.querySelector(".btn4").classList.add("hidden");
  document.querySelector(".btn5").classList.add("hidden");
  document.querySelector(".status").textContent = "You chose Heads, Flip coin";
  document.querySelector(".forToss").classList.remove("hidden");
}

function tails() {
  document.querySelector(".btn4").classList.add("hidden");
  document.querySelector(".btn5").classList.add("hidden");
  document.querySelector(".status").textContent = "You chose Tails, Flip coin";
  document.querySelector(".forToss").classList.remove("hidden");
}
flipBtn.addEventListener("click", () => {
  console.log(tossStatus);
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  let userToss = document.querySelector(".status").textContent;
  if (userToss === "You chose Heads, Flip coin" && i === 1) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    tossStatus.push("You won the toss");
  } else if (userToss === "You chose Tails, Flip coin" && i === 0) {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tossStatus.push("You won the toss");
  } else if (userToss === "You chose Heads, Flip coin" && i === 0) {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tossStatus.push("You lost the toss");
  } else if (userToss === "You chose Tails, Flip coin" && i === 1) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    tossStatus.push("You lost the toss");
  }
  setTimeout(updateStats, 3000);
  console.log(tossStatus);
  // disableButton();
});

function updateStats() {
  document.querySelector(".status").textContent = tossStatus[0];
  if (tossStatus[0] === "You won the toss") {
    document.querySelector(".forToss").classList.add("hidden");
    displayButtons();
    document.querySelector(".status").textContent =
      "You won the toss, Choose Bat or Bowl";
  } else {
    let j = Math.floor(Math.random() * 2);
    if (j) {
      document.querySelector(".status").textContent =
        "You lost the toss, I choose to Bat";
      secondBowl.classList.remove("hidden");
      document.querySelector(".guess").value = "";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = "?";
      document.querySelector(".target").textContent = 0;
      document.querySelector(".left").classList.remove("hidden");
      userValue.classList.add("hidden");
      document.querySelector(".label-score").classList.remove("hidden");
      document.querySelector(".label-highscore").classList.remove("hidden");
      document.querySelector(".label-count").classList.remove("hidden");
      document.querySelector(".message").classList.remove("hidden");
      document.querySelector(".forToss").classList.add("hidden");
    } else {
      document.querySelector(".status").textContent =
        "You lost the toss, I choose to Bowl";
      prepareBat.classList.remove("hidden");
      document.querySelector(".guess").value = "";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = "?";
      document.querySelector(".target").textContent = 0;
      document.querySelector(".label-score").classList.remove("hidden");
      document.querySelector(".label-highscore").classList.remove("hidden");
      document.querySelector(".label-count").classList.remove("hidden");
      document.querySelector(".message").classList.remove("hidden");
      document.querySelector(".forToss").classList.add("hidden");
    }
  }
}

console.log(tossStatus);

// document.querySelector(".newBtn").addEventListener("click", function () {
//   displayButtons();
//   document.querySelector(".guess").value = "";
//   document.querySelector(".score").textContent = 0;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector(".target").textContent = 0;
//   document.querySelector(".status").textContent = "Let's Play cricket";
//   document.querySelector(".guess").classList.remove("hidden");
//   document.location.reload();
// });

function bat() {
  document.querySelector(".status").textContent = "You chose to Bat";
  notDisplayButtons();
  prepareBat.classList.remove("hidden");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 0;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".target").textContent = 0;
  document.querySelector(".label-score").classList.remove("hidden");
  document.querySelector(".label-highscore").classList.remove("hidden");
  document.querySelector(".label-count").classList.remove("hidden");
  document.querySelector(".message").classList.remove("hidden");
  document.querySelector(".number").classList.remove("hidden");
  document.querySelector("body").style.backgroundColor = "#1a1a1d";
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
  document.querySelector(".number").classList.remove("hidden");
  document.querySelector("body").style.backgroundColor = "#1a1a1d";
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
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#1a1a1d";
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
    document.querySelector(".score").textContent = score;
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
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 0;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".target").textContent = 0;
  document.querySelector(".left").classList.remove("hidden");
  userValue.classList.add("hidden");
  document.querySelector(".label-score").classList.remove("hidden");
  document.querySelector(".label-highscore").classList.remove("hidden");
  document.querySelector(".label-count").classList.remove("hidden");
  document.querySelector(".message").classList.remove("hidden");
  document.querySelector(".number").classList.remove("hidden");
  document.querySelector("body").style.backgroundColor = "#1a1a1d";
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
  document.querySelector(".number").classList.remove("hidden");
  document.querySelector("body").style.backgroundColor = "#1a1a1d";
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
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#1a1a1d";
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
