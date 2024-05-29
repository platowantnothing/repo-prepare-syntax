'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

//default settingL: get the first one
//console.log(document.querySelector('.show-modal'));

for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].textContent);
}
