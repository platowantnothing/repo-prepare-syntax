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
