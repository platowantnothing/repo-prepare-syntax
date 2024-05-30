'use strict';

// Start elector
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const cuurent0El = document.getElementById('current--0');
const cuurent1El = document.getElementById('current--1');

const scores = [0, 0]; // to store the player's score
let currentScore = 0;
let activePlayer = 0; // index to decide which player is actived player

// Init elector
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Roll the dice
// 1) rolling dice function
btnRoll.addEventListener('click', function () {
  //a. genegrat a ramdon dice roll
  const dice = Math.trunc(Math.random() * 6 + 1);

  //b. display dice
  diceEl.classList.remove('hidden');
  //NOTE: get source
  diceEl.src = `dice-${dice}.png`;

  //c. check for rolled. 1 if try, switch to new player
  if (dice !== 1) {
    //add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;

    // cuurent0El.textContent = currentScore; //TODO: change later
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
