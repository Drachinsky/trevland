const btnMenu = document.querySelector('.header__btn-menu');
const nav = document.querySelector('.header__nav');

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('header__btn-menu--open');
    nav.classList.toggle('header__nav--open');
});

const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    slidesPerGroup: 2,
    centeredSlides: true,
    spaceBetween: 73,
    loop: true,
    pagination: {
      el: '.special-ofers__pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.special-ofers__next',
        prevEl: '.special-ofers__prev',
    },
});

