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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'To High!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'To Low!';
  }
});
