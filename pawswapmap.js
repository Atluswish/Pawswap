// JavaScript Document



    var map = L.map('map').setView([51.5898, 4.7754], 13);

var pawIcon = L.icon({
    iconUrl: 'images/orangepinswapmap.png',  
    iconSize: [80, 80],              
    iconAnchor: [40, 80],            
    popupAnchor: [0, -80]
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Swap Marker 1
L.marker([51.60281571895569, 4.7816432910496225], { icon: pawIcon }).addTo(map)
  .bindPopup('<strong>Bark Enjoyers<strong><br>Members: 10<br>Swaps:23<br><a href="dogproducts.html" target="Blank">Swaps Available</a>');
			 

var circle = L.circle([51.60281571895569, 4.7816432910496225], {
    color: 'orange',
    fillColor: '#ffb342',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
//Swap Marker 2
L.marker([51.586768, 4.74336], { icon: pawIcon }).addTo(map)
 .bindPopup("The Hond lovers<br>Members: 12<br>Swaps:31")


//Remove the below after use as it is only for finding coordinates on the map for Pins
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);