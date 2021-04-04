$(window).scroll(() => {
  let headerContainer = $(".header-container");

  if ($(window).scrollTop() >= headerContainer.offset().top) {
    $(".header, .header-link, .header-link-2").addClass("shrink");

    $(".cool").css({
      "margin-top": 0,
      opacity: 1,
    });
  }

  if ($(window).scrollTop() < headerContainer.offset().top) {
    $(".header, .header-link, .header-link-2").removeClass("shrink");

    $(".cool").css({
      "margin-top": 100,
      opacity: 0,
    });
  }
});
