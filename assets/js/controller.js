const prevbtn = "<img src='assets/icons/index-thanda-shanda-icon-prev.svg'>";
const nextbtn = "<img src='assets/icons/index-thanda-shanda-icon-next.svg'>";

$(".refresh-bg-img-slider.owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  dots: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".thanda-shanda-slider.owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  navText: [prevbtn, nextbtn],
  nav: true,
  autoplay: true,
  dots: false,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
