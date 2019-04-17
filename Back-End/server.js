var express = require('express');
var mysql = require('mysql');
var Sprout = express();
var bodyParser = require('body-parser');
const bcrypt = require('bcrypt');


var connection = mysql.createConnection({
	host: "localhost",
	user: "taidgh",
	password: "password",
	database: "Sprout"
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

Sprout.use(bodyParser.json()); // to support JSON-encoded bodies
Sprout.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended: true
}));

Sprout.get('/', (req, res) => {
	console.log("Sprout home page");
});

var server = Sprout.listen(3000, 'localhost', function () {
	var host = server.address().address
	var port = server.address().port

	console.log(host);
	console.log('Example app listening at http://%s:%s', host, port);
});
//Returns a list of all users, BAD PRACTICE WILL BE CHANGED SOON, JUST NEEDED FOR DATABASE TESTING. 
Sprout.get('/user', function (req, res) {
	connection.query('select * from Users', function (error, results, fields) {
		if (error) throw error;
		res.end(JSON.stringify(results));
	});
});

//User registration, requires password to log in the database, Match_idMatches and Report_idReport fields should be 0. 
Sprout.post('/user', function (req, res) {
	var params = req.body;
	console.log(params);

	if (params.pwd != undefined) {

		bcrypt.hash(params.pwd, 10, function (err, hash) {
			params.pwd = hash;
			connection.query('INSERT INTO Users SET ?', params, function (error, results, fields) {
				if (error) throw error;
				res.end(JSON.stringify(results));
			});

		});
	}


});
