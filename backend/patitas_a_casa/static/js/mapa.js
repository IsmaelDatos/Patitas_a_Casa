document.addEventListener('DOMContentLoaded', function() {
    /***********************
     * Configuración Mapa *
     ***********************/
    const map = L.map('map').setView([19.4326, -99.1332], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const marker = L.marker([19.4326, -99.1332], {draggable: true}).addTo(map);

    /*****************************
     * Autocompletado SEPOMEX *
     *****************************/
    const cpInput = document.getElementById('codigo_postal');
    const ciudadInput = document.getElementById('ciudad');
    const alcaldiaInput = document.getElementById('alcaldia');
    const coloniaSelect = document.getElementById('colonia');
    const loadingIndicator = document.getElementById('cp-loading');
    const cpCache = {};

    // Autobúsqueda al escribir CP (sin necesidad de Enter)
    cpInput.addEventListener('input', function() {
        clearErrorMessages();
        const cp = cpInput.value.trim();
        if (cp.length === 5 && /^\d+$/.test(cp)) {
            buscarCodigoPostal(cp);
        }
    });

    /**************************
     * Funciones Comunes *
     **************************/
    function buscarCodigoPostal(cp) {
        if (cpCache[cp]) {
            llenarDatos(cpCache[cp]);
            return;
        }

        showLoading(true);
        resetearCampos();
        
        fetch(`https://sepomex.icalialabs.com/api/v1/zip_codes?zip_code=${cp}`)
            .then(handleResponse)
            .then(data => {
                cpCache[cp] = data.zip_codes;
                llenarDatos(data.zip_codes);
                // Actualizar mapa si tenemos coordenadas aproximadas
                if (data.zip_codes[0]?.d_cp) {
                    actualizarMapaDesdeCP(data.zip_codes[0].d_cp);
                }
            })
            .catch(handleError)
            .finally(() => showLoading(false));
    }

    function llenarDatos(datos) {
        if (!datos?.length) {
            mostrarError('No se encontraron datos para este código postal');
            return;
        }

        ciudadInput.value = datos[0].d_ciudad || '';
        alcaldiaInput.value = datos[0].d_mnpio || '';
        
        coloniaSelect.innerHTML = '';
        if (datos.length === 1) {
            agregarOpcionColonia(datos[0]);
        } else {
            coloniaSelect.appendChild(crearOptionDefault());
            datos.sort((a, b) => a.d_asenta.localeCompare(b.d_asenta))
                 .forEach(agregarOpcionColonia);
        }
        coloniaSelect.disabled = false;
    }

    /**************************
     * Funciones del Mapa *
     **************************/
    function actualizarMapaDesdeCP(cp) {
        // Usamos Nominatim para obtener coordenadas aproximadas del CP
        fetch(`https://nominatim.openstreetmap.org/search?postalcode=${cp}&country=Mexico&format=json`)
            .then(res => res.json())
            .then(data => {
                if (data[0]) {
                    const {lat, lon} = data[0];
                    map.setView([lat, lon], 15);
                    marker.setLatLng([lat, lon]);
                }
            });
    }

    marker.on('dragend', function(e) {
        actualizarFormularioDesdeCoords(e.target.getLatLng());
    });

    map.on('click', function(e) {
        marker.setLatLng(e.latlng);
        actualizarFormularioDesdeCoords(e.latlng);
    });

    function actualizarFormularioDesdeCoords(latlng) {
        document.getElementById('latitud').value = latlng.lat;
        document.getElementById('longitud').value = latlng.lng;
        
        // Geocodificación inversa
        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${latlng.lng}`)
            .then(res => res.json())
            .then(data => {
                if (data.address) {
                    actualizarCamposDesdeDireccion(data.address);
                }
            });
    }

    function actualizarCamposDesdeDireccion(address) {
        // Actualizar solo si los campos están vacíos
        if (!cpInput.value && address.postcode) {
            cpInput.value = address.postcode;
            buscarCodigoPostal(address.postcode);
        }
        
        if (!document.getElementById('calle').value && address.road) {
            let calle = address.road;
            if (address.house_number) calle += ` ${address.house_number}`;
            document.getElementById('calle').value = calle;
        }
    }

    /**************************
     * Funciones Auxiliares *
     **************************/
    function agregarOpcionColonia(item) {
        const option = document.createElement('option');
        option.value = item.d_asenta;
        option.textContent = `${item.d_asenta} (${item.d_tipo_asenta})`;
        coloniaSelect.appendChild(option);
    }

    function crearOptionDefault() {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = '-- Selecciona una colonia --';
        option.selected = true;
        return option;
    }

    function handleResponse(response) {
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        return response.json();
    }

    function handleError(error) {
        console.error('Error:', error);
        mostrarError('Error al obtener datos. Intenta nuevamente.');
    }

    function resetearCampos() {
        ciudadInput.value = '';
        alcaldiaInput.value = '';
        coloniaSelect.innerHTML = '<option value="">Primero ingresa tu código postal</option>';
        coloniaSelect.disabled = true;
    }

    function showLoading(show) {
        loadingIndicator.classList.toggle('hidden', !show);
    }

    function mostrarError(mensaje) {
        clearErrorMessages();
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message text-red-500 text-sm mt-1';
        errorElement.textContent = mensaje;
        cpInput.parentNode.insertBefore(errorElement, cpInput.nextSibling);
    }

    function clearErrorMessages() {
        document.querySelectorAll('.error-message').forEach(el => el.remove());
    }
});