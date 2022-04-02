// Add console.log to check to see if our code is working.
console.log("working");

// get cities data from js
var cityData = cities;

// Create a map object
var map = L.map("map").setView([34.0522, -100.2437],4);

// loop thorugh cities
var marker = cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location,{
        radius: city.population/100000,
        color:'orange',
        fillOpacity: 0.2
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map);
});
//add circle
/*var cicleMarker = L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color:'black',
    fillColor: 'yellow'
}).addTo(map);
*/

// We create the tile layer that will be the background of our map.
/*var streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
*/
// dark layer
var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
dark.addTo(map);