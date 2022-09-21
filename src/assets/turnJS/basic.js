/*
 * Basic sample
*/

function loadApp() {

    
	
	// Create the flipbook
	

	$('.flipbook').turn({
			// Width

			width:1152,
			
			// Height

			height:720,

			// Elevation

			elevation: 10,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true

	});
}

// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['assets/turnJS/lib/turn.js'],
	nope: ['assets/turnJS/lib/turn.html4.min.js'],
	both: ['./turn-js.component.css'],
	complete: loadApp
});


