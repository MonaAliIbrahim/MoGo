jQuery(document).ready(function ($) {

  // Activate WOW Animation Library 
  new WOW().init();

  /**
    *  Add Styling for Header
  * */
  $('.menu-header li:not(:nth-last-child(2)) a').on('click', function (e) {
    e.preventDefault();

    $(this).parent().siblings().removeClass('active');
    $(this).parent().addClass('active');
  });

  $(window).scroll(function () {
    // Add Class Fixed Header after Scrolling dowen
    $("header").addClass('fixed-header');

    // Remove Class Fixed Header after Scrolling up
    var scrollTop = $(window).scrollTop();
    var elementOffset = $('.intro-section').offset().top;
    var currentElementOffset = elementOffset - scrollTop;
    if (currentElementOffset == 0) {
      $("header").removeClass('fixed-header');
    }
  });

  // Play a counter that is used in progress-section
  $('.count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
  });

  // Using NiceScroll in Service Tab Section
  $('.accordion .collapse.show .card-body').niceScroll({
    cursorcolor: "#95e1d3",
    cursorwidth: "6px",
    background: "#f5f5f5",
    cursorborderradius: 4,
  });

  $(".accordion .card-header .btn-link").on('click', function () {
    
    $('.accordion .collapse .card-body').getNiceScroll().hide();
    var targetElement = $(this).parent().parent().next().find(".card-body");

    targetElement.niceScroll({
      cursorcolor: "#95e1d3",
      cursorwidth: "6px",
      background: "#f5f5f5",
      cursorborderradius: 4,
    });

    targetElement.getNiceScroll().show();
  });

  // Initialize lightSlider that is used in logos-section 
  var slider = $('#lightSlider').lightSlider({
    item: 6,
    slideMove: 1,
    slideWidth: 200,
    slideMargin: 0,
    auto: true,
    loop: true,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    controls: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          item: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          item: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          item: 3,
        }
      },
      {
        breakpoint: 578,
        settings: {
          item: 2,
        }
      }
    ]
  });

  // Initialize Google Map is used in Map Section
  window.myMap = function () {
    var mapOptions = {
      center: new google.maps.LatLng(30.60427, 32.27225),
      zoom: 10,
      // mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  // Switch between opening and closing Google Map in Map Section
  $('.map-section aside button').on('click', function (e) {

    var btn_text = $('.map-section aside button').text();
    if (btn_text == 'open map') {
      $('#map').css('visibility', 'visible');
      $('.map-section').css({
        'visibility': 'visible',
        'transform': 'scaleY(1.2)',
        'height': '300px'
      });
      $('.map-section aside button').text('close map');
    }
    else {
      $('#map').css('visibility', 'hidden');
      $('.map-section').css({
        'transform': 'scaleY(1)',
        'height': '250px'
      });
      $('.map-section aside button').text('open map');
    }
    
  });

  console.clear();
});