const chalk = require('chalk');
const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

var routes = {
	views: importRoutes('./views'),
};

exports = module.exports = function (app) {
	app.get('/', routes.views.index);
	app.get('/post/:slug', routes.views.post);
	app.get('/metodologia', routes.views.methodology);
	app.use((err, req, res, next) => {
		console.log(`${chalk.red('[error]: ')} ${err.message}`);
		console.error(err.stack);
		res.render('errors/500');
	});
};
