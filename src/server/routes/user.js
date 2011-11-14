// user.js: user's routes

var user_da = require('../da/user.js');

exports.create = function(req, res) {
	user_da.create(req.body, function(r) {
		res.json(r.data, r.status);	
	});
}