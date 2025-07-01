// //segmentar en secciones porque me confundo xd
document.addEventListener('DOMContentLoaded', function() {
    // ========== CONFIG INICIAL ==========
    const pasosFormulario = document.querySelectorAll('.form-step');
    const botonAnterior = document.getElementById('prevBtn');
    const botonSiguiente = document.getElementById('nextBtn');
    const botonEnviar = document.getElementById('submitBtn');
    const pasosProgreso = document.querySelectorAll('.progress-step');
    let pasoActual = 0;

    // ========== FUNCIONES PRINCIPALES ==========
    function combinarFechaHora() {
        const fecha = document.getElementById('fecha_perdida').value;
        const hora = document.getElementById('hora_perdida').value;
        if (fecha && hora) {
            return `${fecha}T${hora}:00`;  // Formato ISO 8601
        }
        return null;
    }

    function mostrarPaso(paso) {
        pasosFormulario.forEach((pasoForm, indice) => {
            pasoForm.classList.toggle('active', indice === paso);
        });
        
        botonAnterior.disabled = paso === 0;
        botonSiguiente.style.display = paso === pasosFormulario.length - 1 ? 'none' : 'block';
        botonEnviar.style.display = paso === pasosFormulario.length - 1 ? 'block' : 'none';
        
        pasosProgreso.forEach((pasoProgreso, indice) => {
            const circulo = pasoProgreso.querySelector('.step-bubble');
            const etiqueta = pasoProgreso.querySelector('.step-label');
            
            if (indice < paso) {
                circulo.classList.remove('active');
                circulo.classList.add('completed');
                etiqueta.classList.remove('active');
            } else if (indice === paso) {
                circulo.classList.add('active');
                circulo.classList.remove('completed');
                etiqueta.classList.add('active');
            } else {
                circulo.classList.remove('active', 'completed');
                etiqueta.classList.remove('active');
            }
        });

        // Redibujar mapa cuando se muestra el paso 4
        if (paso === 3) {
            setTimeout(() => {
                map.invalidateSize();
                map.setView(map.getCenter(), map.getZoom());
            }, 300);
        }
    }

    function validarPaso(paso) {
        let esValido = true;
        const pasoActualForm = pasosFormulario[paso];
        const inputsRequeridos = pasoActualForm.querySelectorAll('[required]');
        
        inputsRequeridos.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ff4444';
                esValido = false;
            } else {
                input.style.borderColor = '';
            }
        });

        switch(paso) {
            case 0:
                const fecha = document.getElementById('fecha_perdida').value;
                    const hora = document.getElementById('hora_perdida').value;
                    if (!fecha || !hora) {
                        mostrarAlerta('Por favor completa fecha y hora');
                        esValido = false;
                    }
                const inputFotos = document.getElementById('dogPhotos');
                if (inputFotos.files.length === 0) {
                    mostrarAlerta('Por favor sube al menos una foto del perro');
                    esValido = false;
                } else if (inputFotos.files.length > 3) {
                    mostrarAlerta('Máximo 3 fotos permitidas');
                    esValido = false;
                }
                break;
                
            case 3:
                const codigoPostal = document.getElementById('codigo_postal');
                if (!/^\d{5}$/.test(codigoPostal.value)) {
                    mostrarAlerta('Código postal inválido (5 dígitos requeridos)');
                    esValido = false;
                }
                break;
        }
        
        return esValido;
    }

    function mostrarAlerta(mensaje) {
        const alertaDiv = document.createElement('div');
        alertaDiv.className = 'form-alert';
        alertaDiv.textContent = mensaje;
        document.querySelector('.perdido-container').prepend(alertaDiv);
        setTimeout(() => alertaDiv.remove(), 5000);
    }

    // ========== RAZAS Y TAMAÑOS ==========
    const selectRaza = document.getElementById('raza');
    const selectTamaño = document.getElementById('tamaño');
    let datosRazas = [];
    let datosGrupos = [];
    
    fetch('/static/data/razas.json')
        .then(respuesta => respuesta.json())
        .then(datos => {
            datosRazas = datos;
            inicializarSelectRaza();
        });

    fetch('/static/data/grupos.json')
        .then(respuesta => respuesta.json())
        .then(datos => datosGrupos = datos);

    function inicializarSelectRaza() {
        datosRazas.forEach(raza => {
            const opcion = document.createElement('option');
            opcion.value = raza.id;
            opcion.textContent = raza.attributes.name;
            selectRaza.appendChild(opcion);
        });
        new Choices(selectRaza, {
            searchEnabled: true,
            itemSelectText: 'Seleccionar',
            placeholderValue: 'Busca una raza...'
        });
    }

    selectRaza.addEventListener('change', function() {
        const razaSeleccionada = datosRazas.find(r => r.id === this.value);
        if (!razaSeleccionada) return;
        
        const idGrupo = razaSeleccionada.relationships.group.data.id;
        const grupo = datosGrupos.find(g => g.id === idGrupo);
        
        actualizarOpcionesTamaño(grupo.attributes.size_brackets);
    });

    function actualizarOpcionesTamaño(rangosTamaño) {
        selectTamaño.innerHTML = '';
        selectTamaño.disabled = false;
        
        rangosTamaño.forEach(rango => {
            const opcion = document.createElement('option');
            opcion.value = rango.label;
            opcion.textContent = `${rango.label} (${rango.kg.min}-${rango.kg.max || 'más'} kg)`;
            selectTamaño.appendChild(opcion);
        });
    }

    // ========== VACUNAS ==========
    const radiosVacunas = document.querySelectorAll('input[name="vacunado"]');
    const opcionesVacunas = document.getElementById('vaccineOptions');

    radiosVacunas.forEach(radio => {
        radio.addEventListener('change', function() {
            opcionesVacunas.style.display = this.value === 'yes' ? 'block' : 'none';
        });
    });

        // ========== IMÁGENES ==========
    const areaSubida = document.getElementById('photoUpload');
    const inputFotos = document.getElementById('dogPhotos');
    const previsualizacionFotos = document.getElementById('photoPreview');
    const inputFotosBase64 = document.getElementById('dogPhotosBase64');

    areaSubida.addEventListener('click', function(e) {
        e.stopPropagation();
        inputFotos.click();
    });
    
    inputFotos.addEventListener('change', function() {
        previsualizacionFotos.innerHTML = '';
        const archivos = Array.from(this.files).slice(0, 3);
        
        if (archivos.length === 0) {
            mostrarMensajeSinFotos();
            return;
        }
        
        const promesasBase64 = archivos.map(archivo => {
            return new Promise((resolve, reject) => {
                if (!['image/jpeg', 'image/png'].includes(archivo.type)) {
                    reject('Formato no válido. Solo JPG/PNG');
                    return;
                }

                const lector = new FileReader();
                lector.onload = (e) => resolve({
                    nombre: archivo.name,
                    base64: e.target.result.split(',')[1],
                    tipo: archivo.type
                });
                lector.onerror = () => reject('Error al leer archivo');
                lector.readAsDataURL(archivo);
            });
        });

        Promise.all(promesasBase64)
            .then(imagenes => {
                inputFotosBase64.value = JSON.stringify(imagenes);
                mostrarPrevisualizaciones(imagenes);
            })
            .catch(error => {
                mostrarAlerta(error);
                inputFotos.value = '';
            });
    });

    function mostrarMensajeSinFotos() {
        previsualizacionFotos.innerHTML = '<p class="no-photos-message">No hay fotos seleccionadas</p>';
        inputFotosBase64.value = '';
    }

    function mostrarPrevisualizaciones(imagenes) {
        previsualizacionFotos.innerHTML = '';
        
        imagenes.forEach((img, indice) => {
            const contenedor = document.createElement('div');
            contenedor.className = 'photo-container';
            
            const imgElement = document.createElement('img');
            imgElement.src = `data:${img.tipo};base64,${img.base64}`;
            imgElement.alt = `Foto ${indice + 1}`;
            
            const botonEliminar = document.createElement('button');
            botonEliminar.className = 'delete-photo-btn';
            botonEliminar.innerHTML = '&times;';
            botonEliminar.onclick = (e) => {
                e.stopPropagation();
                eliminarFoto(indice);
            };
            
            contenedor.appendChild(imgElement);
            contenedor.appendChild(botonEliminar);
            previsualizacionFotos.appendChild(contenedor);
        });
    }

    function eliminarFoto(indice) {
        const nuevosArchivos = Array.from(inputFotos.files);
        nuevosArchivos.splice(indice, 1);
        
        const dataTransfer = new DataTransfer();
        nuevosArchivos.forEach(archivo => dataTransfer.items.add(archivo));
        inputFotos.files = dataTransfer.files;
        
        const eventoChange = new Event('change');
        inputFotos.dispatchEvent(eventoChange);
    }

    // ========== CONFIGURACIÓN DEL MAPA Y DIRECCIÓN ==========
    const map = L.map('map').setView([19.4326, -99.1332], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const marker = L.marker([19.4326, -99.1332], { 
        draggable: true,
        autoPan: true
    }).addTo(map);

    // Elementos del formulario
    const cpInput = document.getElementById('codigo_postal');
    const estadoInput = document.getElementById('estado');
    const ciudadInput = document.getElementById('ciudad');
    const coloniaSelect = document.getElementById('colonia');
    const calleInput = document.getElementById('calle');
    const numExtInput = document.getElementById('numero_exterior');
    const latInput = document.getElementById('latitud');
    const lngInput = document.getElementById('longitud');

    // Cache para códigos postales
    const cpCache = {};

    // Event Listeners
    cpInput.addEventListener('input', () => {
        const cp = cpInput.value.trim();
        if (cp.length === 5 && /^\d+$/.test(cp)) {
            buscarPorCodigoPostal(cp);
        }
    });

    marker.on('dragend', e => {
        actualizarDesdeCoordenadas(e.target.getLatLng());
    });

    map.on('click', e => {
        marker.setLatLng(e.latlng);
        actualizarDesdeCoordenadas(e.latlng);
    });

    async function buscarPorCodigoPostal(cp) {
        if (cpCache[cp]) {
            llenarDatosDireccion(cpCache[cp]);
            return;
        }

        try {
            const res = await fetch(`https://sepomex.icalialabs.com/api/v1/zip_codes?zip_code=${cp}`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            
            const data = await res.json();
            cpCache[cp] = data.zip_codes;
            
            llenarDatosDireccion(data.zip_codes);
            centrarMapaEnCP(data.zip_codes[0]);
        } catch (error) {
            console.error('Error al buscar CP:', error);
            mostrarAlerta('No se encontraron datos para este código postal');
        }
    }

    function llenarDatosDireccion(datos) {
        if (!datos?.length) {
            mostrarAlerta('No se encontraron datos para este código postal');
            return;
        }
        estadoInput.value = datos[0].d_estado || '';
        ciudadInput.value = datos[0].d_mnpio || '';
        coloniaSelect.innerHTML = '';
        
        if (datos.length === 1) {
            agregarOpcionColonia(datos[0]);
        } else {
            coloniaSelect.appendChild(crearOpcionDefault());
            datos.sort((a, b) => a.d_asenta.localeCompare(b.d_asenta))
                 .forEach(agregarOpcionColonia);
        }
        coloniaSelect.disabled = false;
    }

    function agregarOpcionColonia(item) {
        const option = document.createElement('option');
        option.value = item.d_asenta;
        option.textContent = `${item.d_asenta} (${item.d_tipo_asenta})`;
        coloniaSelect.appendChild(option);
    }

    function crearOpcionDefault() {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = '-- Selecciona una colonia --';
        option.selected = true;
        return option;
    }

    async function centrarMapaEnCP(datoCP) {
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?city=${datoCP.d_mnpio}&state=${datoCP.d_estado}&country=México&format=json`);
            const data = await res.json();
            
            if (data.length > 0) {
                const { lat, lon } = data[0];
                map.setView([lat, lon], 16);
                marker.setLatLng([lat, lon]);
                latInput.value = lat;
                lngInput.value = lon;
            }
        } catch (error) {
            console.error('Error al centrar mapa:', error);
        }
    }

    async function actualizarDesdeCoordenadas({ lat, lng }) {
        latInput.value = lat.toFixed(6);
        lngInput.value = lng.toFixed(6);
        
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
            const data = await res.json();
            const addr = data.address || {};
            
            if (addr.postcode && addr.postcode !== cpInput.value) {
                cpInput.value = addr.postcode;
                buscarPorCodigoPostal(addr.postcode);
            }
            
            estadoInput.value = addr.state || '';
            ciudadInput.value = addr.city || addr.town || '';
            
            if (!coloniaSelect.value && (addr.suburb || addr.neighbourhood)) {
                coloniaSelect.value = addr.suburb || addr.neighbourhood;
            }
            
            calleInput.value = addr.road || '';
            numExtInput.value = addr.house_number || '';
        } catch (error) {
            console.error('Error en geocodificación inversa:', error);
        }
    }

    // ========== CONTADOR DE CARACTERES ==========
    const textareaDescripcion = document.getElementById('descripcion');
    const contadorDescripcion = document.getElementById('descCounter');
    textareaDescripcion.addEventListener('input', function() {
        contadorDescripcion.textContent = this.value.length;
        actualizarColorContador(contadorDescripcion, this.value.length);
    });

    const textareaSalud = document.getElementById('problemas_salud');
    const contadorSalud = document.getElementById('healthCounter');

    textareaSalud.addEventListener('input', function() {
        contadorSalud.textContent = this.value.length;
        actualizarColorContador(contadorSalud, this.value.length);
    });

    function actualizarColorContador(elemento, longitud) {
        if (longitud > 250) {
            elemento.style.color = '#ff4444';
        } else if (longitud > 200) {
            elemento.style.color = '#ff9900';
        } else {
            elemento.style.color = '#666';
        }
    }

    // ========== NAVEGACIÓN ==========
    botonSiguiente.addEventListener('click', () => {
        if (validarPaso(pasoActual)) {
            pasoActual++;
            mostrarPaso(pasoActual);
        }
    });

    botonAnterior.addEventListener('click', () => {
        pasoActual--;
        mostrarPaso(pasoActual);
    });


    // ========= ENVÍO DEL FORMULARIO =========
    document.getElementById('lostDogForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const fechaHoraCombinada = combinarFechaHora();
        if (!fechaHoraCombinada) {
            mostrarAlerta('Por favor completa fecha y hora');
            return;
        }

        const formData = new FormData(this);
        formData.delete('fecha_perdida');
        formData.delete('hora_perdida');
        formData.append('fecha_hora_perdida', fechaHoraCombinada);

        const fotosBase64 = document.getElementById('dogPhotosBase64').value;
        if (fotosBase64) {
            formData.delete('dogPhotos');
            formData.append('dogPhotosBase64', fotosBase64);
        }

        fetch('/perros/registrar/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            }
        })
            .then(r => r.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('modalExito').style.display = 'block';
                    setTimeout(() => {
                        window.location.href = "{% url 'home' %}";
                    }, 3000);
                } else if (data.errors) {
                    Object.entries(data.errors)
                        .forEach(([campo, errores]) =>
                            errores.forEach(err => mostrarAlerta(`${campo}: ${err.message}`)));
                }
            })
            .catch(err => {
                console.error('Error:', err);
                mostrarAlerta('Error al enviar el formulario');
            });
    });

    // ========== INICIALIZACIÓN ==========
    mostrarPaso(0);
    mostrarMensajeSinFotos();
});