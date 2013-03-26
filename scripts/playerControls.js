(function ($) {

  $.fn.twrFunctions.playerControls = {
    attach: function () {

      $('#playStream').click(function() {
        $.fn.twrCallFunctions.playActiveStream();
        return false;
      });

      $('#stopStream').click(function() {
        $.fn.twrCallFunctions.stopActiveStream();
        return false;
      });

    }
  };

})(jQuery);
