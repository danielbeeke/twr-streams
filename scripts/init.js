// Variables with functions and bootstrap functions.
$.fn.twrFunctions = {};
$.fn.twrCallFunctions = {};

// Adding a class to the body so we can theme specific for each phone type.
// $.fn.twrCallFunctions.deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";
$.fn.twrCallFunctions.deviceType = 'Android';
$('body').addClass($.fn.twrCallFunctions.deviceType);

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

      // Render all the twig templates
      $('#slides').html(twig({ ref: "streams" }).render(streams));
      $('#pager').html(twig({ ref: "pager" }).render(streams));
      $('#menu').html(twig({ ref: "menu" }).render(streams));

      $('#slides').css('width', $('#slides .slide').length * 100 + "%");
      $('#slides .slide').css('width', 100 / $('#slides .slide').length + "%");

      // Init all our own scripts
      $.each($.fn.twrFunctions, function(index, twrFunction) {
        twrFunction.attach();
      });

      // Active BUT not start the first stream.
      $.fn.twrCallFunctions.setActiveStream(0, false);

    });

  }

// Only for debugging on computers without Cordova.
onDeviceReady();


})(jQuery);
