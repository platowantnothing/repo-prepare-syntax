// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
constx = 23;

const xa = '23';

const calcAge = birthYear => 2023 - birthYear;

console.log('ss');
*/

//**HW */
const temps = [17, 21, 23];
function printForecase(arr) {
  let output = '';
  for (let i = 0; i < arr.length; i++) {
    output += `${Number(arr[i])}°C in ${i + 1} days...`;
  }
  return output;
}

console.log(printForecase(temps));
console.log(printForecase([12, 5, -5, 0, 4]));
