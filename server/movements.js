"use strict";

var movements = [];

var routing = function (app, route) {

	app.get(route, function (request, response) {

		console.log('GET:' +JSON.stringify(movements));
		if (movements && movements.length > 0)
			response.json(movements);
		else
			response.status(204).send();
	});


	app.get(route + '/totales', function (request, response) {
		var totals = {
			incomes: 0,
			expenses: 0,
			balance: 0
		};

		if (movements && movements.length > 0) {
			movements.forEach(function (movement) {
				if (movement.kind === 'Ingreso') {
					totals.incomes += movement.amount;
				} else {
					totals.expenses += movement.amount;
				}
			});
			totals.balance = totals.incomes - totals.expenses;
			response.json(totals);
		} else {
			response.status(200).json({
				incomes: 0,
				expenses: 0,
				balance: 0
			});
		}
	});


	app.get(route + '/:id', function (request, response) {
		var movement = movements[request.params.id];
		if (movement) {
			console.log('GET ' + request.params.id + ":" +JSON.stringify(movements));
			response.json(movements[request.params.id]);
		}
		else
			response.status(404).send();
	});


	app.post(route, function (request, response) {
		var newMovement = request.body;
		console.log('POST:' +JSON.stringify(newMovement));
		newMovement.id = movements.length;
		movements.push(newMovement)
		response.status(201).json(newMovement);
	});


	app.put(route + '/:id', function (request, response) {
	console.log('PUT:' +JSON.stringify(request.params.id));
		var movement = movements[request.params.id];
		if (movement) {
			console.log('PUT:' +JSON.stringify(request.body));
			movements[request.params.id] = request.body;
			response.json(1);
		} else {
			response.status(404).send(0);
		}
	});


	app.delete(route + '/:id', function (request, response) {
		var movement = movements[request.params.id];
		if (movement) {
			movements.splice(request.params.id, 1)
			response.status(204).send(1);
		} else {
			response.status(404).send(0);
		}
	});

}

module.exports = routing;