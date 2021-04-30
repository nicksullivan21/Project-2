// Create a map object
var myMap = L.map("map", {
  center: [-24.15, 133.25],
  zoom: 4
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(PPI) {
  return PPI * 500;
}

// Each city object contains the city's name, location and population
var cities = [
  {
    name: "1. Sydney",
    location: [-33.87, 151.21],
    PPI: 165.9
  },
  {
    name: "3. Melbourne",
    location: [-37.81, 144.96],
    PPI: 150
  },
  {
    name: "5. Brisbane",
    location: [-27.47, 153.03],
    PPI: 123.7
  },
  {
    name: "7. Perth",
    location: [-31.95, 115.86],
    PPI: 99.5
  },
  {
    name: "6. Adelaide",
    location: [-34.93, 138.60],
    PPI: 121.1
  },
  {
    name: "4. Canberra",
    location: [-35.28, 149.13],
    PPI: 129.2
  },
  {
    name: "2. Hobart",
    location: [-42.88, 147.33],
    PPI: 155.8
  },
  {
    name: "8. Darwin",
    location: [-12.46, 130.84],
    PPI: 86.9
  }
];

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
  L.circle(cities[i].location, {
    fillOpacity: 0.75,
    color: "red",
    fillColor: "blue",
    radius: markerSize(cities[i].PPI)
  }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>PPI: " + cities[i].PPI + "</h3>").addTo(myMap);
}
