var EURO = 1.3;
var c = 1 ;
var d = 0 ;
var n = 1;

model.set('price', 5.00);
model.set('date', 4);


$('[data-bind="nacht"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('nacht', $target.data('value'));
	updatePrice();
});


var updatePrice = function() {


	var nacht = model.get('nacht')

//Datzn abfrage
	var date = model.get('date')

//Grundpreis abfrage



 	if (nacht == 0){
		n = 0; 	
	} 

   if (nacht == 1){
		n = 1; 	
	} 

	if (nacht == 2){
		n ++;
	}

	if (nacht == 3){
		 n--;
	}

	if (n==0){
		$('[data-bind="nacht1"]').text("hinzufügen")
	} else{
		$('[data-bind="nacht1"]').text(n+"x Zuschlag")
	}



	if (date == 4){
		$('[data-bind="date"]').text("07.06.13")
	}






// neuer Wert anzeigen


	var price = parseInt(model.get('price'))
	var total = parseInt(price)*n


	$('[data-bind="price_chf2"]').text(n)
	$('[data-bind="price_chftot"]').text(total)
	$('[data-bind="price_eur"]').text(total*EURO)
}

updatePrice();




