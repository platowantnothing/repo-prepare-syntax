'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

const displayMovements = function (movements, sortStatus = false) {
  // copy new arr to sort
  const movs = sortStatus ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                    <div class="movements__value">${mov}€</div>
                  </div>`;
    //add to the index.html
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const displayBalance = function (currentAccount) {
  currentAccount.balance = currentAccount.movements.reduce(
    (acc, mov) => acc + mov,
    0
  );
  labelBalance.textContent = `${currentAccount.balance}€`;
};

const displaySummary = function (currentAccount) {
  const summaryIn = currentAccount.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${summaryIn}€`;

  const summaryOut = currentAccount.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${summaryOut}`;

  const summaryInterest = currentAccount.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * currentAccount.interestRate) / 100)
    .filter((inte, i, arr) => {
      return inte > 1;
    })
    .reduce((acc, int, i, arr) => acc + int, 0);
  labelSumInterest.textContent = `${summaryInterest}`;
};

const updateUI = function (acc) {
  // Calculate movements
  displayMovements(acc.movements);

  // Calculate balance
  displayBalance(acc);

  // Calculate summary
  displaySummary(acc);
};

let currentAccount;
let transferReceiver;
let deleteAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent page reload
  e.preventDefault();

  // find accounter
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  // check username and pin
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // Disable the input
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  // get transfer value
  const transferAmount = Number(inputTransferAmount.value);
  // find the transfer account
  transferReceiver = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  // check transfer vaildation:
  //1)ammount 2)receiver exist 3)currentAccount balance ok 4)do not transfer yourself
  if (
    transferAmount > 0 &&
    transferAmount <= currentAccount.balance &&
    transferReceiver &&
    transferReceiver.username !== currentAccount.username
  ) {
    // DOING transfer
    currentAccount.movements.push(-transferAmount);
    transferReceiver.movements.push(transferAmount);
  }
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  // UPDATE UI
  updateUI(currentAccount);
});

//**11 FindIndex */
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // find the delete account
  // deleteAccount = accounts.find(
  //   acc => acc.username === inputCloseUsername.value
  // );

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    //delete
    // 1) find account index
    const userIndex = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(userIndex, 1);

    containerApp.style.opacity = 0;

    labelWelcome.textContent = 'Log Out';
  }
  inputCloseUsername.value = inputClosePin.vlaue = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);

  if (currentAccount.movements.some(deposite => deposite > loanAmount * 0.1)) {
    currentAccount.movements.push(loanAmount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

let sortedFlag = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortedFlag);
  sortedFlag = !sortedFlag;
});

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};

createUsernames(accounts);
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//**1 simple array method */
// //slice()  return a new array and not change the old array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// // creat shallow copy with array, like spread operator
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE : differnt with slice, splice change the old array
// // console.log(arr.splice(2)); // [c,d,e]
// arr.splice(-1); // [a,b,c,d]
// console.log(arr); //[a,b]
// // NOTE: slice(startIndex, endIndex), splice(startIndex, deleteNumber)

// // Reverse: that will change the old array
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // Join
// console.log(letters.join(' - '));

//**2  the new at method*/
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at[0]);

// //getting last array element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// // NOTE: usage: 1)get the last element 2) using method chaining
// // at also works for string
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

//**3 Loop arrary: FOREACH */
// const bankBill = [133, 245, -22, 30, -99];
// // for (const b of bankBill) {
// for (const [index, b] of bankBill.entries()) {
//   if (b > 0) {
//     console.log(`movement:${index + 1} deposite ${b} dollars`);
//   } else {
//     console.log(`movement:${index + 1} withdraw ${Math.abs(b)} dollars`);
//   }
// }

// //NOTE:  1) forEach is a higher-order function, with callback funtion
// console.log('----------FOREACH-------');
// // bankBill.forEach(function (b) {
// bankBill.forEach(function (b, ind, arr) {
//   //NOTE:2) forEach(param1: current element, param2: current index, param3: the whole array)
//   if (b > 0) {
//     console.log(`movement:${ind + 1} deposite ${b} dollars`);
//   } else {
//     console.log(`movement:${ind + 1} withdraw ${Math.abs(b)} dollars`);
//   }
// });
// behind the screen, how this work? the higher-order function + callback function
// 0: function(133)
// 1: function(245)
// ...

// NOTE: 3) break, contiune cannot work in forEach

//**4 FOREACH with Maps and Sets */
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // Map, Set is iterable
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesAbbr = new Set(['EUR', 'EUR', 'GBP', 'USD', 'YEN']);
// currenciesAbbr.forEach(function (value, _, set) {
//   console.log(`${_}:${value}`);
// }); // For Set + forEach(value, key, set) >>> key is same sa value, _ throwable vairbale

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
  So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// //NOTE: Shallow Copy

// const checkDogs = function (dogsJulia, dogsKate) {
//   //NOTE: arr.splice(startIndex, rmNumber)
//   const catsJulia = [];
//   let correctDogsJulia = [];
//   catsJulia.push(dogsJulia.splice(0, 1));
//   catsJulia.push(dogsJulia.splice(-2, 2));
//   correctDogsJulia = dogsJulia;

//   checkAgeAndOutput(correctDogsJulia.concat(dogsKate));
//   // checkAgeAndOutput(dogsKate);
// };

// const checkAgeAndOutput = arr =>
//   arr.forEach(function (ele, i) {
//     console.log(
//       `Dog number ${i + 1} is an ${
//         ele >= 3 ? 'adult' : 'puppy'
//       }, and is ${ele} years old`
//     );
//   });

// checkDogs(dogsJulia, dogsKate);

//**5 DATA TRANSFORMATION with MAP, FILTER AND REDUCE */
// 1. map: return a new array containing the results of applying an operation on all original array elements
// 2. filter: return a new array containing the array elements that passed a specified test condition
// 3. reduce: reduce boils("reduces") all array elements down to one single vale(e.g. adding all elements togther)

//**6 MAP */
// const eurToUsd = 1.1;

//Modern JS
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDFor = [];
// for (const mov of movements) movementsUSDFor.push(mov * eurToUsd);
// console.log(movementsUSDFor);

//NOTE: MAP with 3 parameters (element, index, array)
// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'depositied' : 'withdraw'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);
//NOTE: side effect for each loop and print some thing in console

//**7 Filter */
//Modern Js
// const deposit = movements.filter(function (mov, i , arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposit);

// const depositArr = [];
// for (const mv of movements) {
//   if (mv > 0) depositArr.push(mv);
// }
// console.log(depositArr);

// // const withdraw = movements.filter(function (mov) {
// //   return mov < 0;
// // });
// const withdraw = movements.filter(mov => mov < 0);
// console.log(withdraw);

//**8 REDUCE */

// accumulator -> sonwball NOTE: reduce(accumulator, currentValue, index, array)
// const getSum = movements.reduce(function (
//   accumulator,
//   currentValue,
//   index,
//   arr
// ) {
//   return accumulator + currentValue;
// },
// 0);
// const getSum = movements.reduce((acc, curVal) => acc + curVal, 0);
// console.log(getSum);

// let sum = 0;
// for (const mov of movements) {
//   sum += mov;
// }
// console.log(sum);

// //GET MAXIUM
// const getMax = movements.reduce((acc, curVal) => {
//   console.log(`acc : ${acc} --- curVal: ${curVal}`);
//   if (acc > curVal) return acc;
//   else return curVal;
// }, movements[0]);
// console.log(getMax);

// //HOW reduce() works without an initial value
// const array = [15, 16, 17, 18, 19];

// array.reduce(function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
//   );
//   return returns;
// });

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. 
This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
  If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// console.log(
//   [5, 2, 4, 1, 15, 8, 3].map(age => (age <= 2 ? age * 2 : 16 + age * 4))
// );

// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   const olderDogs = humanAge.filter(age => age > 18);
//   const average = ages.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
//   const sum = ages.reduce((acc, cur, i, arr) => acc + cur, 0);
//   const average1 = sum / humanAge.length;
//   // const avg = sum / ages.length;
//   console.log(average);
//   console.log(average1);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

///////////////////////////////////////
//**9 The Magic of Chaining Methods */
const eurToUsd = 1.1;
// console.log(movements);

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// NOTE: Example to debugg internal arr
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     mov * eurToUsd;
//   })
//   .reduce((acc, mov, i, arr) => {
//     acc + mov, 0;
//   });
// console.log(totalDepositsUSD);
//NOTE: 1)reduce over-used chain 2)better not connect chain method with splice or reverse which will change array

///////////////////////////////////////
// Coding Challenge #3
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
 but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const dogAgeToHumanAges = ages.map(age =>
//     age <= 2 ? age * 2 : 16 + age * 2
//   );
//   const olderDog = ages.filter(age => age > 18);
//   const avg = ages.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(avg);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//**10 FIND */
//find -> loop array
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);
//NOTE: find can be used as filter, but different with .filter()
// //1）filter return a new array, but find only return an element based on filter condition
//NOTE: filter() return an array which fillful the condition, but find() only return the first element which fulfill that condition

// const account = accounts.find(account => account.owner === 'Jessica Davis');
// console.log(account);

//**11 FindIndex */
// console.log([1, 2, 3, 4, 5].findIndex(e => e === 0)); // -1

// console.log([1, 2, 3, 4, 5].findIndex(e => e === 2)); // 1

//**12 SOME and EVERY */
// console.log(movements);
// console.log(movements.includes(-130)); // testing for equality

//// testing for condition
// console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 1500);
// console.log(anyDeposits);

// const anyDD = movements.filter(mov => mov > 100); // filter() => return a new Array

// //NOTE: EVERY : only return true when all element fulfill the critrion
// console.log(movements);
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// //NOTE: Separate callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//**13 Flat and flatMap */
// //NOTE: flat(): release nested array and flat array, no callback fucntion
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
// console.log(arrDeep.flat(2)); //NOTE: flat(parameter) //depth

// // const allMovements = accounts.map(acc => acc.movements);
// // const movementArr = allMovements.flat();
// // const overallBalance = movementArr.reduce((acc, mov) => acc + mov, 0);
// // console.log(movementArr);
// // console.log(overallBalance);

// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, arr) => acc + arr, 0);
// console.log(overalBalance);

// //NOTE: flatMap, only get 1 level depth
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, arr) => acc + arr, 0);
// console.log(overalBalance2);

