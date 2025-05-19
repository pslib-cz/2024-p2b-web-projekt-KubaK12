import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Scrollbar],
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 20,
  loop: false,

  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 30,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const classicHome = document.querySelector('.classic__home');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active'); // zobrazí / skryje menu
  classicHome.classList.toggle('active'); // zobrazí / skryje klasickou domovskou stránku
  line1.classList.toggle('active'); // animace pro čáru
  line2.classList.toggle('active'); // animace pro čáru
  line3.classList.toggle('active'); // animace pro čáru
});
const container = document.querySelector('.oProduktu');
const span = container.querySelector('span');
const arrow = container.querySelector('.home__sipka');

arrow.addEventListener('click', () => {
  if (span.style.display === 'none' || !span.style.display) {
    span.style.display = 'block'; // nebo block podle potřeby
  } else {
    span.style.display = 'none';
  }
});
