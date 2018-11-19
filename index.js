//Import axios and express from node_modules
const axios = require('axios');
const express = require('express');

//Creating an express http server
const app = express();

//Create middleware function for serving static files
app.use(express.static(__dirname + "/client/build"));

//Create a route that responds to GET requests on the /books endpoint
app.get('/books', (req, res) => {
	res.send('Hello world!');
});

app.get('/users', (req, res) => {
	res.send('Hello world from users!');
});

//Assign dynamic port to PORT constant
const PORT = process.env.PORT || 5000;

//Instruct app to listen on port PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); 
