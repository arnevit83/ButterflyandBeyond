/*! Custom * !*/




  function CloseMobilemenu() {
    $('html').removeClass('nav-open');
    materialKit.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    if (typeof $toggle != 'undefined') {
      setTimeout(function() {
        $toggle.removeClass('toggled');
      }, 550);
      $('html').removeClass('nav-open-absolute');
    }

    $(".mobile-close").click(function(event) {
      CloseMobilemenu();
    });
  };



  function galleryfeedkFunc() {
    window.setTimeout(function() {
      $(".gallery-feed").find("a").replaceWith(function() {
        return $(this).contents();
      });
    }, 3000);
  };
  window.setTimeout(function() {
  //   $("#SliderBanner").children().children().css("display", "block");
  // }, 2000);
  // $(window).on('hashchange', function(e) {
  //   jQuery(document).ready(function($) {
  //     Rightmenu();
  //   });
  //   Rightmenu();
  // });
  CloseMobilemenu();
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 200) {
      $('.ScrollUp').fadeIn();
      // if ($(window).scrollTop() + $(window).height() > $(document).height() - 500) {
      //   $('#vertical-nav').fadeOut("fast");
      // } else {
      //   $('#vertical-nav').fadeIn();
      // }
    } else {
      $('.ScrollUp').fadeOut();
      // $('#vertical-nav').fadeOut("fast");
    }
  });
  $('.ScrollUp').hover(
    function() {
      $(this).addClass('shadow')
    },
    function() {
      $(this).removeClass('shadow')
    }
  )
  $('.ScrollUp').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'fast');
    $('.ScrollUp').fadeIn();
    return false;
  });
  $('.gallery-feed').spectragram('getUserFeed', {
    complete: galleryfeedkFunc(),
    max: 8,
    size: "small",
    wrapEachWith: "<div class='IGFeed'></div>"
  });
  // Rightmenu();


 }, 2000);


