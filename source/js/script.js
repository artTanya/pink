var navMain = document.querySelector('.main-nav');
var burger = document.querySelector('.main-header__burger');

burger.classList.remove('main-header__burger--hidden');
navMain.classList.add('main-nav--closed');
burger.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
  burger.classList.toggle('main-header__burger--closed');
});
