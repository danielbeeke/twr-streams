(function ($) {

  $.fn.twrFunctions.menu = {
    attach: function () {

      $('#menuToggle').click(function() {
        $('body').toggleClass('active-menu');
      });

      $('.stream-button').click(function() {
        $('body').removeClass('active-menu');
        $.fn.twrCallFunctions.setActiveStream($(this).attr('data-id'));
      });

       $$('body.active-menu').swipeLeft(function() {
        $('body').removeClass('active-menu');
      });

      // $$('body').swipeRight(function() {
      //   $('body').addClass('active-menu');
      // });

    }
  };

})(jQuery);
