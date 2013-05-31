console.log(model.get("oneway"));
console.log(model.get("klasse"));
console.log(model.get("reduction"));
console.log(model.get("price"));
console.log(model.get("datum"));

// Event handling
$('[data-bind="datum"]').on('click', function(evt) {
	var $target = $(evt.currentTarget);
	model.set('datum', $target.data('value'));
	
});