$(document).ready(function () {
  "use strict";
  if ($('.slick')[0]) {
    $('.slick').slick({
      arrows: false,
      rtl: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4900,
      speed: 500,
      cssEase: 'ease-in',
      swipe: false,
      pauseOnHover: false
    });

    $('.phone').slick({
      asNavFor: '.slick',
      rtl: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4900,
      speed: 500,
      cssEase: 'cubic-bezier(0.550, 0.085, 0.680, 0.530)',
      swipe: true,
      pauseOnHover: false
    });
  }
  
  //Select All Checkboxes
  $('#all').click(function (e) {
    if (this.checked) {
      $('.check').each(function () {
        this.checked = true;
      });
    } else {
      $('.check').each(function () {
        this.checked = false;
      });
    }
  });
  
  //Deselect the All checkbox
  $(".check").click(function () {
    if (!$(this).is(":checked")) {
      $("#all").prop("checked", false);
    } else {
      var flag = 0;
      $(".check").each(function () {
        if (!this.checked) {
          flag = 1;
        }
      });
      if (flag === 0) { $("#all").prop("checked", true); }
    }
  });
  
  // Off Canvas
  var mobNav = 0;
  
  $('[data-toggle="offcanvas"]').click(function () {
    $('.sidebar-offcanvas').toggleClass('active')
    if (mobNav == 0) {
      $('body').css({
        overflowY: 'hidden' 
      });
      mobNav = 1;
    } else {
      $('body').css({
        overflowY: 'auto' 
      });
      mobNav = 0;
    }
  });
  
});

//Fixed Nav Animation on Scroll
$(window).scroll(function () {
  "use strict";
  var wScroll = $(this).scrollTop();
  
  if ($('.home-main')[0]) {
    if (wScroll > $('.home-main').offset().top + 40) {
      $('.main-nav').addClass('scroll-nav-home');
      $('.nav-link').addClass('scroll-link');
    } else {
      $('.main-nav').removeClass('scroll-nav-home');
      $('.nav-link').removeClass('scroll-link');
    }
  } else {
    if (wScroll > $('.hero').offset().top + 80) {
      $('.main-nav').addClass('scroll-nav');
      $('.nav-link').addClass('scroll-link');
    } else {
      $('.main-nav').removeClass('scroll-nav');
      $('.nav-link').removeClass('scroll-link');
    }
  }
  
});

(function(){
  var setViewportHeight = (function(){
    function debounced(){
      document.documentElement.style.height = window.innerHeight + "px";
      if (document.body.scrollTop !== 0) {
        window.scrollTo(0, 0);
      }
    }
    var cancelable = null;

    return function(){
      cancelable && clearTimeout(cancelable);
      cancelable = setTimeout(debounced, 100);
    };
  })();

  //ipad safari
  if(/iPad/.test(navigator.platform) && /Safari/i.test(navigator.userAgent)){  
    window.addEventListener("resize", setViewportHeight, false);
    window.addEventListener("scroll", setViewportHeight, false);
    window.addEventListener("orientationchange", setViewportHeight, false);
    setViewportHeight();
  }
})();