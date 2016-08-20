var security = require('./security.js');
var routing = function (app, route) {

	app.route(route)
		.post(function (request, response, next) {
			var user = request.body;
			if (security.userExists(user)) {
				console.log('email ya registrado:' + user.email);
				response.status(409).send('email ' + user.email + ' ya registrado');
			} else {
				console.log('registrado:' + user.email);
				security.createUser(user)
				var newSessionId = security.newSession(user.email);
				response.status(201).json(newSessionId);
			}
		});
}

module.exports = routing;