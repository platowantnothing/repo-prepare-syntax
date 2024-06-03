'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1999) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial); // var is function scope
    // console.log(add(2, 3));
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1997);
