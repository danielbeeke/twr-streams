$.getJSON('streams.json', function(data) {

  var i = 0;
  $.each(data, function(obj) {

    var streamName = this.streamName;
    var streamUrlAac = this.streamUrlAac;
    var streamLogo = this.streamLogo;
    var streamDesc = this.streamDesc;

    $('<li><a class="menuToggle" onClick="mySwipe.slide(' + i + ', 300)">' + streamName + '</a></li>').appendTo($('#appMenu'));
    $('<div><div class="streamDesc">' + streamDesc +'</div></div>').appendTo($('#sw-wrap'));
    alert('add divs - ');
     // pager
     var pagerLi = '<li></li>';
     if (i == 0){ pagerLi = '<li class="on"></li>'; }

     $(pagerLi).appendTo($('#position'));

     i++;
  });
});



