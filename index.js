//Import axios and express from node_modules
import axios from 'axios';
import express from 'express';

//Creating an express http server
const app = express();

//Assign dynamic port to PORT constant
const PORT = process.env.PORT || 5000;

//Instruct app to listen on port PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); 
