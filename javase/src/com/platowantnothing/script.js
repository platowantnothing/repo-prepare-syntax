// *3 operator* : transfer or combine value
console.log("---------------------------------------");
//math operators
const now = 2037;
const ageJonas = now - 1997;
const ageTom = now - 2007;
console.log(ageJonas, ageTom);
console.log(ageJonas * 2, ageTom / 10, 2 ** 3); //2**3 menas 2*2*2, means 2 to the power of 3

const startName = "Sam";
const secondName = "Smith";
console.log(startName + "\t" + secondName);

//typeof

//assignment operators
let x = 10 + 5;
x += 10; //x=x+10
x *= 4; //x=x*4
x++; // x= x+1
x--; //x= x-1

//comparison operators
console.log(ageJonas > ageTom); // >, <, >=, <=
console.log(ageJonas >= 100);
console.log(now - 1991 > now - 2019);

//operator precedence << MDN [link:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence]
// order, mathmatic operator exec from left to right 20-10-5
// order, assignment operator exec from right to left
let a, b;
a = b = 20 - 1 - 2;
console.log(a, b);

// *2 let const var*
console.log("---------------------------------------");
let age = 20;
age = 31; //re-assgin a value to variable

const PI = "3.1415926"; //assign to a variable is not change
//PI = "222"; //ERROR: TypeError: Assignment to constant variable.
//const job; //ERROR: Missing initializer in const declaration

var job = "programmer";
job = "teacher"; //outdated after ES6

lastName = "Haha";
console.log(lastName);

// *1 Data Type*
console.log("---------------------------------------");
let js = "amazing";
// single comment
// if(js === "amazing"){alert("JS is cool!");}

// console.log(1+2+3);

let javaSciprtIsFun = true;
console.log(javaSciprtIsFun);
console.log(typeof javaSciprtIsFun);

// console.log(typeof "Leyn");
// console.log(typeof 23);

// Js dynamic typing
javaSciprtIsFun = "Yes!";
console.log(typeof javaSciprtIsFun);

//undefined vs Null
let year;
console.log(year);
console.log(typeof year);

year = 1991; //assign new value to year
console.log(typeof year);

console.log(typeof null); // return null
