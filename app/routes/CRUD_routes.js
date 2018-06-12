// routes/CRUD_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	//Post returns the newPost from the database, or an error message.
	app.post('/api', (req, res) => {
		//requires an open, high, low, volume, last, and 30day volume, all of these come from GDAX.
		const newPost = { open: req.body.open, high: req.body.high, low: req.body.low, volume: req.body.volume, last: req.body.last, volume_30day: req.body.volume_30day, _id: req.body.market };
		db.collection('api').insert(newPost, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occured.' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});
	//Get returns all documents in the api collection
	app.get('/api', (req, res) => {
		//return all api db docs - pass empty document, call toArray.
		db.collection('api').find({}).toArray((err, docs) => {
			if(err) {
				res.send({ 'error': 'An error has occurred.' });
			} else {
				res.send(docs);
			}
		});
	});
	//Get returns one entry matching the ID if found, nothing if not found, or an error message.
	app.get('/api/:id', (req, res) => {
		const id = req.params.id;
		const query = { '_id': id };
		db.collection('api').findOne(query, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occurred.' });
			} else {
				res.send(item);
			}
		});
	});
	//Delete returns either an error message or that the entry was deleted with it's id.
	app.delete('/api/:id', (req, res) => {
		const id = req.params.id;
		const query = { '_id': id };
		db.collection('api').remove(query, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has occurred.' });
			} else {
				res.send('Entry ' + id + ' deleted.');
			}
		});
	});
	//Put returns the new data, sourced from the database, or an error message.
	app.put('/api/:id', (req, res) => {
		const id = req.params.id;
		const query = { '_id': id };
		const newUpdate = { open: req.body.open, high: req.body.high, low: req.body.low, volume: req.body.volume, last: req.body.last, volume_30day: req.body.volume_30day, _id: req.body.market };
		db.collection('api').update(query, newUpdate, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred.' });
			} else {
				res.send(newUpdate);
			}
		});
	});
};