// Functions
var onHashChange = function() {
  var hash = window.location.hash;
  var tabId = hash.replace('#', '');

  if (tabId == "") {
    window.location.hash = $('.tab-nav a:first').attr('href');
  } else {
    selectNav(tabId);
    selectTab(tabId);
  }
}

var selectNav = function(tabId) {
  // Deactivate all active menu items
  $('.tab-nav a.active').removeClass("active");

  // Activate menu items with link to tabId
  $('.tab-nav a[href="#'+tabId+'"]').addClass("active");
}

var selectTab = function(tabId) {
  var oldTab = $(".tab-pane.active");
  var newTab = $('#'+tabId);

  newTab.addClass("active");
  newTab.css({
    left: newTab.width()
  });

  oldTab.animate({
    left: -oldTab.width()
  }, {
    duration: 300,
    complete: function() {
      oldTab.removeClass("active");
    }
  });

  newTab.animate({
    left: 0
  }, {
    duration: 300
  });
}


/**
 * Event Handlers
 */

// Hash changes
$(window).on('hashchange', onHashChange);
// Call it immediately for the first setup
onHashChange();
