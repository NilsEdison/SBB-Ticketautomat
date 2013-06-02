//get Location
console.log(model.get("ziel"));

console.log(model.get("oneway"));
console.log(model.get("klasse"));
console.log(model.get("reduction"));
console.log(model.get("price"));
console.log(model.get("date"));
console.log(model.get("via"));


var EURO = 1.3;



var updateHinzu1 = function() {
	hinzu1Buttons = $('[data-bind="hinzu1"]');
	hinzu1Buttons.each(function(i, button) {
		var $button = $(button);
		var hinzu1 = model.get('hinzu1');

		if ($button.data('value') == hinzu1) {
			$button.removeClass('btn-blue');
			$button.addClass('btn-red');
		} else {
			$button.removeClass('btn-red');
			$button.addClass('btn-blue');
		}
	});
}

model.listen('hinzu1', updateHinzu1);

// Event handling
$('[data-bind="hinzu1"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('hinzu1', $target.data('value'));
});

// Update
updateHinzu1();


// Listener
var updateHalb = function() {
	halbButtons = $('[data-bind="halb"]');
	halbButtons.each(function(i, button) {
		var $button = $(button);
		var halb = model.get('halb');

		if ($button.data('value') == halb) {
			$button.removeClass('btn-blue');
			$button.addClass('btn-red');
		} else {
			$button.removeClass('btn-red');
			$button.addClass('btn-blue');
		}
	});
}

model.listen('halb', updateHalb);

// Event handling
$('[data-bind="halb"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('halb', $target.data('value'));
});

// Update
updateHalb();

var updatePrice = function() {


// abfragen hinzufügen
	var hinzu1 = model.get('hinzu1')
	var halb = model.get('halb')


// abfragen Datum
	var ziel = model.get('ziel')

//Datzn abfrage
	var date = model.get('date')

//Grundpreis abfrage
	var c = 1 
	var d = 1 

	if (hinzu1 == 1){
		var c = 1
		$('[data-bind="hinzu2"]').text("1x Vollpreis")  	
	} 

	if (hinzu1 == 2){
		var c = c+1 
		$('[data-bind="hinzu2"]').text("2x Vollpreis")
	}

	if (hinzu1 == 3){
		var c = c-1 
		$('[data-bind="hinzu2"]').text("hinzufügen")  	
	}

	if (halb == 1){
		var d = parseFloat(1)
		$('[data-bind="halb1"]').text("1x Ermässigt")
	}

	if (halb == 2){
		var d = parseFloat(2)
		$('[data-bind="halb1"]').text("2x Ermässigt")
	}

		if (halb == 3){
		var d = parseFloat(0)
		$('[data-bind="halb1"]').text("hinzufügen?")
	}

	


	var price = parseFloat(model.get('price'))
	var a = parseFloat(price)*c
	var b = parseFloat(price/2)*d
	var pricetot = parseFloat(a+b)


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
		price = parseFloat(price/2);		
	}



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


if (model.get('hinzu1') == undefined) {
	model.set('hinzu1', 1);
}

if (model.get('halb1') == undefined) {
	model.set('halb1', 3);
}



