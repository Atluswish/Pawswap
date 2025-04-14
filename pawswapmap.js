// JavaScript Document



    var map = L.map('map').setView([51.5898, 4.7754], 13);

var pawIcon = L.icon({
    iconUrl: 'images/orangepinswapmap.png',  
    iconSize: [40, 40],              
    iconAnchor: [20, 40],            
    popupAnchor: [0, -40]
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([51.60281571895569, 4.7816432910496225], { icon: pawIcon }).addTo(map)
  .bindPopup("You clicked here!");