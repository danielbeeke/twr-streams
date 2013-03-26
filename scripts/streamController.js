(function ($) {

  var currentStream;
  $.fn.currentStreamIndex = null;

  $.fn.twrCallFunctions.setActiveStream = function (index, noPlay) {
    if ($.fn.currentStreamIndex != null) {
      $.fn.twrCallFunctions.stopActiveStream();
    }

    currentStream = $.fn.twrCallFunctions.data.streams[index];
    $.fn.currentStreamIndex = index;

    if(!$.fn.player){
      $.fn.player = document.createElement('audio');
    }

    $.fn.player.setAttribute('src', currentStream.streamUrlAac);
    $.fn.mySwipe.slide(index, 0);

    if (noPlay == null) {
      $.fn.twrCallFunctions.playActiveStream();
    }

    $.fn.twrCallFunctions.setStreamLogo(currentStream.streamLogo);
  }

  $.fn.twrCallFunctions.playActiveStream = function () {
    $.fn.player.play();

    $('#stopStream').removeClass('hidden');
    $('#playStream').addClass('hidden');

    // Set interval for the metadata
    $.fn.twrCallFunctions.setMetadataInterval(currentStream.streamMeta);

  }

  $.fn.twrCallFunctions.stopActiveStream = function () {
    $.fn.player.pause();

    $('#playStream').removeClass('hidden');
    $('#stopStream').addClass('hidden');

    // Stop interval for refreshing metadata.
    $.fn.twrCallFunctions.stopMetadataInterval();
  }

  $.fn.twrCallFunctions.setStreamLogo = function(streamLogo) {
    $('#streamLogo').html('<img src="images/streams/' + streamLogo + '-110.png">');
  }

  //document.addEventListener("pause", onPause, false);

  // function onPause() {

  //   $.fn.twrCallFunctions.stopActiveStream();
  // }

})(jQuery);
