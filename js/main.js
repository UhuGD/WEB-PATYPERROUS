$(function () {
  $(document).scroll(function () {
    var $nav = $(".contenido-header");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    //

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
//

      mapboxgl.accessToken = 'pk.eyJ1IjoidWh1Z2QiLCJhIjoiY2psaDc1ZWNkMWY2dDN2bnV1YmYzZnU4MyJ9.8WRACswJFGARs4Cr2qkGxw';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10?optimize=true',
        center: [-70.554618,-33.512282],
        zoom: 15
    });
    map.on("load", function () {
      /* Image: An image is loaded and added to the map. */
      map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
          map.addLayer({
            id: "markers",
            type: "symbol",
            /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features:[{"type":"Feature","geometry":{"type":"Point","coordinates":[-70.55410925024012,-33.51192112082634]}}]}
            },
            layout: {
              "icon-image": "custom-marker",
            }
          });
        });
    });
  });

})();
