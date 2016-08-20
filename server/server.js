"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var security = require('./security.js');
var users = require('./users.js');
var sessions = require('./sessions.js');
var masters = require('./masters.js');
var movements = require('./movements.js');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

security.useSecurity(app, '/api/priv/');

users(app, '/api/pub/usuarios');
sessions(app, '/api/pub/sesiones');
masters(app, '/api/pub/maestros');
movements(app, '/api/priv/movimientos')

app.listen(3000);
console.log('listening on port 3000');