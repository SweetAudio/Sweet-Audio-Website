function makeCarousel(selector) {
  const el = document.querySelector(selector);
  if (!el) return;

  new Swiper(el, {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
   // autoplay: { delay: 2200, disableOnInteraction: false }, //
    pagination: { el: el.querySelector(".swiper-pagination"), clickable: true },
navigation: {
  nextEl: el.parentElement.querySelector(".swiper-button-next"),
  prevEl: el.parentElement.querySelector(".swiper-button-prev"),
},
pagination: false,
   
  });
}

makeCarousel("#commercial-carousel");
makeCarousel("#narrative-carousel");