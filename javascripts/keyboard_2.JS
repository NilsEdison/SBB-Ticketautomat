

$('[data-button="k"]').on('click', function(evt) {
	// b reinschreiben
	// liste rechts ortschaften mit k
	$('#searchResult-0').hide();
	$('#searchResult-r').hide();
	$('#searchResult-s').hide();
	$('#searchResult-c').hide();
	$('#searchResult-k').show();
	$('#searchText').text("K_");

});

$('[data-button="r"]').on('click', function(evt) {
	// b reinschreiben
	// liste rechts ortschaften mit r
	$('#searchResult-0').hide();
	$('#searchResult-k').hide();
	$('#searchResult-s').hide();
	$('#searchResult-c').hide();
	$('#searchResult-r').show();
	$('#searchText').text("Kr_");

});

$('[data-button="s"]').on('click', function(evt) {
	// b reinschreiben
	// liste rechts ortschaften mit s
	$('#searchResult-0').hide();
	$('#searchResult-k').hide();
	$('#searchResult-r').hide();
	$('#searchResult-c').hide();
	$('#searchResult-s').show();
	$('#searchText').text("S_");

});

$('[data-button="c"]').on('click', function(evt) {
	// b reinschreiben
	// liste rechts ortschaften mit c
	$('#searchResult-0').hide();
	$('#searchResult-k').hide();
	$('#searchResult-r').hide();
	$('#searchResult-s').hide();	
	$('#searchResult-c').show();
	$('#searchText').text("Sc_");

});



var ziel = model.get('ziel')

var query = URI.parseQuery(window.location.search);
var model = new SimpleModel(query);

$('[data-my-special-link]').on('click', function(evt) {
	// URL des Links auslesen (wo geht es jetzt dann gleich hin?

evt.preventDefault();

	var $target = $(evt.currentTarget);
	model.set('ziel', $target.data('value'));





  var uri = new URI(evt.currentTarget.href);
  // Alle Werte, die im Model gespeichert sind diesem Link anfügen
  uri.search(URI.buildQuery(model._fields));
  // Das «href»-Attribut des Links auf die neue URL ändern
 

  var appContainer = $('#app-container')

	console.log("kjhdshf")
	appContainer.get(0).addEventListener("transitionend", function() {
		console.log('fini....')
      window.location = uri.href();
	}, true);

	appContainer.addClass('ramonsFancyFadeOut');

 evt.currentTarget.href = uri.href();
  // Der Browser liest jetzt das modifizierte «href»-Attribut und öffnet die neue Seite

});