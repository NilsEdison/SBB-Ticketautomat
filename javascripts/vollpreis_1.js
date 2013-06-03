//get Location
console.log(model.get("ziel"));
console.log(model.get("oneway"));
console.log(model.get("klasse"));
console.log(model.get("reduction"));
console.log(model.get("price"));
console.log(model.get("date"));
console.log(model.get("via"));
console.log(model.get("hinzu1"));
console.log(model.get("halb"));


var EURO = 0.7;


// Volltickets

$('[data-bind="hinzuVollesTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen
	model.set('volleTickets', model.get('volleTickets') + 1);
});

$('[data-bind="wegVollesTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen

	var ticketAnzahl = model.get('volleTickets');
	if (ticketAnzahl > 1) {
		model.set('volleTickets', ticketAnzahl - 1);
	}
});


model.listen('volleTickets', function() {
	var ticketAnzahl = model.get('volleTickets');
	if (ticketAnzahl < 1) {
		$('[data-bind="voll1"]').text("hinzufügen")
	} else {
		$('[data-bind="voll1"]').text(ticketAnzahl + "x Vollpreis")
	}
	updatePrice();
});




// Ermässigt

$('[data-bind="hinzuHalbesTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen
	model.set('halbeTickets', model.get('halbeTickets') + 1);
});

$('[data-bind="wegHalbesTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen

	var ticketAnzahla = model.get('halbeTickets');
	if (ticketAnzahla > 1) {
		model.set('halbeTickets', ticketAnzahla - 1);
	}
});


model.listen('halbeTickets', function() {
	var ticketAnzahla = model.get('halbeTickets');
	if (ticketAnzahla < 1) {
		$('[data-bind="halb1"]').text("hinzufügen")
	} else {
		$('[data-bind="halb1"]').text(ticketAnzahla+"x Ermässigt")
	}
	updatePrice();
});






var updatePrice = function() {




// abfragen Datum
	var ziel = model.get('ziel')

//Datzn abfrage
	var date = model.get('date')

//Grundpreis abfrage






// abfragen Klasse
	var klasse = model.get('klasse')

// abfragen Reduction
	var reduction = model.get('reduction')

// abfragen Oneway
	var oneway = model.get('oneway')

	// abfragen Oneway
	var via = model.get('via')

// wenn Reduction True :2




// vollpreis






	if (oneway == 1){
		price = price*2;
		$('[data-bind="oneway1"]').text("Retour")
	}

	if (oneway == 0){
		$('[data-bind="oneway1"]').text("Einfache Fahrt")
	}

	if (klasse == 1){
		price = price*2;
		$('[data-bind="klasse1"]').text("1. Klasse")
	}

	if (klasse == 0){
		$('[data-bind="klasse1"]').text("2. Klasse")
	}



	if (via == 0){
		$('[data-bind="via"]').text("Brugg")
	}

	if (via == 1){
		$('[data-bind="via"]').text("Aarau")
	}

	

//Datum definieren

	if (date == 1){
		$('[data-bind="date"]').text("07.06.13")
	}

	if (date == 2){
		$('[data-bind="date"]').text("08.06.13")
	}




// Ziel definieren

	if (ziel == 1){
		$('[data-bind="ziel"]').text("Turgi");
		model.set('price', 42);
	}

	if (ziel == 2){
		$('[data-bind="ziel"]').text("Baden")
		model.set('price', 50);
	}

	if (ziel == 3){
		$('[data-bind="ziel"]').text("Brugg")
		model.set('price', 13);
	}

	if (ziel == 4){
		$('[data-bind="ziel"]').text("Zürich HB")
		model.set('price', 56);
	}

	if (ziel == 5){
		$('[data-bind="ziel"]').text("Dietikon")
		model.set('price', 6);
	}


	if (ziel == 6){
		$('[data-bind="ziel"]').text("Würenlos")
		model.set('price', 2.30);
	}

	if (ziel == 7){
		$('[data-bind="ziel"]').text("Neuenhof")
		model.set('price', 39.90);
	}

	if (ziel == 8){
		$('[data-bind="ziel"]').text("Bern")
		model.set('price', 2340);
	}



// neuer Wert anzeigen
	var price = parseInt(model.get('price'))

	var a = parseInt(price)*model.get('volleTickets')

	var b = parseInt(price/2)*model.get('halbeTickets')

	var total = parseInt(a+b)
	console.log(model.get('volleTickets'))
	

	$('[data-bind="price_chf1"]').text(a)
	$('[data-bind="price_chf2"]').text(b)
	$('[data-bind="price_chftot"]').text(total)
	$('[data-bind="price_eur"]').text(total*EURO)
}


updatePrice();


// number.toFixed(2);

model.listen('price', updatePrice);
model.listen('klasse', updatePrice);
model.listen('reduction', updatePrice);
model.listen('oneway', updatePrice);
model.listen('date', updatePrice);
model.listen('via', updatePrice);
model.listen('ziel', updatePrice);
model.listen('hinzu1', updatePrice);
model.listen('halb1', updatePrice);


if (model.get('volleTickets') == undefined) {
	model.set('volleTickets', 1);
}

if (model.get('halbeTickets') == undefined) {
	model.set('halbeTickets', 0);
}




