  	/*Aqui va lo del carrusel*/
    let slideIndex = 1;
    showSlides(slideIndex)

    function plusSlides(n){
        showSlides(slideIndex += n)
    }
    function currentSlide(n){
        showSlides(slideIndex = n)
    }
    function showSlides(n){
        let i;
        let slides = document.querySelectorAll(".mySlides");
        //let quadrates = document.querySelectorAll(".quadrate"); 
        if(n > slides.length) slideIndex = 1
        if(n < 1) slideIndex = slides.length
        for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none"
    	}
    //for(i = 0; i < quadrates.length;i++){
    //    quadrates[i].className = quadrates[i].className.replace("active","")
    //}
        slides[slideIndex-1].style.display = "block";
    //quadrates[slideIndex-1].className += " active";
    }
    
    let slideIndex2 = 1;
    showSlides2(slideIndex2)
    function plusSlides2(n){
        showSlides2(slideIndex2 += n)
    }
    function currentSlide2(n){
        showSlides2(slideIndex2 = n)
    }
    function showSlides2(n){
        let i;
        let slides2 = document.querySelectorAll(".mySlides2");
        //let quadrates = document.querySelectorAll(".quadrate"); 
        if(n > slides2.length) slideIndex2 = 1
        if(n < 1) slideIndex2 = slides2.length
        for(i = 0; i < slides2.length; i++){
            slides2[i].style.display = "none"
    	}
    //for(i = 0; i < quadrates.length;i++){
    //    quadrates[i].className = quadrates[i].className.replace("active","")
    //}
        slides2[slideIndex2-1].style.display = "block";
    //quadrates[slideIndex-1].className += " active";
    }
    function prueba(cosa){
    	var raza = document.getElementById('raza');
    	raza[0].value = cosa;
    	raza[0].selected = true;
    	raza.selectedOptions[0].innerHTML = cosa;
    }
    
    function prueba2(cosa){
    	var patron_pelo = document.getElementById('patron_pelo');
    	patron_pelo[0].value = cosa;
    	patron_pelo[0].selected = true;
    	patron_pelo[0].innerHTML = cosa;
    	
    }
	 /*Aqui finaliza lo del carrusel*/
    function mostrarCampos() {
      var identificador = document.getElementById("identificador").value;
      var color_collar = document.getElementById("color_collar");
      var chip_ruac = document.getElementById("chip_ruac");
      var placa = document.getElementById("teniendo_placa");
      var respondido = document.getElementById("teniendo_placa_select").value;
      var descripcion_placa = document.getElementById("descripcion_de_placa");
      
      color_collar.style.display = "none";
      chip_ruac.style.display = "none";
      placa.style.display = "none";
      descripcion_placa.style.display = "none";
      
      if (identificador == "collar") {
        color_collar.style.display = "block";
	placa.style.display = "block";
        if (respondido == "si"){
                console.log("Entre al if");
                descripcion_placa.style.display = "block";
            }
      } else if (identificador == "chip" || identificador == "ruac") {
        chip_ruac.style.display = "block";
      }
    }

    document.getElementById('avistamientoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = this;
        const formData = new FormData(form);
        if (!form.checkValidity()) {
            alert("Por favor completa todos los campos requeridos marcados con *");
            return;
        }
        
        // Mostrar spinner
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Enviar datos al servidor
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value,
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                if(data.message) {
                    document.getElementById('modal-message').textContent = data.message;
                }
                const modal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
                modal.show();
                
                document.getElementById('confirmacionModal').addEventListener('hidden.bs.modal', function() {
                  window.location.href = "{% url 'home' %}";
                });
            } else {
                throw new Error(data.error || 'Error en el servidor');
            }
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            alert('Error al enviar el formulario: ' + error.message);
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });

