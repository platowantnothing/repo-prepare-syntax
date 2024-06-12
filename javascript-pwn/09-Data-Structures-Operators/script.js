'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

//1
const scoredArr = game.scored;
for (const [index, name] of scoredArr.entries()) {
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

// //NOTE: REST , because on LEFT side of =
// //NOTE: Otherwize, Rest is to combine single element as a arr
// //NOTE: 打包
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherDishes] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherDishes);

// //NOTE: REST work on Object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
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
