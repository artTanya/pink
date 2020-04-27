var header = document.querySelector('.main-header');
var navMain = document.querySelector('.main-nav');
var burger = document.querySelector('.main-header__burger');

header.classList.remove('main-header--dense');
burger.classList.remove('main-header__burger--hidden');
navMain.classList.add('main-nav--closed');

burger.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
  burger.classList.toggle('main-header__burger--closed');
  header.classList.toggle('main-header--dense');
});
