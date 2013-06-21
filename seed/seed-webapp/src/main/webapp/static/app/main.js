requirejs.config({

	baseUrl: 'static/app',
	
	// DO NOT REMOVE - fix for IE8 memory leak
	text : {
		onXhrComplete : function(xhr, url) {
			xhr.abort();
		}
	},

	paths: {
		text : '../lib/require/text',
		domReady : '../lib/require/domReady',
		i18n : '../lib/require/i18n'
	},
	
	packages: [
		{ name: 'seed', location: '../lib/seed' },
		// Add third-party packages here
		{ name: 'curl', location: '../lib/curl/src/curl' },
		{ name: 'wire', location: '../lib/wire', main: 'wire' },
		{ name: 'cola', location: '../lib/cola', main: 'cola' },
		{ name: 'when', location: '../lib/when', main: 'when' },
		{ name: 'meld', location: '../lib/meld', main: 'meld' },
		{ name: 'poly', location: '../lib/poly' }
	]
	
});

// wire must be declared do to a r.js bug
requirejs([ 'poly/all', 'wire', 'wire!seed/run' ]);
