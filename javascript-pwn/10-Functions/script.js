'use strict';

//**01 Default Parameter to function*/
// const bookings = [];

// //NOTE: 1)sampe, ES6 -> how to set default parameter
// //2) parameter can be cal with order
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = numPassengers * 233.3
// ) {
//   //NOTE: ES5 -> how to set default parameter
//   //   numPassengers = numPassengers || 5;
//   //   price = price || 100;

//   const booking = { flightNum, numPassengers, price };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);

// //NOTE: skip default parameter
// createBooking('LH123', undefined, 1000);

///////////////////////////////////////
//**02 How Passing Arguments Works: Values vs. Reference
// NOTE: Js does not have reference passing, but object type value changed, because it changes the reference value
// const flightNumber = 'LH111';
// const ming = {
//   name: 'Lee Ming',
//   passport: 24739479284,
// };
// const checkIn = function (flightNum, passwnger) {
//   flightNum = 'AH233';
//   //NOTE: the properties' value of object is changed
//   passwnger.name = 'Mr. ' + passwnger.name;
//   if (passwnger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// // checkIn(flightNumber, ming);
// // console.log(flightNumber); //LH111 , the old one
// // console.log(ming); //{name: 'Mr. Lee Ming', passport: 24739479284}

// // NOTE: execute by order, the above object is not be changes
// // ming.passport = Math.trunc(Math.random(0, 1) * 1000000);
// // console.log(ming);
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
// newPassport(ming);
// checkIn(flightNumber, ming);

///////////////////////////////////////
//**03 First-class and high-order function
/**
 * NOTE:
 * 1. first-class function:
 * 1) functions are simple values and are just another type of object
 * 2) Fore example:
 *  i)store functions in variables or object's proerties
 *  ii)pass functions as arguments to Other function
 *  iii)return functions from functions
 *  iiii)call methons on functions
 *
 * 2.high-order function (as parameters or retuen results)
 * Based on first-class function features, and mainly used for
 * 1) function that receives another function , e.g higher-order funtion + callback function
 * 2) function than returns news functions, e.g higher-order function + returned function
 *
 *
 */

///////////////////////////////////////

