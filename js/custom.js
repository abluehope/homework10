$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header, .to_top").addClass("on");
      hover();
    } else {
      $(".header, .to_top").removeClass("on");
    }
  });

  function hover() {
    if ($(".header").hasClass("on")) {
      return;
    }

    $(".header .header_wrap .gnb").hover(
      function () {
        $(".header .header_wrap").css("background", "#ffffff");

        $(".header .header_wrap h1 a").css(
          "background-image",
          "url(../images/top_logo.png)"
        );

        $(".header .header_wrap .customer_link .call").css("color", "#003058");
      },
      function () {
        $(".header .header_wrap").css("background", "transparent");
        $(".header .header_wrap h1 a").css(
          "background-image",
          "url(../images/top_logo_wh.png)"
        );

        $(".header .header_wrap .customer_link .call").css("color", "#ffffff");
      }
    );
  }

  $(".header .gnb>ul>li>a").on("click", function (e) {
    if ($(".header .gnb").hasClass("on")) {
      e.preventDefault();
      $(this).next().stop().slideToggle();
      $(this).parent().siblings().find(".submenu").slideUp();
    }
  });

  $(".mobile_btn").on("click", function () {
    $(this).toggleClass("on");
    $(".gnb").toggleClass("on");
  });

  $(window).on("resize", function () {
    $(".header .gnb").removeClass("on");
    $(".submenu").removeAttr("style");
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
        },
      },
    ],
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
        },
      },
    ],
  });

  $(".main_news .arrows .left").on("click", function () {
    $(".news_slide").slick("slickPrev");
  });
  $(".main_news .arrows .right").on("click", function () {
    $(".news_slide").slick("slickNext");
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
});
