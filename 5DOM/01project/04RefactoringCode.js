//REFACTORING OUR CODE: THE DRY PRINCIPLE:

let secertNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayHighscore = function (highScore) {
  document.querySelector('.highscore').textContent = highScore;
};

const displayBodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number ');
  } else if (guess === secertNumber) {
    //<--//When player wins
    displayMessage('🎉 Correct Number');

    displayNumber(secertNumber);

    displayBodyColor('#60b347');

    displayNumberWidth('30rem');

    if (score > highScore) {
      //<--//High Score:
      highScore = score;
      displayHighscore(highScore);
    }
  } else if (guess !== secertNumber) {
    if (score > 1) {
      displayMessage(guess > secertNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('✴️ You lost the game!');

      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayBodyColor('#222');

  score = 20;

  secertNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);

  displayNumber('?');

  displayMessage('Start guessing...');

  displayGuess('');

  displayNumberWidth('15rem');

  displayHighscore(highScore);
});
