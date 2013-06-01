//get Location
console.log(model.get("ziel"));

console.log(model.get("oneway"));
console.log(model.get("klasse"));
console.log(model.get("reduction"));
console.log(model.get("price"));
console.log(model.get("date"));
console.log(model.get("via"));


var EURO = 1.3;



// Event handling

var updateVollpreis = function() {
	vollpreisButtons = $('[data-bind="vollpreis"]');
	vollpreisButtons.each(function(i, button) {
		var $button = $(button);
		var vollpreis = model.get('vollpreis');

		if ($button.data('value') == vollpreis) {
			$button.removeClass('btn-blue');
			$button.addClass('btn-red');
		} else {
			$button.removeClass('btn-red');
			$button.addClass('btn-blue');
		}
	});
}

model.listen('vollpreis', updateVollpreis);

// Event handling
$('[data-bind="vollpreis"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('vollpreis', $target.data('value'));
});

// Update
updateVollpreis();




var updatePrice = function() {

// abfragen Datum
	var ziel = model.get('ziel')

//Datzn abfrage
	var date = model.get('date')

//Grundpreis abfrage
	var price = model.get('price')

// abfragen Klasse
	var klasse = model.get('klasse')

// abfragen Reduction
	var reduction = model.get('reduction')

// abfragen Oneway
	var oneway = model.get('oneway')

	// abfragen Oneway
	var via = model.get('via')

	// abfragen Oneway
	var vollpreis = price

// wenn Reduction True :2
	if (reduction == 1){
		price = price/2;		
	}



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
	$('[data-bind="price_chf"]').text(price)
	$('[data-bind="price_eur"]').text(price*EURO)
}

updatePrice();

model.listen('price', updatePrice);
model.listen('klasse', updatePrice);
model.listen('reduction', updatePrice);
model.listen('oneway', updatePrice);
model.listen('date', updatePrice);
model.listen('via', updatePrice);
model.listen('ziel', updatePrice);

if (model.get('vollpreis') == undefined) {
	model.set('vollpreis', 0);
}

