"use strict";
var express = require('express');

var bodyParser = require('body-parser');
var cors = require('cors');

var masters = require('./masters.js');
var movements = require('./movements.js');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

masters(app, '/maestros');
movements(app, '/movimientos')

app.listen(3000);
console.log('listening on port 3000');