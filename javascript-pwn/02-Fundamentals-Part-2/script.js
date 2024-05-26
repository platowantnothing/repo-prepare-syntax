"use strict"; //active strict mode, it'll forbids us to do certain things, and create visible error
//**1 active strict mode */
/*
let hasDriverLicense=false;
const passTest =true;

if(passTest) hasDriversLicense=true;
if(hasDriverLicense) console.log('I can drive');
*/
//const interface = 'Audio'; //SyntaxError: Unexpected strict mode reserved word (at script.js:9:7)

//**2 Functions */
/*
function logger() {
  //function body
  console.log("Taylor Swift");
}

//invoking/calling/running functiion
logger();
logger();
logger();

// Input data or Return data back <<< kinda like a machine

function foodMachine(apples, oranges) {
  //parameter
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} orgranes`;
  return juice;
}

const appleJuice = foodMachine(5, 2); //5, 2 arguments
console.log(appleJuice);
console.log(foodMachine(0, 22));
*/

//**3 functuion declartions vs. expression */
/*
const age1 = calcAge1(1987);

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

// console.log(calcAge1(1987));
// console.log(age1, age2); //NOT work

// Ananomous function <<< function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1987);
console.log(age1, age2);
*/

//**4 Arrow function */
/*
//Function expression
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// Arrow function
const calcAge3 = (birthYear) => 2024 - birthYear; //value and assign to variable
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirment = 65 - age;
  return `${firstName} retries in ${retirment}`;
};
console.log(yearUntilRetirement(1997,'Bob'));
console.log(yearUntilRetirement(1991,'Swift'));
*/

//**5 funtion calling other function */
/*
// Example : decouple
function cutFoodPieces(fruit) {
  return fruit * 4;
}

function foodMachine(apples, oranges) {
  const applePieces = cutFoodPieces(apples);
  const organesPieces = cutFoodPieces(oranges);
  //parameter
  const juice = `Juice with ${applePieces} piece of apples and ${organesPieces} piece of orgranes`;
  return juice;
}

console.log(foodMachine(2, 3));
*/

// *5 function review*
/*
function calcAge(year) {
  return 2024 - year;
}

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  let retirment = 65 - age;
  if (retirment < 0) {
    retirment = -1
    return `${firstName} retries in ${retirment}`;
  }else{
    return `${firstName} retries in ${retirment}`;
  }

};

console.log(yearUntilRetirement(1997, "Bob"));
console.log(yearUntilRetirement(1787, "Swift"));
*/

// *Hw*
/*
const calcAverage =(s1,s2,s3) => {return (s1+s2+s3)/3};

const dolphinsAvgScore=calcAverage(44,23,71);
const koalasAvgScore=calcAverage(65,54,49);

function checkWiner(dolphinsAvgScore,koalasAvgScore){
    return (dolphinsAvgScore>koalasAvgScore)?`Team Dolphins is winer`:`Team Koalas is winer`;
}

console.log(checkWiner(dolphinsAvgScore,koalasAvgScore));
*/

//**6 Arrays */
/*
const friend1 = "lily";
const friend2 = "amy";
const friend3 = "linda";
// 1 creat arrays
const friends = ["lily", "amy", "linda"];
console.log(friends);

const y = new Array(1111, 2222, 3333, 4444);
console.log(friends[0]);
console.log(friends[2]);

// 2 attribute array.length
console.log(friends.length - 1);
console.log(friends[friends.length - 1]);

// 3 override the element
friends[2]='tommi';
console.log(friends);
// friends = ["zhangsa", "sa", "lisi"]; //not work

// 4 data which input in array
// anywhere in array could be a expression, which could creat value
const firstName = "Jonas";
const jonas = [firstName, "Haha", 2023 - 111, "teacher", friends];
console.log(jonas.length)

//Exercise
const years= [1991,1987,1994];
function calcAge(birthYear){return 2023-birthYear;}
// console.log(calcAge(years));
console.log(calcAge(years[0]))

const calcResultAges = [calcAge(years[0]),calcAge(years[1])];
console.log(calcResultAges);
*/

//**7 Basic Array method(opearations)*/
/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(newLength);
console.log(friends);

friends.unshift("Amy");
console.log(friends);

