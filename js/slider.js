import * as $ from './libs/jquery-3.7.1.slim.min.js';
import * as slick from './libs/slick.min.js'

jQuery(function () {
  jQuery('#promoSlider').slick({
    dots: true,
    arrows: false,
    fade: true
  });
})