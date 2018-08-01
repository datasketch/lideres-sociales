const keystone = require('keystone');
const { Types } = keystone.Field;

const Leader = new keystone.List('Leader', {
	map: { name: 'name' },
});

Leader.add({
	name: { type: String, required: true },
	bio: { type: Types.Markdown, wysiwyg: true, height: 150 },
	image: { type: Types.CloudinaryImage, folder: 'datasketch/lideres' },
});

Leader.defaultColumns = 'name, bio';
Leader.register();
