requirejs.config({

	// DO NOT REMOVE - fix for IE8 memory leak
	text : {
		onXhrComplete : function(xhr, url) {
			xhr.abort();
		}
	},

	paths: {
		text : 'static/lib/require/text',
		domReady : 'static/lib/require/domReady',
		i18n : 'static/lib/require/i18n'
	},
	
	packages: [
		{ name: 'seed', location: 'static/lib/seed' },
		// Add third-party packages here
		{ name: 'curl', location: 'static/lib/curl/src/curl' },
		{ name: 'wire', location: 'static/lib/wire', main: 'wire' },
		{ name: 'cola', location: 'static/lib/cola', main: 'cola' },
		{ name: 'when', location: 'static/lib/when', main: 'when' },
		{ name: 'meld', location: 'static/lib/meld', main: 'meld' },
		{ name: 'poly', location: 'static/lib/poly' }
	]
	
});
