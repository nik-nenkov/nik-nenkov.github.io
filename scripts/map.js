const map = L.map('map').setView([42.75, 25.25], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const provincesJSONPath = 'gis/provinces.geo.json';
const districtsJSONPath = 'gis/districts.geo.json';
const townhallsJSONPath = 'gis/townhalls.geo.json';

const myOtherStyle = {
    stroke: false,
    fill: true,
    fillColor: 'rgba(165,255,75,0.45)',
    color: 'rgb(155,155,155)',
    opacity: 0.7,
    fillOpacity: 1
};
const myDistStyle = {
    stroke: false,
    fill: true,
    fillColor: 'rgba(75,255,165,0.45)',
    color: 'rgb(155,155,155)',
    opacity: 0.7,
    fillOpacity: 1
};
const myTownStyle = {
    stroke: false,
    fill: true,
    fillColor: 'rgba(255,75,165,0.45)',
    color: 'rgb(155,155,155)',
    opacity: 0.7,
    fillOpacity: 1
};

let provincesJson;
let districtsJson;

let provincesMark;
let districtsMark;

$.getJSON(provincesJSONPath, function (data) {
    provincesJson = data;
    provincesMark = L.geoJson(provincesJson, {
        clickable: false, style: myOtherStyle, filter: function () {
            return false;
        }
    }).addTo(map);
})
$.getJSON(districtsJSONPath, function (data) {
    districtsJson = data;
    districtsMark = L.geoJson(districtsJson, {
        clickable: false, style: myDistStyle, filter: function () {
            return false;
        }
    }).addTo(map);
})
const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.display_name && feature.properties.n_properties) {
        layer.bindPopup(feature.properties.display_name + "<br/>" + "Обяви: " + "<a href=http://localhost:8080/townhalls/" + feature.properties.uuid + "/properties>" + feature.properties.n_properties + "</a>");
        layer.on('click', function (e) {
            this.openPopup(e.latlng);
        });
        layer.on('clickout', function (e) {
            this.closePopup();
        });
        if (feature.properties.n_properties > 2) {
            layer.setIcon(greenIcon);
        }
        if (feature.properties.n_properties > 4) {
            layer.setIcon(goldIcon);
        }
        if (feature.properties.n_properties > 8) {
            layer.setIcon(orangeIcon);
        }
        if (feature.properties.n_properties > 16) {
            layer.setIcon(redIcon);
        }
    }
}

$.getJSON(townhallsJSONPath, function (data) {
    const mark = L.geoJson(data, {
        clickable: false, style: myTownStyle, onEachFeature: onEachFeature
    }).addTo(map);
})

$('#provinces').on('change', function () {
    const k = this.value;
    map.removeLayer(provincesMark);
    provincesMark = L.geoJson(provincesJson, {
        style: myOtherStyle, filter: function (feature, _layer) {
            return ("" + feature.properties.nuts3) === ("" + k);
        }
    }).addTo(map);
});
$('#districts').on('change', function () {
    const k = this.value;
    map.removeLayer(districtsMark);
    districtsMark = L.geoJson(districtsJson, {
        style: myDistStyle, filter: function (feature, _layer) {
            return ("" + feature.properties.obns_num) === ("" + k);
        }
    }).addTo(map);
});