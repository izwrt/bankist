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


// const randInt = (min,max) => Math.floor(Math.random() * (max - min + 1)+min);

// const randColor = () => `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})`

// document.querySelector('.nav__links').addEventListener('click',function(){
//   this.style.backgroundColor = randColor();
//   console.log(randColor());
// })

// document.querySelectorAll('.nav__link').forEach((ele) => {
//   ele.addEventListener('click',(e) => {
//     e.preventDefault();
//     const id = ele.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior
//       :"smooth"
//     })
//   })
// })

document.querySelector('.nav__links').addEventListener('click',e => {
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');

    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  }
});

// console.log(h1.nextElementSibling);
// [...h1.parentElement.children].forEach( ele => ele.style.transform = 'scale(0.5)');

// h1.closest('.header').style.background = "red";

// console.log(h1.previousElementSibling);

// h1.children[0].style.color ='red';
// h1.children[2].style.color ='green';
// console.log(h1.children[2])

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click',e => {
  const clicked = e.target.closest('.operations__tab')

  tabs.forEach(t => t.classList.remove('operations__tab--active'));

  if(!clicked) return;

  clicked.classList.add('operations__tab--active');

  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})



//mouse hover

const nav = document.querySelector('.nav');

const eventHandler = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const navLinks = link.closest('.nav').querySelectorAll('.nav__link');
    const navImg = link.closest('.nav').querySelector('img');
    navLinks.forEach(el => {
      if(el !== link){
        el.style.opacity = this;
      }
     
      
    });

    // link.style.opacity = this;
    navImg.style.opacity = this;
  }
}

// nav.addEventListener('mouseout',function(e){
//   if(e.target.classList.contains('nav__link')){
//     const link = e.target;
//     const navImg = link.closest('.nav').querySelector('img');
//     // navLinks.forEach(el => {
//     //     el.style.opacity = 1;
//     //   navImg.style.opacity = 1;
//     // });
//     link.style.opacity = 1;
//     navImg.style.opacity = 1;
//   }
// });

// nav.addEventListener('mouseover',eventHandler.bind(0.5));
// nav.addEventListener('mouseout',eventHandler.bind(1));

// const scrollDist = section.getBoundingClientRect();
// console.log(scrollDist);
// console.log(window.scrollY );


// window.addEventListener('scroll',()=>{
//   if(window.scrollY > scrollDist.top) {
//     nav.classList.add('sticky');
    
//   }
//   else nav.classList.remove('sticky');
// });



const header = document.querySelector('.header');
const dynamicHeight = nav.getBoundingClientRect().height;
console.log(dynamicHeight);

const headerObserver = new IntersectionObserver((e =>{
  const [entry] =e;

  if(!entry.isIntersecting){
    nav.classList.add('sticky');
  }

  else nav.classList.remove('sticky');
}
),{
  root : null,
  threshold : 0,
  rootMargin: `-${dynamicHeight}px`
})

headerObserver.observe(header);
