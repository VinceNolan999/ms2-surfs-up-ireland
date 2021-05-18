//Add Google Maps

//https://fruitbatm.github.io/explore-national-parks-of-japan/   


let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 53.430,
      lng: -7.94
    },
    zoom: 7,
    scrollwheel:true
  });

  //Map locations

  const locations = [{
      coordinates: {
        lat: 54.483,
        lng: -8.277
      },
      content: 'Bundoran Beach',
      info: `<h5>Bundoran</h5>
      <p>The seaside resort town of Bundoran sits in a stunning location, overlooking Donegal Bay, 
      at the most southerly point of Donegal. This area of the coast is popular with experienced 
      surfers and the mighty Atlantic swell experienced here attracts surfers from around the world at all times of year.</p>
          
          <div class="beach-images"><img src="assets/media/beach images/bundoran.jpg" alt="beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    },

    {
      coordinates: {
        lat: 54.212,
        lng: -10.073
      },
      content: 'Inishcrone Beach',
      info: `<h5>Inishcrone</h5>
      <p>Enniscrone is a 5-kilometre-long, golden, sandy beach located along Ireland’s Wild Atlantic Way 
      on the Sligo coastline, alongside the lively resort town of Enniscrone. It is a popular beach for 
      swimming, having been awarded Blue Flag status.  Lifeguards watch over the area during the summer 
      months. Surfing is also popular here, and there is a surf club located on the beach. The beach is 
      renowned for its spectacular sunsets..</p>
          
          <div class="beach-images"><img src="assets/media/beach images/Enniscrone.jpg" alt="beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    },
    
    {
      coordinates: {
        lat: 52.933555,
        lng: -9.347998
      },
      content: 'Lahinch Beach',
      info: `<h5>lahinch Beach</h5>
      <p>Lahinch is a sandy, crescent-shaped beach, by the resort town of Lahinch in Liscannor Bay on the
          north west coast of County Clare. The beach directly faces the Atlantic Ocean, meaning it gets
          the full force of the swells. As a result Lahinch is one of Ireland’s most popular surfing
          beaches.</p>
          
          <div class="beach-images"><img src="assets/media/beach images/lahinch.jpg" alt="beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    },

    {
      coordinates: {
        lat: 52.843446,
        lng: -9.433542
      },
      content: 'Spanish Point Beach',
      info: `<h5>Spanish Point</h5>
      <p> Sandy with a rocky shoreline, and becomes very wide at low tide, but narrows considerably when the tide is in 
      .It is popular with swimmers and is a good beach
      for surfing, with a number of surf schools operating in the area and equipment available
      for hire.During the summer months there is a lifeguard service here </p>
          
          <div class="beach-images"><img src="assets/media/beach images/spanish-point-beach.jpg" alt="picture of a beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    },

    {
      coordinates: {
        lat: 52.764,
        lng: -9.492
      },
      content: 'Doughmore Beach',
      info: `<h5>Doughmore</h5>
      <p>Doughmore is a long, spectacular, golden, sandy beach overlooking the Atlantic close to Doonbeg. 
      The beach can pick up an impressive amount of swell and is popular with surfers,
       swimming here is dangerous due to the strong offshore currents.</p>
          
          <div class="beach-images"><img src="assets/media/beach images/doughmore.jpg" alt="picture of a beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    },

    {
      coordinates: {
        lat: 52.2609,
        lng: -10.0138
      },
      content: 'Castle Gregory Beach',
      info: `<h5>Castle Gregory</h5>
      <p>long and sandy rural beach in County Kerry, on the Magheeres Peninsular 3 miles north of Castlegregory.
        It is about 6 miles long in its entirety and stretches from the hamlet of Fahamore (complete with a bar) 
        along to Fermoyle Strand. It forms part of a protected Special Area of Conservation.</p>
          
          <div class="beach-images"><img src="assets/media/beach images/castelgregory.jpg" alt="picture of a beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    },

    {
      coordinates: {
        lat: 52.1392,
        lng: -9.9819
      },
      content: 'Inch Strand Beach',
      info: `<h5>Inch Strand</h5>
      <p>When you see Inch beach the name may seem a little ironic for its expansive sands stretch for around 4 miles,
       across the entire south-west side of the Inch Peninsula.  There is a surfing school directly on the beach and the place 
       is popular with surfers and other water-sports enthusiasts.</p>
          
          <div class="beach-images"><img src="assets/media/beach images/inchstrand.jpg" alt="picture of a beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    }, //  pinterest

    {
      coordinates: {
        lat: 51.5961,
        lng: -8.8638
      },
      content: 'Inchydoney Beach',
      info: `<h5>Inchydoney</h5>
      <p>This vast, sandy beach, on Inchydoney Island, a short drive from Clonakilty, 
      is one of the most beautiful to be found along this stretch of the coastline. 
       The pale, pristine sand is backed by dunes and gentle rolling countryside.
      The beach has two separate sections, divided by the rocky Virgin Mary Headland.
       The swell here can be excellent and there are good opportunities for surfing. 
        A surf school operates on the beach, which caters for all levels of ability.</p>
          
          <div class="beach-images"><img src="assets/media/beach images/inchydoney.jpg" alt="picture of a beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    }, //booking.com

    {
      coordinates: {
        lat: 51.644,
        lng: -8.5809
      },
      content: 'Garretstown Beach',
      info: `<h5>Garretstown</h5>
      <p>Garrettstown is a popular sandy beach. Despite this it still retains a rural feel and has not
       been over developed. It’s a great family beach with all the facilities including a seasonal lifeguard service. 
       With a ramp down to the beach Garrettstown is also accessible. This is one of the most popular surfing beaches
        in the area and is home to a surf school.</p>
          
          <div class="beach-images"><img src="assets/media/beach images/garretstown.jpg" alt="picture of a beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    },

    {
      coordinates: {
        lat: 52.1575,
        lng: -7.1354
      },
      content: 'Tranmore Beach',
      info: `<h5>Tranmore</h5>
      <p>If you are looking for a huge sandy beach then Tramore could be for you. 
      The name itself means “Big Strand” and that is exactly what it is.
       The beach here stretches 5 km (3 miles) along Waterford’s Atlantic coast.
      Tramore does draw a crowd from nearby Waterford City but there is always plenty 
      of room to spread out on this spacious beach.</p>
          
          <div class="beach-images"><img src="assets/media/beach images/tramorestrand_large.jpg" alt="picture of a beach"></div>
           <h6>information</h6>                   
          <ul class="map-content-features">
              <li>beach rating  - good</li>
              <li>surf school - yes, multiple</li>
              <li>life guard - yes, seasonal</li>
              <li>surf difficulty - novice</li>
              <li>surf break - beach</li>
          </ul>`
    }, // www.wlrfm.com
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
      google.maps.event.addListener(marker, 'click', function () {
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
$(document).ready(function () {
  $('#kb > img').addClass('zoom');
});


// credit thebeachguide.co.uk for the beach descriptions. images from pinterest and no obvious copyright google image searches