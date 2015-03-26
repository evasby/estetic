var map;
var myLatlng = new google.maps.LatLng(53.897211, 27.534863);
function initialize() {
  var mapOptions = {
    zoom: 17,
    //center: new google.maps.LatLng(53.905497, 27.558681)
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!"
  });


  // To add the marker to the map, call setMap();
  marker.setMap(map);

  var contentString = 'Адрес: г. Минск, пер. Северный, д.13, корп. 3, офис 5А';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  /*google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });*/
  infowindow.open(map,marker);




}

google.maps.event.addDomListener(window, 'load', initialize);


