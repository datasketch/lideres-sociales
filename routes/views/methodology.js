const keystone = require('keystone');
const Methodology = keystone.list('Methodology').model;

exports = module.exports = (req, res) => {
	const view = new keystone.View(req, res);
	const { locals } = res;

	locals.data = {
		methodology: {},
	};

	view.on('init', next => {
		Methodology.find({}, (err, results) => {
			if (err) {
				return next(err);
			}
			locals.data.methodology = results[0];
			next();
		});
	});


	view.render('metodologia');
};
