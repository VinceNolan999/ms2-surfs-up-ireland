//Add Google Maps

//https://fruitbatm.github.io/explore-national-parks-of-japan/   

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {
           lat: 53.430,
           lng: -7.94
         },
         zoom: 7
    });

  //Map locations
    
  const locations = [
    {
      coordinates: {
        lat: 54.483,
        lng: -8.277
      },
      content: '<h6>bundoran beach</h6>',
      info: `<p>bundoran</p>`
    },
  
    {
      coordinates: {
        lat: 54.212,
        lng: -10.073
      },
      content: '<h6>inishcrone beach</h6>',
      info: `<p>inishcrone</p>`
    },
  
    {
      coordinates: {
        lat: 53.971,
        lng: -10.073
      },
      content: '<h6>keel beach</h6>',
      info: `<p>keel</p>`
    },
  
    {
      coordinates: {
        lat: 52.933555,
        lng: -9.347998
      },
      content: '<h5>lahinch beach</h5>',
      info: `<p>bbbbbbb</p>`
    },
  
    {
      coordinates: {
        lat: 52.843446,
        lng: -9.433542
      },
      content: '<h6>spanish point beach</h6>',
      info: `<p>aaaa</p>`
    },

    {
      coordinates: {
        lat: 52.764,
        lng: -9.492
      },
      content: '<h6>doonbeg beach</h6>',
      info: `<p>doonbeg</p>`
    },
  
    {
      coordinates: {
        lat: 52.2609,
        lng: -10.0138
      },
      content: '<h6>castle gregory beach</h6>',
      info: `<p>castle gregory</p>`
    },
  
    {
      coordinates: {
        lat: 52.1392,
        lng: -9.9819
      },
      content: '<h6>inch strand beach</h6>',
      info: `<p>inch strand</p>`
    },
    
    {
      coordinates: {
        lat: 51.5961,
        lng: -8.8638
      },
      content: '<h6>inchydoney beach</h6>',
      info: `<p>incheydoney</p>`
    },
  
    {
      coordinates: {
        lat: 51.644,
        lng: -8.5809
      },
      content: '<h6>garretstown beach</h6>',
      info: `<p>garretstown</p>`
    },

    {
      coordinates: {
        lat: 52.1575,
        lng: -7.1354
      },
      content: '<h6>tranmore beach</h6>',
      info: `<p>tranmore</p>`
    },
  ];
  

  //Loop through locations 
  for (var i = 0; i < locations.length; i++) {
    addMarker(locations[i]);
  }

  // Marker function

  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coordinates,
      map: map,
    });
    if (props.content) {
      const infowindow = new google.maps.InfoWindow({
        content: props.content
      });

      // Open info window when clicked on the marker
      google.maps.event.addListener(marker, 'click', function () {
        if (!marker.open) {
          infowindow.open(map, marker);
          marker.open = true;
        }
        // Close info window when clicked on the marker
        else {
          infowindow.close();
          marker.open = false;
        }
        // Close info window when clicked anywhere on the map and the info window was opened
        google.maps.event.addListener(map, 'click', function () {
          infowindow.close();
          marker.open = false;
        });
      });

        //  Zoom into marker
      google.maps.event.addListener(marker,'click',function() {
        map.setZoom(10);
        map.setCenter(marker.getPosition());
        });

        
      // Info shows in the side column when the marker is clicked
      google.maps.event.addListener(marker, 'click', (function (i) {

        return function () {
          document.getElementById('map-content').innerHTML = locations[i].info;
        };
      })(i));
    }
  }
}

//test image zoom
$(document).ready(function(){
  $('#kb > img').addClass('zoom');
});

