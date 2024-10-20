const navBtn = document.getElementById('nav-btn');
const navList = document.querySelector('.nav__list');

navBtn.addEventListener('click', () => {
  navList.classList.toggle('open'); // Добавляем/удаляем класс 'open'
  
  // Изменение иконки "бургер"
  const navBtnImg = document.getElementById('nav-btn-img');
  if (navList.classList.contains('open')) {
    navBtnImg.src = './img/mobile icons/nav-close.svg'; // Иконка закрытия
  } else {
    navBtnImg.src = './img/mobile icons/nav-open.svg'; // Иконка открытия
  }
});

const cardImages = document.querySelectorAll('.card_head img','.open_img img'); 

cardImages.forEach(image => {
  image.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Отменяем контекстное меню
  });
});





AOS.init();

