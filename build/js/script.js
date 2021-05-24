'use strict'

function openMenu() {
   const getButton = document.querySelector('.header__btn-menu_close');
   getButton.classList.toggle('header__btn-menu_open');
   const getItems = document.getElementsByClassName('header__item');
   for(let i = 0; i < getItems.length - 1; i++) {
    getItems[i].classList.toggle('show-menu');
   };
};

const circle = document.querySelector('.circle');
const rhombus = document.querySelector('.rhombus');
const triangle = document.querySelector('.triangle');

let arrayImg = [circle, rhombus, triangle];

for(let j=0; j<=arrayImg.length - 1; j++) {
  let element = arrayImg[j];
  for(var i = 0; i < 6; i++){
    let min = Math.ceil(10);
    let max = Math.floor(35);
    let widthMax = Math.floor(document.documentElement.scrollWidth - 40);
    let heightMax = Math.floor(document.documentElement.scrollHeight - 40);

    let getWidth = Math.floor(Math.random() * (widthMax - min + 1)) + min;
    let getHeight = Math.floor(Math.random() * (heightMax - min + 1)) + min;
    let getValue = Math.floor(Math.random() * (max - min + 1)) + min;

    element.style.top = getHeight + 'px';
    element.style.left = getWidth + 'px';
    element.style.width = getValue + 'px';
    element.style.height = getValue + 'px';

    let clone = element.cloneNode(false);
    document.body.insertAdjacentElement('beforeEnd', clone);
  };
  document.body.removeChild(element);
};