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

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//comment 
// const header = document.querySelector('.header');

// const mes = document.createElement('div');
// mes.classList.add('cookie-message');
// mes.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.after(mes);
// mes.style.background = "grey";
// document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//   mes.parentElement.removeChild(mes);
//   // mes.remove();
  
// });

// mes.style.height = Number.parseFloat(getComputedStyle(mes).height) + 200 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'violet');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',(e)=>{
  e.defaultPrevented;
  // const scroll = section.getBoundingClientRect().top;
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)', pageXOffset,pageYOffset)

  // window.scrollTo({
  //   top : scroll+pageYOffset,
  //   behavior : "smooth",
// });
section.scrollIntoView({behavior:'smooth'})
});

const h1 = document.querySelector('h1');
const h4 = document.querySelector('h4');

// [...h1.parentElement.children].forEach(function (ele, i) {
//   setTimeout(() => {
//     if (h4 !== ele) ele.style.transform = 'scale(0.5)';
//   }, 3000 * i); // Delay each iteration by 3000 milliseconds times its index
// });




// h1.onmouseenter = () => {
//   alert("hy ishwar");
// }

// console.log(h1.parentElement.children);

// const header1 = document.querySelector('.eader__title')

// console.log(h1.parentElement);


