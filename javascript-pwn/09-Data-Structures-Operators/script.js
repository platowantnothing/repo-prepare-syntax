'use strict';

// Data needed for a later exercise
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25 \
//   +_Arrival;bru0943384722;fao93766109;11:45 \
//   +_Delayed_Arrival;hel7439299980;fao93766109;12:05 \
//   +_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
const doSlice = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  console.log(
    `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
      '_',
      ' '
    )} from ${doSlice(from)} to ${doSlice(to)} (${time.replace(
      ':',
      'h'
    )})`.padStart(40)
  );
}

//**9 Enhanced Object literal */
const weeks = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weeks[3]]: {
    //NOTE**9 ES6 Enhanced Object literal */
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  // [`day-${1 + 2}`]: {
  //   open: 0, // Open 24 hours
  //   close: 24,
  // },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // NOTE: the function argument is an Object {}
  createDelivery({
    //NOTE**9 Enhanced Object literal */
    startIndex = 1,
    mainIndex = 1,
    address = 'No.10 Ling Road',
    time = '19:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mianIng, ...otherIngs) {
    console.log(mianIng);
    console.log(otherIngs);
  },
  openingHours, //NOTE**9 Enhanced Object literal */
};

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const strs = document.querySelector('textarea').value.split('\n'); //['underscore_case', ' first_name', 'Some_Variable ', '  calculate_AGE', 'delayed_departure']
  for (const [index, row] of strs.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const camelStr = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${camelStr.padEnd(20, ' ')}${'✅'.repeat(index + 1)}`);
  }
});

const convertUnderScoreToCamelCase = function (str) {
  const strArr = str.split('_');
  const camels = [];
  for (let i = 0; i < strArr.length; i++) {
    // console.log(strArr[i] + '--' + i);
    if (i === 0) {
      camels.push(strArr[i].toLowerCase());
    } else camels.push(strArr[i][0].toUpperCase() + strArr[i].slice(1));
  }

  return camels.join(''); //convert array to string without comma
};

// console.log(convertUnderScoreToCamelCase('first_name_haha_yiyi_xixi'));
// console.log(convertUnderScoreToCamelCase('Some_Variable'));
// console.log(convertUnderScoreToCamelCase('calculate_AGE'));
// console.log(convertUnderScoreToCamelCase('delayed_departure'));

//**17 String - Part3 */
/*
//1) Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

// String deconstruct
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//Quick Ex
const capitalizeName = function (name) {
  const names = name.toLowerCase().split(' ');
  // console.log(names);
  const newNames = [];
  for (const n of names) {
    // newNames.push(n[0].toUpperCase() + n.slice(1));
    newNames.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(newNames);
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

//2) Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, 'x').padEnd(40, 'x'));

//Quick Ex
const maskCreditCard = function (cardNumber) {
  const str = cardNumber + ''; // all parameter convert to string first
  const endFourNumber = str.slice(-4);
  return endFourNumber.padStart(str.length, '*');
};

console.log(maskCreditCard(646378234));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('3348594938477557749707'));

// 3) repeat
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

//Quick Ex
const planesInLine = function (planeNumber) {
  console.log(
    `There is ${planeNumber} planes in line ${'💨'.repeat(planeNumber)}`
  );
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

//**16 String - Part2 */
/*
const airline = 'TAP Air Portugal';

//1) String format, uppercase, lowercase
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

//Quick Ex1 - Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
console.log(
  passenger.slice(0, 1).toUpperCase() + passenger.slice(1).toLowerCase()
);
// Jonas Version:
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

//Quick Ex2 - Comparing emails
//2) String trim, rm space from string
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
// console.log(lowerEmail);
// console.log(trimmedEmail);
const normalEmail = loginEmail.toLowerCase().trim(); // trim, also 'console.log(loginEmail.trimStart());' or trimEnd()
console.log(normalEmail);
console.log(normalEmail === email);

//3) String replacement
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // only replace the first one
// replace all element
console.log(announcement.replaceAll('door', 'gate'));
// use regular expression to replace all element
console.log(announcement.replace(/door/g, 'gate'));

//4) String with boolean, and identify whether element exist in String or not
const plane = 'Airbus A320neo';
console.log(plane.includes('Airbus'));
console.log(plane.includes('airbus'));
console.log(plane.includes('A'));
console.log(plane.startsWith('Airb'));

//Quick Ex
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

//Quick Ex-2
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//**16 String - Part1 */
/*
const airline = 'TAP Air Portugal';
const plane = 'A320';

// 1) retrieve element from String
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B108'[1]);

// 2) get string length
console.log(plane.length);
console.log(airline.length);
console.log('B737'.length);

// 3) get element index in String
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal')); // -1

// 4) Intercept elements of a string
console.log(airline.slice(4)); // NOTE: 左闭右开; String.slice(startIndex, endIndex) .
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' '))); // Get the first ' '
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Get the last ' '

console.log(airline.slice(-2)); // get element from des order
console.log(airline.slice(1, -1));

//Quick Ex
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if ('B' === s || 'E' === s) {
    console.log('You got the middle seat 😬');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Behind the String
console.log(new String('jonas'));
console.log(typeof new String('jonas')); // object
console.log(typeof new String('jonas').slice(1));//string

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. 
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1
const events = new Set([...gameEvents.values()]);
console.log(events);

//2
gameEvents.delete(64);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4
for (const [time, res] of gameEvents) {
  time < 45
    ? console.log(`[FIRST HALF] ${time}: ${res}`)
    : console.log(`[SECOND HALF] ${time}: ${res}`);
}

//**15_ Data Structure Overview */
/**
 * Note:
 * 1.where is the origin of Js?
 *      > from programm itself, like source code, some status
 *      > from UI, like user input or written in DOM
 *      > from Web Api, like data from other web application
 * 2. difference betwwen array&set vs. object&map
 */

//**14_ Maps Iteration */
// 1 create map - Syntax
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

console.log(Object.entries(openingHours)); // [Array(2), Array(2), Array(2)]
// 2 COnvert Object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Example: Quiz
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}
// const answer = Number(prompt('Your answer?'));
const answer = 3;
console.log(answer);
console.log(question.get(answer === question.get('correct')));

// convert map to arrays
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

//**13 Maps_ Fundamental */
/**
 * NOTE:
 * 1.key-value, sorted like the object, but the key can be any kinds of data type, like objects, arrays or other maps
 *    (in Object, keys are basically always string)
 */
/**
const rest = new Map();
//1) add element
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal')); // map.set will return the updated map
// 2) add elements like chain
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
// 3) identify element belong to map or not, return true or false
console.log(rest.has('name'));
// 4) delete elemnt and delete all
rest.delete(2);
// rest.clear();

// 5) retrieve element
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// Example: Map elements with true or false
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// 6) NOTE: Use map to set DOM
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// 7) NOTE: Usig details
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

//**12 Sets*/
/**
 * NOTE:
 * 1.elements in set is unquie
 * 2.sets are iterable
 * review: Iterables can be used for arrays, strings, maps, sets. NOT objects .
 *
 * Arrays vs. Set
 * arrays: could retrieve elements by index(Set could not), and elements inside can be duplicated
 */

// const menus = ['pizza', 'pizza', 'ice-cream', 'pizza', 'ice-cream', 'pasta'];
// const menuSet = new Set(menus);
// console.log(menuSet);
// //1) Sets properties: count set size
// console.log(menuSet.size);
// //2) identify whether element exist in set or not, return true or false
// console.log(menuSet.has('pizza'));
// console.log(menuSet.has('Pizza')); //false
// console.log(menuSet.has('bread')); //false
// //3) add new element into set
// menuSet.add('sausage');
// menuSet.add('sandwich');
// console.log(menuSet);
// //4) remove element
// menuSet.delete('pizza');
// const res = menuSet.delete('cocacola'); // element not exist, and return flase
// // console.log(res);
// console.log(menuSet);
// //5) remove all elements
// menuSet.clear();
// console.log(menuSet);

// //6) Sets with Array
// const restaurantRole = ['chief', 'manager', 'chief', 'waiter', 'waiter'];
// console.log(new Set(restaurantRole)); // know what kind of role exist in restaurant
// console.log(new Set(restaurantRole).size); // same as above
// //7) Sets with Array, convert set to array
// console.log([...new Set(restaurantRole)]);

///////////////////////////////////////
// Coding Challenge #2
/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/**
//1
const scoredArr = game.scored;
for (const [index, name] of scoredArr.entries()) { //NOTE: arr.entries() ->> iterator the array elements
  console.log(`Goal ${index + 1}: ${name} `);
}

//2 - My version
// let avg;
// let sum = 0;
// const scoresArr = Object.values(game.odds);
// for (const score of scoresArr) {
//   sum += score;
//   avg = sum / scoresArr.length;
// }
// console.log('the avg is : ', avg);
// 2-Jonas Version, NOTE: Much better .

const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);

//3
let teamName;
for (const [teamInd, odd] of Object.entries(game.odds)) {
  teamName = game[teamInd] ? 'victory ' + game[teamInd] : 'draw';
  console.log(`Odd of ${teamName}: ${odd}`);
}

//bonus-1
const arr = Object.values(game.scored);
const counter = {};
arr.forEach(ele => {
  if (counter[ele]) {
    counter[ele] += 1;
  } else {
    counter[ele] = 1;
  }
});
console.log(counter);

//bonus-2 ??TODO
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
 */
/////////////////////////////////////////////////////////////////////////////////////

//**11 Looping Objects In-directly */
// //Property Names: Object name. NOTE: Object.keys()
// const nameProperties = Object.keys(openingHours);
// console.log(nameProperties);

// for (const key of nameProperties) {
//   console.log(key);
//   console.log(
//     `we go resturant on ${key} and the opening time is ${openingHours?.[key]?.open} to ${openingHours?.[key]?.close}`
//   );
// }

// //Property Values
// const valProperties = Object.values(openingHours);
// console.log(valProperties);

// // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   //de-construct
//   console.log(
//     `Today is ${day}, and the resturant opening hour is from ${open} to ${close}`
//   );
// }

//**10 Optional Chain */
// // 1)Intro
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// // NOTE: ES6. WITH OPTIONAL CHAIN. If certain property does not exist, then undefined is returned immediately .
// console.log(restaurant.openingHours.mon?.open); //NOTE: like Nullish, false value not inclue '' or 0
// console.log(restaurant.openingHours?.mon?.open);

// //2) Example: Optinal chain with nullish coalescing operator
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we opne at ${open}`);
// }

// //3) with Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exits!');
// console.log(restaurant.orderChineseCusin?.(0, 1) ?? 'Method does not exist!');

// //4) with Array
// const restaurantCus = [{ name: 'Jonas', wife: 'Anaa', dau: 'Lisa' }];
// console.log(restaurantCus[0]?.name ?? 'User does not exist!');

//**8 The For - of Loop*/
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (let item of menu) console.log(item);
// for (let [index, el] of menu.entries()) {
//   // console.log(items);
//   console.log(`${index + 1}  ${el}`);
// }

// console.log([...menu.entries()]);

///////////////////////////////////////
// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const [players1, players2] = game.players;
// console.log('players1: ', players1);
// console.log('players2: ', players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log('allPlayers: ', allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(...players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');

// team1 > team2 && console.log('team2 wins');
// team1 < team2 && console.log('team1 wins');

//**7 Logical Assignment Operation */
// const res1 = { name: 'Pipi Mania', owener: 'Beetle' };
// const res2 = {
//   name: 'Renaodiona Glarisso',
//   /*guestNumber: 20,*/ guestNumber: 0,
// };

// // OR Assignment Ope
// // res1.guestNumber = res1.guestNumber || 10;
// // res2.guestNumber = res2.guestNumber || 10;
// // res1.guestNumber ||= 10;
// // res2.guestNumber ||= 10;

// // NULLISH Assignment Ope
// // res1.guestNumber = res1.guestNumber ?? 10;
// // res2.guestNumber = res2.guestNumber ?? 10;
// res1.guestNumber ??= 10;
// res2.guestNumber ??= 10;

// // AND Assignment Ope
// // res1.owener = res1.owener && '<ANANOMOUS>'; // still get undefined
// // res2.owener = res2.owener && '<ANANOMOUS>';
// res1.owener &&= '<ANANOMOUS>'; // NO Undefined anymore
// res2.owener &&= '<ANANOMOUS>';

// console.log(res1);
// console.log(res2);

//**6 Nullish coalescing operator */
// restaurant.numGuests = 0;

// const restaurantGuest = restaurant.numGuests || 100;
// console.log(restaurantGuest);

//NOTE:NULLISH : null and undefined -> flase value(NOT include 0 or '')
// const restaurantGuestCorrect = restaurant.numGuests ?? 100;
// console.log(restaurantGuestCorrect);

//**5 short circuit &&*/
/**NOTE: Use ANy data type , return any data type, short-circuiting */
// console.log('-------OR------');
// console.log(3 || 'jonas'); //3
// console.log('' || 'jonas'); //
// console.log(true || 0); //
// console.log(undefined || null); //
// console.log(null || undefined); //

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // Used for setting default value
// restaurant.numGuests = 0;
// const restaurantGuest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(restaurantGuest1);

// const restaurantGuest2 = restaurant.numGuests || 100;
// console.log(restaurantGuest2);

// console.log('-------AND------'); // NOTE: return false immediately
// console.log(0 && 'Jonas');
// console.log(10 && 'Jonas');
// console.log('hello' && 23 && null && 'Jonas');

// //Sample:
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Jingi', 'Onion');

/**
 * NOTE: SUmmary, || 短路会返回最后一个 true 值， && 短路会返回最后一个false值
 * || 可以用来做默认值设置， &&可以用来做方法调用判断,如果第一个判断条件是真
 */

//**04 the rest pattern and parameters */
// 1) deconstruct
// SPREAD, because on RIGHT side of =
//NOTE: 解包
// const arr = [1, 2, ...[3, 4]];
// // console.log(arr);//[1,2,3,4]
// // console.log(...arr);// 1,2,3,4

//NOTE: REST , because on LEFT side of =
//NOTE: Otherwize, Rest is to combine single element as a arr
//NOTE: 打包
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherDishes] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherDishes);

