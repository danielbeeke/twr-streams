(function ($) {
  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady(){
    var streamTemplate = twig({
        id: "streams",
        href: "templates/stream.twig",
        async: false,
    });

    var pagerTemplate = twig({
        id: "pager",
        href: "templates/pager.twig",
        async: false,
    });

    var menuTemplate = twig({
        id: "menu",
        href: "templates/menu.twig",
        async: false,
    });

    $.getJSON('streams.json', function(streams) {

      $.fn.twrCallFunctions.data = streams;

      $('#sw-wrap').html(twig({ ref: "streams" }).render(streams));
      $('#pager').html(twig({ ref: "pager" }).render(streams));
      $('#menu').html(twig({ ref: "menu" }).render(streams));

      $.each($.fn.twrFunctions, function(index, twrFunction) {
        twrFunction.attach();
      });

      $.fn.twrCallFunctions.setActiveStream(0, false);

      $("#position li:first-child").addClass("on");


    });
  }

// Uitcommenten
onDeviceReady();

})(jQuery);
