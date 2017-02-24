function myMap() {
			  var myCenter = new google.maps.LatLng(52.630718665999495,-1.1466979731631);
			  var mapCanvas = document.getElementById("google_maps");
			  var mapOptions = {center: myCenter, zoom: 12};
			  var google_maps = new google.maps.Map(mapCanvas, mapOptions);
			  var marker = new google.maps.Marker({position:myCenter});
			  marker.setMap(google_maps);

			  // Zoom to 9 when clicking on marker
			  google.maps.event.addListener(marker,'click',function() {
				google_maps.setZoom(16);
				google_maps.setCenter(marker.getPosition());
			  });
			}