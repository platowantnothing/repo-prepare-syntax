// *hw : tip calculator*
let bill = 275.3;
let tip = Number(bill > 50 && bill < 350) ? bill * 0.2 : bill;
console.log(
  `the bill is ${bill}, and the tip is ${tip}, and the total value is ${
    bill + tip
  }`
);
// *11 Condition operator*
const theGirlAge = 19;
console.log(`drink some ${theGirlAge >= 18 ? "wine" : "water"}`);

/**
 if(theGirlAge > 18){}else{}
 */
// *10 Statement and Expressions*
/*
if(){}else{} <<< statement
209 <<< expression, which means create a value
*/

// *9 Switch *
const whichDay = "Monday";
switch (whichDay) {
  case "Monday":
    console.log("get up");
    console.log("go to work");
    break;
  case "Tuesday":
    console.log("do something");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("go cycling");
    break;
  default:
    console.log("sleep");
}
// if using if-else, then .. lot of {} and ||

console.log("---------------------------------------");

// *hw3*
/* dolphins score 96, 108, 89
koalas score 88,91,110, calc average score and deter */

// *8.2 Logical Operator*

const hasDirverLicense = true;
const hasGoodEyeSight = false;

console.log(hasDirverLicense && hasGoodEyeSight);
console.log(hasDirverLicense || hasGoodEyeSight);
console.log(!hasGoodEyeSight);

const zhangIsTired = true;
if (hasDirverLicense && hasGoodEyeSight && !zhangIsTired) {
  console.log("Zhangsan could drive.");
} else {
  console.log("Other people could drive...");
}

// *8.1 Basic Boolean Logic: and, or, not Operator*
/*
A AND B -> True which means A(true) and B(true)
A OR B -> True which means any or them is true
NOT < inverts true/flase value
*/

// *7 equality operator == VS. ===
console.log("---------------------------------------");
let newAge = "18";
// === strict equality operator, and do not execute conversion when using.
// Return true when the two values are completely same. //!==
if (newAge === 18) console.log("Audlt enough!(strict)");
// == loose equality operator, does type coercion
// Tips: to avoid using loose operator as much as i can //!=
if (newAge == 18) console.log("Audlt enough!(strict)");

// try using in logic context
/* let userAns = Number(prompt("Input your favourite number:"));
if (userAns === 23) {
  console.log("23 is best");
} else if (userAns === 18) {
  console.log("18 is also ok!");
}
if(userAns!==23)console.log('NOT bad!');*/

// *6 Truthy and falsy value*/
// *falsy values: 0, '', undefined, null, NaN <<< they'll convert to false
// *truthy values: any number this is not zero or any string which is not empty
console.log("---------------------------------------");

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

// In normal case, falsy value not happened in conversion, but in coersion
// like control structure which has logic context
let thisHeight; //Undefined
if (thisHeight) {
  console.log("Yah! Height is ok!");
} else {
  console.log("NOT height enough!");
}

// Funny example, maybe it is a bug some times
let leftMonry = 0;
if (leftMonry) {
  console.log("Don't sepent it at all");
} else {
  console.log("Get more money!");
}

// *5 Type conversion and coercion*
console.log("---------------------------------------");
const inputYear = "1997";
console.log(inputYear + 1, 111);

//type conversion: String , Number, Boolean
let mingAge = "11";
console.log(mingAge, Number(mingAge));
console.log(11, String(11));
console.log("this", Number("this")); //NaN < which is a number, but it is a invalid number
//type coercion:
console.log("10" + "2" + "3" + 1); // get String
console.log("10" - "2" - "3" - 1); // get Number

// *hw2*
console.log("---------------------------------------");
// control structure
const herAge = 11;
const isOldEnough = herAge >= 18;
if (isOldEnough) {
  console.log(`Sarah will get her driver license!`);
} else {
  let isLeftYears = 18 - herAge;
  console.log(`And wait ${isLeftYears} to get driver license!`);
}
// let work in a block
const herBirthYear = 1999;
let century;
if (herBirthYear > 2000) {
  century = 21;
  console.log(`Her born in ${century}`);
} else {
  century = 20;
  console.log(`Her born in ${century}`);
}

// *4 String*
console.log("---------------------------------------");

const herName = "Taylor";
const familyName = "Swift";
const herJob = "singer";
console.log("I'm " + herName + " " + familyName + " , and job is " + herJob);
const sentence1 = `Her name is ${herName}, and her job is ${herJob}`;
console.log(sentence1);

console.log(`try to \n\
use \n\
this`);

console.log(`try to
use
this again`);

// * hw1*
console.log("---------------------------------------");
const marksWeight = 78;
const marksHights = 1.69;
let marksBMI = marksWeight / marksHights ** 2; //const
console.log(marksBMI);

const johnWeight = 92;
const johnHights = 1.95;
let johnBMI = johnWeight / johnHights ** 2; //const
console.log(johnBMI);
console.log(marksBMI > johnBMI);

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
