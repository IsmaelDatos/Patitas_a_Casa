document.addEventListener('DOMContentLoaded', function() {
    // Variables para el formulario multipaso
    const formSteps = document.querySelectorAll('.form-step');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const progressSteps = document.querySelectorAll('.progress-step');
    let currentStep = 0;
    
    // Mostrar el paso actual
    function showStep(step) {
        formSteps.forEach((formStep, index) => {
            formStep.classList.toggle('active', index === step);
        });
        
        // Actualizar botones de navegación
        prevBtn.disabled = step === 0;
        nextBtn.style.display = step === formSteps.length - 1 ? 'none' : 'block';
        submitBtn.style.display = step === formSteps.length - 1 ? 'block' : 'none';
        
        // Actualizar barra de progreso
        progressSteps.forEach((progressStep, index) => {
            const bubble = progressStep.querySelector('.step-bubble');
            const label = progressStep.querySelector('.step-label');
            
            if (index < step) {
                bubble.classList.remove('active');
                bubble.classList.add('completed');
                label.classList.remove('active');
            } else if (index === step) {
                bubble.classList.add('active');
                bubble.classList.remove('completed');
                label.classList.add('active');
            } else {
                bubble.classList.remove('active', 'completed');
                label.classList.remove('active');
            }
        });
        
        // Generar resumen en el último paso
        if (step === formSteps.length - 1) {
            generateSummary();
        }
    }
    
    // Validación de cada paso
    function validateStep(step) {
        let isValid = true;
        const currentFormStep = formSteps[step];
        const requiredInputs = currentFormStep.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'var(--accent-color)';
                isValid = false;
            } else {
                input.style.borderColor = '';
            }
        });
        
        // Validación especial para fotos
        if (step === 0) {
            const photoInput = document.getElementById('dogPhotos');
            if (photoInput.files.length === 0) {
                alert('Por favor sube al menos una foto del perro');
                isValid = false;
            } else if (photoInput.files.length > 3) {
                alert('Máximo 3 fotos permitidas');
                isValid = false;
            }
        }
        
        // Validación especial para código postal
        if (step === 3) {
            const postalCode = document.getElementById('postalCode');
            if (!/^\d{5}$/.test(postalCode.value)) {
                postalCode.style.borderColor = 'var(--accent-color)';
                alert('Por favor ingresa un código postal válido de 5 dígitos');
                isValid = false;
            } else {
                postalCode.style.borderColor = '';
            }
        }
        
        return isValid;
    }
    
    // Generar resumen del formulario
    function generateSummary() {
        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = '<h3>Resumen de tu reporte</h3><ul>';
        
        // Información básica
        summaryDiv.innerHTML += `<li><strong>Nombre del perro:</strong> ${document.getElementById('dogName').value}</li>`;
        summaryDiv.innerHTML += `<li><strong>Visto por última vez:</strong> ${document.getElementById('lastSeenDate').value} a las ${document.getElementById('lastSeenTime').value}</li>`;
        
        // Fotos
        const photoInput = document.getElementById('dogPhotos');
        summaryDiv.innerHTML += `<li><strong>Fotos subidas:</strong> ${photoInput.files.length}</li>`;
        
        // Descripción
        summaryDiv.innerHTML += `<li><strong>Raza:</strong> ${document.getElementById('dogBreed').value}</li>`;
        summaryDiv.innerHTML += `<li><strong>Sexo:</strong> ${document.querySelector('input[name="dogGender"]:checked').value}</li>`;
        summaryDiv.innerHTML += `<li><strong>Tamaño:</strong> ${document.getElementById('dogSize').value}</li>`;
        summaryDiv.innerHTML += `<li><strong>Edad:</strong> ${document.getElementById('dogAge').value}</li>`;
        summaryDiv.innerHTML += `<li><strong>Color principal:</strong> ${document.getElementById('primaryColor').value}</li>`;
        summaryDiv.innerHTML += `<li><strong>Descripción:</strong> ${document.getElementById('dogDescription').value}</li>`;
        
        // Identificación y salud
        const identifiers = [];
        document.querySelectorAll('input[name="identifiers"]:checked').forEach(checkbox => {
            identifiers.push(checkbox.value);
        });
        summaryDiv.innerHTML += `<li><strong>Identificadores:</strong> ${identifiers.join(', ') || 'Ninguno'}</li>`;
        
        if (document.getElementById('identifierDetails').value) {
            summaryDiv.innerHTML += `<li><strong>Detalles identificador:</strong> ${document.getElementById('identifierDetails').value}</li>`;
        }
        
        summaryDiv.innerHTML += `<li><strong>Vacunas al día:</strong> ${document.querySelector('input[name="vaccinated"]:checked').value}</li>`;
        
        if (document.getElementById('vaccineDetails').value) {
            summaryDiv.innerHTML += `<li><strong>Detalles vacunas:</strong> ${document.getElementById('vaccineDetails').value}</li>`;
        }
        
        if (document.getElementById('healthDetails').value) {
            summaryDiv.innerHTML += `<li><strong>Problemas de salud:</strong> ${document.getElementById('healthDetails').value}</li>`;
        }
        
        // Ubicación
        summaryDiv.innerHTML += `<li><strong>Ubicación:</strong> C.P. ${document.getElementById('postalCode').value}, ${document.getElementById('neighborhood').value}, ${document.getElementById('city').value}, ${document.getElementById('state').value}</li>`;
        
        if (document.getElementById('addressDetails').value) {
            summaryDiv.innerHTML += `<li><strong>Detalles ubicación:</strong> ${document.getElementById('addressDetails').value}</li>`;
        }
        
        // Contacto
        summaryDiv.innerHTML += `<li><strong>Contacto:</strong> ${document.getElementById('contactName').value}, Tel: ${document.getElementById('contactPhone').value}</li>`;
        
        if (document.getElementById('contactEmail').value) {
            summaryDiv.innerHTML += `<li><strong>Email:</strong> ${document.getElementById('contactEmail').value}</li>`;
        }
        
        if (document.getElementById('additionalContact').value) {
            summaryDiv.innerHTML += `<li><strong>Otro contacto:</strong> ${document.getElementById('additionalContact').value}</li>`;
        }
        
        if (document.getElementById('reward').value) {
            summaryDiv.innerHTML += `<li><strong>Recompensa:</strong> ${document.getElementById('reward').value}</li>`;
        }
        
        summaryDiv.innerHTML += '</ul>';
        
        // Limpiar y mostrar el resumen
        const formSummary = document.getElementById('formSummary');
        if (formSummary) {
            formSummary.innerHTML = '';
            formSummary.appendChild(summaryDiv);
        }
    }
    
    // Manejo de subida de fotos
    const photoUpload = document.getElementById('photoUpload');
    const photoInput = document.getElementById('dogPhotos');
    const photoPreview = document.getElementById('photoPreview');
    const noPhotosMessage = document.createElement('p');

    noPhotosMessage.textContent = 'No hay fotos seleccionadas';
    noPhotosMessage.className = 'no-photos-message';
    photoPreview.appendChild(noPhotosMessage);

    photoUpload.addEventListener('click', function() {
        photoInput.click();
    });
    
    photoInput.addEventListener('change', function() {
        photoPreview.innerHTML = '';
        if (this.files.length > 3) {
            alert('Máximo 3 fotos permitidas');
            this.value = '';
            return;
        }
        
        Array.from(this.files).forEach((file, index) => {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const photoContainer = document.createElement('div');
                photoContainer.className = 'photo-container';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'photo-thumbnail';
                img.alt = `Foto ${index + 1} del perro`;
                
                const deleteBtn = document.createElement('button');
                deleteBtn.innerHTML = '&times;';
                deleteBtn.className = 'delete-photo-btn';
                deleteBtn.title = 'Eliminar foto';
                
                // Eliminar foto al hacer clic en el botón
                deleteBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    // Crear nueva lista de archivos sin la foto eliminada
                    const newFiles = Array.from(photoInput.files).filter((_, i) => i !== index);
                    
                    // Actualizar el input de archivos
                    const dataTransfer = new DataTransfer();
                    newFiles.forEach(file => dataTransfer.items.add(file));
                    photoInput.files = dataTransfer.files;
                    
                    // Volver a disparar el evento change
                    photoInput.dispatchEvent(new Event('change'));
                });
                
                photoContainer.appendChild(img);
                photoContainer.appendChild(deleteBtn);
                photoPreview.appendChild(photoContainer);
            };
            
            reader.readAsDataURL(file);
        });
    });
    
    // Mostrar/ocultar detalles de identificador
    const identifierCheckboxes = document.querySelectorAll('input[name="identifiers"]');
    const identifierDetailsGroup = document.getElementById('identifierDetailsGroup');
    
    identifierCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const anyChecked = Array.from(identifierCheckboxes).some(cb => cb.checked && cb.value !== 'none');
            identifierDetailsGroup.style.display = anyChecked ? 'block' : 'none';
            
            if (this.value === 'none' && this.checked) {
                identifierCheckboxes.forEach(cb => {
                    if (cb.value !== 'none') cb.checked = false;
                });
                identifierDetailsGroup.style.display = 'none';
            } else if (this.value !== 'none' && this.checked) {
                document.querySelector('input[name="identifiers"][value="none"]').checked = false;
            }
        });
    });
    
    // Inicializar mapa Leaflet
    const map = L.map('map').setView([19.4326, -99.1332], 11);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    let marker = L.marker([19.4326, -99.1332], {draggable: true}).addTo(map);
    
    marker.on('dragend', function() {
        const latLng = marker.getLatLng();
        getAddressFromCoordinates(latLng.lat, latLng.lng);
    });
    
    map.on('click', function(e) {
        marker.setLatLng(e.latlng);
        getAddressFromCoordinates(e.latlng.lat, e.latlng.lng);
    });
    
    // Autocompletado por código postal
    const postalCodeInput = document.getElementById('postalCode');
    postalCodeInput.addEventListener('blur', function() {
        const cp = this.value.trim();
        if (cp.length === 5 && /^\d{5}$/.test(cp)) {
            fetch(`https://api.zippopotam.us/mx/${cp}`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.places && data.places.length > 0) {
                        const place = data.places[0];
                        document.getElementById('state').value = place.state;
                        document.getElementById('city').value = place['place name'];
                        document.getElementById('neighborhood').value = place['place name'];
                        
                        // Centrar mapa en la ubicación del CP
                        const lat = parseFloat(place.latitude);
                        const lng = parseFloat(place.longitude);
                        if (!isNaN(lat) && !isNaN(lng)) {
                            map.setView([lat, lng], 14);
                            marker.setLatLng([lat, lng]);
                        }
                    }
                })
                .catch(error => {
                    console.log('No se pudo obtener información del código postal:', error);
                });
        }
    });
    
    // Función para obtener dirección desde coordenadas
    function getAddressFromCoordinates(lat, lng) {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`)
            .then(response => response.json())
            .then(data => {
                if (data.address) {
                    document.getElementById('postalCode').value = data.address.postcode || '';
                    document.getElementById('state').value = data.address.state || '';
                    document.getElementById('city').value = data.address.city || data.address.town || data.address.village || '';
                    document.getElementById('neighborhood').value = data.address.suburb || data.address.neighbourhood || '';
                }
            })
            .catch(error => {
                console.log('Error al obtener dirección:', error);
            });
    }
    
    // Envío del formulario
    document.getElementById('lostDogForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí iría la lógica para enviar los datos al servidor
        alert('Reporte enviado correctamente. ¡Gracias por tu ayuda!');
        // this.submit(); // Descomentar para enviar realmente el formulario
    });
    
    // Navegación entre pasos
    nextBtn.addEventListener('click', function() {
        if (validateStep(currentStep)) {
            currentStep++;
            showStep(currentStep);
        }
    });
    
    prevBtn.addEventListener('click', function() {
        currentStep--;
        showStep(currentStep);
    });
    
    // Mostrar el primer paso al cargar
    showStep(0);
});