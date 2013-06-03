

$('[data-button="b"]').on('click', function(evt) {
	// b reinschreiben
	// liste rechts ortschaften mit b
	$('#searchResult-0').hide();
	$('#searchResult-b').show();
	$('#searchText').text("B_");

});

$('[data-button="r"]').on('click', function(evt) {
	// b reinschreiben
	// liste rechts ortschaften mit b
	$('#searchResult-b').hide();
	$('#searchResult-r').show();
	$('#searchText').text("Br_");

});