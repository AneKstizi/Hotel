document.addEventListener("DOMContentLoaded", function() {

  const innerMenu = document.querySelector('.mobile__menu__link--drop__block');
  const itemDrop = document.querySelector('.mobile__menu__item--drop');
  const itemMenu = document.querySelector('.test-1');
  const overlay = document.querySelector('.overlay');
  const hamburger = document.querySelector('.hamburger-icon');
  const hamburgerClose = document.querySelector('.hamburger-icon-first');
  const hamburgerMenu = document.querySelector('.hamburger__wrapper');
  const mobileMenu = document.querySelector('.mobile__menu');

  itemDrop.addEventListener('click', (e) => {

    itemMenu.classList.toggle('test-wd');

    if (document.documentElement.clientWidth < 1094) {

      if (innerMenu.classList.contains('mobile__menu__link--drop__block--active') && !e.target.classList.contains('mobile__menu__link--drop__item')) {
        innerMenu.classList.remove('mobile__menu__link--drop__block--active');
        return;
      }

      innerMenu.classList.add('mobile__menu__link--drop__block--active');

    }
  })


  hamburger.addEventListener('click', () => {
    hamburgerClose.classList.add('active');
    mobileMenu.classList.add('mobile__menu--active');
    hamburgerMenu.classList.toggle('hamburger__wrapper--active');
  })

  hamburgerClose.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile__menu--active');
  })


  setTimeout(() => {
    overlay.style.opacity = 0;
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
  }, 0)


  // Sliders
  const mySwiper = new Swiper ('.slide-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    grabCursor: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.inclusive__slide--right',
      prevEl: '.inclusive__slide--left',
    },
  });
  const swiper = new Swiper('.slide-2', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})
