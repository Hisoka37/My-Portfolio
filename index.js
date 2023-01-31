const mainMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.mobile-menu li a');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
