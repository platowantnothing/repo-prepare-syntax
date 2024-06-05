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
console.log('---------regular function and arrow function---------');
//** Regular Function & Arrow Function */

//NOTE: DO NOT use arrow function as object properties(or method) .
//Best practice

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // greet: function () {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`);
  // },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();
