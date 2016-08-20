var security = require('./security.js');
var routing = function (app, route) {

	app.route(route)
		.post(function (request, response, next) {
			var session = request.body;
			if (security.userIsValid(session)) {
				console.log('aceptado:' + session.email);
				var newSessionId = security.newSession(session.email);
				res.status(201).json(newSessionId);
			} else {
				console.log('Credencial inválida:' + session.email);
				res.status(401).send('Credencial inválida');
			}
		});

}

module.exports = routing;