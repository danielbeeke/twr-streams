


var progressTimer;

var playButton;
var stopButton;
var activityIndicator;
var textPosition;

function onError(error)
{
	console.log(error.message);
}

function onConfirmRetry(button) {
	if (button == 1) {
		html5audio.play();
	}
}

function pad2(number) {
	return (number < 10 ? '0' : '') + number
}
var stream = getUrlVars()["stream"];

switch (stream)
{
	case 'mp3-mp3':
		var myaudioURL = 'http://http.yourmuze.com/twr-stream/mp3-128-s.mp3';
		break;
	case 'mp3-m3u':
		var myaudioURL = 'http://www.yourmuze.com/desktop/twr-stream/mp3-128-s.m3u';
		break;
	case 'mp3-pls':
		var myaudioURL = 'http://www.yourmuze.com/desktop/twr-stream/mp3-128-s.pls';
		break;
	case 'mp3-flv':
		var myaudioURL = 'http://flash.yourmuze.com/twr-stream/mp3-128-s.flv';
		break;
	case 'aac-pls':
		var myaudioURL = 'http://www.yourmuze.com/desktop/twr-stream/twrvooru.pls';
		break;
	case 'aac-sdp':
		var myaudioURL = 'http://www.yourmuze.com/mobile/twr-stream/twrvooru.sdp';
		break;
	case 'aac-m3u':
		var myaudioURL = 'http://www.yourmuze.com/desktop/twr-stream/twrvooru.m3u';
		break;
	case 'aac-http':
		var myaudioURL = 'http://http.yourmuze.com/twr-stream/twrvooru.aac';
		break;
	case 'aac-rtsp':
		var myaudioURL = 'rtsp://rtsp.yourmuze.com/twr-stream/twrvooru.aac';
		break;
	case 'aac-flv':
		var myaudioURL = 'http://flash.yourmuze.com/twr-stream/twrvooru.flv';
		break;
	case 'vb-pls':
		var myaudioURL = 'http://www.yourmuze.com/desktop/twr-stream/twrvooru-vorbis.pls';
		break;
	case 'vb-m3u':
		var myaudioURL = 'http://www.yourmuze.com/desktop/twr-stream/twrvooru-vorbis.m3u';
		break;
	case 'vb-ogg':
		var myaudioURL = 'http://http.yourmuze.com/twr-stream/twrvooru-vorbis.ogg';
		break;
}

var myaudio = new Audio(myaudioURL);
var isPlaying = false;
var readyStateInterval = null;

var html5audio = {
	play: function()
	{
		isPlaying = true;
		myaudio.play();

		readyStateInterval = setInterval(function(){
			 if (myaudio.readyState <= 2) {
				 playButton.style.display = 'none';
				 activityIndicator.style.display = 'block';
				 textPosition.innerHTML = 'loading...';
			 }
		},1000);
		myaudio.addEventListener("timeupdate", function() {
			 var s = parseInt(myaudio.currentTime % 60);
			 var m = parseInt((myaudio.currentTime / 60) % 60);
			 var h = parseInt(((myaudio.currentTime / 60) / 60) % 60);
			 if (isPlaying && myaudio.currentTime > 0) {
				 textPosition.innerHTML = pad2(h) + ':' + pad2(m) + ':' + pad2(s);
			 }
		}, false);
		myaudio.addEventListener("error", function() {
			 console.log('myaudio ERROR');
		}, false);
		myaudio.addEventListener("canplay", function() {
			 console.log('myaudio CAN PLAY');
		}, false);
		myaudio.addEventListener("waiting", function() {
			 //console.log('myaudio WAITING');
			 isPlaying = false;
			 playButton.style.display = 'none';
			 stopButton.style.display = 'none';
			 activityIndicator.style.display = 'block';
		}, false);
		myaudio.addEventListener("playing", function() {
			 isPlaying = true;
			 playButton.style.display = 'none';
			 activityIndicator.style.display = 'none';
			 stopButton.style.display = 'block';
		}, false);
		myaudio.addEventListener("ended", function() {
			 //console.log('myaudio ENDED');
			 html5audio.stop();
			 // navigator.notification.alert('Streaming failed. Possibly due to a network error.', null, 'Stream error', 'OK');
			 navigator.notification.confirm(
				'Streaming failed. Possibly due to a network error.', // message
				onConfirmRetry,	// callback to invoke with index of button pressed
				'Stream error',	// title
				'Retry,OK'		// buttonLabels
			 );
		}, false);
	},
	pause: function() {
		isPlaying = false;
		clearInterval(readyStateInterval);
		myaudio.pause();
		stopButton.style.display = 'none';
		activityIndicator.style.display = 'none';
		playButton.style.display = 'block';
	},
	stop: function() {
		isPlaying = false;
		clearInterval(readyStateInterval);
		myaudio.pause();
		stopButton.style.display = 'none';
		activityIndicator.style.display = 'none';
		playButton.style.display = 'block';
		myaudio = null;
		myaudio = new Audio(myaudioURL);
		textPosition.innerHTML = '';
	}
};

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
