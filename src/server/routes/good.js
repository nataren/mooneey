// good.js: goods routes handlers

var goodDA = require('../da/good.js');

function invoke(func, param, cb) {
	func(param, cb);
}

function callback(res) {
	return function(r) {
		console.log('will return data = ' + r.data + ', status = ' + r.status);
		res.json(r.data, r.status);
	};
}

exports.create = function(req, res) {
	invoke(goodDA.create, req.body, callback(res));
}

exports.read = function(req, res) {
	invoke(goodDA.read, req.params.id, callback(res));
}

exports.readAll = function(req, res) {
	invoke(goodDA.readAll, callback(res));
}

exports.update = function(req, res) {
	invoke(goodDA.update, req.params.id, req.body, callback(res));
}

exports.delete = function(req, res) {
	invoke(goodDA.delete, req.params.id, callback(res));
}