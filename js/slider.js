import * as $ from './libs/jquery-3.7.1.slim.min.js';
import * as slick from './libs/slick.min.js'

jQuery(function () {

  // Slider for promo views
  jQuery('#promoSlider').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  // Slider for grade
  jQuery('.grade-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.grade-content',
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
    swipe: false
  });
  jQuery('.grade-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.grade-content',
    infinite: false,
    swipe: false
  });

  // Slider for mine leaderboard
  jQuery('.leaderboard-nav').slick({
    slidesToScroll: 1,
    asNavFor: '.leaderboard-content',
    focusOnSelect: true,
    infinite: false,
    swipe: true,
    fade: true,
  });
  jQuery('.leaderboard-content').slick({
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.leaderboard-content',
    infinite: false,
    swipe: false
  });
})

