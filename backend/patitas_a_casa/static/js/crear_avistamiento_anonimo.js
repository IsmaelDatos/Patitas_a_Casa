    function mostrarCampos() {
      var identificador = document.getElementById("identificador").value;
      var color_collar = document.getElementById("color_collar");
      var chip_ruac = document.getElementById("chip_ruac");
      
      color_collar.style.display = "none";
      chip_ruac.style.display = "none";
      
      if (identificador == "collar") {
        color_collar.style.display = "block";
      } else if (identificador == "chip" || identificador == "ruac") {
        chip_ruac.style.display = "block";
      }
    }

    // Manejo del envío del formulario
    document.getElementById('avistamientoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const form = this;
        const formData = new FormData(form);
        
        // Validación adicional del frontend
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
