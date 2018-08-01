const keystone = require('keystone');
const { Types } = keystone.Field;

const Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add(
	{
		title: { type: String, required: true },
		state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
		author: { type: Types.Relationship, ref: 'User', index: true },
		publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
		image: { type: Types.CloudinaryImage },
		content: {
			brief: { type: Types.Markdown, wysiwyg: true, height: 150 },
			extended: { type: Types.Markdown, wysiwyg: true, height: 400 },
		},
		related: { type: Types.Relationship, ref: 'Post', many: true },
		categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
	},
	{ heading: 'SEO Fields' },
	{
		seoTitle: { type: String },
		seoDescription: { type: Types.Markdown, wysiwyg: true, height: 150 },
	},
	{ heading: 'Copyright' },
	{
		copyright: { type: Types.Markdown, wysiwyg: true, height: 50 },
	}
);

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.relationship({ ref: 'Post', path: 'posts', refPath: 'related' });

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
