const eventsSlider = new Swiper(".js-events-slider", {
  slidesPerView: 1,
  spaceBetween: 20,

  grid: {
    rows: 1,
    fill: "row"
  },

  pagination: {
    el: ".js-events-pagination"
  },

  navigation: {
    nextEl: ".js-events-next",
    prevEl: ".js-events-prev",
    disabledClass: "nav-btn--disabled"
  },

  breakpoints: {
    611: {
      slidesPerView: 2,
      spaceBetween: 34
    },

    971: {
      slidesPerView: 3,
      spaceBetween: 27
    },

    1281: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});