//NOTE: REST work on Object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(1, 2);
// add(2, 3, 5, 7);
// add(3, 5, 7, 8, 9, 1);

// const x = [23, 5, 9];
// add(...x);

// restaurant.orderPizza('mushroom', 'orchina', 'onion', 'baccon');
// restaurant.orderPizza('mushroom');

//**03 The spread operator(...) */
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

//NOTE： spread operator usage: 1) expand arr  .
// const newArr = [1, 2, ...arr];
// console.log(newArr);
//NOTE: 2)pass arguments into functions .
// console.log(...newArr); // console.log(1,2,7,8,9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu); // NOTE: the difference between deconstrcut array and using spread operator is that spread operator will not create new variable .

// COPY Array; NOTE: Shallow Copy
// const mainMenuCopy = [...restaurant.mainMenu];
// // mainMenuCopy.push('Chip');
// // console.log(restaurant.mainMenu);
// // console.log('print main menu copy', mainMenuCopy);

// //Join 2 arrays
// const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(wholeMenu);

//NOTE: Iterables： arrays, strings, maps, sets. NOT objects .
// const str = 'Jonas';
//NOTE: when building an array or when passing values into a function, it's time to use spread operator .
// const letter = [...str, ' ', 'S.'];
// console.log(letter);

// // Real-world Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(...ingredients);
// restaurant.orderPasta(...ingredients);

