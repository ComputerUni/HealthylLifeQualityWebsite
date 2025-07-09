document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([41.0082, 28.9784], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


L.marker([41.0082, 28.9784]).addTo(map)
        .bindPopup('Biz buradayız!');
});