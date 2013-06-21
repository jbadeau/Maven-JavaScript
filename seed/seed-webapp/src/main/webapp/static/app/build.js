({

	baseUrl : './',

	inlineText : true,

	optimize : 'none',

	mainConfigFile : 'main.js',
	
	// TODO why is domReady plugin not
	include : [ 'wire', 'domReady' ],

	name : 'main',

	out : 'main.min.js'

})
