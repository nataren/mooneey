// user.js: user's DA.

var db = require('./db');

exports.create = function(user, cb) {
	var client = db.createClient();
	client.query('INSERT INTO user SET user_name = ?, user_email = ?',
		[user.name, user.email],
		function(err, results, fields) {
			if (err) {
				throw err;
			}
			var res = {};
			res['status'] = db.toHttpStatus(results['serverStatus']);
			res['data'] = {};
			client.end();
			if (cb) {
				cb(res);
			}
		});
}