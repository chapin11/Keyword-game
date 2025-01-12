const startBtn = document.querySelector(".start-btn");
const menuWindow = document.querySelector(".menu");
const wordBox = document.querySelector(".word-box");
const timeBox = document.querySelector(".time");
const scoreBox = document.querySelector(".score-box");
const errorBox = document.querySelector(".errors-box");

let play = false;
let startTyping = new Date();
let endTyping = new Date();
startBtn.addEventListener("click", () => {
  console.log("Game started");
  menuWindow.style.display = "none";
  setTimeout(() => {
    wordBox.innerHTML = 1;
  }, 1000);
  setTimeout(() => {
    wordBox.innerHTML = "2";
  }, 2000);
  setTimeout(() => {
    wordBox.innerHTML = "3";
  }, 3000);
  setTimeout(() => {
    displayWord();
    play = true;
  }, 4000);
});

let arrayword = [
  "javascript",
  "good",
  "application",
  "hello",
  "programmist",
  "newyear",
  "chef",
  "alps",
  "dare",
  "servo",
  "sob",
  "grass",
  "hater",
  "cloth",
  "roads",
  "herd",
];

let selectedWord = "";
let score = 0;
let allScore = 0;
let errors = 0;

function displayWord() {
  selectedWord = arrayword[Math.floor(Math.random() * arrayword.length)];
  wordBox.innerText = selectedWord;
  startTyping = new Date();
}

// console.log((date2.getTime() - date.getTime()) / 1000);
let numEnterLetter = 0;
document.addEventListener("keydown", (event) => {
  if (play) {
    const letter = event.key.toLowerCase();
    // if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (selectedWord[numEnterLetter] == letter) {
      wordInBox = selectedWord
        .split("")
        .slice(numEnterLetter + 1, selectedWord.length)
        .join("");

      wordBox.innerHTML = wordInBox;

      numEnterLetter++;
      if (numEnterLetter >= selectedWord.length) {
        numEnterLetter = 0;
        endTyping = new Date();
        time = ((endTyping.getTime() - startTyping.getTime()) / 1000).toFixed(
          2
        );

        // Счет очков (
        // За каждую букву +100 очков,
        // если слово введено меньше чем за 1 секунду *1.5,
        // если слово больше 6 букв и введено меньше чем за 1 секунду *2,
        // если слово введено больше чем за 4 секунды, то очки не прибавляются
        // если слово введено с более чем 3 ошибками, то очки не прибавляются
        // за каждую ошибку -50 очков)
        score = selectedWord.length * 100;
        if (selectedWord.length >= 6 && time < 2) {
          score *= 2;
        } else if (time < 1) {
          score *= 1.5;
        } else if (time > 4) {
          score *= 0;
        }

        if (errors >= 5) {
          score *= 0;
        } else if (errors < 5) {
          score -= 50 * errors;
        }

        allScore += score;
        errors = 0;
        scoreBox.innerHTML = `${allScore}: + ${score}`;
        errorBox.innerHTML = errors;
        timeBox.innerHTML = time;
        displayWord();
      }
    } else {
      // Считаем неправильно введеные буквы в одном слове
      errors++;
      errorBox.innerHTML = errors;
    }
    // }
  }
});

// Сделать чтобы при большом кол-ве ошибок игра заканчивалась поражением
// Сделать чтобы при большом кол-ве очков игра заканчивалась победой
// Сделать лвла(С разными массивами слов)
