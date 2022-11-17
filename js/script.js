'use strict';

// element toggle function
const elemToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

const navbar = document.querySelector('.navbar');
const navOpenBtn = document.querySelector('.nav-open-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');
const overlay = document.querySelector('.overlay');

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let elem of navElemArr) {
  elem.addEventListener('click', function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  });
}

const goTopBtn = document.querySelector('.go-top');
window.addEventListener('scroll', function () {
  if (this.scrollY >= 800) {
    goTopBtn.classList.add('active');
  } else {
    goTopBtn.classList.remove('active');
  }
});
