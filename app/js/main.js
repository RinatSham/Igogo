$(function(){

$('.products__wrapper-slider').slick({
  prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
  nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
});

$('.feed__inner').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
  nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
});

$('.feedback__bot').slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  variableWidth: true,
  prevArrow: '<button class="slick-arrow slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
  nextArrow: '<button class="slick-arrow slick-next"><span class="lnr lnr-chevron-right"></span></button>',
});

$(".rate-star").rateYo({
  rating: 4.5,
  starWidth: "15px",
  readOnly: true
});

var mixer = mixitup('.filter__inner-box');

});