//**14 Sorting array */
// // sort() : change the origin array
// // Strings
// const owners = ['jonas', 'adam', 'lilt', 'jodie'];
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);
// // console.log(movements.sort());// [-130, -400, -650, 1300, 200, 3000, 450, 70]
// // sort(): order by strings

// //NOTE: sort() callback function
// // return < 0. A, B (keep order)
// // return > 0. B, A (switch order)

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });
// movements.sort((a, b) => a - b);
// console.log(movements);

// //Descending
// // movements.sort((a, b) => {
// //   if (a < b) return 1;
// //   if (a > b) return -1;
// // });
// movements.sort((a, b) => b - a);
// console.log(movements);

// let flag = false;
// console.log(!flag);
// console.log(flag);
// flag = !flag;
// console.log(flag);

//**15 more ways of creating and filling array */
// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// //NOTE: Empty arrasy + fill()
// const x = new Array(7);
// console.log(x);

// // x.fill(1);
// x.fill(1, 3, 5); // (fillElement, startIndex, endIndex) [startIndex, endIndex)
// console.log(x);

// arr.fill(23, 4, 6);
// console.log(arr); //overwrite the origin array

// //NOTE: Array.from
// const y = Array.from({ length: 7 }, () => 7);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, index) => index + 1); // from({}, fn(currentElement, index){})
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => el.textContent.replace('€', '')
//   );
//   console.log(movementUI);
//   // console.log([...document.querySelectorAll('.movements__value')]);
// });

console.log('---------------------');
///////////////////////////////////////
// Array Methods Practice
// const bankDepositSum = accounts.map(acc => acc.movements).flat();
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2. count account which deposit over 1000
const numDespositsOver1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;
console.log(numDespositsOver1000);

// 2. count account which deposit over 1000 by using reduce()
// reduce (accumulate, currentElement)
const numDespositsOver10001 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur > 1000 ? count + 1 : count), 0);
  .reduce((count, cur) => (cur > 1000 ? ++count : count), 0);
console.log(numDespositsOver10001);

// NOTE: count++ vs. ++count :
let a = 10;
console.log(a++); // return the old value
console.log(a);

//Prefixed ++ operator
let b = 10;
console.log(++b); //11
console.log(b); //11

//3.NOTE: more practice with reduce(),
//Sample1 : count deposite and withdrawl by object
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

//4.covert string with title sentence
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (sentense) {
  const exprections = ['a', 'an', 'the', 'but', 'in', 'or'];

  const titleCase = sentense
    .toLowerCase()
    .split(' ')
    .map(word =>
      exprections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};

console.log(convertTitleCase('This is a nice title'));
console.log(convertTitleCase('This is the LONG title'));
