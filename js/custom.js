$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header, .to_top").addClass("on");
    } else {
      $(".header, .to_top").removeClass("on");
    }
  });

  $(".main_slide").on("init afterChange", function () {
    const current = $(".main_slide .slick-current");
    current.addClass("on").siblings().removeClass("on");
  });

  $(".main_slide").slick({
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
  });

  $(".main_visual .arrows .left").on("click", function () {
    $(".main_slide").slick("slickPrev");
  });
  $(".main_visual .arrows .right").on("click", function () {
    $(".main_slide").slick("slickNext");
  });

  $(".premiun_slide").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".main_premiun .arrows .left").on("click", function () {
    $(".premiun_slide").slick("slickPrev");
  });
  $(".main_premiun .arrows .right").on("click", function () {
    $(".premiun_slide").slick("slickNext");
  });

  $(".news_slide").slick({
    slidesToShow: 2,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $(".main_news .arrows .left").on("click", function () {
    $(".news_slide").slick("slickPrev");
  });
  $(".main_news .arrows .right").on("click", function () {
    $(".news_slide").slick("slickNext");
  });
});
