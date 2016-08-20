"use strict";

var users = [];
var sessions = [];

var security = {
	useSecurity: useSecurity,
	userExists: userExists,
	createUser: createUser,
	userIsValid: userIsValid,
	sessionIsValid: sessionIsValid,
	getSession: getSession,
	newSession: newSession
}

function useSecurity(app, route) {
	app.use(route, function (request, response, next) {
		var sessionId = request.get('sessionId');
		var session = getSession(sessionId);
		if (session) {
			if (sessionIsValid(session)) {
				session.timeStamp = new Date();
				request.user = session.email;
				next();
			} else {
				console.log('Sesión caducada:' + JSON.stringify(session));
				response.status(419).send('Sesión caducada');
			}
		} else {
			response.status(401).send('Credencial inválida');
		}
	});
}


function userExists(user) {
	return users.some(function (u) {
		return u.email == user.email;
	});
}

function createUser(user) {
	users.push(user);
}

function userIsValid(user) {
	return users.filter(function (u) {
		return u.email == user.email && u.password == user.password;
	})[0];
}

function getSession(sessionId) {
	return sessions.filter(function (s) {
		return s.sessionId == sessionId;
	})[0]
}

function sessionIsValid(session) {
	return (new Date() - session.timeStamp) < 20 * 60 * 1000;
}

function newSession(email) {
	var sessionId = Math.random() * (88888) + 11111;
	var timeStamp = new Date();
	sessions.push({
		sessionId: sessionId,
		email: email,
		timeStamp: timeStamp
	});
	return sessionId;
}

module.exports = security;