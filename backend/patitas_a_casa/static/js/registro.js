        function toggleForm(type) {
            const personaForm = document.getElementById('persona-form');
            const albergueForm = document.getElementById('albergue-form');
            const personaBtn = document.getElementById('persona-btn');
            const albergueBtn = document.getElementById('albergue-btn');
            
            if (type === 'persona') {
                personaForm.classList.remove('hidden');
                albergueForm.classList.add('hidden');
                personaBtn.classList.add('active');
                albergueBtn.classList.remove('active');
            } else {
                personaForm.classList.add('hidden');
                albergueForm.classList.remove('hidden');
                personaBtn.classList.remove('active');
                albergueBtn.classList.add('active');
            }
        }
        
        // Mapeo de entidades a alcaldías/municipios
        const ubicaciones = {
            'CDMX': ['Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán', 'Cuajimalpa', 
                    'Cuauhtémoc', 'Gustavo A. Madero', 'Iztacalco', 'Iztapalapa', 'Magdalena Contreras',
                    'Miguel Hidalgo', 'Milpa Alta', 'Tláhuac', 'Tlalpan', 'Venustiano Carranza', 'Xochimilco'],
            'EDOMEX': ['Acolman', 'Aculco', 'Almoloya de Juárez', 'Amecameca', 'Apaxco', 
                      'Atizapán de Zaragoza', 'Atlacomulco', 'Axapusco', 'Coacalco', 'Ecatepec'],
            'JAL': ['Guadalajara', 'Zapopan', 'Tlaquepaque', 'Tonalá', 'Tlajomulco', 
                   'El Salto', 'Ixtlahuacán de los Membrillos', 'Juanacatlán', 'Chapala', 'Zapotlanejo'],
            'NL': ['Monterrey', 'Guadalupe', 'San Nicolás de los Garza', 'San Pedro Garza García', 
                  'Santa Catarina', 'Apodaca', 'Escobedo', 'García', 'Juárez', 'Santiago']
        };
        
        document.addEventListener('DOMContentLoaded', function() {
            toggleForm('persona');
            
            // Manejar cambio de entidad federativa
            const entidadSelect = document.getElementById('id_entidad');
            const alcaldiaSelect = document.getElementById('id_alcaldia');
            
            entidadSelect.addEventListener('change', function() {
                const entidad = this.value;
                alcaldiaSelect.innerHTML = '<option value="">Seleccione una alcaldía</option>';
                
                if (entidad && ubicaciones[entidad]) {
                    ubicaciones[entidad].forEach(function(alcaldia) {
                        const option = document.createElement('option');
                        option.value = alcaldia;
                        option.textContent = alcaldia;
                        alcaldiaSelect.appendChild(option);
                    });
                }
            });
            
            // Manejar subida de archivo
            const fileInput = document.getElementById('id_foto');
            const fileText = document.getElementById('file-text');
            
            fileInput.addEventListener('change', function() {
                if (this.files && this.files[0]) {
                    fileText.textContent = this.files[0].name;
                }
            });
            
            // Validar código postal
            const codigoPostalInput = document.getElementById('id_codigo_postal');
            codigoPostalInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9]/g, '');
                if (this.value.length > 5) {
                    this.value = this.value.slice(0, 5);
                }
            });
        });
