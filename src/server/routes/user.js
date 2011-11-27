// user.js: user routes handlers

var userDA = require('../da/user.js');

exports.create = function(req, res) {
	userDA.create(req.body, function(r) {
		res.json(r.data, r.status);	
	});
}

exports.read = function(req, res) {
	userDA.read(req.params.id, function(r) {
		res.json(r.data, r.status);
	});
}

exports.readAll = function(req, res) {
	userDA.readAll(function(r) {
		res.json(r.data, r.status);
	});
}

exports.update = function(req, res) {
	userDA.update(req.params.id, req.body, function(r) {
		res.json(r.data, r.status);
	});
}