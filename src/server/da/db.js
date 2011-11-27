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
		
	case undefined:
		throw Error('MySQL response is undefined');
		
	default:
		throw Error('Unmapped MySQL response:' + sqlResponse);
	}
}
