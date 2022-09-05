'use strict';

//this querySelector is basically a method that's available on the document object.

/*console.log(document.querySelector('.message'));
console.log(document.querySelector('.message').textContent); //<-- first select the element, And so the result of this querySelector method is gona be an Element. And then on that Element, We can read the textContent property. And so that's why we use another dot (.) here.

////////////////////////////////////////////////

//DOM
//DOCUMENT OBJECT MODEL:
//structured representation of HTML DOCUMENT. allows JAVASCRIPT to access HTML ELEMENT and STYLES to MANIPULATE them.

//this is the tree structure

////////////////////////////////////////////////

document.querySelector('.message').textContent = 'Correct Number';
console.log(
  (document.querySelector('.message').textContent = '🎉 Correct Number')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;
console.log(document.querySelector('.guess').value); //<-- Empty value.
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

////////////////////////////////////////////////

//HANDLING CLICK EVENT:
// we need to event listener. Now, an event is somthing that happens on the page.

// const x=function () {
//     console.log(document.querySelector('.guess').value);     //<-- same way.
// }

////////////////////////////////////////////////

let secertNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess); //<-- Whenever we get somthing from user interface, for example, from an input field, it usually always is a string. so we used Number() function.

  //   document.querySelector('.message').textContent = '🎉 Correct Number';

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number ';

    //When player wins
  } else if (guess === secertNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('.number').textContent = secertNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //High Score:
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //When guess is too high
  } else if (guess > secertNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';

      // score=score-1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '✴️ You lost the game!';

      document.querySelector('.score').textContent = 0;
    }

    //When guess is too low
  } else if (guess < secertNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';

      // score=score-1;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '✴️ You lost the game!';

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';

  score = 20;

  secertNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.guess').value = '';

  // document.querySelector('.score').textContent = '20';

  document.querySelector('.number').style.width = '15rem';

  // let highScore = 0;
  // if (highScore < score) {
  //   highScore = score;
  //   document.querySelector('.highscore').textContent = highScore;
  //   // score = 20;
  // }

  document.querySelector('.highscore').textContent = highScore;
});
