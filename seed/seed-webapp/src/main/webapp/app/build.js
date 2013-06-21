({

	baseUrl : './',

	paths: {
		text : 'lib/META-INF/resources/require/text',
		domReady : 'lib/META-INF/resources/require/domReady',
		i18n : 'lib/META-INF/resources/require/i18n'
	},
	
	packages: [
		{ name: 'seed', location: 'lib/META-INF/resources/seed' },
		// Add third-party packages here
		{ name: 'curl', location: 'lib/META-INF/resources/curl/src/curl' },
		{ name: 'wire', location: 'lib/META-INF/resources/wire', main: 'wire' },
		{ name: 'cola', location: 'lib/META-INF/resources/cola', main: 'cola' },
		{ name: 'when', location: 'lib/META-INF/resources/when', main: 'when' },
		{ name: 'meld', location: 'lib/META-INF/resources/meld', main: 'meld' },
		{ name: 'poly', location: 'lib/META-INF/resources/poly' }
	],
	
	inlineText : true,

	optimize : 'none',
	
	name : 'run',
	
	out : 'run.min.js'

})
