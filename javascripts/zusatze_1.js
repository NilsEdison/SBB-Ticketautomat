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


var EURO = 1.3;



$('[data-bind="hinzuNachtTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen
	model.set('nachtTickets', model.get('nachtTickets') + 1);
});

$('[data-bind="wegNachtTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen

	var ticketnacht = model.get('nachtTickets');
	if (ticketnacht > 1) {
		model.set('nachtTickets', ticketnacht - 1);
	}
});


model.listen('nachtTickets', function() {
	var ticketnacht = model.get('nachtTickets');
	if (ticketnacht < 1) {
		$('[data-bind="nacht1"]').text("hinzufügen")
	} else {
		$('[data-bind="nacht1"]').text(ticketAnzahl + "x Vollpreis")
	}
	updatePrice();
});




$('[data-bind="hinzuVeloTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen
	model.set('veloTickets', model.get('veloTickets') + 1);
});

$('[data-bind="wegVeloTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen

	var ticketvelo = model.get('veloTickets');
	if (ticketvelo > 1) {
		model.set('veloTickets', ticketvelo - 1);
	}
});


model.listen('veloTickets', function() {
	var ticketvelo = model.get('veloTickets');
	if (ticketvelo < 1) {
		$('[data-bind="velo1"]').text("hinzufügen")
	} else {
		$('[data-bind="velo1"]').text(ticketAnzahl + "x Vollpreis")
	}
	updatePrice();
});




$('[data-bind="hinzuHundTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen
	model.set('hundTickets', model.get('hundTickets') + 1);
});

$('[data-bind="wegHundTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen

	var tickethund = model.get('hundTickets');
	if (tickethund > 1) {
		model.set('hundTickets', tickethund - 1);
	}
});


model.listen('hundTickets', function() {
	var tickethund = model.get('hundTickets');
	if (tickethund < 1) {
		$('[data-bind="hund1"]').text("hinzufügen")
	} else {
		$('[data-bind="hund1"]').text(ticketAnzahl + "x Vollpreis")
	}
	updatePrice();
});



// Event handling


var updatePrice = function() {



var price = (model.get('price'))
var EURO = 0.7;

// abfragen hinzufügen


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
	var voll = model.get('volleTickets')
	$('[data-bind="voll1"]').text(voll + "x Vollpreis")

	var halb = model.get('halbeTickets')
	$('[data-bind="halb1"]').text(halb + "x Ermässigt")
	

	var nacht = model.get('nachtickets')
	$('[data-bind="nacht1"]').text(nacht + "x Vollpreis")

	var velo = model.get('veloTickets')
	$('[data-bind="velo1"]').text(velo + "x Velotickets")

	var hund = model.get('hundTickets')
	$('[data-bind="velo1"]').text(hund + "x Hundetickets")	

	var a = (price)*voll
	var b = (price/2)*halb
	

	var nachtpreis = (5)*nacht
	var velopreis = (10)*velo
	var hundpreis = (price/3)*hund

	var pricetot = (a+b+nachtpreis+velopreis+hundpreis)


	$('[data-bind="price_nacht"]').text(nachtpreis)
	$('[data-bind="price_velo"]').text(velopreis)
	$('[data-bind="price_hund"]').text(hundpreis)

	$('[data-bind="price_chf1"]').text(a)
	$('[data-bind="price_chf2"]').text(b)
	$('[data-bind="price_chftot"]').text(pricetot)
	$('[data-bind="price_eur"]').text(pricetot*EURO)
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
model.listen('hund', updatePrice);
model.listen('velo', updatePrice);
model.listen('nacht', updatePrice);


if (model.get('volleTickets') == undefined) {
	model.set('volleTickets', 1);
}

if (model.get('halbeTickets') == undefined) {
	model.set('halbeTickets', 0);
}



if (model.get('nacht') == undefined) {
	model.set('nacht', 1);
}

if (model.get('velo') == undefined) {
	model.set('velo', 1);
}

if (model.get('hund') == undefined) {
	model.set('hund', 1);
}




