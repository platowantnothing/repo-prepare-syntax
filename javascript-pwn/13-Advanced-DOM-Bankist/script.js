'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const navLink = document.querySelectorAll('.nav__link');
const navLinks = document.querySelector('.nav__links');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

// LEARN MORE TO Scroll
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////
// Page navigation //**8 EVENT delegation: event propagation implement */
navLinks.addEventListener('click', function (e) {
  e.preventDefault();

  // console.log(e.target.classList);
  // MATCHING Strategy
  if (e.target.classList.contains('nav__link')) {
    console.log(e.target);
    const sectionId = e.target.getAttribute('href');
    document
      .querySelector(`${sectionId}`)
      .scrollIntoView({ behavior: 'smooth' });
  }
});
//NOTE: OLD WAY AND NOT RECOMMEND. If there are 1000+ tab, forEach wastes efficient. Solution: Using Event Delegation
// navLink.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const sectionId = this.getAttribute('href');
//     document
//       .querySelector(`${sectionId}`)
//       .scrollIntoView({ behavior: 'smooth' });
//   });
// });

////////////////////////////////////////////////////////
// TABBED component
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard Clause
  if (!clicked) return;

  // ACTIVE TAB
  tabs.forEach(e => e.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // ACTIVE CONTENT AREA
  tabsContent.forEach(e => e.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handlerHover = function (e) {
  // console.log(this, e.currentTarget); //NOTE: Here, this = event.currentTarget; but 'this' also can be the value we manually passing in /// Review: Event listener_ : this = DOM element that the handler is attched to

  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    // change siblings opacity
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    // change logo opacity
    logo.style.opacity = this;
  }
};

// Passing 'argument' into handler
nav.addEventListener('mouseover', handlerHover.bind(0.5));
nav.addEventListener('mouseout', handlerHover.bind(1));

// nav.addEventListener('mouseover', function (e) {
//   handlerHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handlerHover(e, 1);
// });

//**12 IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT */
//// Sticky navigation
// const section1Coordinate = section1.getBoundingClientRect();

// //TODO: In modern JS, the scroll is out-of-dated
// window.addEventListener('scroll', function (e) {
//   if (window.screenY > section1Coordinate.top) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });
//**13 A BETTER WAY: THE INTERSECTION OBSERVER API */
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

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
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   // get the COORDINATE to scroll
//   const s1ccords = section1.getBoundingClientRect();
//   // console.log(s1ccords);

//   // console.log(e.target.getBoundingClientRect()); // console.log(this.getBoundingClientRect()); // NOTE e.target() same as this. which means that bottom coordinate

//   // NOTE: print curr
//   // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

//   // NOTE: read this viewboard(brower view space) height and width
//   // console.log(
//   //   'height/width viewpoint:',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );

//   // Scrolling, But only relatively cooridinate
//   // Ӧ��ҳ�����ض��ϣ������»�y
//   // window.scrollTo(s1ccords.left, s1ccords.top);

//   // window.scrollTo({
//   //   left: s1ccords.left + window.pageXOffset,
//   //   top: s1ccords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // MODERN WAY
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

//**5 TYPES of EVENTS and EVENTS HANDLERS */
/**
 * NOTE:
 * 1/ mouse handler event
 *    MDN EVENT Reference : https://developer.mozilla.org/en-US/docs/Web/Events
 * 2/ Three way
 *    addEventListener;
 *    onmouseenter;
 *    HTML;
 */
// SAMPLE1:
// const alertFn = () => {
//   alert('addEverntLister: Great@ Your are heading the heading :D');

//   // clear eventListener
//   // h1.removeEventListener('mouseenter', alertFn);
// };
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertFn); // common use, and the adavantage is to expand use, like delete eventLisener

// setTimeout(() => h1.removeEventListener('mouseenter', alertFn), 3000);

// SAMPLE2: OLD WAY TO HANDLE EVENT
// h1.onmouseenter = event => {
//   alert('onmouseenter: Great@ Your are heading the heading :D');
// };

//SAMPLE3: HTML for index.html
{
  /* <h1 onclick="alert('onclik....')"> */
}

//**6 EVENT propagation: Bubbling and capturing */
/**
 * NOTE: ./README.md
 *
 */

//**7 EVENT propagation in practice*/
// rgb(255,255,255)
/**
 * NOTE: ./README.md
 * - stop propagtion
 * - make event happened on capture phrase addEventListerner(action,fn,true)
 */
// Ramdom generate number
// const ramNumGne = (min, max) =>
//   min + Math.trunc(Math.random() * (max - min + 1));

// // Change background color
// const changeBgColor = function () {
//   return `rgb(${ramNumGne(0, 255)},${ramNumGne(0, 255)},${ramNumGne(0, 255)})`;
// };

// // add click event
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = changeBgColor();
//   console.log('LINK', e.target, e.currentTarget);

//   console.log('print this and currentTarget:  ', this === e.currentTarget);

//   // stop propagtion
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = changeBgColor();
//   console.log('LINKS', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = changeBgColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true // NAV -> LINK -> LINKS
// );

// make event happened on capture phrase addEventListerner(action,fn,true)

//**8 EVENT delegation: event propagation implement */

//**9 DOM TRAVERSING */
/**
 * NOTE: DOM TRAVERSING: In a nutshell, select element based on other elements
 */

// const h1 = document.querySelector('h1');

// // Going downwards: child
// console.log(h1.querySelectorAll('.highlight')); //only select h1 child element and also class=highlight
// console.log(h1.childNodes);
// console.log(h1.children); // work for directly children
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'black';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// //NOTE: need find a parent element (IMPORTANT for event delegation)
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling); //elemet
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling); //nodes
// console.log(h1.nextSibling);

// //Work sibling elements with one elemnt :  from current element to find same level elements
// console.log(h1.parentElement.children); //HTML Collection
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });

//**10 Building a tabbed component */

//**11 PASSING AREGUMENTS TO EVENT HANDLERS >>>  Menu fade animation*/
