({

	baseUrl : './',

	inlineText : true,

	optimize : 'none',

	mainConfigFile : 'main.js',
	
	// TODO why are wire and domReady not included in the build automatically? Defect?
	include : [ 'wire', 'domReady' ],

	name : 'main',

	out : 'main.min.js'

})
