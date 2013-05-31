console.log(model.get("oneway"));
console.log(model.get("klasse"));
console.log(model.get("reduction"));


var updateDatum = function() {
	datumButtons = $('[data-bind="datum"]');
	datumButtons.each(function(i, button) {
		var $button = $(button);
		var datum = model.get('datum');

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