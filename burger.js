const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const leftInner = document.querySelector('.left__inner');
const border = document.querySelectorAll('.column-left__text');
const menuItem = document.querySelectorAll('.menu__item');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  leftInner.classList.toggle('hidden');
  border.forEach((item) => item.classList.toggle('border-hidden'));
  document.querySelector('.header__description').classList.toggle('dark');
  burger.classList.toggle('burger_active');
});

menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.toggle('active');
      leftInner.classList.toggle('hidden');
      border.forEach((item) => item.classList.toggle('border-hidden'));
      document.querySelector('.header__description').classList.toggle('dark');
      burger.classList.toggle('burger_active');
    }
  });
});
