// simple server, listens for requests on a port after a successful connection to the database.

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const db = require('./config/db');

const app = express();

const port = 9001;

app.use(bodyParser.urlencoded({ extended: true }));

//open up the connection to the test mongoDB
MongoClient.connect(db.uri, (err, database) => {
	if (err) return console.log(err)
	
	var db = database.db("singalongnotetaker");
	require('./app/routes')(app, db);

	app.listen(port, () => {
		console.log('Listening on port: ' + port);
	});
})