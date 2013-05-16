(function(curl) {

	var config = {
		// baseUrl: '',
		//paths: {
			// Configure paths here
		//},
		packages: [
			// Define application-level packages
			{ name: 'welcome', location: 'static/lib/welcome' },

			// Define a theme package, and configure it to always use the css module loader
			// No need to use AMD 'css!' plugin to load things in this package, it will happen
			// automatigally.
			// WARNING: The moduleLoader config syntax will be changing in an upcoming version
			// of curl.
			{ name: 'theme', location: 'theme', config: { moduleLoader: 'curl/plugin/css' } },

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
		// Or, select individual polyfills if you prefer
		//preloads: ['poly/array', 'poly/function', 'poly/json', 'poly/object', 'poly/string', 'poly/xhr']
	};

	curl(config, ['wire!app/main']);

})(curl);