document.addEventListener('DOMContentLoaded', function() {
    let allShelters = [];
    let visibleMarkers = []; 
    const ZOOM_THRESHOLD = 13;
    const actionCards = document.querySelectorAll('.action-card');
    const followups = document.querySelectorAll('.action-followup');
    let map;
    
    let otherShelterRadio, otherShelterInput;

    // Crear icono personalizado
    const defaultIcon = L.icon({
    	iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    	iconSize: [25, 41],
    	iconAnchor: [12, 41],
    	popupAnchor: [1, -34]
	});

    actionCards.forEach(card => {
        card.addEventListener('click', function() {
            actionCards.forEach(c => c.classList.remove('selected'));
            followups.forEach(f => f.classList.remove('active'));
            this.classList.add('selected');
            const action = this.dataset.action;
            
            if (action !== 'nothing') {
                document.getElementById(`${action}-followup`).classList.add('active');
            }
            
            if (action === 'help') {
                const otherCheckbox = document.querySelector('input[name="help_type[]"][value="other"]');
                const otherContainer = document.getElementById('other-help-container');
                if (otherCheckbox) {
                    otherCheckbox.addEventListener('change', function() {
                        otherContainer.style.display = this.checked ? 'block' : 'none';
                    });
                }
            }
            
            if (action === 'shelter') {
                otherShelterRadio = document.querySelector('input[name="shelter_type"][value="other"]');
                otherShelterInput = document.querySelector('input[name="other_shelter"]');
                
                if (otherShelterRadio) {
                    otherShelterRadio.addEventListener('change', function() {
                        if (this.checked) {
                            clearShelterSelection();
                        }
                        if (otherShelterInput) {
                            otherShelterInput.style.display = this.checked ? 'block' : 'none';
                        }
                    });
                }
                
                initShelterMap();
            }
        });
    });

    function clearShelterSelection() {
        document.querySelectorAll('input[name="selected_shelter"]').forEach(radio => {
            radio.checked = false;
        });
        document.querySelectorAll('.shelter-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        resetMarkersOpacity();
    }

    function resetMarkersOpacity() {
        visibleMarkers.forEach(marker => {
            const markerElement = marker.getElement();
            if (markerElement) {
                markerElement.classList.add('hidden-marker');
                markerElement.classList.remove('faded-marker', 'selected-marker');
            }
        });
    }

    async function initShelterMap() {
        const cdmxCenter = [19.4326, -99.1332];
        map = L.map('shelter-map').setView(cdmxCenter, 11);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
        
        try {
            const response = await fetch("/static/data/albergues.json");
            if (!response.ok) throw new Error("Error al cargar albergues");
            allShelters = await response.json();
            displayShelters(map);
            
            document.getElementById('shelter-search').addEventListener('input', (e) => {
                const term = e.target.value.toLowerCase();
                const filtered = term ? allShelters.filter(s => 
                    s.name.toLowerCase().includes(term)) : allShelters;
                displayShelters(map, filtered);
            });
            
            map.on('zoomend', updateMarkersVisibility);
        } catch (error) {
            console.error("Error:", error);
            document.getElementById('shelter-options').innerHTML = `
                <div class="p-3 bg-red-100 text-red-700 rounded text-sm">
                    Error al cargar albergues: ${error.message}
                </div>`;
        }
    }

    function updateMarkersVisibility() {
        const shouldShow = map.getZoom() >= ZOOM_THRESHOLD;
        
        visibleMarkers.forEach(marker => {
            const markerElement = marker.getElement();
            if (markerElement) {
                if (shouldShow) {
                    markerElement.classList.remove('hidden-marker');
                    if (!markerElement.classList.contains('selected-marker')) {
                        markerElement.classList.add('faded-marker');
                    }
                } else {
                    markerElement.classList.add('hidden-marker');
                    markerElement.classList.remove('faded-marker', 'selected-marker');
                }
            }
        });
    }

    function displayShelters(map, shelters = allShelters) {
        const optionsContainer = document.getElementById('shelter-options');
        optionsContainer.innerHTML = '';
        
        visibleMarkers.forEach(marker => map.removeLayer(marker));
        visibleMarkers = [];
        
        shelters.forEach((shelter, idx) => {
            const marker = L.marker(shelter.coords, {
                icon: defaultIcon
            }).addTo(map);
            
            marker.bindPopup(`
                <div class="leaflet-popup-content">
                    <strong>${shelter.name}</strong>
                    ${shelter.address ? `<br><small>${shelter.address}</small>` : ''}
                </div>
            `);
            
            const markerElement = marker.getElement();
            if (markerElement) {
                markerElement.classList.add('hidden-marker');
            }
            
            visibleMarkers.push(marker);
            
            const option = document.createElement('div');
            option.className = 'shelter-option visible';
            option.id = `shelter-option-${idx}`;
            option.innerHTML = `
                <input type="radio" name="selected_shelter" value="${shelter.name}" 
                       id="shelter-${idx}" class="mr-2">
                <label for="shelter-${idx}" class="cursor-pointer">
                    <strong>${shelter.name}</strong>
                    ${shelter.address ? `<br><small class="text-gray-600">${shelter.address}</small>` : ''}
                </label>
            `;
            
            const radioInput = option.querySelector('input');
            
            radioInput.addEventListener('change', () => {
                handleShelterSelection(map, marker, option, shelters, idx);
            });
            
            marker.on('click', () => {
                radioInput.checked = true;
                handleShelterSelection(map, marker, option, shelters, idx);
            });
            
            optionsContainer.appendChild(option);
        });
    }
    
    function handleShelterSelection(map, marker, option, shelters, idx) {
        if (otherShelterRadio) {
            otherShelterRadio.checked = false;
            if (otherShelterInput) {
                otherShelterInput.style.display = 'none';
            }
        }
        
        const shelter = shelters[idx];
        map.setView(shelter.coords, Math.max(map.getZoom(), 15));
        
        visibleMarkers.forEach(m => {
            const markerElement = m.getElement();
            if (markerElement) {
                if (m === marker) {
                    markerElement.classList.remove('hidden-marker', 'faded-marker');
                    markerElement.classList.add('selected-marker');
                    m.openPopup();
                } else {
                    markerElement.classList.remove('selected-marker');
                    if (map.getZoom() >= ZOOM_THRESHOLD) {
                        markerElement.classList.add('faded-marker');
                    } else {
                        markerElement.classList.add('hidden-marker');
                    }
                }
            }
        });
        
        document.querySelectorAll('.shelter-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        option.classList.add('selected');
        
        option.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
});


