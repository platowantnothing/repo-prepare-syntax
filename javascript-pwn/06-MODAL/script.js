'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

//default settingL: get the first one
//console.log(document.querySelector('.show-modal'));
const openModal = function () {
  console.log('Btn clicked');
  modal.classList.remove('hidden' /*, for more class*/);
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//**How to handle ESC keypress*/
//1) global event
// keyup: off the key, keypress: contiunous press key, kedown:press a key
document.addEventListener('keydown', function (event) {
  // When this function is called, ask js to use argument, that is an Object
  // console.log('A key was pressed');

  // How to know which key is pressed
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
