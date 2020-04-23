var $box = $('.box');
var $img = $('.image');
var $circle = $('.circle');
var $rule = $('.rule');



$box.waypoint(function (direction) {
  if (direction == 'down') {
      // reveal our content
      $box.addClass('fadeInUp');
      $box.removeClass('fadeOutDown');
    } else if (direction == 'up') {
      // hide our content
      $box.addClass('fadeOutDown');
      $box.removeClass('fadeInUp');
    }
}, { offset: '66%' });

$img.waypoint(function (direction) {
  if (direction == 'down') {
      // reveal our content
      $img.addClass('fadeInRight');
      $img.removeClass('fadeOutRight');
    } else if (direction == 'up') {
      // hide our content
      $img.addClass('fadeOutRight');
      $img.removeClass('fadeInRight');
    }
}, { offset: '66%' });

$circle.waypoint(function (direction) {
  if (direction == 'down') {
      // reveal our content
      $circle.addClass('fadeInUp');
      $circle.removeClass('fadeOutDown');
    } else if (direction == 'up') {
      // hide our content
      $circle.addClass('fadeOutDown');
      $circle.removeClass('fadeInUp');
    }
}, { offset: '75%' });

$rule.waypoint(function (direction) {
  if (direction == 'down') {
      // reveal our content
      $rule.addClass('grow');
      $rule.removeClass('shrink');
    } else if (direction == 'up') {
      // hide our content
      $rule.addClass('shrink');
      $rule.removeClass('grow');
    }
}, { offset: '75%' });