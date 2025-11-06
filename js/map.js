
document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([-40.0, -64.0], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Load GeoJSON data
    fetch('assets/provincias.geojson')
        .then(response => response.json())
        .then(data => {
            L.geoJSON(data, {
                onEachFeature: function (feature, layer) {
                    layer.on('click', function () {
                        // Example of interaction: log province name
                        console.log(feature.properties.nombre);
                    });
                }
            }).addTo(map);
        });
});
