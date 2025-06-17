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

    /**
    *
    * Aquí cargamos los municipios
    *
    **/
    function loadMunic(){
    	colonias = [[],["19 DE MAYO","1RA VICTORIA","1RA VICTORIA SECCION BOSQUES","26 DE JULIO","2DA  JALALPA TEPITO (AMPL)","2DA EL PIRUL (AMPL)","ABRAHAM GONZALEZ","ACUEDUCTO","ACUILOTLA","AGUILAS 3ER PARQUE","AGUILAS PILARES","ALCANTARILLA","ALFALFAR","ALFONSO XIII","ALPES","ALPES (AMPL)","ARBOLEDAS POLITOCO","ARCOS DE CENTENARIO","ARTURO GAMIZ","ARTURO MARTINEZ","ARVIDE","ATLAMAXAC","ATLAMAYA","AVE REAL","AVE REAL (AMPL)","AXOTLA","BALCONES DE CEHUAYO","BARRIO NORTE","BATALLON DE SAN PATRICIO (U HAB)","BEJERO","BELEN DE LAS FLORES","BELEN DE LAS FLORES (U HAB)","BELEN DE LAS FLORES SECCION RELLENO","BELEN DE LAS FLORES_","BELLA VISTA","BONANZA","BOSCOSO (U HAB)","BOSQUES DE TARANGO","CALZADA JALALPA","CAMPO DE TIRO LOS GAMITOS","CANUTILLO 3RA SECCION","CANUTILLO PREDIO LA PRESA","CANUTILLO(AGUASCALIENTES)","CAROLA (U HAB)","CAÑADA DEL OLIVAR (U HAB)","CEDRO CHICO","CHIMALISTAC","COLINAS DE TARANGO","COLINAS DEL SUR","CONCIENCIA PROLETARIA","COOPERATIVA CEHUAYO","CORPUS CHRISTY","CORPUS CHRISTY AMPL XOCOMECATLA","COVE","CRISTO REY","DE TARANGO (RCNDA)","DESARROLLO URBANO","DOS RIOS","EL ARBOL","EL BATAN","EL BOSQUE","EL BOSQUE 2DA SECCION (AMPL)","EL BOSQUE SECCION TORRES","EL CAPULIN","EL CAPULIN (AMPL)","EL MIRADOR","EL PARAISO","EL PIRU (FRACC)","EL PIRUL","EL POCITO","EL RODEO","EL RUEDO","EMANCIPACION DEL PUEBLO (U HAB)","ESTADO DE HIDALGO","ESTADO DE HIDALGO (AMPL)","ESTADO DE HIDALGO_","FLOR DE MARIA","FLORIDA","FRANCISCO VILLA","GALEANA","GARCIMARRERO","GARCIMARRERO NORTE","GARCIMARRERO REACOMODO","GOLONDRINAS","GOLONDRINAS 1RA SECCION","GOLONDRINAS 2DA SECCION","GRAL A ROSALES","GRAL C  A  MADRAZO","GUADALUPE INN","HACIENDA DE GUADALUPE CHIMALISTAC","HERON PROAL","HOGAR Y REDENCION","ISIDRO FABELA","JALALPA","JALALPA (AMPL)","JALALPA EL GRANDE","JALALPA TEPITO","JARDINES DEL PEDREGAL","JOSE MARIA PINO SUAREZ","JURISTAS","LA ANGOSTURA","LA ARAÑA","LA CASCADA","LA CAÑADA","LA CEBADA (AMPL)","LA CONCHITA","LA HERRADURA","LA HUERTA","LA JOYA","LA LOMA","LA MARTINICA","LA MEXICANA","LA MEXICANA (AMPL)","LA MILAGROSA","LA OTRA BANDA","LA PALMITA","LA PERA XOCHINAHUAC (U HAB)","LA PRESA","LA PRESA SECCION HORNOS","LADERA GRANDE O LA CEBADITA","LAS AGUILAS","LAS AGUILAS (AMPL)","LAS AGUILAS SECC HORNOS","LAS CUEVITAS","LAS PALMAS","LIBERACION PROLETARIA","LIBERALES DE 1857","LLANO REDONDO","LOMAS DE AXOMIATLA","LOMAS DE BECERRA","LOMAS DE BECERRA (U HAB)","LOMAS DE BECERRA ARVIDE (U HAB)","LOMAS DE CAPULA","LOMAS DE CAPULIN","LOMAS DE CENTENARIO (U HAB)","LOMAS DE CHAMONTOYA","LOMAS DE GUADALUPE","LOMAS DE LA ERA","LOMAS DE LAS AGUILAS","LOMAS DE LOS ANGELES TETELPAN","LOMAS DE LOS CEDROS","LOMAS DE NUEVO MEXICO","LOMAS DE PLATEROS (U HAB) I","LOMAS DE PLATEROS (U HAB) II","LOMAS DE PUERTA GRANDE","LOMAS DE SAN ANGEL INN","LOMAS DE SANTA FE","LOMAS DE SANTA FE II","LOMAS DE SANTO DOMINGO","LOMAS DE SANTO DOMINGO (AMPL)","LOMAS DE TARANGO","LOMAS DE TETELPAN","LORETO","LOS CEDROS","LOS GAMITOS","MARGARITA M DE JUAREZ","MARIA G DE GARCIA RUIZ","MARTIRES DE TACUBAYA","MERCED GOMEZ","METROPOLITANO (U HAB)","MIGUEL GAONA ARMENTA","MIGUEL HIDALGO","MILPA DEL CEDRO","MINAS DE CRISTO","MOLINO DE ROSAS","MOLINO DE ROSAS (AMPL)","MOLINO DE SANTO DOMINGO","MOLINO DE SANTO DOMINGO (U HAB)","OCHO DE AGOSTO","OCOTILLOS","OLIVAR DE LOS PADRES","OLIVAR DEL CONDE 1RA SECCION I","OLIVAR DEL CONDE 1RA SECCION II","OLIVAR DEL CONDE 2DA SECCION I","OLIVAR DEL CONDE 2DA SECCION II","PALMAS","PALMAS AXOTITLA","PARAJE EL CABALLITO","PARQUE RESIDENCIAL SAN ANTONIO (U HAB)","PASEO DE LAS LOMAS-SAN GABRIEL","PILOTO (ADOLFO LOPEZ MATEOS)","PILOTO (ADOLFO LOPEZ MATEOS) (AMPL)","PODER POPULAR","POLVORA","PONCIANO ARRIAGA","PRADOS LA PROVIDENCIA","PREDIO LA ANGOSTURA","PRESIDENTES","PRESIDENTES 1RA (AMPL)","PRESIDENTES 2DA (AMPL)","PRIVADA CENTENARIO","PROF JOSE ARTURO LOPEZ","PROGRESO TIZAPAN","PUEBLO NUEVO","PUENTE COLORADO","PUENTE COLORADO (AMPL)","PUNTA DE CEHUAYO","REACOMODO EL CUERNITO","REACOMODO PINO SUAREZ","REAL DEL MONTE","RESIDENCIAL LOS PINOS (U HAB)","RESIDENCIAL MARIA ISABEL","RINCON DE LA BOLSA","SAN ANGEL","SAN ANGEL INN","SAN BARTOLO AMEYALCO (PBLO)","SAN CLEMENTE","SAN GABRIEL","SAN PEDRO DE LOS PINOS","SANTA FE","SANTA FE (U HAB)","SANTA FE KM 8.5","SANTA LUCIA","SANTA LUCIA (PBLO)","SANTA LUCIA REACOMODO","SANTA MARIA NONOALCO","SANTA ROSA XOCHIAC (PBLO)","SEARS ROEBUCK (U HAB)","TARANGO (U HAB)","TECOLALCO","TEJOCOTE","TEPEACA","TEPEACA (AMPL)","TEPOPOTLA","TETELPAN","TETELPAN (PBLO)","TETLALPAN","TIZAMPAMPANO","TIZAPAN_TIZAPAN SAN ANGEL","TLACOPAC","TLACOYAQUE","TLACOYAQUE (AMPL)","TLACOYAQUE (BARR)","TLACUITLAPA","TLACUITLAPA 2DO REACOMODO (AMPL)","TLAPECHICO","TOLTECA","TORRES DE MIXCOAC (U HAB)","TORRES DE POTRERO","TORRES SAN ANTONIO (U HAB)","TORRES SAN PEDRO (U HAB)","UNIDAD POPULAR TEPEACA","UNION OLIVOS","UNION POPULAR EMILIANO ZAPATA (U HAB)","VALENTIN GOMEZ FARIAS","VILLA PROGRESISTA","VILLA SOLIDARIDAD","VILLA VERDUN","ZENON DELGADO","ZOTOLTITLA"],
    	["AGUILERA", "ALDANA", "ANGEL ZIMBRON", "ARENAL", "CENTRO DE AZCAPOTZALCO", "CLAVERIA", "COLTONGO", "COSMOPOLITA", "COSMOPOLITA (AMPL)", "CRUZ ROJA TEPANTONGO (U HAB)", "CUITLÁHUAC 1 Y 2 (U HAB)", "CUITLÁHUAC 3 Y 4 (U HAB)", "DEL GAS", "DEL GAS (AMPL)", "DEL MAESTRO", "DEL RECREO","DEMET (U HAB)","ECOLOGICA NOVEDADES IMPACTO (U HAB)","EL JAGUEY-ESTACION PANTACO","EL ROSARIO A (U HAB)","EL ROSARIO B (U HAB)","EL ROSARIO C (U HAB)","EUZKADI","EX-HACIENDA EL ROSARIO","FERRERIA","FERRERIA (U HAB)","FRANCISCO VILLA (U HAB)","FUENTES DE AZCAPOTZALCO-PARQUES DE AZCAPOTZALCO (U HAB)","HOGAR Y SEGURIDAD/NUEVA SANTA MARIA","HOGARES FERROCARRILEROS (U HAB)","HUAUTLA DE LAS SALINAS (BARR)","IGNACIO ALLENDE","INDUSTRIAL VALLEJO","ISSFAM LAS ARMAS (U HAB)","JARDIN AZPEITIA","JARDINES CEYLAN (U HAB)","LA PRECIOSA","LA RAZA","LAS SALINAS","LIBERACION","LIBERTAD","LOS REYES (BARR)","MANUEL RIVERA ANAYA CROC I (U HAB)","MIGUEL HIDALGO (U HAB)","MONTE ALTO","NEXTENGO (BARR)","NUEVA EL ROSARIO","NUEVA ESPAÑA","NUEVA SANTA MARIA","NUEVO SAN RAFAEL (BARR)","OBRERO POPULAR","PANTACO (U HAB)","PASTEROS","PATRIMONIO FAMILIAR","PEMEX PRADOS DEL ROSARIO (U HAB)","PETROLERA","PETROLERA (AMPL)","PLENITUD","PORVENIR","POTRERO DEL LLANO","PRADOS DEL ROSARIO","PRESIDENTE MADERO (U HAB)","PRO HOGAR I","PRO HOGAR II","PROVIDENCIA","REYNOSA TAMAULIPAS","ROSENDO SALAZAR (CONJ HAB)","SAN  MIGUEL AMANTLA (PBLO)","SAN ALVARO","SAN ANDRES (BARR)","SAN ANDRES (PBLO)","SAN ANDRES DE LAS SALINAS (PBLO)","SAN ANTONIO (FRACC)","SAN BARTOLO CAHUALTONGO (PBLO)","SAN BERNABE (BARR)","SAN FRANCISCO TETECALA (PBLO)","SAN FRANCISCO XOCOTITLA","SAN JUAN TLIHUACA (PBLO)","SAN MARCOS (BARR)","SAN MARTIN XOCHINAHUAC (PBLO)","SAN MATEO","SAN PABLO 396-CONJ HAB SAN PABLO (U HAB)","SAN PABLO XALPA (U HAB)","SAN PEDRO XALPA (AMPL) I","SAN PEDRO XALPA (AMPL) II","SAN PEDRO XALPA (PBLO)","SAN RAFAEL","SAN SALVADOR XOCHIMANCA","SAN SEBASTIAN","SANTA APOLONIA (BARR)","SANTA BARBARA (PBLO)","SANTA CATARINA (PBLO)","SANTA CRUZ ACAYUCAN (PBLO)","SANTA CRUZ DE LAS SALINAS","SANTA INES","SANTA LUCIA (BARR)","SANTA MARIA MALINALCO (PBLO)","SANTIAGO AHUIZOTLA (PBLO)","SANTO DOMINGO (PBLO)","SANTO TOMAS","SECTOR NAVAL","SINDICATO MEXICANO DE ELECTRICISTAS","TEZOZOMOC","TIERRA NUEVA","TLATILCO","TLATILCO (U HAB)","TRABAJADORES DEL HIERRO","UN HOGAR PARA CADA TRABAJADOR","VICTORIA DE LAS DEMOCRACIAS","VILLAS AZCAPOTZALCO (U HAB)", "XOCHINAHUAC (U HAB)"], 
    	["ACACIAS", "ACTIPAN", "ALAMOS I", "ALAMOS II", "ALBERT", "AMERICAS UNIDAS-DEL LAGO", "ATENOR SALAS", "CENTRO URBANO PRESIDENTE ALEMAN (U HAB)","CIUDAD DE LOS DEPORTES","CREDITO CONSTRUCTOR","DEL VALLE I","DEL VALLE II","DEL VALLE III","DEL VALLE IV","DEL VALLE V","DEL VALLE VI","DEL VALLE VII","ERMITA","EXTREMADURA INSURGENTES","GENERAL PEDRO MARIA ANAYA","INDEPENDENCIA","INSURGENTES MIXCOAC","INSURGENTES SAN BORJA","IZTACCIHUATL","JOSEFA ORTIZ DE DOMINGUEZ","LETRAN VALLE","MARIA DEL CARMEN","MERCED GOMEZ","MIGUEL ALEMAN","MIRAVALLE","MIXCOAC","MODERNA","NAPOLES","NAPOLES (AMPL)","NARVARTE I","NARVARTE II","NARVARTE III","NARVARTE IV","NARVARTE V","NARVARTE VI","NATIVITAS","NIÑOS HEROES DE CHAPULTEPEC","NOCHE BUENA","NONOALCO","OCHO DE AGOSTO","PERIODISTA FRANCISCO ZARCO","PIEDAD NARVARTE","PORTALES I","PORTALES II","PORTALES III","PORTALES IV","PORTALES ORIENTE","POSTAL","RESIDENCIAL EMPERADORES","SAN JOSE INSURGENTES","SAN JUAN","SAN PEDRO DE LOS  PINOS","SAN SIMON TICUMAC","STA CRUZ ATOYAC","TLACOQUEMECATL DEL VALLE","VERTIZ NARVARTE","VILLA DE CORTES","XOCO","ZACAHUITZCO"],
    	["ADOLFO RUIZ CORTINES I", "ADOLFO RUIZ CORTINES II", "AJUSCO HUAYAMILPAS", "AJUSCO I", "AJUSCO II", "AJUSCO III", "ALIANZA POPULAR REVOLUCIONARIA NORTE (U HAB)", "ALIANZA POPULAR REVOLUCIONARIA ORIENTE (U HAB)", "ALIANZA POPULAR REVOLUCIONARIA PONIENTE (U HAB)", "ALTILLO (COND ALTILLO ACASULCO)", "ALTILLO (COND ALTILLO UNIVERSIDAD)", "AMPLIACION CANDELARIA", "AMPLIACION SAN FRANCISCO CULHUACAN (EJ)", "ATLANTIDA", "AVANTE", "BOSQUES DE TETLAMEYA", "BARRIO SAN LUCAS", "CAFETALES I (RDCIAL)", "CAFETALES II (RDCIAL)", "CAMPESTRE CHURUBUSCO", "CAMPESTRE COYOACAN (FRACC)", "CANAL NACIONAL (U HAB)", "CANAL NACIONAL 260 (U HAB)", "CANTIL DEL PEDREGAL", "CARMEN SERDAN", "CIUDAD JARDIN", "CIUDAD UNIVERSITARIA", "CENTRO URBANO (U HAB)",  "COPILCO", "DEL CARMEN"], 
    	["1o DE MAYO", "ABDIAS GARCIA SOTO", "ADOLFO LOPEZ MATEOS", "AGUA BENDITA", "AHUATENCO", "AMADO NERVO", "BOSQUES DE LAS LOMAS", "CACALOTE", "COLA DE PATO", "CORREDOR SANTA FE", "CRUZ BLANCA", "EBANO (U HAB)", "EL CONTADERO", "EL MOLINITO", "EL MOLINO", "EL TIANGUILLO", "EL YAQUI", "JARDINES DE LA PALMA (HUIZACHITO)", "JESUS DEL MONTE", "LA PILA", "LA RETAMA", "LA VENTA", "LAS LAJAS", "LAS TINAJAS", "LOMA DEL PADRE", "LOMAS DE MEMETLA", "LOMAS DE VISTA HERMOSA", "LOMAS DEL CHAMIZAL", "MANZANASTITLA", "MEMETLA", "NAVIDAD (GRANJAS DE NAVIDAD)", "PALO ALTO (GRANJAS)", "PORTAL DEL SOL", "SAN JOSE DE LOS CEDROS I", "SAN JOSE DE LOS CEDROS II", "SAN LORENZO ACOPILCO (PBLO)", "SAN MATEO TLALTENANGO (PBLO)", "SAN PABLO CHIMALPA (PBLO)", "SAN PEDRO CUAJIMALPA (PBLO)", "TEPETONGO", "TEXCALCO", "XALPA", "ZENTLAPATL"],
    	["ALGARIN", "ASTURIAS", "ASTURIAS (AMPL)", "ATLAMPA", "BUENAVISTA I", "BUENAVISTA II", "BUENOS AIRES", "CENTRO I", "CENTRO II", "CENTRO III", "CENTRO IV", "CENTRO V", "CENTRO VI", "CENTRO VII", "CENTRO VIII", "CONDESA", "CUAUHTEMOC", "DOCTORES I", "DOCTORES II", "DOCTORES III", "DOCTORES IV", "DOCTORES V", "ESPERANZA", "EX HIPODROMO DE PERALVILLO", "FELIPE PESCADOR", "GUERRERO I", "GUERRERO II", "GUERRERO III", "GUERRERO IV", "HIPODROMO CONDESA", "HIPODROMO I", "HIPODROMO II", "JUAREZ", "MAZA", "MORELOS I", "MORELOS II", "MORELOS III", "NONOALCO-TLATELOLCO (U HAB) I", "NONOALCO-TLATELOLCO (U HAB) II", "NONOALCO-TLATELOLCO (U HAB) III", "OBRERA I", "OBRERA II", "OBRERA III", "OBRERA IV", "PAULINO NAVARRO", "PERALVILLO I", "PERALVILLO II", "ROMA NORTE I", "ROMA NORTE II", "ROMA NORTE III", "ROMA SUR I", "ROMA SUR II", "SAN RAFAEL I", "SAN RAFAEL II", "SAN SIMON TOLNAHUAC", "SANTA MARIA (U HAB)", "SANTA MARIA INSURGENTES", "SANTA MARIA LA RIBERA I", "SANTA MARIA LA RIBERA II", "SANTA MARIA LA RIBERA IV", "TABACALERA", "TRANSITO", "VALLE GOMEZ", "VISTA ALEGRE"],
    	["ARAGON INGUARAN", "ARAGON LA VILLA (ARAGON)", "ARBOLEDAS DE CUAUTEPEC", "ARBOLEDAS DE CUAUTEPEC (AMPL)", "ARROYO GUADALUPE (U HAB)", "BELISARIO DOMINGUEZ", "BENITO JUAREZ", "LINDAVISTA", "CUAUTEPEC DE MADERO"], 
    	["AGRICOLA ORIENTAL I", "AGRICOLA ORIENTAL II", "AGRICOLA ORIENTAL III", "AGRICOLA ORIENTAL IV", "AGRICOLA ORIENTAL V", "AGRICOLA ORIENTAL VI", "AGRICOLA ORIENTAL VII", "AGRICOLA ORIENTAL VIII", "AMPLIACION RAMOS MILLAN", "CAMPAMENTO 2 DE OCTUBRE I", "CAMPAMENTO 2 DE OCTUBRE II", "CARLOS ZAPATA VELA", "CUCHILLA AGRICOLA ORIENTAL", "CUCHILLA RAMOS MILLAN", "EL RODEO", "EX EJIDOS DE LA MAGDALENA MIXIHUCA", "FRACCIONAMIENTO COYUYA", "GABRIEL RAMOS MILLAN", "GRANJAS MEXICO I", "GRANJAS MEXICO II", "INFONAVIT IZTACALCO (U HAB) I", "INFONAVIT IZTACALCO (U HAB) II", "INPI PICOS", "JARDINES TECMA", "JUVENTINO ROSAS I", "JUVENTINO ROSAS II", "LA ASUNCION (BARR)", "LA CRUZ", "LOS REYES (BARR)", "MILITAR MARTE", "MOSCO CHINAMPA", "NUEVA STA ANITA", "PANTITLAN I", "PANTITLAN II", "PANTITLAN III", "PANTITLAN IV", "PANTITLAN V", "PICOS IZTACALCO 1-A", "PICOS IZTACALCO 1B", "PICOS IZTACALCO 2A", "RAMOS MILLAN BRAMADERO I", "RAMOS MILLAN BRAMADERO II", "REFORMA IZTACCIHUATL NORTE", "REFORMA IZTACCIHUATL SUR", "SAN FCO XICALTONGO (BARR)", "SAN MIGUEL (BARR)", "SAN PEDRO IZTACALCO (BARR)", "SANTA ANITA", "SANTA CRUZ (BARR)", "SANTIAGO NORTE (BARR)", "SANTIAGO SUR (BARR)", "TLACOTAL RAMOS MILLAN", "TLAZINTLA", "VIADUCTO PIEDAD", "ZAPOTLA (BARR)"],
    	["JARDINES DE SAN LORENZO", "JOSE LOPEZ PORTILLO I", "JOSE LOPEZ PORTILLO II", "JOSE MA MORELOS Y PAVON (U HAB)", "JUAN ESCUTIA I", "JUAN ESCUTIA II", "JUAN ESCUTIA III", "JUSTO SIERRA", "MOYOCOYANI (U HAB)", "NA HAL TI (U HAB)", "NORMA ISSSTE (U HAB)", "NUEVA GENERACION (U HAB)", "PALMITAS", "PARAISO", "PARAISO (AMPL)", "PARAJE SAN JUAN"],
    	["ATACAXCO", "BARRANCA SECA", "BARROS SIERRA", "BATAN VIEJO (EL MAESTRO)", "CAZULCO (BARR)", "CUAUHTEMOC", "EL ERMITAÑO", "EL GAVILLERO", "EL OCOTAL", "EL ROSAL", "EL TANQUE", "EL TORO", "HEROES DE PADIERNA", "HUAYATLA", "INDEPENDENCIA BATAN NORTE (U HAB)", "INDEPENDENCIA BATAN SUR (U HAB)", "INDEPENDENCIA SAN RAMON (U HAB)", "INFONAVIT (U HAB)", "IXTLAHUALTONGO", "LA CARBONERA", "LA CONCEPCION", "LA CRUZ", "LA GUADALUPE", "LA MAGDALENA ATLITIC (PBLO)", "LA MALINCHE", "LAS CALLES (BARR)", "LAS CRUCES", "LAS HUERTAS", "LAS PALMAS", "LOMAS DE SAN BERNABE", "LOMAS DE SAN BERNABE (AMPL)", "LOMAS QUEBRADAS", "LOS PADRES", "PEDREGAL 2 (CONJ HAB)", "PLAZUELA DEL PEDREGAL", "POTRERILLO", "POTRERILLO (AMPL)", "PUEBLO NUEVO ALTO", "PUEBLO NUEVO BAJO", "PUENTE SIERRA", "SAN BARTOLO AMEYALCO", "SAN BERNABE OCOTEPEC (PBLO)", "SAN FRANCISCO", "SAN FRANCISCO (BARR)", "SAN JERONIMO ACULCO - LIDICE (PBLO)", "SAN NICOLAS TOTOLAPAN", "SAN NICOLAS TOTOLAPAN (PBLO)", "SANTA TERESA", "SUBESTACION", "TIERRA COLORADA", "TIERRA UNIDA", "VISTA HERMOSA"],
    	["BOSQUES DE LAS LOMAS","CHAPULTEPEC MORALES (POLANCO)","CHAPULTEPEC POLANCO (POLANCO)","CUAUHTEMOC PENSIL","DANIEL GARZA","DANIEL GARZA (AMPL)","DEL BOSQUE (POLANCO)"],
    	["SAN AGUSTIN OHTENCO (PBLO)", "SAN ANTONIO TECOMITL (PBLO)", "SAN BARTOLOME XICOMULCO (PBLO)", "SAN FRANCISCO TECOXPA (PBLO)", "SAN JERONIMO MIACATLAN (PBLO)", "SAN JUAN TEPENAHUAC (PBLO)", "SAN LORENZO TLACOYUCAN (PBLO)", "SAN PABLO OZTOTEPEC (PBLO)", "SAN PEDRO ATOCPAN (PBLO)", "SAN SALVADOR CUAUHTENCO (PBLO)", "SANTA ANA TLACOTENCO (PBLO)", "VILLA MILPA ALTA (PBLO)"],
    	["3 DE MAYO", "AGRICOLA METROPOLITANA", "ATOTOLCO", "CUITLAHUAC", "DEL MAR NORTE", "DEL MAR SUR", "EL MIRADOR - SANTA CATARINA", "EL ROSARIO", "EL TRIANGULO", "EMILIANO ZAPATA 1A", "EMILIANO ZAPATA 2A", "FRANCISCO VILLA", "GRANJAS CABRERA", "JAIME TORRES BODET", "JARDINES DEL LLANO-U.H. VILLA TLATEMPA", "LA CONCHITA I", "LA CONCHITA II", "LA DRAGA", "LA ESTACION", "LA HABANA", "LA JOYITA", "LA MESA", "LA NOPALERA", "LA TURBA", "LAS ARBOLEDAS", "LOPEZ PORTILLO", "LOS OLIVOS", "MIGUEL HIDALGO", "MIGUEL HIDALGO OTE", "OJO DE AGUA", "OLIVAR SANTA MARIA", "PARAISO SANTA CATARINA", "PEÑA ALTA", "QUIAHUATLA", "SAN ANDRES MIXQUIC (PBLO)", "SAN FRANCISCO TLALTENCO (PBLO)", "SAN JOSE", "SAN JUAN IXTAYOPAN (PBLO)", "SAN MIGUEL (AMPL)", "SAN MIGUEL ZAPOTITLA", "SAN NICOLAS TETELCO (PBLO)", "SAN PEDRO TLAHUAC (PBLO)", "SANTA CATARINA (AMPL)", "SANTA CATARINA YECAHUIZOTL (PBLO)", "SANTA CECILIA", "SANTIAGO ZAPOTITLAN (PBLO)", "SELENE (AMPL)", "SELENE 1a SECC", "SELENE 2da SECC", "TEMPILULI", "TEOZOMA", "TEPANTITLAMILCO", "TEZONTITLA-ZOMPANTITLA", "TIERRA BLANCA", "TIERRA Y LIBERTAD", "UNIDADES HABITACIONALES DE SANTA ANA PONIENTE I", "UNIDADES HABITACIONALES DE SANTA ANA PONIENTE II", "VILLA CENTROAMERICANA (U HAB)", "VILLAS DE LOS TRABAJADORES (GDF) (U HAB)"],
    	["ISSSFAM No. 1 (U HAB)-VILLA TLALPAN", "JARDINES COAPA-BELISARIO DOMINGUEZ", "JARDINES DE SAN JUAN", "JARDINES DEL AJUSCO", "JARDINES EN LA MONTAÑA", "JUVENTUD UNIDA", "LA FAMA", "LA GUADALUPANA", "LA JOYA", "VALLE DE TEPEPAN"],
    	["10 DE MAYO", "20 DE NOVIEMBRE", "20 DE NOVIEMBRE (AMPL)", "24 DE ABRIL", "5TO TRAMO DE 20 DE NOVIEMBRE", "7 DE JULIO", "7 DE JULIO (AMPL)", "AARON SAENZ", "ADOLFO LOPEZ MATEOS", "AERONAUTICA MILITAR", "ALVARO OBREGON", "AQUILES SERDAN", "ARTES GRAFICAS", "AVIACION CIVIL", "AVIACION CIVIL (AMPL)", "AZTECA", "BAHIA (U HAB)", "CANDELARIA DELOS PATOS (U HAB)", "CARACOL", "CARACOL (AMPL)", "CENTRO I", "CENTRO II", "CUATRO ARBOLES", "CUCHILLA PANTITLAN", "DAMIAN CARMONA", "EL ARENAL 1A SECCION", "EL ARENAL 2A SECCION", "EL ARENAL 3A SECCION", "EL ARENAL 4A SECCION", "EL ARENAL PTO AEREO (FRACC)", "EL PARQUE", "EMILIANO ZAPATA (U HAB)", "EMILIO CARRANZA", "FEDERAL", "FELIPE ANGELES", "FIVIPORT (U HAB)", "IGNACIO ZARAGOZA I", "IGNACIO ZARAGOZA II", "INDUSTRIAL PUERTO AEREO (FRACC)", "JAMAICA", "JANITZIO", "JARDIN BALBUENA I", "JARDIN BALBUENA II", "JARDIN BALBUENA III", "KENNEDY (U HAB)", "LORENZO BOTURINI", "MAGDALENA  MIXHUCA", "MAGDALENA  MIXHUCA (PBLO)", "MERCED BALBUENA", "MICHOACANA", "MICHOACANA (AMPL)", "MIGUEL HIDALGO", "MOCTEZUMA 1A SECCION", "MOCTEZUMA 2A SECCION I", "MOCTEZUMA 2A SECCION II", "MOCTEZUMA 2A SECCION III", "MOCTEZUMA 2A SECCION IV", "MORELOS I", "MORELOS II", "NICOLAS BRAVO", "PENITENCIARIA (AMPL)", "PENSADOR MEXICANO I", "PENSADOR MEXICANO II", "PEÑON DE LOS BAÑOS", "PINO (U HAB)", "POPULAR RASTRO", "PRIMERO DE MAYO", "PROGRESISTA", "PUEBLA", "REVOLUCION", "ROMERO RUBIO", "SANTA CRUZ AVIACION", "SEVILLA", "SIMON  BOLIVAR", "TRES MOSQUETEROS", "VALENTIN GOMEZ FARIAS", "VALLE GOMEZ", "VENUSTIANO CARRANZA", "VENUSTIANO CARRANZA (AMPL)", "VIADUCTO  - BALBUENA (CONJ HAB)"], 
    	["ALTOS TEPETLICA", "AZTLAN (U HAB)", "BARRIO 18", "BELEM (BARR)", "BOSQUE RESIDENCIAL DEL SUR (FRACC)", "CALTONGO (BARR)", "CANAL ONCE (U HAB)", "CERRO GRANDE", "CRISTO REY", "EL CARMEN", "EL ROSARIO (BARR)", "GUADALUPE", "HUICHAPAN", "INFONAVIT PROLONGACION DIVISION DEL NORTE (U HAB)", "JARDINES DEL SUR", "JOYA DE VARGAS", "LA ASUNCION (BARR)", "LA CAÑADA", "LA CEBADA", "LA CONCEPCION TLACOAPA (BARR)", "LA CONCHA", "LA GUADALUPITA (BARR)", "LA NORIA", "LA NORIA TEPEPAN", "LA SANTISIMA (BARR)", "LAS PERITAS", "LORETO PEÑA POBRE (U HAB)", "LOS CERRILLOS I", "LOS CERRILLOS II", "LOS CERRILLOS III", "NATIVITAS", "NATIVITAS (U HAB)", "NATIVITAS LA JOYA (AMPL)", "NUEVA TENOCHTITLAN (U HAB)", "PASEOS DEL SUR", "POTRERO DE SAN BERNARDINO", "RINCONADA DEL SUR (U HAB)", "SAN ANDRES AHUAYUCAN (PBLO)", "SAN ANTONIO (BARR)", "SAN BARTOLO EL CHICO", "SAN CRISTOBAL (BARR)", "SAN DIEGO (BARR)", "SAN ESTEBAN (BARR)", "SAN FRANCISCO CHIQUIMOLA", "SAN FRANCISCO TLALNEPANTLA (PBLO)", "SAN GREGORIO ATLAPULCO (PBLO)", "SAN JOSE OBRERO", "SAN JOSE ZACATEPEC", "SAN JUAN (BARR)", "SAN JUAN TEPEPAN", "SAN LORENZO", "SAN LORENZO (BARR)", "SAN LORENZO ATEMOAYA (PBLO)", "SAN LORENZO LA CEBADA I", "SAN LORENZO LA CEBADA II", "SAN LUCAS XOCHIMANCA (PBLO)", "SAN LUIS TLAXIALTEMALCO (PBLO)", "SAN MARCOS (AMPL)", "SAN MARCOS (BARR)", "SAN MATEO XALPA (PBLO)", "SAN PEDRO (BARR)", "SANTA CECILIA TEPETLAPA (PBLO)", "SANTA CRUCITA (BARR)", "SANTA CRUZ ACALPIXCA (PBLO)", "SANTA CRUZ CHAVARRIETA", "SANTA CRUZ XOCHITEPEC (PBLO)", "SANTA INES", "SANTA MARIA NATIVITAS (PBLO)", "SANTA MARIA TEPEPAN (PBLO)", "SANTIAGO TEPALCATLALPAN (PBLO)", "SANTIAGO TULYEHUALCO (PBLO)", "TECACALANCO", "TEPEPAN (AMPL)", "TESMIC (RDCIAL)", "TIERRA NUEVA", "TLAXOPAN", "VILLA XOCHIMILCO (U HAB)", "XALTOCAN (BARR)", "XICALHUACAN"]]
	const alcaldia = document.forms[0][2].selectedIndex;
	const select = document.forms[0][4];
	clearSelect4(select);
	for(const alc of colonias[alcaldia]){
			const opt = document.createElement("option");
			opt.text = alc;
			select.add(opt);
		}
	}
	
    function clearSelect4(select){
	while(select.length > 0)
	select.remove(0);
    }

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