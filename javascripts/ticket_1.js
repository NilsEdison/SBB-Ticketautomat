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



/**
 * Klasse
 */

// Listener
var updateKlasse = function() {
	klasseButtons = $('[data-bind="klasse"]');
	klasseButtons.each(function(i, button) {
		var $button = $(button);
		var klasse = model.get('klasse');

		if ($button.data('value') == klasse) {
			$button.removeClass('btn-blue');
			$button.addClass('btn-red');
		} else {
			$button.removeClass('btn-red');
			$button.addClass('btn-blue');
		}
	});
}

model.listen('klasse', updateKlasse);

// Event handling
$('[data-bind="klasse"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('klasse', $target.data('value'));
});

// Update
updateKlasse();

/**
 * Reduction
 */

// Listener
var updateReduction = function() {
	reductionButtons = $('[data-bind="reduction"]');
	reductionButtons.each(function(i, button) {
		var $button = $(button);
		var reduction = model.get('reduction');

		if ($button.data('value') == reduction) {
			$button.removeClass('btn-blue');
			$button.addClass('btn-red');
		} else {
			$button.removeClass('btn-red');
			$button.addClass('btn-blue');
		}
	});
}

model.listen('reduction', updateReduction);

// Event handling
$('[data-bind="reduction"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('reduction', $target.data('value'));
});

// Update
updateReduction();



/**
 * OneWay
 */

// Listener
var updateOneWay = function() {
	onewayButtons = $('[data-bind="oneway"]');
	onewayButtons.each(function(i, button) {
		var $button = $(button);
		var oneway = model.get('oneway');

		if ($button.data('value') == oneway) {
			$button.removeClass('btn-blue');
			$button.addClass('btn-red');
		} else {
			$button.removeClass('btn-red');
			$button.addClass('btn-blue');
		}
	});
}

model.listen('oneway', updateOneWay);

// Event handling
$('[data-bind="oneway"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('oneway', $target.data('value'));
});

// Update
updateOneWay();



/**
 * Zusatze
 */

// Listener
var updateZusatz = function() {
	zusatzButtons = $('[data-bind="zusatz"]');
	zusatzButtons.each(function(i, button) {
		var $button = $(button);
		var zusatz = model.get('zusatz');

		if ($button.data('value') == zusatz) {
			$button.removeClass('btn-blue');
			$button.addClass('btn-red');
		} else {
			$button.removeClass('btn-red');
			$button.addClass('btn-blue');
		}
	});
}

model.listen('zusatz', updateZusatz);

// Event handling
$('[data-bind="zusatz"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('zusatz', $target.data('value'));
});

// Update
updateZusatz();



/**
 * Price
 */



var updatePrice = function() {

	var price = (model.get('price'))
	var EURO = 1.3;
	var c = model.get("hinzu1") ;
	var d = (model.get("halb")/2) ;

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
	var a = (price)*c
var b = (price/2)*d
var pricetot = (a+b)



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

if (model.get('hinzu1') == undefined) {
	model.set('hinzu1', 1);
}

if (model.get('halb1') == undefined) {
	model.set('halb1', 0);
}

if (model.get('zusatz') == undefined) {
	model.set('zusatz', 0);
}








