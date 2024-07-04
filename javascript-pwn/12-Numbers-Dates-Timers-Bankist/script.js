'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2024-07-01T21:31:17.178Z',
    '2024-05-23T07:42:02.383Z',
    '2024-04-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-03-08T14:11:59.604Z',
    '2024-02-27T17:01:17.194Z',
    '2024-02-11T23:36:17.929Z',
    '2024-01-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
// FORMATE MOVEMENT DATE
const formatMovementDate = function (movementDate, locale) {
  const calcDaysPassed = (d1, d2) =>
    Math.round(Math.abs(d1 - d2) / (24 * 60 * 60 * 1000));

  const daysPassed = calcDaysPassed(new Date(), new Date(movementDate));
  // console.log('dayPassed: ', daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // const year = movementDate.getFullYear();
  // const month = `${movementDate.getMonth() + 1}`.padStart(2, 0);
  // const day = `${movementDate.getDate()}`.padStart(2, 0);
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(movementDate);
};

// FORMATE MOVEMENT NUMBER
const formatMovementNumber = function (movement, locale, currency) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(movement);
};

// IMPLEMENT COUNTDOWN TIMER
const setCountDownTimer = function () {
  const tick = function () {
    const mins = String(Math.trunc(time / 60)).padStart(2, 0);
    const seconds = String(time % 60).padStart(2, 0);

    // in each call, print the remaining time to UI
    labelTimer.textContent = `${mins}:${seconds}`;

    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      // Display UI and message
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // decrese 1s
    time--;
  };

  // set time to 5 minutes
  let time = 20;

  tick(); // invocate before setInterval, for UI

  // call the timer every seconds
  const timer = setInterval(tick, 1000);
  return timer; // for clearTimer
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const movementDate = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(movementDate, acc.locale);
    // console.log(displayDate);

    //Format movements
    const displayMov = formatMovementNumber(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${displayMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  labelBalance.textContent = formatMovementNumber(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  labelSumIn.textContent = formatMovementNumber(
    incomes,
    acc.locale,
    acc.currency
  );

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;
  labelSumOut.textContent = formatMovementNumber(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  // labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  labelSumInterest.textContent = formatMovementNumber(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Set a Logout Timer
  if (timer) clearInterval(timer); // If there is a timer, then clear
  timer = setCountDownTimer(); // SET Timer

  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//// FAKE ALWAYS LOGGERD IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
//// FAKE Timer
// setCountDownTimer();

// Experimenting API
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // numeric
  year: 'numeric',
  weekday: 'long',
};

const locale = navigator.language;
// console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Current Balance Log Date
    // day/month/year
    // const currentDate = new Date();
    // const year = currentDate.getFullYear();
    // const month = `${currentDate.getMonth() + 1}`.padStart(2, 0);
    // const day = `${currentDate.getDate()}`.padStart(2, 0);
    // const hour = `${currentDate.getHours()}`.padStart(2, 0);
    // const minutes = `${currentDate.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year} ${hour}:${minutes}`;
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(+inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      // Add date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2000);

    // const loan = function () {
    //   // Add movement
    //   currentAccount.movements.push(amount);
    //   // Add date
    //   currentAccount.movementsDates.push(new Date().toISOString());
    // };
    // // By using setTime to mock bank approves loan
    // setTimeout(loan, 2000);
    // // Update UI
    // updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//**1 */
// //NOTE: 1. In Js, for number, only has 1 kind data type, float
// console.log(23 === 23.0);

// // binary
// console.log(0.1 + 0.2 === 0.3); //flase

// // Conversion
// console.log(Number('23'));
// console.log(+'23');

// // Parsing
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e30m', 10));

// console.log(Number.parseInt(' 2.3rem '));
// console.log(Number.parseFloat(' 2.3rem '));

// // Above functions are global function, so can be used as:
// console.log(parseInt(' 11.3rem ')); //NOT Recommand

// // check if value is NAN
// // isNaN():The Number.isNaN() static method determines whether the passed value is the number value NaN, and returns false if the input is not of the Number type.
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20'));
// console.log(Number.isNaN(+'20x'));
// console.log(Number.isNaN(23 / 0));
// // console.log(23 / 0);

// // check if value is number
// console.log(Number.isFinite(23));
// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(+'23x'));
// console.log(Number.isFinite(14 / 0));

// console.log(Number.isInteger(23)); //true
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

//**2 Math and Rounding*/
/**
Math.sqrt()

Math.max() : do type coercion, do not parsing
Math.min()

Math with constant:
  Math.PI
  Math.random() < return [0,1)

//Rounding:
Math.truc()

Math.round()

Math.ceil()
Math.floor() // work for negative situation

// Rounding deciamals, return a string
(2.7). to Fix(0)

 */
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));

// console.log(Math.max(1, 34, 67, 33, 53, 2));
// console.log(Math.max(1, 34, '67', 33, 53, 2));
// console.log(Math.max(1, 34, '67x', 33, 53, 2)); //NaN

// console.log(Math.min(1, 34, 67, 33, 53, 2));

// console.log(Math.PI * Number.parseFloat('20px') * 2);

// console.log(Math.trunc(Math.random() * 10 + 1));

// //Rounding:
// console.log(Math.trunc(23.3)); //23
// console.log(Math.trunc(23.9)); //23
// console.log(Math.trunc(-23.9)); //-23 **

// console.log(Math.round(23.3)); //23
// console.log(Math.round(23.9)); //24

// // round down
// console.log(Math.floor(23.5)); //23
// console.log(Math.floor(23.9)); //23
// console.log(Math.floor(-23.9)); //-24 **

// // round up
// console.log(Math.ceil(23.3)); //24
// console.log(Math.ceil(23.9)); //24
// console.log(Math.ceil(-23.2)); // -23

// // trim input number and return as string
// console.log((23.1238).toFixed(2));

//**3 reminder operator */
// console.log(10 % 3);

// //Sample1: identify even or odd number
// const isEvenNumber = num => num % 2 === 0;
// console.log(isEvenNumber(10));
// console.log(isEvenNumber(11));
// console.log(isEvenNumber(17));

// //Sample2: execute N times jobs, by using reminder operator
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, index) => {
//     //0,2,4...
//     if (index % 2 === 0) {
//       row.style.backgroundColor = '#60b347';
//     }
//     //0,3,6,9...
//     if (index % 3 === 0) {
//       row.style.backgroundColor = 'blue';
//     }
//   });
// });

//**4 Numeric sperator */
// console.log(1_000_123);
// console.log(31_536_000_000);

// console.log(Number.parseInt(23_000));

//**5 bigInt */
// console.log(Number.MAX_SAFE_INTEGER);
// // bigInt 出现于2020，解决大额数字计算的精度问题
// console.log(9007199254740991 + 11);
// // create bigInt number
// console.log(9007199254740991n);
// console.log(BigInt(9007199254740991));

// //Operation
// console.log(1000n + 1000n);
// console.log();

// // MATH operation not work
// // console.log(Math.sqrt(16n));

// // cannot mix bigInt with regular number
// const huge = 239819473978492389487n;
// const num = 23;
// console.log(huge * BigInt(num));

// console.log(23n > 12); //true
// console.log(20n === 20); //false
// console.log(typeof 20n);
// console.log(20n == 20); //true

// console.log(huge + ' is REALLY BIG');

// // Divisions
// console.log(10n / 3n); // return the closet bigInt //3n
// console.log(10 / 3);

//**6 Dates and time */
/*
// 1 create date
const now = new Date();
console.log(now);

// Sample: using string to create date, but normally it is not safe
console.log(new Date('Tue Jul 02 2024  11:12:54'));
console.log(new Date('December 25,2024'));
// Best practice: how to generate date
console.log(new Date(account1.movementsDates[0]));

console.log('-');
// using constructor to create date
// month start from 0
console.log(new Date(2024, 1, 29, 12, 22, 30));
console.log(new Date(2024, 10, 31));

// using unix time
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); 
*/

//// 2 Woring with dates
// const future = new Date(2033, 11, 14, 14, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate()); // the day
// console.log(future.getDay()); // the week?
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); // ISO stardard, string to store somewhere
// console.log(future.getTime()); //2018154180000
// console.log(new Date(2018154180000));

//// current date
// console.log(Date.now());
// console.log(new Date(1719931152744));

//// setXX() for date
// future.setFullYear(2059);
// console.log(future);

//**6 Operation with dates  */
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// // NOTE: When the date is operation and it will automatically convert to timestamp to calc
// // const calcDatePassed = (d1, d2) => Math.abs(d1 - d2) / (24 * 60 * 60 * 1000);
// const calcDatePassed = (d1, d2) => {
//   return Math.abs(d1.getTime() - d2.getTime()) / (24 * 60 * 60 * 1000);
// };
// console.log(
//   calcDatePassed(new Date(2037, 10, 19, 15, 23), new Date(2037, 10, 9, 15, 23))
// );

//**7 Internalizaing dates (INTL) */

//**8 Internalizaing numbers (INTL) */
// const num = 3884764.23;

// const numOptions = {
//   style: 'currency', // unit, currency
//   unit: 'celsius', //mile-per-hour
//   currency: 'EUR',
//   // useGrouping: false,
// };

// console.log('US: ', new Intl.NumberFormat('en-US', numOptions).format(num));
// console.log(
//   'Germany: ',
//   new Intl.NumberFormat('de-DE', numOptions).format(num)
// );
// console.log('Syria: ', new Intl.NumberFormat('ar-SY', numOptions).format(num));
// console.log('Browser: ', new Intl.NumberFormat(navigator.language).format(num));

//**9 Timers: set timeout and set interval */

// //setTimeout()
// //Sample1: simulate to order pizza
// setTimeout(() => console.log('Here is your pizza🍕'), 3000); //millionsecond
// console.log('Waiting.....');

// const ingredients = ['olives', 'spinach'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your Pizza with ${ing1} and ${ing2} 🍕`),
//   3000,
//   ...ingredients
// );

// //Clear the timeout
// if (ingredients.includes('olives')) clearTimeout(pizzaTimer);

// //setInterval()
// setInterval(function () {
//   console.log(new Date());
// }, 3000);

//**10 Implement countdown timer*/

// set time to 5 minutes
// call the timer every second
// in each call, print the remaining time to UI
// decrese 1s
// when 0 seconds, stop timer and log out user
