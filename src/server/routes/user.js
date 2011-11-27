// user.js: user routes handlers

var user_da = require('../da/user.js');

exports.create = function(req, res) {
	user_da.create(req.body, function(r) {
		res.json(r.data, r.status);	
	});
}

exports.read = function(req, res) {
	user_da.read(req.params.id, function(r) {
		res.json(r.data, r.status);
	});
}