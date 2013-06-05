console.log(model.get("price"));
console.log(model.get("date"));

var EURO = 1.3;

var updateQuittung = function() {
	quittungButtons = $('[data-bind="quittung"]');
	quittungButtons.each(function(i, button) {
		var $button = $(button);
		var quittung = model.get('quittung');

		if ($button.data('value') == quittung) {
			$button.removeClass('btn-blue');
			$button.addClass('btn-red');
		} else {
			$button.removeClass('btn-red');
			$button.addClass('btn-blue');
		}
	});
}

model.listen('quittung', updateQuittung);

// Event handling
$('[data-bind="quittung"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('quittung', $target.data('value'));
});

// Update
updateQuittung();

var price = parseInt(model.get('price'))
var date = model.get('date')


var updatePrice = function() {


if (date == 4){
	
$('[data-bind="date"]').text("07.06.13")
}

var voll = parseInt(model.get('volleTickets'))
$('[data-bind="voll1"]').text(voll + "x Zuschlag")




$('[data-bind="total"]').text(voll*5)
$('[data-bind="total_eur"]').text(voll*5*EURO)


}

updatePrice();
