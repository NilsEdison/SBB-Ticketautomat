console.log(model.get("ziel"));
console.log(model.get("oneway"));
console.log(model.get("klasse"));
console.log(model.get("reduction"));
console.log(model.get("price"));
console.log(model.get("via"));
console.log(model.get("hinzu1"));
console.log(model.get("halb"));
console.log(model.get("date"));
console.log(model.get("zusatz"));
console.log(model.get("halbeTickets"));
console.log(model.get("volleTickets"));
console.log(model.get("nachtTickets"));
console.log(model.get("veloTickets"));
console.log(model.get("hundTickets"));



var ziel = model.get('ziel')

var query = URI.parseQuery(window.location.search);
var model = new SimpleModel(query);

$('[data-my-special-link]').on('click', function(evt) {
	// URL des Links auslesen (wo geht es jetzt dann gleich hin?

evt.preventDefault();


  var uri = new URI(evt.currentTarget.href);
  // Alle Werte, die im Model gespeichert sind diesem Link anfügen
  uri.search(URI.buildQuery(model._fields));
  // Das «href»-Attribut des Links auf die neue URL ändern
 

  var appContainer = $('#app-container')

	console.log("kjhdshf")
	appContainer.get(0).addEventListener("transitionend", function() {
		console.log('fini....')
      window.location = uri.href();
	}, true);

	appContainer.addClass('ramonsFancyFadeOut');

 evt.currentTarget.href = uri.href();
  // Der Browser liest jetzt das modifizierte «href»-Attribut und öffnet die neue Seite

});




	if (ziel == 1){
		$('[data-bind="ziel"]').text("Turgi");
		model.set('price', 10.20);
	}

	if (ziel == 2){
		$('[data-bind="ziel"]').text("Baden")
		model.set('price', 16.40);
	}

	if (ziel == 3){
		$('[data-bind="ziel"]').text("Brugg")
		model.set('price', 4.60);
	}

	if (ziel == 4){
		$('[data-bind="ziel"]').text("Zürich HB")
		model.set('price', 6.10);
	}

	if (ziel == 5){
		$('[data-bind="ziel"]').text("Dietikon")
		model.set('price', 29.20);
	}


	if (ziel == 6){
		$('[data-bind="ziel"]').text("Würenlos")
		model.set('price', 41.30);
	}

	if (ziel == 7){
		$('[data-bind="ziel"]').text("Neuenhof")
		model.set('price', 39.90);
	}

	if (ziel == 8){
		$('[data-bind="ziel"]').text("Bern")
		model.set('price', 1.20);
	}
