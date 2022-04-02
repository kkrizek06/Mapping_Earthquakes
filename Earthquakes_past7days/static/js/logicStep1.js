// Add console.log to check to see if our code is working.
console.log("working");

// get cities data from js
//var cityData = cities;


//adding lines
/*var line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];
  */

// Add GeoJSON data.
var earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a style for the lines.
let myStyle = {
    color: "blue",
    fillColor: 'yellow',
    fillOpacity: 0.2,
    weight: 1,

}
// Grabbing our GeoJSON data.
d3.json(earthquakeData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
        console.log(layer);
        //layer.bindPopup("<h2>" + feature.properties.AREA_NAME + "</h2>");
        //layer.bindPopup("<h2> Airport Code:" + feature.properties.faa + "</h2><hr> <h3>Airport name:" + feature.properties.name + "</h3> <hr> <h3>" + feature.properties.country + "</h3>");
    }
  }).addTo(map);
});

/*L.geoJSON(sanFranAirport).addTo(map);
L.geoJson(sanFranAirport, {
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3> California</h3> <hr> <h3>" + feature.properties.country + "</h3>");
     }
}).addTo(map);


L.geoJSON(airportData, {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3> California</h3> <hr> <h3>" + feature.properties.country + "</h3>");
     }
}).addTo(map);


// Create a polyline using the line coordinates and make the line red.
/*L.polyline(line, {
    color: "yellow",
    dashArray: '5,5',
    weight: 4
}).addTo(map);
*/

// loop thorugh cities
/*var marker = cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location,{
        radius: city.population/100000,
        color:'orange',
        fillOpacity: 0.2
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>").addTo(map);
});
*/
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
var layer1 = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "satellite-streets-v11",
  accessToken: API_KEY
});
var layer2 = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "streets-v11",
  accessToken: API_KEY
});

//create variable to add map layers
var baseMaps = {
    'Satellite Streets': layer1, 
    'Streets': layer2
};
// Create a map object
var map = L.map("map", {
    center: [49.5, -98.5],
    zoom: 2,
    layers: [layer2]
});

// Then we add our 'graymap' tile layer to the map.
L.control.layers(baseMaps).addTo(map);