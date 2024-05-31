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

// NOTE: let scores, currentScore, activePlayer, isPlaying .
let scores = [0, 0]; // to store the player's score
let currentScore = 0;
let activePlayer = 0; // index to decide which player is actived player
let isPlaying = true;

const init = function () {
  // Init elector
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  scores = [0, 0]; // to store the player's score
  currentScore = 0;
  activePlayer = 0; // index to decide which player is actived player

  // i. remove winner
  isPlaying = true;
  scores = [0, 0];

  switchPlayer();
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  // switchPlayer();

  // ii. reset all the score
  score0El.textContent = 0;
  score1El.textContent = 0;
  cuurent0El.textContent = 0;
  cuurent1El.textContent = 0;

  // iii. hide dice
  diceEl.classList.add('hidden');
};

// Switch the player
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

init();

// Roll the dice
// 1) rolling dice function
btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    //a. genegrat a ramdon dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);

    //b. display dice
    diceEl.classList.remove('hidden');
    //NOTE: get source .
    diceEl.src = `dice-${dice}.png`;

    //c. check for rolled. 1 if try, switch to new player
    if (dice !== 1) {
      //add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // cuurent0El.textContent = currentScore; //TODO: change later
    } else {
      switchPlayer();
    }
  }
});

// Hold button
btnHold.addEventListener('click', function () {
  if (isPlaying) {
    console.log(`print the currentScore is `, currentScore);
    newGameOrNot ? (currentScore = 0) : (currentScore = currentScore);
    //a. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + cuurentScore;

    console.log(`${scores[activePlayer]}`);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //b. check if player's score is >=100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      // i. Invalid those btn
      isPlaying = false;

      // ii. let winner background different
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // iii. hide the dice
      diceEl.classList.add('hidden');
    }

    // Switch to the next player
    switchPlayer();
  }
});

// Reset the game
btnNew.addEventListener('click', init); //NOTE: not call function here .
