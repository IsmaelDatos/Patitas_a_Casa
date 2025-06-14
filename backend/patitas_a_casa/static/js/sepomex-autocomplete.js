document.addEventListener('DOMContentLoaded', function() {
    // Elementos del formulario
    const cpInput = document.getElementById('codigo_postal');
    const ciudadInput = document.getElementById('ciudad');
    const alcaldiaInput = document.getElementById('alcaldia');
    const coloniaSelect = document.getElementById('colonia');
    const loadingIndicator = document.getElementById('cp-loading');
    
    // Cache para almacenar resultados ya consultados
    const cpCache = {};
    
    // Limpiar mensajes de error al empezar a escribir
    cpInput.addEventListener('input', function() {
        clearErrorMessages();
    });
    
    // Validar y buscar código postal al perder el foco
    cpInput.addEventListener('blur', function() {
        const cp = cpInput.value.trim();
        
        if (cp.length === 5 && /^\d+$/.test(cp)) {
            buscarCodigoPostal(cp);
        } else if (cp.length > 0) {
            mostrarError('El código postal debe tener exactamente 5 dígitos numéricos');
        }
    });
    
    function buscarCodigoPostal(cp) {
        // Verificar si ya tenemos los datos en cache
        if (cpCache[cp]) {
            llenarDatos(cpCache[cp]);
            return;
        }
        
        // Mostrar indicador de carga
        showLoading(true);
        resetearCampos();
        
        // Hacer la petición a la API
        fetch(`https://sepomex.icalialabs.com/api/v1/zip_codes?zip_code=${cp}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.zip_codes && data.zip_codes.length > 0) {
                    // Guardar en cache
                    cpCache[cp] = data.zip_codes;
                    llenarDatos(data.zip_codes);
                } else {
                    throw new Error('Código postal no encontrado');
                }
            })
            .catch(error => {
                console.error('Error al buscar código postal:', error);
                mostrarError('No se encontraron datos para este código postal. Verifica que sea correcto.');
            })
            .finally(() => {
                showLoading(false);
            });
    }
    
    function llenarDatos(datos) {
        // Verificar si hay datos válidos
        if (!datos || datos.length === 0) {
            mostrarError('No se encontraron datos para este código postal');
            return;
        }
        
        // Llenar ciudad y alcaldía (siempre es el mismo para un CP)
        ciudadInput.value = datos[0].d_ciudad || '';
        alcaldiaInput.value = datos[0].d_mnpio || '';
        
        // Llenar colonias
        coloniaSelect.innerHTML = '';
        
        if (datos.length === 1) {
            // Caso 1: Solo una colonia
            const option = document.createElement('option');
            option.value = datos[0].d_asenta;
            option.textContent = `${datos[0].d_asenta} (${datos[0].d_tipo_asenta})`;
            coloniaSelect.appendChild(option);
        } else {
            // Caso 2: Múltiples colonias
            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.textContent = '-- Selecciona una colonia --';
            defaultOption.selected = true;
            coloniaSelect.appendChild(defaultOption);
            
            // Ordenar colonias alfabéticamente
            datos.sort((a, b) => a.d_asenta.localeCompare(b.d_asenta));
            
            // Agregar todas las opciones
            datos.forEach(item => {
                const option = document.createElement('option');
                option.value = item.d_asenta;
                option.textContent = `${item.d_asenta} (${item.d_tipo_asenta})`;
                coloniaSelect.appendChild(option);
            });
        }
        
        coloniaSelect.disabled = false;
    }
    
    function resetearCampos() {
        ciudadInput.value = '';
        alcaldiaInput.value = '';
        coloniaSelect.innerHTML = '<option value="">Primero ingresa tu código postal</option>';
        coloniaSelect.disabled = true;
    }
    
    function showLoading(show) {
        if (show) {
            loadingIndicator.classList.remove('hidden');
        } else {
            loadingIndicator.classList.add('hidden');
        }
    }
    
    function mostrarError(mensaje) {
        clearErrorMessages();
        
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message text-red-500 text-sm mt-1';
        errorElement.textContent = mensaje;
        
        cpInput.parentNode.insertBefore(errorElement, cpInput.nextSibling);
        
        resetearCampos();
    }
    
    function clearErrorMessages() {
        const erroresPrevios = document.querySelectorAll('.error-message');
        erroresPrevios.forEach(error => error.remove());
    }
});