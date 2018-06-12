# SimpleTemplateAPI

NodeJS/ExpressJS API template to create, read, update, or delete on a mongoDB database.

Example is modelled to hold data from api.gdax.com/prodcuts/<productname>/stats and appending a market variable to ID which product the data is representing which we will use for the unique ID.

You will need to spin up your own mongoDB instance either locally or on a cloud and provide the mongodb:// path and credentials.

After putting those details in the db.js file, you can start the API server by navigating to the respository running "node server.js" in the command line/terminal.

Please note that the program is set up for url encoded body messages.

After posting the data to the API service, you can load the data in a web browser. Alternatively you could test the API with a program such as Postman and posting the data from the body of the payload.

Sending a get request to the /api endpoint will return all entries in the database if there are any, an empty array if there are none, or an error message.

Sending a get request to an /api/id endpoint will return only one entry from the database matching the ID, no message if the ID is not found, and the error message will be returned in the event of an error or failure.

Sending a post request to the /api endpoint will add a new entry to the database in the api collection, and return the entry or the error message in the event on an error.

Sending a put request to an /api/id endpoint will find the existing entry and update it instead of creating a new entry, and return the new entry or an error message.