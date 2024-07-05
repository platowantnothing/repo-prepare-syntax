'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    openModal();
  });
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//**1 How the DOM Works  -- README.md*/

//**2 Select, Create, and Delete elements */
// // 1 Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header'); // class -> .className
// document.querySelector('.body');

// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// //NOTE: getElementsByTagName (live HTML elements) will automatically update HTML elements
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn')); //NOTE: return live HTML elements

// // 2 Creating and inserting elements
// // NOTE: review, about create html elements
// // .insertAdjacentHTML

// const messgae = document.createElement('div'); //return a DOM element. Just store, if we want to use it, need insert
// messgae.classList.add('cookie-message'); // add class for the DOM
// // messgae.textContent = 'We provide cookiesd for improve analytics.'; // insert text
// messgae.innerHTML =
//   'We provide cookiesd for improve analytics. <button class="btn btn--close--cookie">Got it!</button>'; // Insert html

// //insert dom into HTML
// // header.prepend(messgae); //NOTE: header.prepend() under the <header>
// header.append(messgae); // NOTE: header.append() above the </header>
// // NOTE: the DOM cannot appear twice, DOM element is unique
// // header.append(messgae.cloneNode(true));

// // header.before(messgae);
// // header.after(messgae);

// // 3 Delete elements
// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     // messgae.remove(); //this is new feature launched soon
//     //old-way
//     messgae.parentElement.removeChild(messgae); // Select the parent element then delete the child element
//   });

//**3 STYLES, ATTRIBUTES AND CLASSES */

// //1 Styles
// // NOTE: Styles is incline style, only get value which automatically set, instead of default and non-exist value
// messgae.style.backgroundColor = '#37383d';
// messgae.style.width = '120%';

// // console.log(messgae.style.height); //empty string
// // console.log(messgae.style.width); //120%

// // NOTE: get deflaut style setting, and value retrieve from browser
// console.log(getComputedStyle(messgae).height);

// messgae.style.height =
//   Number.parseFloat(getComputedStyle(messgae).height, 10) + 40 + 'px';

// // NOTE: change variable in CSS properties
// document.documentElement.style.setProperty('--color-primary', 'orangered'); // .setProperty(propertyName, value)

// //2 ATTRIBUTES
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// // reset the attr value
// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);

// // Non-standard
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); // Jolin >> get the non-standard value
// logo.setAttribute('company', 'the Bankist');

// // NOTE: the whole path vs. the relative path
// console.log(logo.src);
// console.log(logo.getAttribute('src')); //img/logo.png >> relative path

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href')); //#  >> relative path

// // DATA Attributes format
// /**
//  * NOTE:
//  *  The dataset read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-*) on elements. It exposes a map of strings (DOMStringMap) with an entry for each data-* attribute.
//  * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
//  */
// console.log(logo.dataset.versionNumber); // index.html >> data-version-number

// // 3 Classes

// // use the classList API to remove and add classes
// logo.classList.add('anotherclass', 'fakeClass');
// logo.classList.remove('fakeClass');
// logo.classList.toggle('fakeClass'); // if fakeClass is set remove it, otherwise add it
// console.log(logo.classList.contains('anotherclass')); //not include

//**4 Implement smooth scrolling */
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // get the COORDINATE to scroll
  const s1ccords = section1.getBoundingClientRect();
  // console.log(s1ccords);

  // console.log(e.target.getBoundingClientRect()); // console.log(this.getBoundingClientRect()); // e.target() same as this. which means that bottom coordinate

  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  // console.log(
  //   'height/width viewpoint:',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // // Scrolling
  // window.scrollTo(s1ccords.left, s1ccords.top);
});
