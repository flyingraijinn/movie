let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
  var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 2,  // Corrected from slidePerView to slidesPerView
      },
      568: {
        slidesPerView: 3,  // Corrected from slidePerView to slidesPerView
      },
      768: {
        slidesPerView: 4,  // Corrected from slidePerView to slidesPerView
      },
      968: {
        slidesPerView: 5,  // Corrected from slidePerView to slidesPerView
      },
    },
});