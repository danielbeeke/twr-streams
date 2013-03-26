(function ($) {

  $.fn.twrFunctions.touchController = {
    attach: function () {

    // Next slide
    $$('#slides').swipeLeft(function() {
      if ($('body:not(".active-menu")').length) {
        $.fn.twrCallFunctions.setActiveStream($.fn.currentStreamIndex + 1);
      }
    });

    // Deactivate menu
    $$('#menuWrapper, .active-menu #contentWrapper').swipeLeft(function() {
      $('body').removeClass('active-menu');
    });

    // Activate menu
    $$('#header, #player').swipeRight(function() {
      $('body').addClass('active-menu');
    });

    // Previous slide
    $$('#slides').swipeRight(function() {
      $.fn.twrCallFunctions.setActiveStream($.fn.currentStreamIndex - 1);
    });


    }
  };

})(jQuery);
