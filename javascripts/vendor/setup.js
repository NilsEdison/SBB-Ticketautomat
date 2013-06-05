// SETUP START ///////////////////////////////////////////////////////////
// Parse the URL query string and store its values in a model
var query = URI.parseQuery(window.location.search);
var model = new SimpleModel(query);
// Store the model's values in the URL when the user navigates to a new page
$('[data-stateful-link]').on('click', function(evt) {

	evt.preventDefault();

  var uri = new URI(evt.currentTarget.href);
  uri.search(URI.buildQuery(model._fields));


  // evt.currentTarget.href = uri.href();

  var appContainer = $('#app-container')

	console.log("kjhdshf")
	appContainer.get(0).addEventListener("transitionend", function() {
		console.log('fini....')
      window.location = uri.href();
	}, true);

	appContainer.addClass('ramonsFancyFadeOut');


});
// SETUP END /////////////////////////////////////////////////////////////



// $('[data-link-left]').on('click', function(evt) {

// 	evt.preventDefault();

//   var uri = new URI(evt.currentTarget.href);
//   uri.search(URI.buildQuery(model._fields));


//   // evt.currentTarget.href = uri.href();

//   var appContainer = $('#app-container')
//   appContainer.css({position: 'absolute'})

//    appContainer.animate({
//     left: -appContainer.width()
//   }, {
//     duration: 2000,
//     complete: function() {
      

//       window.location = uri.href();
//     }
//   });



// });
