// db.js: Main db access point

var mysql = require('mysql');
exports.createClient = function() {
	var client = mysql.createClient({
		user: 'root',
		password: 'password'
	});
	client.database = 'mooneey';
	return client;
}

exports.toHttpStatus = function(sqlResponse) {
	switch(sqlResponse) {
	case 2:
		return 200;
	default:
		throw Error('Unmapped MySQL response:' + sqlResponse);
	}
}
