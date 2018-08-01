const keystone = require('keystone');
const Post = keystone.list('Post').model;

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;
	const { slug } = req.params;

	locals.data = {
		post: undefined,
	};

	view.on('init', function (next) {
		const q = Post.findOne({ state: 'published', slug }).populate('related');

		q.exec(function (err, post) {
			if (err) {
				return next(err);
			}
			locals.data.post = post;
			next();
		});
	});

	view.render('post');
};
