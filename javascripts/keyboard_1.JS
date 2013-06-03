

$('[data-button="b"]').on('click', function(evt) {
	// b reinschreiben
	// liste rechts ortschaften mit b
	$('#searchResult-0').hide();
	$('#searchResult-r').hide();
	$('#searchResult-b').show();
	$('#searchText').text("B_");

});

$('[data-button="r"]').on('click', function(evt) {
	// b reinschreiben
	// liste rechts ortschaften mit b
	$('#searchResult-0').hide();
	$('#searchResult-b').hide();
	$('#searchResult-r').show();
	$('#searchText').text("Br_");

});



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

