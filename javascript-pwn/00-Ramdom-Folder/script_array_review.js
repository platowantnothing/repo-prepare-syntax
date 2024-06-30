'use strict';

// arr.slice(startIndex, endIndex) , return a new array
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.slice(1, -1));

// arr.splice(startIndex, deleteNumber), return an arry, but it'll change the original array
console.log(arr.splice(0, 1));
console.log(arr);

// arr.reverse() , it'll change the original array
arr.reverse();
console.log(arr);

// arr.concat(newArr): combine array and return a new array
const music = ['pop', 'class', 'k-pop'];
const allGenera = music.concat(['jazz', 'rnb']);
console.log(music);
console.log(allGenera);

// arr.join(), return a string but handle elements in Array
console.log(music.join(','));

// how to get the last element?
console.log(music.slice(-1)[0]); //approach 1
console.log(music.at(-1)); //approach 2, arr.at(index)
console.log(music.at(0));

console.log('------------');
// forEach : Array
for (const [index, type] of music.entries()) {
  console.log(index, type);
}
music.forEach(function (currentEle, currentIndex, arr) {
  console.log(currentEle, currentIndex);
});

// forEach : Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (curEle, curInd, map) {
  console.log(`${curEle}, ${curInd}`);
});

const currenciesAbbr = new Set(['EUR', 'EUR', 'GBP', 'USD', 'YEN']);
currenciesAbbr.forEach(function (curEle, curInd, set) {
  console.log(`${curEle}, ${curInd}`); // curEle = curInd for Set
});

// arr.map(), return a new Array
const movements = [123, 453, 222, 431, 765, 12, 87];
console.log(movements.map(mov => mov * 10));

// arr.filter()
const movOver100 = movements.filter(mov => mov > 100);
console.log(movOver100); //[123, 453, 222, 431, 765]

// arr.reduce()

// arr.find()
const movOver100ByFind = movements.find(mov => mov > 100);
console.log(movOver100ByFind); // 123

//arr.includes
console.log(movements.includes(123));
// arr.every() : to identify every elements
console.log(movements.every(mov => mov > 200));
//arr.some()
console.log(movements.some(mov => mov > 200));

// nestedArr.flat()
console.log([[1, 2], 3, 4, [5, 6, 7]].flat());
console.log(
  [
    [1, 2, [3, 4]],
    [5, 6, 7],
  ].flat(2)
);

//nestArr.flatMap()
console.log([[1, 2], 3, 4, [5, 6, 7]].flatMap(num => (num > 5 ? 1 : 2)));

// arr.sort() change the origin arr
const owners = ['jonas', 'adam', 'lilt', 'jodie'];
console.log(owners.sort());
console.log(owners);

console.log('---------------------------');

//create array
const x = new Array(7);
console.log(x);

x.fill(1);
console.log(x);

x.fill(4, 2, 4);

console.log('---------------------------');

// create an array
const y = Array.from({ length: 7 }, () => 7);
console.log(y);

const z = Array.from({ length: 7 }, (_, index) => index + 1);
console.log(z);

/**
 * NOTE:
 * Summary:
 * 1. to mutate original array:
 * 1) add to original:
 *      .push() : add to the end
 *      .unshift() : add to the start
 * 2) remove from original
 *      .pop() : remove the start element
 *      .shift() : remove the start elemennt
 *      .splice() : remove any element
 * 3) others...
 *      .reverse()
 *      .sort(): work for number, more callback function
 *      .fill() : new empty array, and fill elements
 *
 *
 * 2. will create a new array
 * 1) computered from orginal by looping:
 *      .map()
 * 2) filtered using condition:
 *      .filter()
 * 3) Portion of original:
 *      .slice()
 * 4) adding original array to other:
 *      .concat()
 * 5) flattrning the original:
 *      .flat()
 *      .flatMap()
 *
 *
 *
 *
 */
