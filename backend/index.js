const express = require('express');
const connectToMongoDb = require('./db');
const app = express();
const port = 3000;

// Connect to MongoDB
connectToMongoDb();

// Start the server
app.listen(port, () => {
	console.log(`Connected successfully to localhost on port ${port}!`);
});
