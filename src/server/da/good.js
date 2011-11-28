// good.js: goods DA

var db = require('./db');

exports.create = function(good, cb) {
	var client = db.createClient();
	client.query('INSERT INTO good SET good_name = ?, good_date = ?, good_unit_price = ?',
		[good.name, good.date, good.unit_price],
		function(err, rows, fields) {
			if (err) {
				throw err;
			}
			var res = { 'data': {}, 'status': db.toHttpStatus(rows['serverStatus']) };
			client.end();
			if (cb) {
				cb(res);
			}
		});
}

exports.read = function(goodId, cb) {
	var client = db.createClient();
	client.query("SELECT * FROM good WHERE good_id = ?", [goodId], function(err, rows, fields) {
		if (err) {
			throw err;
		}
		var res = { 'data': rows, 'status': 200 };
		if (cb) {
			cb(res);
		}
	});
}

exports.readAll = function(cb) {
	var client = db.createClient();
	client.query("SELECT * FROM good", function(err, rows, fields) {
		if (err) {
			throw err;
		}
		var res = { 'data': rows, 'status': 200 };
		client.end();
		if (cb) {
			cb(res);
		}
	});
}

exports.update = function() {
	
}

exports.delete = function() {
	
}