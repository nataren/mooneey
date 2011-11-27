// user.js: user's DA.

var db = require('./db');

exports.create = function(user, cb) {
	var client = db.createClient();
	client.query('INSERT INTO user SET user_first_name = ?, user_last_name = ?, user_email = ?',
		[user.first_name, user.last_name, user.email],
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

exports.read = function(userId, cb) {
	var client = db.createClient();
	client.query('SELECT * FROM user WHERE user_id = ?', [userId],
		function(err, rows, fields) {
			if (err) {
				throw err;
			}
			var res = {
				'data': rows,
				'status': 200
			};
			client.end();

			if (cb) {
				cb(res);
			}
		});
}