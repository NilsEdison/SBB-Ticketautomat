//get Location
console.log(model.get("ziel"));

console.log(model.get("oneway"));
console.log(model.get("klasse"));
console.log(model.get("reduction"));
console.log(model.get("price"));
console.log(model.get("datum"));
console.log(model.get("via"));


// Verlinkung Via
$('[data-my-special-link]').on('click', function(evt) {
	// URL des Links auslesen (wo geht es jetzt dann gleich hin?
	var $target = $(evt.currentTarget);
	model.set('ziel', $target.data('value'));

  var uri = new URI(evt.currentTarget.href);
  // Alle Werte, die im Model gespeichert sind diesem Link anfügen
  uri.search(URI.buildQuery(model._fields));
  // Das «href»-Attribut des Links auf die neue URL ändern
  evt.currentTarget.href = uri.href();
  // Der Browser liest jetzt das modifizierte «href»-Attribut und öffnet die neue Seite
});

