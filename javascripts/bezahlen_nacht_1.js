console.log(model.get("price"));
console.log(model.get("date"));

var EURO = 1.3;
var c = 1 ;
var d = 0 ;
var n = 1;


var price = parseInt(model.get('price'))
var total = parseInt(price)*n
var date = model.get('date')


$('[data-bind="price_chf2"]').text(n)
$('[data-bind="price_chftot"]').text(total)
$('[data-bind="price_eur"]').text(total*EURO)

	if (date == 4){
		$('[data-bind="date"]').text("07.06.13")
	}