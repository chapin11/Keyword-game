const startBtn = document.querySelector(".start-btn");
const menuWindow = document.querySelector(".menu");
const wordBox = document.querySelector(".word-box");
let play = false;

startBtn.addEventListener("click", () => {
  console.log("Game started");
  menuWindow.style.display = "none";
  play = true;
});

let arrayword = ["javascript"];

let score = 0;

function displayWord() {
  wordBox.innerText = arrayword[Math.floor(Math.random() * arrayword.length)];

  if (score >= 100) {
    return;
  }
}

displayWord();
