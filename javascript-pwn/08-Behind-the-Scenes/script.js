'use strict';
/* Scope
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 && birthYear <= 1999) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `oh, you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial); // var is function scope
//     // console.log(add(2, 3));
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1997);
*/

//** Hoisting */

// console.log(me); // hoisting -> undefined
// console.log(job); // Cannot access before initialization
// console.log(year); // job and year in TDZ
// var me = 'Jons';
// let job = 'teacher';
// const year = 1998;

// //Function
// console.log(addDecl(1, 2));
// // console.log(addExpr(1, 2));
// // console.log(addExpr);
// // console.log(addArrow(1, 2));
// // decalartion function
// function addDecl(a, b) {
//   return a + b;
// }

// /*NOTE: Here, if change expression function keyword as var, then it will show this var cannot be as function \n
// same as arrow function
// */
// //expression function
// var addExpr = function (a, b) {
//   return a + b;
// };

// // arrow
// const addArrow = (a, b) => a + b;

// //**let const var */
// // Best Practice, NOTE: DO NOT USE var .
// // console.log(numProduct); // undefined -> boolean: false
// if (!numProduct) console.log('j');
// var numProduct = 10;

// var x = 1;
// let y = 2;
// const z = 3;
// //NOTE: window object .
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

//**this keyword */
/*
console.log(this); // Window

const calcAgeSample = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};
calcAgeSample(2000);

console.log('=======');

const calcAgeSampleArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // Window, use its parent function or its parents scope
};
calcAgeSample(2000);

console.log('========');

const jonas = {
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge(); // {year:1990. clacAge:f}

console.log('========');

const matilda = { year: 2017 };
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/
//console.log('---------regular function and arrow function---------');
//** Regular Function & Arrow Function */

//NOTE: DO NOT use arrow function as object properties(or method) .
//Best practice

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     const isMillenial = function () {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   // greet: function () {
//   //   console.log(this);
//   //   console.log(`Hey ${this.firstName}`);
//   // },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

//** Arguments Keyword */
//NOTE: Arguments only used in normal function. Cannot be used in arrow function .
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 7, 9);

// // var addArrow = (a, b) => {
// //   console.log(arguments);
// //   return a + b;
// // };

// // addArrow(1, 2);

//** Primitive vs. Object  */
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('me:', me);

//NOTE: Review for Premitives(Number, String, Boolean, Undefined, Null, Symbol,BigInt) < Premitive Types, which stored in Call Stack where EC run .
//NOTE: Review for Objects(Object literal, Arrays, Functions, Many more...)  < Reference Types, which stored in HEAP .
//NOTE: Cloud refer img

// Primitive Type
let lastName = 'Ding';
let oldLastName = lastName;
lastName = 'Yang';
console.log(oldLastName, lastName);

// Reference Type
const jessica = {
  firstName: 'Jessica',
  lastName: 'Ding',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Yang';
console.log('before marriage:', jessica);
console.log('after marriage:', marriedJessica);
// NOTE: Not create new object in HEAP.

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Yang',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Ding';
console.log('before marriage:', jessica2);
console.log('after marriage:', jessicaCopy);
//NOTE: Shallow Copy: Create new object in HEAP. If there
//NOTE: will only copy the properties

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('before marriage:', jessica2);
console.log('after marriage:', jessicaCopy);

//TODO: Deep copy
