define({ // Wire spec

	root: { $ref: 'dom.first!body' },

	controller: {
		create: 'seed/controller',
		properties: {
			node: { $ref: 'dom.first!span', at: 'view' }
		},
		on: { view: { 'input': 'update' } }
	},

	view: {
		render: {
			template: { module: 'text!seed/template.html' },
			replace: { module: 'i18n!seed/strings.js' }
		},
		insert: { last: 'root' }
	},

	plugins: [
		{ module: 'wire/dom' },
		{ module: 'wire/dom/render' },
		{ module: 'wire/on' },
		{ module: 'wire/debug' }
	]
});