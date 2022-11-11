const header = $("#header");
$(window).on("scroll", function () {
  const px = $(window).scrollTop();
  if (px > 200) {
    header.addClass("on");
  } else {
    header.removeClass("on");
  }
});
