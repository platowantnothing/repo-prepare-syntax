'use strict';

// functions accepting callback functions, aka. high-order function + callback function
// aka, function(fn)

const beAWoman = function (orginalGender) {
  return (orginalGender = 'WOMAN');
};

const transformer = function (gender, fn) {
  console.log(`Original gender: ${gender}`);
  console.log(`Trans gender: ${fn(gender)}`);
  console.log(`fn name : ${fn.name}`);
};

transformer('man', beAWoman);

const sichuanAirline = function (dollar) {
  return dollar ? 'Yes' : 'No';
};

const bookTicket = function (dollar, fn) {
  console.log(`Is the booking process work fine? ${fn()}`);
};
bookTicket(111, sichuanAirline);

// high-order function _ return function
const greet = function (action) {
  return function (name) {
    console.log(`${action} ${name}`);
  };
};
const heyGreet = greet('Hey!'); // this part return an function
heyGreet('Miu');

console.log('----------------------');
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

// const asiaAL = {};

const bookMethod = lufthansa.book;
// bookMethod(23, 'Sarah Williams');// this is not defined.
// bookMethod.call(lufthansa, 23, 'Wang Yitai');

//bind
const lfBook = bookMethod.bind(lufthansa); // define the object
lfBook(333, 'Lulu'); // invocate this method by this object

//bind with default parameter, aka. partial application
const lfBook101 = bookMethod.bind(lufthansa, 101);
lfBook101('Sabbina');
lfBook101('Jonnaha');

//Partial application
const addTax = (rate, val) => val + val * rate;
const addTaxVersion1 = addTax.bind(null, 0.1);
console.log(addTaxVersion1(100));

console.log('----------------------');
//IIFE : Immediately Invoked Function Expression
(function () {
  console.log('hhhh');
})();

//Closeure
const g = function () {
  const a = 10;
  return function () {
    console.log(a * 11);
  };
};

const f = g();
f();
console.log('----------------------');
