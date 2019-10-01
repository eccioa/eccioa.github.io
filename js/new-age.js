(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };

  var cardTransfrom = function() {
    var cards = $("div[class='card']");
    var pageOffset = window.pageYOffset + window.innerHeight;
    // console.log(cards.length);
    for(var i=0; i<cards.length; i++){
      var height = $(cards[i]).height();
      var bottom = $(cards[i]).offset().top + height;
      // console.log(bottom);
      var opacity = (pageOffset - (bottom - height * 0.4)) / (height * 0.3);
      if(opacity > 1){
        opacity = 1;
      }else if(opacity < 0){
        opacity = 0;
      }
      $(cards[i]).css("opacity", opacity.toString());
      $(cards[i]).css("transform", "scale(" + opacity.toString() + ")");
    }
  }

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  $(window).scroll(cardTransfrom);

})(jQuery); // End of use strict
