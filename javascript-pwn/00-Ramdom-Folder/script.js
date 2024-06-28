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
console.log(movOver100);

// arr.reduce()

// arr.find()