//**04 Functions Accepting Callback Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function + callback function sample
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Trans string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`); //function same as object
// };

// transformer('Js is the best', upperFirstWord);
// transformer('Js is the best', oneWord); // e.g oneWord callback function

// //NOTE: JS uses callbacks all the time
// //NOTE: the pros about callback: 1) split code and make use code eaiser; 2) allow to create abstract
// const high5 = function () {
//   console.log('🙌');
// };

// document.body.addEventListener('click', high5);

// ['jonas', 'martha', 'adam'].forEach(high5);

// // Smaple:
// const payCheck = function (status) {
//   return status ? 'Pay success! Order handling...' : 'Pay failed! Retry...';
// };

// const readyToPay = function (status, fn) {
//   console.log(`The pay process check: ${fn(status)}`);
//   console.log(`The method name: ${fn.name}`);
// };

// readyToPay(1, payCheck);

///////////////////////////////////////
//**05 Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Amy');
// greeterHey('Sam');

// greet('Hello')('Lisa');
// //NOTE: functions returning functions? Used for functional programmer

// // Chanllenge with arrow function
// const takeMoreFood = action => typeOfFood =>
//   console.log(`${action} ${typeOfFood}`);
// takeMoreFood('drink')('cocacola');

///////////////////////////////////////
//**06 The call and apply Methods
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   // book: function(){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(123, 'Tom');
// lufthansa.book(635, 'John Smith');

// const sichuanaireline = {
//   airline: 'scairline',
//   iataCode: 'SC',
//   bookings: [],
// };

// // try to use lufthansa's book method
// const bookMethod = lufthansa.book;

// // NOT WORK, this undefined
// // bookMethod(23, 'Sarah Williams');

// // NOTE: this + call(), manually set this keyword for function call
// bookMethod.call(sichuanaireline, 23, 'Sarah Williams');
// console.log(sichuanaireline);

// bookMethod.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// bookMethod.call(swiss, 11, 'Taylor Swift');

// // NOTE: this + apply(), barelly used for modernJs
// //defference between apply with call, parameter is defferent
// const passengers1 = [99, 'William Bollorise'];
// bookMethod.apply(swiss, passengers1);

// //NOTE: replace by call
// const passengers2 = [12, 'Joda Bollorise'];
// bookMethod.call(swiss, ...passengers2);
// console.log(swiss);

// ///////////////////////////////////////
// //**07 The bind Method
// // NOTE: return a new function by using bind

// // const bookMethod = lufthansa
// // bookMethod.call(lufthansa, 44, 'Lu GuangZhong')

// const bookLH = bookMethod.bind(lufthansa); // new function
// bookLH(76, 'Shaw Jolin');
// console.log(lufthansa);

// const bookSC = bookMethod.bind(sichuanaireline);
// const bookSW = bookMethod.bind(swiss);

// // NOTE: partial application, which means apply some function by setting default parameter
// const bookLH33 = bookMethod.bind(lufthansa, 33);
// bookLH33('Eson Chen');
// bookLH33('Martha Cooper');
// console.log(lufthansa);

// // WITH Event Listeners
// lufthansa.plane = 300;
// lufthansa.buyPlane = function (plane) {
//   console.log('print ____', this);
//   this.plane++;
//   console.log(this.plane);
// };

// // lufthansa.buyPlane();
// const bindBuyPlane = lufthansa.buyPlane.bind(lufthansa);
// document.querySelector('.buy').addEventListener('click', bindBuyPlane);

// //Partial Application
// const addTax = (rate, val) => val + val * rate;
// console.log(addTax(0.1, 200));

// const addProTax = addTax.bind(null, 0.23);
// console.log(addProTax(200));
// console.log(addProTax(100));

// //Partial Application -> function return function
// const addTaxRate = function (rate) {
//   return function (val) {
//     return val + val * rate;
//   };
// };

// const cnaRate = addTaxRate(0.5);
// console.log(cnaRate(100));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. 
  If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),

//   registerNewAnser() {
//     const result = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     //register anwser NOTE: circuiting
//     typeof result === 'number' &&
//       result < this.answers.length &&
//       this.answers[result]++;

//     // console.log(this.answers);
//     this.displayResults();
//     this.displayResults('string');
//   },

//   //NOTE:
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       // Poll results are 13, 2, 4, 1
//       console.log(this);
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnser.bind(poll));

// const displayResult = poll.displayResults;
// displayResult.call({ answers: [5, 2, 3] });
// displayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); //NOTE: .

//  [5, 2, 3]
//  [1, 5, 3, 9, 6, 1]

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   // answers: [1, 34, 22, 1],

//   //1 create method registerNewAnser
//   registerNewAnser() {
//     //[1,2,3].join('=') >>>> 1=2=3
//     let output = '';
//     output += this.question + '\n';
//     for (const row of this.options) {
//       output += row + '\n';
//     }
//     const result = prompt(`${output}`);
//     console.log(result);
//     if (result <= 3 && result >= 0) {
//       this.answers[result] = 1;
//     } else alert('Invalid number ...');

//     return newDisplayRes(this.answers);
//   },
// };

// //2
// const anserPoll = poll.registerNewAnser.bind(poll);
// document.querySelector('.poll').addEventListener('click', anserPoll);

// //3
// const displayResults = function (...type) {
//   console.log(this);
//   console.log(`Poll results are ${type}`);
// };

// const newDisplayRes = displayResults.bind(poll);
// // newDisplayRes(poll.answers);

///////////////////////////////////////
//**08 Immediately Invoked Function Expressions (IIFE)
//NOTE: Syntax, make function only execute 1 time

// const printNum = function () {
//   console.log('23');
// };

// printNum();
// printNum();

// // Syntax1:
// (function () {
//   console.log(23);
//   const privateVal = 23;
// })();

// // console.log(privateVal); Cannot retrieve out-scope value
// //Syntax2:
// (() => console.log('xixi'))();

//**09- closure */
// NOTE: 1 closure is not explicite and we cannot decalre
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passgeners`);
//   };
// };

// const booker = secureBooking(); // booker is the function

// booker(); // closure happened
// booker();
// booker();
// // NOTE: 2 any function always has access to the variable environment  of the execution environment where function is created
// // NOTE: JS will check closure first, then check scope chain
// /**
//  * check img:
//  * 01- closure
//  * 02- slosure summary
//  */

// console.dir(booker); // [[Scopes]]: variable environment and as internal properties which cannot access from code

//**10- more closure example*/
// Example 1:
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     // f clpsure, access a
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // function f is re-assgined
// h();
// f();
// console.dir(f);

// // Example 2:
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are noew boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000); // inside function will be executed after 1000 ms

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

///////////////////////////////////////
// Coding Challenge #2
/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, 
attach an event listener that changes the color of the selected h1 element ('header') to blue, 
each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });

  console.dir(function () {
    header.style.color = 'blue';
  });
})();
