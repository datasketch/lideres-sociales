const keystone = require('keystone');
const { Types } = keystone.Field;

const Statistic = new keystone.List('Statistic', {
	map: { name: 'title' },
});

Statistic.add({
	title: { type: String, required: true, initial: true },
	content: { type: Types.Markdown, wysiwyg: true, height: 600 },
});

Statistic.defaultColumns = 'title';
Statistic.register();
