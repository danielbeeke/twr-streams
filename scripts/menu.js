(function ($) {

  $.fn.twrFunctions.menu = {
    attach: function () {
      $('#menuToggle').click(function() {
        $('body').toggleClass('active-menu');
      });

      $('.stream-button:not(.processed)').addClass('processed').click(function() {
        $('body').removeClass('active-menu');
        $.fn.twrCallFunctions.setActiveStream(parseInt($(this).attr('data-id')));
      });

      $('#closeInfo:not(.processed)').addClass('processed').click(function() {
        $('#infoPage').addClass('invisible');
      });

      $('#showInfo:not(.processed)').addClass('processed').click(function() {
        $('#infoPage').removeClass('invisible');
      });

    }
  };

})(jQuery);
