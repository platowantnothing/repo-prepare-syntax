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
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(123, 'Tom');
lufthansa.book(635, 'John Smith');

const sichuanaireline = {
  airline: 'scairline',
  iataCode: 'SC',
  bookings: [],
};

// try to use lufthansa's book method
const bookMethod = lufthansa.book;

// NOT WORK, this undefined
// bookMethod(23, 'Sarah Williams');

// NOTE: this + call(), manually set this keyword for function call
bookMethod.call(sichuanaireline, 23, 'Sarah Williams');
console.log(sichuanaireline);

bookMethod.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

bookMethod.call(swiss, 11, 'Taylor Swift');

// NOTE: this + apply(), barelly used for modernJs
//defference between apply with call, parameter is defferent
const passengers1 = [99, 'William Bollorise'];
bookMethod.apply(swiss, passengers1);

//NOTE: replace by call
const passengers2 = [12, 'Joda Bollorise'];
bookMethod.call(swiss, ...passengers2);
console.log(swiss);

///////////////////////////////////////
//**07 The bind Method
// NOTE: return a new function by using bind

// const bookMethod = lufthansa
// bookMethod.call(lufthansa, 44, 'Lu GuangZhong')

const bookLH = bookMethod.bind(lufthansa); // new function
bookLH(76, 'Shaw Jolin');
console.log(lufthansa);

const bookSC = bookMethod.bind(sichuanaireline);
const bookSW = bookMethod.bind(swiss);

// NOTE: partial application, which means apply some function by setting default parameter
const bookLH33 = bookMethod.bind(lufthansa, 33);
bookLH33('Eson Chen');
bookLH33('Martha Cooper');
console.log(lufthansa);

// WITH Event Listeners
lufthansa.plane = 300;
lufthansa.buyPlane = function (plane) {
  console.log('print ____', this);
  this.plane++;
  console.log(this.plane);
};

// lufthansa.buyPlane();
const bindBuyPlane = lufthansa.buyPlane.bind(lufthansa);
document.querySelector('.buy').addEventListener('click', bindBuyPlane);

//Partial Application
const addTax = (rate, val) => val + val * rate;
console.log(addTax(0.1, 200));

const addProTax = addTax.bind(null, 0.23);
console.log(addProTax(200));
console.log(addProTax(100));

//Partial Application -> function return function
const addTaxRate = function (rate) {
  return function (val) {
    return val + val * rate;
  };
};

const cnaRate = addTaxRate(0.5);
console.log(cnaRate(100));
