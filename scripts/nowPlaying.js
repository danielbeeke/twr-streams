function getMetadataIntervalCallback() {
  jQuery.getJSON('http://www.yourmuze.com/perl/get_metadata.pl?station=twr-stream', function ymReceiveMetaData(data) {
   var nowPlaying = data.now_playing;
  });
  var nowP =  ymReceiveMetaData;
  document.getElementById('nowPlaying').innerHTML = 'test playing' + nowP.now_playing;
}

var interval = setInterval(getMetadataIntervalCallback, 1000);

// now playing
// function ymReceiveMetaData(nowPlayingData){
//     var nowPlaying = nowPlayingData.now_playing;
//     var stationTitle = nowPlayingData.station_title;

//     var text = nowPlaying;

//     document.getElementById('nowPlaying').innerHTML = text;
// }