// Remove elements
friends.pop(); // rm last one
// const popped = friends.pop();
// console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

// Get index by find element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); //-1

//identify element in array or not
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob')); //-1
console.log(friends.includes(23)); //-1

// Example
if(friends.includes('Peter')){
    console.log(`You have a friends called Peter!`)
}
*/

//**HW2 */
/*
const bills =[125,555,44];
function calcTip (money){
    return (money >=50 && money <=300)?money*0.15:money*0.2;
}
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
console.log(tips);
console.log(`Totol bills and tips is : 
${bills[0]+tips[0]}, ${bills[1]+tips[1]}, ${bills[2]+tips[2]}
`);
*/

//**8 Object */
/*
//Intro, no way to find key for those elements
const jonasArray = [
  "Jonas",
  "Schemdstaman",
  2023 - 1991,
  "teacher",
  ["micheal", "tom", "lily"],
];

// crate object1: object literal syntax
// key-value name
const jonas = {
  //key : variale name || properties
  firstName: "Jonas",
  lastName: "Scamentaman",
  age: 2027 - 1991,
  job: "teacher",
  friends: ["micheal", "tom", "lily"],
};

// create object2
*/

//**9 Retrive data from Object or Change data  */
/*
console.log(jonas);
// unlike array, retrive elemets have no connection with index
console.log(jonas.lastName);
console.log(jonas["lastName"]);

// [] operation -> expression
const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends."
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request!\n\
    Choose between firstName, lastName, age, job and friends."
  );
}

jonas.location = "Italy";
jonas["twiter"] = "@jonasScranment";
console.log(jonas);

// Challenge
const jonasBestFriend = jonas.friends[0];
console.log(jonasBestFriend);
*/

//**10 Object method */
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Scamentaman",
  brithYear: 1998,
  job: "teacher",
  friends: ["micheal", "tom", "lily"],
  hasDriversLicense: true,

  //   calcAge: function (birthYear) {
  //     return 2037 - birthYear;
  //   }

  // this
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.brithYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.brithYear;
    return this.age; // x -> undefined
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-years old ${this.job},\
    and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(jonas.calcAge(1998));
// console.log(jonas['calcAge'](1998));
console.log(jonas.calcAge());

// Reduce the number of calculating
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//challenge
//My version
console.log(`${jonas.firstName} is a ${jonas.age}-years old ${jonas.job},\
and he has ${jonas.hasDriversLicense ? "a" : "no"} driver's license`);
// Jonas version
console.log(jonas.getSummary());
*/

//**HW */
/*
const markMiller = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const johnSmith = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// *call method first. If not cal call this method 
markMiller.calcBMI();
johnSmith.calcBMI();

console.log(`John's BMI(${johnSmith.bmi}) is ${
  johnSmith.bmi > markMiller.bmi ? "higher" : "lower"
} \
than mark's (${markMiller.bmi}) `);
*/

//**11 Loop */
/*
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");

// for
// for(let rep=1;rep<11;rep++){
// console.log(`Lifting weights repetition ${rep}`);
// }

const jonasArray = [
  "Jonas",
  "Schemdstaman",
  2023 - 1991,
  "teacher",
  ["micheal", "tom", "lily"],
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  //   types[i]=typeof jonasArray[i];
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1997, 2001, 2004, 2023];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages[i] = 2037 - years[i];
  //ages.push(2037 - years[i])
}
console.log(ages);

// continue and break
console.log("=====ONLY STRING=====");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("=====BREAK WITH NUMBER=====");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

//**12 Looping backward and loops in loop */
/*
const jonas = [
  "Jonas",
  "Schemdstaman",
  2023 - 1991,
  "teacher",
  ["micheal", "tom", "lily"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

for (let i = 1; i < 4; i++) {
  console.log(`----start with ${i} routation`);

  for(let rep=1;rep<6; rep++){
    console.log(`starting the repitation ${rep}`);
  }
}
*/

//**13 the while loop */
/*
for (let rep = 1; rep < 11; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
//   console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}
//* compared with the For loop, while need condition, instead of counter

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice===6){
    console.log('The loop is about to end...')
  }
}
*/

//**HW */
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(Number(tips[i] + bills[i]));
}
console.log(tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(tips), calcAverage(totals));
*/

