//var ymReceiveMetaData = '';

(function ($) {

  var interval;

  $.fn.twrCallFunctions.getMetadataIntervalCallback = function() {
    jQuery.getJSON('http://www.yourmuze.com/perl/get_metadata.pl?station=' + $.fn.currentStream.streamMeta + '&callback=?');
  }
  $.fn.twrCallFunctions.setMetadataInterval = function() {

    // Init
    $.fn.twrCallFunctions.getMetadataIntervalCallback();

    // Next intervals
    interval = setInterval("$.fn.twrCallFunctions.getMetadataIntervalCallback();", 5000);

  }

  // For pausing the stream/app.
  $.fn.twrCallFunctions.stopMetadataInterval = function() {
    clearInterval(interval);
    $('#nowPlaying').html(null);
  }

})(jQuery);


  function ymReceiveMetaData(data) {
        $('#nowPlaying').html(data.now_playing);
  }
