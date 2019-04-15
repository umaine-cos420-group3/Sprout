var express = require('express'); 
var mysql = require('mysql');
const app = express(); 

var connection = mysql.createConnection({
	host: "localhost",
	user: "matt",
	password: "password",
	database: "sprout"
});

app.get('/', (req, res) => {
	console.log("hello world");
});

const server = app.listen(3000, 'localhost', function() {
	var host = server.address().address
	var port = server.address().port

	console.log(host);
	console.log('Example app listening at http://%s:%s', host, port);
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});