var initialize = function() {
  var container = document.getElementById('main-map');
  var center = {lat: 45.9237, lng: 6.8694};
  var mainMap = new MapWrapper(container, center, 11);
  mainMap.addMarker(center);
  mainMap.addMarker({lat:45.8326, lng: 6.8652});
  mainMap.addClickEvent();
  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));
  var relocateButton = document.getElementById('button-relocate');
  relocateButton.addEventListener('click', mainMap.relocateButton.bind(mainMap));
}

window.addEventListener('load', initialize);
