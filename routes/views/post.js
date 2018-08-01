const keystone = require('keystone');
const Post = keystone.list('Post').model;

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	const { post } = req.params;

	locals.section = 'blog';
	locals.filters = {
		post,
	};
	locals.data = {
		posts: [],
	};

	view.on('init', function (next) {
		const q = Post.findOne({
			state: 'published',
			slug: locals.filters.post,
		}).populate('author categories');

		q.exec(function (err, result) {
			locals.data.post = result;
			next(err);
		});
	});

	view.on('init', function (next) {
		const q = Post.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

		q.exec(function (err, results) {
			locals.data.posts = results;
			next(err);
		});
	});

	view.render('post');
};
