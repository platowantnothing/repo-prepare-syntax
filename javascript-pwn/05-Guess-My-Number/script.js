'use strict';
//**Project1_Guess_My_Number */
//**1 DOM Intro */
/*
//<p class="message">
console.log(document.querySelector('.message').textContent);
*/

//**2 DOM manipulation */
//DOM: document object model , let js manipulate html elements, which is connection with html and js
//Web API << DOM methods and properties, can interact with JavaScript, like DOM, there are also FETCH & TIMER
/*
document.querySelector('.message').textContent='Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//**3 handle click events */
// event handler

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess, guess);

  if (!guess) {
    displayMsg('No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMsg('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when gues is not equal to screatNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMsg(guess > secretNumber ? 'To High!' : 'To Low!');
    } else {
      displayMsg('You lose this game!');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   // when guess is too high
    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.message').textContent = 'To High!';
    //   } else {
    //     document.querySelector('.message').textContent = 'You lose this game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    //   // console.log(document.querySelector('.score').textContent);

    //   //when guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     document.querySelector('.message').textContent = 'To Low!';
    //   } else {
    //     document.querySelector('.message').textContent = 'You lose this game!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
  console.log('score:{}', score);
});

// //**4 Manipulate CSS  */
// document.querySelector('body').style.backgroundColor = '#60b347';
// document.querySelector('.number').style.width = '30rem';

//**5 reset 'Again'  */

document.querySelector('.again').addEventListener('click', function () {
  // restore initial values of the score and secretNumber variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;

  // restore the intial conditions of the msg, number and guess input field
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  // restore the original background color and number width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//**5 High score */

//**R6 efactor: reduce the repeat code */
//1) logically remove same code
//2) refine as method
