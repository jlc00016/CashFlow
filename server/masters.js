"use strict";

var routing = function (app, route) {

	app.get(route, function (request, response) {
		response.json({
			entryCategories: ['Nómina', 'Ventas', 'Intereses Depósitos'],
			spendingCategories: ['Hipotéca', 'Compras', 'Impuestos']
		});
	});
}

module.exports = routing;