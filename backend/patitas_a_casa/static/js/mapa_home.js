document.addEventListener('DOMContentLoaded', function() {
  // Inicializar el mapa centrado en CDMX
  const map = L.map('map').setView([19.4326, -99.1332], 11);

  // Capa base OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Crear grupos de capas con clustering
  const avistadosCluster = L.markerClusterGroup();
  const perdidosCluster = L.markerClusterGroup();
  const alberguesCluster = L.markerClusterGroup();
  const adopcionCluster = L.markerClusterGroup();

  // Iconos personalizados
  function createIcon(svgUrl) {
     const svgHtml = `
     <svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
       <circle cx="19" cy="19" r="18" fill="#5A3CE8" />
          <image href="${svgUrl}" x="9" y="9" height="20" width="20" />
      </svg>
    `;
     return L.divIcon({
      className: '',
      html: svgHtml,
       iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38]
    });
}

  

  const icons = {
    avistados: createIcon('/static/img/svg/visto_icon.svg'),
    perdidos: createIcon('/static/img/svg/perdido_icon.svg'),
    albergues: createIcon('/static/img/svg/albergue_icon.svg'),
    adopcion: createIcon('/static/img/svg/adopcion_icon.svg')
  };

  fetch('/static/data/albergues.json')
    .then(res => res.json())
    .then(data => {
      data.forEach(a => {
        const marker = L.marker(a.coords, { icon: icons.albergues });
        marker.bindPopup(`<b>${a.name}</b>`);
        alberguesCluster.addLayer(marker);
      });
      updateLayerCounts();
    });

  const avistadosData = [
    { coords: [19.44, -99.15], info: 'Perro avistado<br>Raza: Mestizo' },
    { coords: [19.43, -99.13], info: 'Perro avistado<br>Raza: Labrador' }
  ];
  const perdidosData = [
    { coords: [19.42, -99.14], info: 'Perro perdido<br>Nombre: Rocky' }
  ];
  const adopcionData = [
    { coords: [19.45, -99.12], info: 'En adopción<br>Nombre: Luna' }
  ];

  avistadosData.forEach(d => {
    const m = L.marker(d.coords, { icon: icons.avistados });
    m.bindPopup(d.info);
    avistadosCluster.addLayer(m);
  });
  perdidosData.forEach(d => {
    const m = L.marker(d.coords, { icon: icons.perdidos });
    m.bindPopup(d.info);
    perdidosCluster.addLayer(m);
  });
  adopcionData.forEach(d => {
    const m = L.marker(d.coords, { icon: icons.adopcion });
    m.bindPopup(d.info);
    adopcionCluster.addLayer(m);
  });

  function updateMarkersByZoom() {
  const zoom = map.getZoom();
  [
    {layer: avistadosCluster, checkboxId: 'avistados'},
    {layer: perdidosCluster, checkboxId: 'perdidos'},
    {layer: alberguesCluster, checkboxId: 'albergues'},
    {layer: adopcionCluster, checkboxId: 'adopcion'}
  ].forEach(({layer, checkboxId}) => {
    const checkbox = document.querySelector(`input[data-layer="${checkboxId}"]`);
    if (zoom >= 12 && checkbox.checked) {
      if (!map.hasLayer(layer)) map.addLayer(layer);
    } else {
      if (map.hasLayer(layer)) map.removeLayer(layer);
    }
  });
}


  map.on('zoomend', updateMarkersByZoom);
  updateMarkersByZoom();

  const LayerControl = L.Control.extend({
    options: { position: 'topright' },
    onAdd: function() {
      const container = L.DomUtil.create('div', 'layer-control glass-panel');
      container.innerHTML = `
        
        <label><input type="checkbox" checked data-layer="avistados"> Perros avistados <span class="layer-count" id="count-avistados">0</span></label>
        <label><input type="checkbox" checked data-layer="perdidos"> Perros perdidos <span class="layer-count" id="count-perdidos">0</span></label>
        <label><input type="checkbox" checked data-layer="albergues"> Albergues <span class="layer-count" id="count-albergues">0</span></label>
        <label><input type="checkbox" checked data-layer="adopcion"> Perros en adopción <span class="layer-count" id="count-adopcion">0</span></label>
        <button id="toggle-control" title="Minimizar panel">−</button>
      `;

      L.DomEvent.disableClickPropagation(container);

      const toggleBtn = container.querySelector('#toggle-control');
      toggleBtn.onclick = () => {
        container.classList.toggle('collapsed');
        toggleBtn.textContent = container.classList.contains('collapsed') ? '+' : '−';
      };

      const checkboxes = container.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => {
          cb.addEventListener('change', function() {
            updateMarkersByZoom();
            updateLayerCounts();
          });
        });


      return container;
    }
  });

  map.addControl(new LayerControl());

  // Actualizar contadores de marcadores
  function updateLayerCounts() {
    document.getElementById('count-avistados').textContent = avistadosCluster.getLayers().length;
    document.getElementById('count-perdidos').textContent = perdidosCluster.getLayers().length;
    document.getElementById('count-albergues').textContent = alberguesCluster.getLayers().length;
    document.getElementById('count-adopcion').textContent = adopcionCluster.getLayers().length;
  }

  updateLayerCounts();
});
