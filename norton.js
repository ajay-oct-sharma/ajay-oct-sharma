$(function() {
    // scrolling to the top
    $('.js-anchor').click(function() {
      $('html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
    });
    // menu controlls
    $('.js-menu').click(function() {
      $('.js-nav-primary, .js-nav-login').slideToggle();
    });
    // sticky secondary navigation
    var $top = $('.js-nav-secondary').offset().top;
    if ($(window).width() > 600) {
      $(window).scroll(function() {
        var $windowTop = $(this).scrollTop();
        if ($windowTop > $top) {
          $('.js-nav-secondary').addClass('js-fixed');
        } else {
          $('.js-nav-secondary').removeClass('js-fixed');
        }
      });
    }
    // Counter for licences in main area
    var $counter = $('.js-number').val();
    $('.js-minus').click(function() {
      $counter--;
      if ($counter > 0) {
        $('.js-number').val($counter);
      }
    });
    $('.js-plus').click(function() {
      $counter++;
      $('.js-number').val($counter);
    });
    $('.js-minus, .js-plus').click(function() {
      if ($counter > 0) {
        $('.js-btn-1year').val("$"+($counter*34.99).toFixed(2));
        $('.js-btn-1year').html("$"+($counter*34.99).toFixed(2));
        $('.js-btn-2years').val("$"+($counter*26.00*2)/*.toFixed(2)*/);
        $('.js-btn-2years').html("$"+($counter*26.00*2)/*.toFixed(2)*/);
        $('.js-btn-3years').val("$"+($counter*21.00*3)/*.toFixed(2)*/);
        $('.js-btn-3years').html("$"+($counter*21.00*3)/*.toFixed(2)*/);
      }
    });
    // technology section
    $('.js-tech').click(function(e) {
      $('.selected').removeClass('selected');
      $(this).toggleClass('selected');
    });
    // Minions vs Grime slider
    var $firstSlide = $('.minions-slide:first-child');
    var $lastSlide = $('.minions-slide:last-child');
    $('.minions-slide:not(".js-active")').hide();
    $('.js-control-left').click(function() {
      if ($('li.js-active').index() == 0) {
        $('.js-active').fadeOut(500).removeClass('js-active');
        $lastSlide.toggleClass('js-active').fadeIn(500);
      } else {
        $('.js-active').fadeOut(500).removeClass('js-active').prev('li').toggleClass('js-active').fadeIn(500);
      }
    });
    $('.js-control-right').click(function() {
      if ($('li.js-active').index() == 2) {
        $('.js-active').fadeOut(500).removeClass('js-active');
        $firstSlide.toggleClass('js-active').fadeIn(500);
      } else {
        $('.js-active').removeClass('js-active').fadeOut(500).next('li').toggleClass('js-active').fadeIn(500);
      }
    });
  });