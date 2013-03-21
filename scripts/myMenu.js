document.getElementById('sliderWrapper').setAttribute('style', 'margin-left:' + (window.innerWidth - 60) + 'px;');

$(".menuToggle").click(
  function() {
    $("#sliderWrapper").animate({
        marginLeft: parseInt($("#sliderWrapper").css('marginLeft'),10) == 0 ?
          $("#sliderWrapper").outerWidth() - 60 :
          0
      });
  });
