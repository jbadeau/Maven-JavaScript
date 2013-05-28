(function(curl) {

	var config = {
		packages: [
			{ name: 'seed', location: 'static/seed' },
			// Add third-party packages here
			{ name: 'curl', location: 'static/lib/curl/src/curl' },
			{ name: 'wire', location: 'static/lib/wire', main: 'wire' },
			{ name: 'cola', location: 'static/lib/cola', main: 'cola' },
			{ name: 'when', location: 'static/lib/when', main: 'when' },
			{ name: 'meld', location: 'static/lib/meld', main: 'meld' },
			{ name: 'poly', location: 'static/lib/poly' }
		],
		// Polyfill everything ES5-ish
		preloads: ['poly/all']
	};

	curl(config, ['wire!app/main']);

})(curl);