var EURO = 1.3;


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
 * Price
 */



var updatePrice = function() {

//Grundpreis abfrage
	var price = model.get('price')

// abfragen Reduction
	var reduction = model.get('reduction')

// wenn Reduction True :2
	if (reduction == 1){
		price = price/2;
	}


// neuer Wert anzeigen
	$('[data-bind="price_chf"]').text(price)
	$('[data-bind="price_eur"]').text(price*EURO)
}

// number.toFixed(2);

model.listen('price', updatePrice);
model.listen('reduction', updatePrice);



/**
 * Initialize model
 */
if (model.get('reduction') == undefined) {
	model.set('reduction', 0);
}

if (model.get('price') == undefined) {
	model.set('price', 34.90);
}


