$(document).ready(function () {
  const $carousel = $(".thanda-shanda-slider.owl-carousel");
  const $prevBtn = $carousel.find(".owl-prev");
  const $nextBtn = $carousel.find(".owl-next");

  $(document).mousemove(function (e) {
    const winWidth = $(window).width();
    const mouseX = e.pageX;

    // Clear both buttons first
    $prevBtn.removeClass("show");
    $nextBtn.removeClass("show");

    if (mouseX < winWidth / 2) {
      // Show prev button only
      $prevBtn.addClass("show");
    } else {
      // Show next button only
      $nextBtn.addClass("show");
    }
  });

  // Optional: Hide buttons when mouse leaves the window
  $(document).mouseleave(function () {
    $prevBtn.removeClass("show");
    $nextBtn.removeClass("show");
  });
});
function openDateTimePicker() {
  document.getElementById("customDatetime").showPicker();
}
