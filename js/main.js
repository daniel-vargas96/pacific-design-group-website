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

// ***SHOW MAP***
// Initialize and add the map
function initMap() {
  const pdg = { lat: 33.744814, lng: -117.823655 };
  // The map, centered at pdg
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: pdg,
    disableDefaultUI: true,
    gestureHandling: 'greedy'
  });
  // The marker, positioned at pdg
  const marker = new google.maps.Marker({
    position: pdg,
    map: map,
  });
}
