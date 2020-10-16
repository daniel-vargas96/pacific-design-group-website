$(window).scroll(function() {
  if($('.navbar').offset().top > 100) {
    $('.fixed-top').addClass('navbar-dark');
    $('.fixed-top').addClass('bg-dark');
    $('.fixed-top').addClass('shadow-lg');
  } else {
    $('.fixed-top').removeClass('navbar-dark');
    $('.fixed-top').removeClass('bg-dark');
    $('.fixed-top').removeClass('shadow-lg');
  }
})

$(function() {
  $('.page-scroll a').bind('click', function() {
    const $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });
})
