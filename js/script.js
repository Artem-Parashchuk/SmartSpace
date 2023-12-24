const swiper = new Swiper('.slider-main-block.swiper', {
    // Optional parameters
    loop: true, 
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });