//cat2 animation

var $cat2 = $('.cat2');

$cat2.waypoint(function(direction) {
  if (direction == 'down'){
    $cat2.attr('src', 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/source.gif');
  } else {
    $cat2.attr('src', 'https://placekitten.com/600/600')
  }
}, { offset: '80%'});