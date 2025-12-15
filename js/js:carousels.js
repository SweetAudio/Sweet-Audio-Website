function makeCarousel(selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  new Swiper(el, {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 12,
    centeredSlides: false,
    grabCursor: true,
    autoplay: { delay: 2200, disableOnInteraction: false },
    pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },
    breakpoints: {
      640: { slidesPerView: 3 },
      900: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  });
}

makeCarousel("#commercial-carousel");
makeCarousel("#narrative-carousel");