(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){


      mapboxgl.accessToken = 'pk.eyJ1IjoidWh1Z2QiLCJhIjoiY2psaDc1ZWNkMWY2dDN2bnV1YmYzZnU4MyJ9.8WRACswJFGARs4Cr2qkGxw';
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
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
