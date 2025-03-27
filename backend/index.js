const express = require('express');
const app = express();
const connectToMongoDb = require('./db');
const port = 3000;
const copoRoutes = require('./routes/copoRoutes');
const cors = require('cors');

// Connect to MongoDB
connectToMongoDb();

// Middleware
app.use(cors());
app.use(express.json());



// Routes
app.use('/api/copo', copoRoutes);


// Start the server
app.listen(port, () => {
	console.log(`Connected successfully to localhost on port ${port}!`);
});
