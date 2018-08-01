const keystone = require('keystone');
const Leader = keystone.list('Leader').model;
const Post = keystone.list('Post').model;
const Statistic = keystone.list('Statistic').model;

exports = module.exports = function (req, res) {
	const view = new keystone.View(req, res);
	const { locals } = res;

	locals.data = {
		leaders: [],
		stories: [],
		stats: {},
	};

	view.on('init', next => {
		Leader.find({}, (err, leaders) => {
			if (err) {
				return next(err);
			}
			locals.data.leaders = leaders;
			next();
		});
	});

	view.on('init', next => {
		Post.find({ state: 'published' }, (err, posts) => {
			if (err) {
				return next(err);
			}
			locals.data.stories = posts;
			next();
		});
	});

	view.on('init', next => {
		Statistic.find({}, (err, stats) => {
			if (err) {
				return next(err);
			}
			locals.data.stats = stats[0];
			next();
		});
	});

	view.render('index');
};
