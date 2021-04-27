//kobe animation

var $kobe1 = $('.kobe1');

$kobe1.waypoint(function(direction) {
  if (direction == 'down'){
    $kobe1.attr('src', 'https://media.giphy.com/media/WlznRh8sLYgE/giphy.gif');
  } else {
    $kobe1.attr('src', 'https://i.insider.com/5c0aeba64d340b27cc0c0f0d?width=300')
  }
}, { offset: '25%'});



var $kobe2 = $('.kobe2');

$kobe2.waypoint(function(direction) {
  if (direction == 'down'){
    $kobe2.attr('src', 'https://media.giphy.com/media/l46Craj343bB2TMSA/giphy.gif');
  } else {
    $kobe2.attr('src', 'https://theundefeated.com/wp-content/uploads/2021/02/Kobe_Locker-Room.jpg?w=700')
  }
}, { offset: '20%'});



var $kobe3 = $('.kobe3');

$kobe3.waypoint(function(direction) {
  if (direction == 'down'){
    $kobe3.attr('src', 'https://media.giphy.com/media/26ufkxGIqLdJOVDVu/giphy.gif');
  } else {
    $kobe3.attr('src', 'https://pbs.twimg.com/media/EsSQweDUcAIm7mv.png')
  }
}, { offset: '20%'});


