var EURO = 1.3;

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
 * Price
 */



var updatePrice = function() {

//Grundpreis abfrage
	var price = model.get('price')

// abfragen Klasse
	var klasse = model.get('klasse')

// abfragen Reduction
	var reduction = model.get('reduction')

// abfragen Oneway
	var oneway = model.get('oneway')

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



// neuer Wert anzeigen
	$('[data-bind="price_chf"]').text(price)
	$('[data-bind="price_eur"]').text(price*EURO)
}




// number.toFixed(2);

model.listen('price', updatePrice);
model.listen('klasse', updatePrice);
model.listen('reduction', updatePrice);
model.listen('oneway', updatePrice);






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


