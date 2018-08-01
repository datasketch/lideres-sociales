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
	app.use((err, req, res, next) => {
		res.render('errors/500');
	});
};
