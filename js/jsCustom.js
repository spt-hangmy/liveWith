$(document).ready(function () {
  $(".btn-menu-mb").click(function () {
    $(this).removeClass("show");
    $(".btn-close-mb").addClass("show");
    $(".wrap-list-menu-mb").addClass("show");
  });

  $(".btn-close-mb").click(function () {
    $(this).removeClass("show");
    $(".btn-menu-mb").addClass("show");
    $(".wrap-list-menu-mb").removeClass("show");
  });

  $(".slick-slider").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  });
});
