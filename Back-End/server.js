var express = require("express");
var mysql = require("mysql");
var Sprout = express();
var bodyParser = require("body-parser");
const bcrypt = require("bcrypt");


//Please don't change these
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sprout"
});

// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "matt",
// 	password: "password",
// 	database: "testing"
// })

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

Sprout.use(bodyParser.json()); // to support JSON-encoded bodies
Sprout.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

Sprout.get("/", (req, res) => {
  console.log("Sprout home page");
});

var server = Sprout.listen(3000, "localhost", function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log(host);
  console.log("Example app listening at http://%s:%s", host, port);
});

//Returns a list of all users, BAD PRACTICE WILL BE CHANGED SOON, JUST NEEDED FOR DATABASE TESTING.
//
Sprout.get("/user", function(req, res) {
  var params = req.query;

  var expression = `SELECT * FROM users`

  console.log(expression);

  connection.query(expression, function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});


Sprout.post("/login", function(req,res){
  var params = req.query;

  var expression = `SELECT * FROM users WHERE (email = '${
    params.email
  }' AND password = '${params.password}')`;

  console.log(expression);

  connection.query(expression, function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });

});

//User registration end_point
Sprout.post("/user", function(req, res) {
  var params = req.query;

  if (params.password != undefined) {
    bcrypt.hash(params.pwd, 10, function(err, hash) {
      params.password = hash;
    });
  }

  var expression = `INSERT INTO users (first_name, last_name, email, password, gender, gender_interested) VALUES 
	(	'${params.first_name}','${params.last_name}', '${params.email}', '${
    params.password
  }','${params.gender}','${params.gender_interested}') `;

  console.log(expression);

  connection.query(expression, function(error, results, fields) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
});


Sprout.get("/matches", function(req,res){
	var params = req.query;

	var expression = `SELECT * FROM matches WHERE (matcher_key = ${params.userID} OR matchee_key = ${params.userID})`;

	console.log(expression);

	//get records of the matches
	connection.query(expression, function(error, results, fields) {
		if (error) throw error;


		//get the matches info here and send back


		res.end(JSON.stringify(results));
	  });
});

Sprout.get("/getMessages", function(req,res){
	//

});

Sprout.post("/sendMessage", function(req,res){
	//


});

