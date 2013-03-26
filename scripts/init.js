$.fn.twrFunctions = {};
$.fn.twrCallFunctions = {};

$.fn.twrCallFunctions.deviceType = (navigator.userAgent.match(/iPad/i))  == "iPad" ? "iPad" : (navigator.userAgent.match(/iPhone/i))  == "iPhone" ? "iPhone" : (navigator.userAgent.match(/Android/i)) == "Android" ? "Android" : (navigator.userAgent.match(/BlackBerry/i)) == "BlackBerry" ? "BlackBerry" : "null";

$('body').addClass($.fn.twrCallFunctions.deviceType);
