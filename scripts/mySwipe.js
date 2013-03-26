
(function ($) {

  $.fn.twrFunctions.mySwipe = {
    attach: function () {
      var elem = document.getElementById('mySwipe');

        $.fn.mySwipe = Swipe(elem, {

          disableScroll: true,

          callback: function(pos) {

            var i = bullets.length;
            while (i--) {
               bullets[i].className = ' ';
            }
            bullets[pos].className = 'on';

            if ($.fn.currentStreamIndex != pos) {
              $.fn.twrCallFunctions.setActiveStream(pos);
            }
          }
        });

      var bullets = document.getElementById('position').getElementsByTagName('li');
    }
  };

})(jQuery);
