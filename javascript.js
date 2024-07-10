//Matthew Whitlow - Homework Assignment#1 07/10/2024 
//This is the javascript for project Crab Island Concessions   

//at this point I'm getting in over my head, buckle up

      let map, infoWindow;

//i can set the map on crab island. set zoom and satellite view
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 30.3962, lng:  -86.5225 },
          zoom: 16,
          mapTypeId: 'satellite'
        });


//i can put a flag on where the General Store is located
        const image =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
      const beachMarker = new google.maps.Marker({
        position: { lat: 30.3964, lng: -86.5210},
        map,
        icon: image,
      });

        infoWindow = new google.maps.InfoWindow();

        const locationButton = document.createElement("button");

//this creates button for finding my location 
        locationButton.textContent = "Update My Location";
        locationButton.classList.add("custom-map-control-button");
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
        locationButton.addEventListener("click", () => {
          
// Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };
                const image =
                "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
              const beachMarker = new google.maps.Marker({
                position: { lat: position.coords.latitude, lng: position.coords.longitude },
                map,
                icon: image,
              });
              /* infoWindow.setPosition(pos);
                infoWindow.setContent("Location found.");
                infoWindow.open(map);
                map.setCenter(pos);*/
              },
              () => {
                handleLocationError(true, infoWindow, map.getCenter());
              },
            );
          } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
          }
        });
      }




      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation.",
        );
        infoWindow.open(map);
      }

      window.initMap = initMap;

