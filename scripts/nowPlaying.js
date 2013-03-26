//var ymReceiveMetaData = '';

(function ($) {

  var interval;
    // $fn.twrCallFunctions.streamMeta;
  $.fn.twrCallFunctions.getMetadataIntervalCallback = function(streamMeta) {
    jQuery.getJSON('//www.yourmuze.com/perl/get_metadata.pl?station=' + streamMeta + '&callback=?', ymReceiveMetaData = function (data) {
      $('#nowPlaying').html(data.now_playing);
    });
  }
  $.fn.twrCallFunctions.setMetadataInterval = function(streamMeta) {
    $.fn.twrCallFunctions.streamMeta = streamMeta;
    // Init
    $.fn.twrCallFunctions.getMetadataIntervalCallback(streamMeta);

    // Next intervals
    interval = setInterval(function() { $.fn.twrCallFunctions.getMetadataIntervalCallback(streamMeta) }, 5000);

  }

  // For pausing the stream/app.
  $.fn.twrCallFunctions.stopMetadataInterval = function() {
    clearInterval(interval);
    $('#nowPlaying').html(null);
  }

})(jQuery);
