'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },

  // NOTE: the function argument is an Object {}
  createDelivery: function ({
    startIndex = 1,
    mainIndex = 1,
    address = 'No.10 Ling Road',
    time = '19:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

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
const newRestaurant = { founder: 'MamaMiya', ...restaurant, Since: 1971 };
console.log(newRestaurant);
// NOTE: 浅拷贝：创建一个对象，新对象对原有对象属性值一份精确拷贝。深拷贝： 创建一个一模一样的新对象，内存不共享(对于对象和数组而言)
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Cisco Mami';
console.log(restaurant.name);
console.log(restaurantCopy.name);

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
