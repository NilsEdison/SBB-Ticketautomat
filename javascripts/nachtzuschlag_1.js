var EURO = 0.7;

model.set('price', 5.00);
model.set('date', 4);
model.set('volleTickets', 1);

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


var updatePrice = function() {

	var price = parseInt(model.get('prize'))

	var nacht = model.get('nacht')

//Datzn abfrage
	var date = model.get('date')

//Grundpreis abfrage





	if (date == 4){
		$('[data-bind="date"]').text("07.06.13")
	}



	var voll = parseInt(model.get('volleTickets'))
	$('[data-bind="voll1"]').text(voll + "x Zuschlag")




	$('[data-bind="total"]').text(voll*5)
	$('[data-bind="total_eur"]').text(voll*5*EURO)



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



