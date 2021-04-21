//Add Google Maps

function initMap() {
  const options = {
    center: { 
      lat: 36.1783653, 
      lng: 135.0709152 
    },
    zoom: 4
  };
  
  //New map
  const map = new
  google.maps.Map(document.getElementById('map'), options);

  //Create markers
   
  const markers = [{
      coordinates: {
        lat: 35.2326407,
        lng: 139.013563
      },
      content: '<h5>beach</h5>',
      info: `<p>aaaa</p>`
    },
    {
      
      coordinates: {
        lat: 43.5655079, 
        lng: 144.3598874
      }, 
      content: '<h5>beach</h5>',
      info: `<p>bbbbbbb</p>`
    } 
  ];

  //Loop through markers 
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Marker function
  function addMarker(props) {
    const marker = new google.maps.Marker({
    position: props.coordinates,
    map: map,
  });

    if(props.content) {
      const infowindow = new google.maps.InfoWindow ({
        content:props.content
      });

      // Open info window when clicked on the marker
      google.maps.event.addListener(marker, 'click', function() {
        if(!marker.open) {
          infowindow.open(map, marker);
          marker.open = true;
        }
        // Close info window when clicked on the marker
        else {
          infowindow.close();
          marker.open = false;
        }
        // Close info window when clicked anywhere on the map and the info window was opened
        google.maps.event.addListener(map, 'click', function() {
          infowindow.close();
          marker.open = false;
      });
    });

      // Info shows in the side column when the marker is clicked
      google.maps.event.addListener(marker, 'click',  (function(i) {

        return function() {
          document.getElementById('map-content').innerHTML = markers[i].info;
        };
      })(i));
    }
  }
}