// Object
// const newRestaurant = { founder: 'MamaMiya', ...restaurant, Since: 1971 };
// console.log(newRestaurant);
// NOTE: 浅拷贝：创建一个对象，新对象对原有对象属性值一份精确拷贝。深拷贝： 创建一个一模一样的新对象，内存不共享(对于对象和数组而言)
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Cisco Mami';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

//**02 Object deconstruct */
//NOTE: Sample, use object as argument
// restaurant.createDelivery({
//   time: '20:30',
//   address: 'St.Paul No.20',
//   startIndex: 2,
//   mainIndex: 1,
// });
// // Use default
// restaurant.createDelivery({});

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// Sample 1: NOTE: handle response body, get elements from variable and rename .
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(name, hours, tags);

// Sample 2: handle response body, NOTE: Handle empty value by setting default value .
// const { menu: menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// NOTE: Mutating variables .
// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 34, c: 99 };
// ({ a, b } = obj);
// console.log(a, b);

//NOTE: Syntax : how to handle Nested object .
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//**01 Deconstruct Array */
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//NOTE: make sure this deconstruct syntax use const .
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

//NOTE: deconstruct, which get elements by arr order .
// // const [first, second] = restaurant.categories;
//NOTE: how to get first , and third syntax:
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switch variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

//NOTE: SYntax, witch variables .
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//NOTE: Deconstruct nested array .
// const nested = [2, 3, [4, 5]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//NOTE: Default values .
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
