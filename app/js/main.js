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

$('select, input[type=checkbox]').styler();

$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 0,
  max: 330,
  from: 30,
  to: 300,
  prefix: "$",
});

$(".filter-nav__btn-list").on('click', function(){
  $('.products__item').addClass('list');
  $('.filter-nav__btn-list').addClass('filter-nav__btn-list--active');
  $('.filter-nav__btn-grid').removeClass('filter-nav__btn-grid--active');


});
$(".filter-nav__btn-grid").on('click', function(){
  $('.products__item').removeClass('list');
  $('.filter-nav__btn-grid').addClass('filter-nav__btn-grid--active');
  $('.filter-nav__btn-list').removeClass('filter-nav__btn-list--active');
});

$(".header__btn-menu").on('click', function(){
  $('.header__box').toggleClass('active');
});

$('.menu-btn').on('click', function(){
  $('.menu__list').slideToggle();
});

var mixer = mixitup('.filter__inner-box');

});