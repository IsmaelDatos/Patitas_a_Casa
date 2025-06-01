    document.addEventListener('DOMContentLoaded', function() {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('reporte_exitoso') === '1') {
        const modal = new bootstrap.Modal(document.getElementById('confirmacionModal'));
        modal.show();
      }
    });
