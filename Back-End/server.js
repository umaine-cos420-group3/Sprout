var express = require('express'); 
var mysql = require('mysql');
const app = express(); 


var connection = mysql.createConnection({
	host: "localhost",
	user: "matt",
	password: "password",
	database: "sprout"
  });


app.get('/', (req, res) =>
	res.send('Sprout main page'))


const server = app.listen(3000, ()  => {
	const { address, port } = server.address(); 
	console.log(`add:${address}por:${port}`);
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
});