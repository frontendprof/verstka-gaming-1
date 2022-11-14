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
