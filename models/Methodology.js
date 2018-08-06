const keystone = require('keystone');
const { Types } = keystone.Field;

const Methodology = new keystone.List('Methodology', {
	map: { name: 'title' },
	plural: 'Methodology',
});

Methodology.add({
	title: String,
	content: {
		type: Types.Markdown, wysiwyg: true, height: 500,
	},
});

Methodology.defaultColumns = 'title';
Methodology.register();
