// leaflet-autocomplete.js
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar mapa centrado en CDMX
    const map = L.map('map').setView([19.4326, -99.1332], 13);
    
    // Añadir capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    // Crear marcador
    const marker = L.marker([19.4326, -99.1332], {
        draggable: true
    }).addTo(map);
    
    // Actualizar coordenadas cuando se mueve el marcador
    function updateCoords(latlng) {
        document.getElementById('latitud').value = latlng.lat;
        document.getElementById('longitud').value = latlng.lng;
        
        // Geocodificación inversa (Nominatim)
        reverseGeocode(latlng);
    }
    
    // Geocodificación inversa con Nominatim (gratis)
    function reverseGeocode(latlng) {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${latlng.lng}`)
            .then(response => response.json())
            .then(data => {
                if (data.address) {
                    updateFormWithAddress(data);
                }
            })
            .catch(error => {
                console.error('Error en geocodificación:', error);
            });
    }
    
    // Actualizar formulario con dirección
    function updateFormWithAddress(data) {
        const address = data.address;
        
        // Código postal
        if (address.postcode && document.getElementById('codigo_postal')) {
            document.getElementById('codigo_postal').value = address.postcode;
            buscarCodigoPostal(address.postcode);
        }
        
        // Calle y número
        if (address.road && document.getElementById('calle')) {
            let calle = address.road;
            if (address.house_number) {
                calle += ` ${address.house_number}`;
            }
            document.getElementById('calle').value = calle;
        }
    }
    
    // Eventos
    marker.on('dragend', function(e) {
        updateCoords(e.target.getLatLng());
    });
    
    map.on('click', function(e) {
        marker.setLatLng(e.latlng);
        updateCoords(e.latlng);
    });

});