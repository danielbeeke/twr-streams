var elem = document.getElementById('mySwipe');
alert('swipe');
window.mySwipe = Swipe(elem, {
  // startSlide: 2,
  // auto: 3000,
  // continuous: true,
  disableScroll: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
  callback: function(pos) {
    var i = bullets.length;
    while (i--) {
      bullets[i].className = ' ';
    }
    bullets[pos].className = 'on';
  }
});
var bullets = document.getElementById('position').getElementsByTagName('li');

// var doc = document.getElementById("sw-wrap");
// var divs = doc.getElementsByTagName("div");
// for (var i=0; i<divs.length; i++) {
//   // applies css style
//   attr = divs[i].getAttribute('style');
//   divs[i].setAttribute('style', attr + 'height: ' + window.innerHeight + 'px;');
// }
