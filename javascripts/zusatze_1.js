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



var EURO = 0.7;





$('[data-bind="hinzuNachtTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen
	model.set('nachtTickets', model.get('nachtTickets') + 1);
});

$('[data-bind="wegNachtTicket"]').on('click', function(evt) {
	// Ein volles Ticket hinzufügen

	var ticketnacht = model.get('nachtTickets');
	if (ticketnacht >= 1) {
		model.set('nachtTickets', ticketnacht - 1);
	}
});


model.listen('nachtTickets', function() {
	var ticketnacht = model.get('nachtTickets');
	if (ticketnacht < 1) {
		$('[data-bind="nacht1"]').text("hinzufügen")
	} else {
		$('[data-bind="nacht1"]').text(ticketnacht + "x N-Zuschlag")
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
	if (ticketvelo >= 1) {
		model.set('veloTickets', ticketvelo - 1);
	}
});


model.listen('veloTickets', function() {
	var ticketvelo = model.get('veloTickets');
	if (ticketvelo < 1) {
		$('[data-bind="velo1"]').text("hinzufügen")
	} else {
		$('[data-bind="velo1"]').text(ticketvelo + "x Vollpreis")
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
	if (tickethund >= 1) {
		model.set('hundTickets', tickethund - 1);
	}
});



model.listen('hundTickets', function() {
	var tickethund = model.get('hundTickets');
	if (tickethund < 1) {
		$('[data-bind="hund1"]').text("hinzufügen")
	} else {
		$('[data-bind="hund1"]').text(tickethund+ "x Hundebillet")
	}
	updatePrice();
});



// Event handling


var updatePrice = function() {

	var price = (model.get('price'))
	var EURO = 0.7;

// abfragen Datum
	var ziel = model.get('ziel')

	var via = model.get('via')

//Datzn abfrage
	var date = model.get('date')

//Zusatz abfrage
	var zusatz = model.get('zusatz')

// abfragen Klasse
	var klasse = model.get('klasse')

// abfragen Reduction
	var reduction = model.get('reduction')

// abfragen Oneway
	var oneway = model.get('oneway')

	// abfragen Oneway
	var via = model.get('via')

// wenn Reduction True :2
	if (reduction == 1){
		price = price/2;		
	}

// Retour definieren

	if (oneway == 1){
		price = price*2;
		$('[data-bind="oneway1"]').text("Retour")
	}

	if (oneway == 0){
		$('[data-bind="oneway1"]').text("Einfache Fahrt")
	}

//Klasse definieren

	if (klasse == 1){
		price = price*2;
		$('[data-bind="klasse1"]').text("1. Klasse")
	}

	if (klasse == 0){
		$('[data-bind="klasse1"]').text("2. Klasse")
	}

//Via definieren

	if (via == 0){
		$('[data-bind="via"]').text("direkt")
	}


	if (via == 1){
		$('[data-bind="via"]').text("Brugg")
	}

	if (via == 2){
		$('[data-bind="via"]').text("Aarau")
	}

	if (via == 3){
		$('[data-bind="via"]').text("Zürich HB")
	}

	if (via == 4){
		$('[data-bind="via"]').text("Chur")
	}

	

//Datum definieren

	if (date == 4){
		$('[data-bind="date"]').text("07.06.13")
	}

	if (date == 5){
		$('[data-bind="date"]').text("08.06.13")
	}

	if (date == 6){
		$('[data-bind="date"]').text("09.06.13")
	}

	if (date == 7){
		$('[data-bind="date"]').text("10.06.13")
	}

	if (date == 1){
		$('[data-bind="date"]').text("11.06.13")
	}

	if (date == 2){
		$('[data-bind="date"]').text("12.06.13")
	}

	if (date == 3){
		$('[data-bind="date"]').text("13.06.13")
	}

	if (date == 8){
		$('[data-bind="date"]').text("14.06.13")
	}

	if (date == 9){
		$('[data-bind="date"]').text("15.06.13")
	}

	if (date == 10){
		$('[data-bind="date"]').text("16.06.13")
	}

	if (date == 11){
		$('[data-bind="date"]').text("17.06.13")
	}

	if (date == 12){
		$('[data-bind="date"]').text("18.06.13")
	}

	if (date == 13){
		$('[data-bind="date"]').text("19.06.13")
	}

	if (date == 14){
		$('[data-bind="date"]').text("20.06.13")
	}

	if (date == 15){
		$('[data-bind="date"]').text("21.06.13")
	}

	if (date == 16){
		$('[data-bind="date"]').text("22.06.13")
	}

	if (date == 17){
		$('[data-bind="date"]').text("23.06.13")
	}

	if (date == 18){
		$('[data-bind="date"]').text("24.06.13")
	}

	if (date == 19){
		$('[data-bind="date"]').text("25.06.13")
	}

	if (date == 20){
		$('[data-bind="date"]').text("26.06.13")
	}

	if (date == 21){
		$('[data-bind="date"]').text("27.06.13")
	}

	if (date == 22){
		$('[data-bind="date"]').text("28.06.13")
	}

	if (date == 23){
		$('[data-bind="date"]').text("29.06.13")
	}

	if (date == 24){
		$('[data-bind="date"]').text("30.06.13")
	}


// Ziel definieren

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



// neuer Wert anzeigen




	var voll = model.get('volleTickets')
	$('[data-bind="voll1"]').text(voll + "x Vollpreis")

	var halb = model.get('halbeTickets')
	$('[data-bind="halb1"]').text(halb + "x Ermässigt")

	var anzahl = voll+halb
	$('[data-bind="anzahl"]').text(anzahl + "x")

	var nachtx = model.get('nachtTickets');
	$('[data-bind="nacht1"]').text(nachtx + "x Nachtzuschlag")

	var velox = model.get('veloTickets');
	$('[data-bind="velo1"]').text(velox + "x Velobillett")

	var hundx = model.get('hundTickets');
	$('[data-bind="hund1"]').text(hundx + "x Hundbillet")

	




	var a = (price)*voll
	var b = (price/2)*halb

	

	var nachtpreis = (5)*nachtx
	var velopreis = (12)*velox

	var hundpreis = (price/2)*hundx

	var pricetot = (a+b+nachtpreis+velopreis+hundpreis)
	var pricetoteuro = (pricetot*EURO)


	

	function runden1 (a){
		return a.toFixed(2)
	}

	function runden2 (b){
		return b.toFixed(2)
	}

	function runden3 (nachtreis){
		return nachtpreis.toFixed(2)
	}

	function runden4 (velopreis){
		return velopreis.toFixed(2)
	}

	function runden5 (hundpreis){
		return hundpreis.toFixed(2)
	}

	function runden6 (pricetot){
		return pricetot.toFixed(2)
	}


	function runden7 (pricetoteuro){
		return pricetoteuro.toFixed(2)
	}




	





// if (nachtx == 0 && velox == 0 && hundx == 0){
// $('[data-bind="test"]').text("")
// }

if (halb >= 1){
		$('[data-bind="show_halb"]').show()
}
else {
		$('[data-bind="show_halb"]').hide()
}



if (nachtx >= 1){
		$('[data-bind="show_nacht"]').show()
}
else {
		$('[data-bind="show_nacht"]').hide()
}

if (velox >= 1){
		$('[data-bind="show_velo"]').show()
}
else {
		$('[data-bind="show_velo"]').hide()
}

if (hundx >= 1){
		$('[data-bind="show_hund"]').show()
}
else {
		$('[data-bind="show_hund"]').hide()

}

	$('[data-bind="price_chf1"]').text(runden1(a))
	$('[data-bind="price_chf2"]').text(runden2(b))

	$('[data-bind="price_nacht"]').text(runden3(nachtpreis))
	$('[data-bind="price_velo"]').text(runden4(velopreis))
	$('[data-bind="price_hund"]').text(runden5(hundpreis))

	$('[data-bind="price_chftot"]').text(runden6(pricetot))
	$('[data-bind="price_eur"]').text(runden7(pricetoteuro))



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
model.listen('volleTickets', updatePrice);
model.listen('halbeTickets', updatePrice);
model.listen('nachtTickets', updatePrice);
model.listen('veloTickets', updatePrice);
model.listen('hundTickets', updatePrice);

/**
 * Initialize model
 */
if (model.get('klasse') == undefined) {
	model.set('klasse', 0);
}

if (model.get('reduction') == undefined) {
	model.set('reduction', 0);
}

if (model.get('oneway') == undefined) {
	model.set('oneway', 0);
}

if (model.get('price') == undefined) {
	model.set('price', 34.90);
}

if (model.get('date') == undefined) {
	model.set('date', 4);
}

if (model.get('via') == undefined) {
	model.set('via', 0);
}


if (model.get('volleTickets') == undefined) {
	model.set('volleTickets', 1);
} else {
	model.set('volleTickets', parseInt(model.get('volleTickets')), 10)
}


if (model.get('halbeTickets') == undefined) {
	model.set('halbeTickets', 0);
} else {
	model.set('halbeTickets', parseInt(model.get('halbeTickets')), 10)
}



if (model.get('nachtTickets') == undefined) {
	model.set('nachtTickets', 0);
} else {
	model.set('nachtTickets', parseInt(model.get('nachtTickets')), 10)
}

if (model.get('veloTickets') == undefined) {
	model.set('veloTickets', 0);
} else {
	model.set('veloTickets', parseInt(model.get('veloTickets')), 10)
}

if (model.get('hundTickets') == undefined) {
	model.set('hundTickets', 0);
} else {
	model.set('hundTickets', parseInt(model.get('hundTickets')), 10)
}




