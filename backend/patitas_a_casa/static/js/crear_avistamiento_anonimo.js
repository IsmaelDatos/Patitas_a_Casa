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

    function mostrarPerros() {
    	
    	var afgano = document.getElementById('afgano');
    	var akito = document.getElementById('akito');
    	var akito_inu = document.getElementById('akito_inu');
    	var alasko_klee = document.getElementById('alasko_klee');
    	var alasko_malamu = document.getElementById('alasko_malamu');
    	var americano_buldog = document.getElementById('americano_buldog');
    	var amer_pitbull_terrier = document.getElementById('amer_pitbull_terrier');
    	
    	var autral_cattle_dog =document.getElementById('autral_cattle_dog');
    	var austral_sheper = document.getElementById('austral_sheper');
    	var austral_terr = document.getElementById('austral_terr');
    	var basetjaund = document.getElementById('basetjaund');
    	var basenji = document.getElementById('basenji');
    	var biguol = document.getElementById('biguol');
    	
    	var berded_coli = document.getElementById('berded_coli');
    	var belgian_malinosis = document.getElementById('belgian_malinosis');
    	var bichon = document.getElementById('bichon');
    	var border_colli = document.getElementById('border_colli');
    	var border_terrier = document.getElementById('border_terrier');
    	var boston_terrier = document.getElementById('boston_terrier');
    	var boxer = document.getElementById('boxer');
    	
    	var bull_terrier = document.getElementById('bull_terrier');
    	var bullmastiff = document.getElementById('bullmastiff');
    	var cairn = document.getElementById('cairn');
    	var cardigan = document.getElementById('cardigan');
    	var chihuahua = document.getElementById('chihuahua');
    	var cocker_spaniel = document.getElementById('cocker_spaniel');
    	var cocker_spaniel_ingles = document.getElementById('cocker_spaniel_ingles');
    	var collie = document.getElementById('collie');
    	var dalmata = document.getElementById('dalmata');
    	var dachshund = document.getElementById('dachshund');
    	var doberman_pinscher = document.getElementById('doberman_pinscher');
    	var dogo_arg = document.getElementById('dogo_arg');
    	var bulldog_eng = document.getElementById('bulldog_eng');
    	var setter_eng = document.getElementById('setter_eng');
    	
    	var finish_lapp = document.getElementById('finish_lapp');
    	var Retriver_flat_cot = document.getElementById('Retriver_flat_cot');
    	var fox_terrier = document.getElementById('fox_terrier');
    	var bulldog_fr = document.getElementById('bulldog_fr');
    	var german_p = document.getElementById('german_p');
    	var pastorAl = document.getElementById('pastorAl');
    	var Esnauser_gigan = document.getElementById('Esnauser_gigan');
    	var golden_retriver = document.getElementById('golden_retriver');
    	var gran_danes = document.getElementById('gran_danes');
    	var greyjaund = document.getElementById('greyjaund');
    	var havan = document.getElementById('havan');
    	var irish_sett = document.getElementById('irish_sett');
    	var irish_watt = document.getElementById('irish_watt');
    	var greyjaund_it = document.getElementById('greyjaund_it');
    	var jack_russ_terr = document.getElementById('jack_russ_terr');
    	var keeshond = document.getElementById('keeshond');
    	var rey_charls = document.getElementById('rey_charls');
    	
    	var labrador_retriver = document.getElementById('labrador_retriver');
    	var leikland_terrier = document.getElementById('leikland_terrier');
    	var lasa_apso = document.getElementById('lasa_apso');
    	var maltes = document.getElementById('maltes');
    	var mestin_napolitano = document.getElementById('mestin_napolitano');
    	var mestizo = document.getElementById('mestizo');
    	var miniatur_bul_terrier = document.getElementById('miniatur_bul_terrier');
    	var miniatur_esnauzer = document.getElementById('miniatur_esnauzer');
    	var morkie = document.getElementById('morkie');
    	var newfaundlan = document.getElementById('newfaundlan');
    	var norfol_terr = document.getElementById('norfol_terr');
    	var noruego_elk = document.getElementById('noruego_elk');
    	var papilon = document.getElementById('papilon');
    	var parson_russ_terr = document.getElementById('parson_russ_terr');
    	var pekin = document.getElementById('pekin');
    	var pembroke_welsh = document.getElementById('pembroke_welsh');
    	var pitbull_terr = document.getElementById('pitbull_terr');
    	var plotjaund = document.getElementById('plotjaund');
    	var pudul = document.getElementById('pudul');
    	
    	var pomerania = document.getElementById('pomerania');
    	var puli = document.getElementById('puli');
    	var pug = document.getElementById('pug');
    	var rotwailer = document.getElementById('rotwailer');
    	var san_bernar = document.getElementById('san_bernar');
    	var saluki = document.getElementById('saluki');
    	var samoyedo = document.getElementById('samoyedo');
    	var schiparke = document.getElementById('schiparke');
    	var escoces_t = document.getElementById('escoces_t');
    	var sealyham = document.getElementById('sealyham');
    	var shiba_inu = document.getElementById('shiba_inu');
    	var shih_tzu = document.getElementById('shih_tzu');
    	var esnauzer = document.getElementById('esnauzer');
    	var pastor_shetland = document.getElementById('pastor_shetland');
    	var sedoso_t = document.getElementById('sedoso_t');
    	var staffordshire = document.getElementById('staffordshire');
    	var susexo = document.getElementById('susexo');
    	var tibetano_mast = document.getElementById('tibetano_mast');
    	var tibetano_span = document.getElementById('tibetano_span');
    	var vizsla = document.getElementById('vizsla');
    	
    	var weimaran = document.getElementById('weimaran');
    	var wes_jaig_wait_ter = document.getElementById('wes_jaig_wait_ter');
    	var whifet = document.getElementById('whifet');
    	var wairjer_point_grifo = document.getElementById('wairjer_point_grifo');
    	var york_terr = document.getElementById('york_terr');
    	var otra = document.getElementById('otra');
    	var raza = document.getElementById('raza').value;
    	
    	afgano.style.display = "none";
    	akito.style.display = "none";
    	akito_inu.style.display = "none";
    	alasko_klee.style.display = "none";
    	alasko_malamu.style.display = "none";
    	americano_buldog.style.display = "none";
    	amer_pitbull_terrier.style.display = "none";
    	autral_cattle_dog.style.display = "none";
    	austral_sheper.style.display = "none";
    	austral_terr.style.display = "none";
    	basetjaund.style.display = "none";
    	basenji.style.display = "none";
    	biguol.style.display = "none";
    	berded_coli.style.display = "none";
    	belgian_malinosis.style.display = "none";
    	bichon.style.display = "none";
    	border_colli.style.display = "none";
    	border_terrier.style.display = "none";
    	boston_terrier.style.display = "none";
    	boxer.style.display = "none";
    	bull_terrier.style.display = "none";
    	bullmastiff.style.display = "none";
    	cairn.style.display = "none";
    	cardigan.style.display = "none";
    	chihuahua.style.display = "none";
    	cocker_spaniel.style.display = "none";
    	cocker_spaniel_ingles.style.display = "none";
    	collie.style.display = "none";
    	dalmata.style.display = "none";
    	dachshund.style.display = "none";
    	doberman_pinscher.style.display = "none";
    	dogo_arg.style.display = "none";
    	bulldog_eng.style.display = "none";
    	setter_eng.style.display = "none";
    	finish_lapp.style.display = "none";
    	Retriver_flat_cot.style.display = "none";
    	fox_terrier.style.display = "none";
    	bulldog_fr.style.display = "none";
    	german_p.style.display = "none";
    	pastorAl.style.display = "none";
    	Esnauser_gigan.style.display = "none";
    	golden_retriver.style.display = "none";
    	gran_danes.style.display = "none";
    	greyjaund.style.display = "none";
    	havan.style.display = "none";
    	irish_sett.style.display = "none";
    	irish_watt.style.display = "none";
    	greyjaund_it.style.display = "none";
    	jack_russ_terr.style.display = "none";
    	keeshond.style.display = "none";
    	rey_charls.style.display = "none";
    	labrador_retriver.style.display = "none";
    	leikland_terrier.style.display = "none";
    	lasa_apso.style.display = "none";
    	maltes.style.display = "none";
    	mestin_napolitano.style.display = "none";
    	mestizo.style.display = "none";
    	miniatur_bul_terrier.style.display = "none";
    	miniatur_esnauzer.style.display = "none";
    	morkie.style.display = "none";
    	newfaundlan.style.display = "none";
    	norfol_terr.style.display = "none";
    	noruego_elk.style.display = "none";
    	papilon.style.display = "none";
    	parson_russ_terr.style.display = "none";
    	pekin.style.display = "none";
    	pembroke_welsh.style.display = "none";
    	pitbull_terr.style.display = "none";
    	plotjaund.style.display = "none";
    	pudul.style.display = "none";
    	pomerania.style.display = "none";
    	puli.style.display = "none";
    	pug.style.display = "none";
    	rotwailer.style.display = "none";
    	san_bernar.style.display = "none";
    	saluki.style.display = "none";
    	samoyedo.style.display = "none";
    	schiparke.style.display = "none";
    	escoces_t.style.display = "none";
    	sealyham.style.display = "none";
    	shiba_inu.style.display = "none";
    	shih_tzu.style.display = "none";
    	esnauzer.style.display = "none";
    	pastor_shetland.style.display = "none";
    	sedoso_t.style.display = "none";
    	staffordshire.style.display = "none";
    	susexo.style.display = "none";
    	tibetano_mast.style.display = "none";
    	tibetano_span.style.display = "none";
    	vizsla.style.display = "none";
    	weimaran.style.display = "none";
    	wes_jaig_wait_ter.style.display = "none";
    	whifet.style.display = "none";
    	wairjer_point_grifo.style.display = "none";
    	york_terr.style.display = "none";
    	otra.style.display = "none";
    	
    	switch(raza){
    		case "Afghan Hound":
    			afgano.style.display = "block";
    			break;
    			
    		case "Akita":
    			akito.style.display = "block";
    			break;
    		
    		case "Akita Inu":
    			akito_inu.style.display = "block";
    			break;
    			
    		case "Alaskan Klee Kai":
    			alasko_klee.style.display = "block";
    			break;
    		
    		case "Alaskan Malamute":
    			alasko_malamu.style.display = "block";
    			break;
    			
    		case "American Bulldog":
    			americano_buldog.style.display = "block";
    			break;
    		
    		case "American Pit Bull Terrier":
    			amer_pitbull_terrier.style.display = "block";
    			break;
    			
    		case "Australian Cattle Dog":
    			autral_cattle_dog.style.display = "block";
    			break;
    		
    		case "Australian Shepherd":
    			austral_sheper.style.display = "block";
    			break;
    			
    		case "Australian Terrier":
    			austral_terr.style.display = "block";
    			break;
    			
    		case "Basset Hound":
    			basetjaund.style.display = "block";
    			break;
    			
    		case "Basenji":
    			basenji.style.display = "block";
    			break;
    		
    		case "Beagle":
    			biguol.style.display = "block";
    			break;
    			
    		case "Bearded Collie":
    			berded_coli.style.display = "block";
    			break;
    		
    		case "Belgian Malinois":
    			belgian_malinosis.style.display = "block";
    			break;
    			
    		case "Bichon Frisé":
    			bichon.style.display = "block";
    			break;
    		
    		case "Border Collie":
    			border_colli.style.display = "block";
    			break;
    			
    		case "Border Terrier":
    			border_terrier.style.display = "block";
    			break;
    		
    		case "Boston Terrier":
    			boston_terrier.style.display = "block";
    			break;
    			
    		case "Boxer":
    			boxer.style.display = "block";
    			break;
    		
    		case "Bull Terrier":
    			bull_terrier.style.display = "block";
    			break;
    			
    		case "Bullmastiff":
    			bullmastiff.style.display = "block";
    			break;
    		case "Cairn Terrier":
    			cairn.style.display = "block";
    			break;
    			
    		case "Cardigan Welsh Corgi":
    			cardigan.style.display = "block";
    			break;
    		
    		case "Chihuahua":
    			chihuahua.style.display = "block";
    			break;
    			
    		case "Cocker Spaniel":
    			cocker_spaniel.style.display = "block";
    			break;
    		
    		case "Cocker Spaniel Inglés":
    			cocker_spaniel_ingles.style.display = "block";
    			break;
    			
    		case "Collie":
    			collie.style.display = "block";
    			break;
    		
    		case "Dalmatian":
    			dalmata.style.display = "block";
    			break;
    			
    		case "Dachshund (Teckel)":
    			dachshund.style.display = "block";
    			break;
    		
    		case "Doberman Pinscher":
    			doberman_pinscher.style.display = "block";
    			break;
    			
    		case "Dogo Argentino":
    			dogo_arg.style.display = "block";
    			break;
    			
    		case "English Bulldog":
    			bulldog_eng.style.display = "none";
    			break;
    			
    		case "English Setter":
    			setter_eng.style.display = "block";
    			break;
    		
    		case "Finnish Lapphund":
    			finish_lapp.style.display = "block";
    			break;
    			
    		case "Flat-Coated Retriever":
    			Retriver_flat_cot.style.display = "block";
    			break;
    		
    		case "Fox Terrier":
    			fox_terrier.style.display = "block";
    			break;
    			
    		case "French Bulldog":
    			bulldog_fr.style.display = "block";
    			break;
    		
    		case "German Pointer":
    			german_p.style.display = "block";
    			break;
    			
    		case "German Shepherd Dog":
    			pastorAl.style.display = "block";
    			break;
    		
    		case "Giant Schnauzer":
    			Esnauser_gigan.style.display = "block";
    			break;
    			
    		case "Golden Retriever":
    			golden_retriver.style.display = "block";
    			break;
    		
    		case "Gran Danés":
    			gran_danes.style.display = "block";
    			break;
    			
    		case "Greyhound":
    			greyjaund.style.display = "block";
    			break;
    		case "Havanese":
    			havan.style.display = "block";
    			break;
    			
    		case "Irish Setter":
    			irish_sett.style.display = "block";
    			break;
    		
    		case "Irish Water Spaniel":
    			irish_watt.style.display = "block";
    			break;
    			
    		case "Italian Greyhound":
    			greyjaund_it.style.display = "block";
    			break;
    		
    		case "Jack Russell Terrier":
    			jack_russ_terr.style.display = "block";
    			break;
    			
    		case "Keeshond":
    			keeshond.style.display = "block";
    			break;
    		
    		case "King Charles Spaniel":
    			rey_charls.style.display = "block";
    			break;
    			
    		case "Labrador Retriever":
    			labrador_retriver.style.display = "block";
    			break;
    		
    		case "Lakeland Terrier":
    			leikland_terrier.style.display = "block";
    			break;
    			
    		case "Lhasa Apso":
    			lasa_apso.style.display = "block";
    			break;
    		
    		case "Maltés":
    			maltes.style.display = "block";
    			break;
    			
    		case "Mastín Napolitano":
    			mestin_napolitano.style.display = "block";
    			break;
    		case "Mestizo":
    			mestizo.style.display = "block";
    			break;
    			
    		case "Miniature Bull Terrier":
    			miniatur_bul_terrier.style.display = "block";
    			break;
    		
    		case "Miniature Schnauzer":
    			miniatur_esnauzer.style.display = "block";
    			break;
    			
    		case "Morkie":
    			morkie.style.display = "block";
    			break;
    		
    		case "Newfoundland":
    			newfaundlan.style.display = "block";
    			break;
    			
    		case "Norfolk Terrier":
    			norfol_terr.style.display = "block";
    			break;
    		
    		case "Norwegian Elkhound":
    			noruego_elk.style.display = "block";
    			break;
    			
    		case "Papillon":
    			papilon.style.display = "block";
    			break;
    		
    		case "Parson Russell Terrier":
    			parson_russ_terr.style.display = "block";
    			break;
    			
    		case "Pequinés":
    			pekin.style.display = "block";
    			break;
    			
    		case "Pembroke Welsh Corgi":
    			pembroke_welsh.style.display = "block";
    			break;
    			
    		case "Pit Bull Terrier":
    			pitbull_terr.style.display = "block";
    			break;
    		
    		case "Plott Hound":
    			plotjaund.style.display = "block";
    			break;
    			
    		case "Poodle (Caniche)":
    			pudul.style.display = "block";
    			break;
    		
    		case "Pomeranian":
    			pomerania.style.display = "block";
    			break;
    			
    		case "Puli":
    			puli.style.display = "block";
    			break;
    		
    		case "Pug":
    			pug.style.display = "block";
    			break;
    			
    		case "Rottweiler":
    			rotwailer.style.display = "block";
    			break;
    		
    		case "Saint Bernard":
    			san_bernar.style.display = "block";
    			break;
    			
    		case "Saluki":
    			saluki.style.display = "block";
    			break;
    		
    		case "Samoyedo":
    			samoyedo.style.display = "block";
    			break;
    			
    		case "Schipperke":
    			schiparke.style.display = "block";
    			break;
    		
    		case "Scottish Terrier":
    			escoces_t.style.display = "block";
    			break;
    			
    		case "Sealyham Terrier":
    			sealyham.style.display = "block";
    			break;
    		
    		case "Shiba Inu":
    			shiba_inu.style.display = "block";
    			break;
    			
    		case "Shih Tzu":
    			shih_tzu.style.display = "block";
    			break;
    		
    		case "Schnauzer":
    			esnauzer.style.display = "block";
    			break;
    			
    		case "Shetland Sheepdog":
    			pastor_shetland.style.display = "block";
    			break;
    			
    		case "Silky Terrier":
    			sedoso_t.style.display = "block";
    			break;
    			
    		case "Staffordshire Bull Terrier":
    			staffordshire.style.display = "block";
    			break;
    		
    		case "Sussex Spaniel":
    			susexo.style.display = "block";
    			break;
    			
    		case "Tibetan Mastiff":
    			tibetano_mast.style.display = "block";
    			break;
    		
    		case "Tibetan Spaniel":
    			tibetano_span.style.display = "block";
    			break;
    			
    		case "Vizsla":
    			vizsla.style.display = "block";
    			break;
    		
    		case "Weimaraner":
    			weimaran.style.display = "block";
    			break;
    			
    		case "West Highland White Terrier":
    			wes_jaig_wait_ter.style.display = "block";
    			break;
    		
    		case "Whippet":
    			whifet.style.display = "block";
    			break;
    			
    		case "Wirehaired Pointing Griffon":
    			wairjer_point_grifo.style.display = "block";
    			break;
    		
    		case "Yorkshire Terrier":
    			york_terr.style.display = "block";
    			break;
    			
    		default:
    			break;
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