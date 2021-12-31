"use strict";

$(function () {
  $('.shop__filter-btn').on('click', function () {
    $('.shop__filters').slideToggle();
  });
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });
  $('.footer-top__title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top__title--active');
  });
  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 18" version="1.1"><g id="surface1"><path d="M 1.113281 8.402344 L 5.894531 3.621094 C 6.226562 3.289062 6.761719 3.289062 7.085938 3.621094 L 7.882812 4.414062 C 8.210938 4.746094 8.210938 5.28125 7.882812 5.609375 L 4.496094 9 L 7.886719 12.390625 C 8.214844 12.71875 8.214844 13.253906 7.886719 13.582031 L 7.089844 14.378906 C 6.761719 14.710938 6.226562 14.710938 5.898438 14.378906 L 1.117188 9.597656 C 0.785156 9.265625 0.785156 8.734375 1.113281 8.402344 Z M 1.113281 8.402344 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="9px" height="14px" viewBox="0 0 9 18" version="1.1"><g id="surface1"><path d="M 7.886719 9.597656 L 3.105469 14.378906 C 2.773438 14.710938 2.238281 14.710938 1.914062 14.378906 L 1.117188 13.585938 C 0.789062 13.253906 0.789062 12.71875 1.117188 12.390625 L 4.507812 9.003906 L 1.117188 5.613281 C 0.789062 5.285156 0.789062 4.75 1.117188 4.421875 L 1.910156 3.621094 C 2.238281 3.289062 2.773438 3.289062 3.101562 3.621094 L 7.882812 8.402344 C 8.214844 8.734375 8.214844 9.265625 7.886719 9.597656 Z M 7.886719 9.597656 "/></g></svg></button>',
    infinite: false
  });
  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });
  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
    responsive: [{
      breakpoint: 1051,
      settings: {
        draggable: true
      }
    }]
  });
  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });
  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });
  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  });
  $('.select-style, .product-one__item-num').styler();
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function onStart(data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function onChange(data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    rateFill: "#ffc35b",
    readOnly: true,
    starSvg: '<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>'
  });

  function getTimeRemaining(endtime) {
    var total = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(total / 1000 % 60);
    var minutes = Math.floor(total / 1000 / 60 % 60);
    var hours = Math.floor(total / (1000 * 60 * 60) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function initializeClock(id, endtime) {
    var clock = document.querySelector('.promo__clock');
    var daysSpan = clock.querySelector('.promo__days');
    var hoursSpan = clock.querySelector('.promo__hours');
    var minutesSpan = clock.querySelector('.promo__minutes');
    var secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      var t = getTimeRemaining(endtime);
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = $('.promo__clock').attr('data-time');
  /*new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000)*/

  initializeClock('promo__clock', deadline);
});