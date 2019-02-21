'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeCtr").click(function() {
		ga('create', 'UA-134899710-1', 'auto');
		ga("send", "event", 'like', 'click');
	});
}


