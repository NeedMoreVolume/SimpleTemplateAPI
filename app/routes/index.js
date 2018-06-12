// routes/index.js

const CRUDRoutes = require('./CRUD_routes');

module.exports = function(app, db) {
	CRUDRoutes(app, db);
	// other routes could be made here.
};