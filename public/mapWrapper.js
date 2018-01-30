var MapWrapper = function(container, coords, zoom) {
  // var container = document.getElementById('main-map');
  this.googleMap = new google.maps.Map(container,
    {
      center: coords,
      zoom: zoom
    })
    this.markers = [];
}

MapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  addInfoWindow(marker, 'Mont Blanc');
  this.markers.push(marker);
};

function addInfoWindow(marker, message) {

  var infoWindow = new google.maps.InfoWindow({
    content: message
    });

    google.maps.event.addListener(marker, 'click', function () {
    infoWindow.open(this.googleMap, marker);
    });
    }

MapWrapper.prototype.bounceMarkers = function () {
  this.markers.forEach(function(marker){
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
};

MapWrapper.prototype.relocateButton = function () {
  

};

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function(event) {

    let lat = event.latLng.lat();
    let long = event.latLng.lng();
    coords = {lat: lat, lng: long};
    this.addMarker(coords);
  }.bind(this))
};


// can also be
// var postion = {
// lat: event.latLng.lat(),
// lng: event.latLng.lng()
// }
// this.addMarker(position);
// }.bind(this));
