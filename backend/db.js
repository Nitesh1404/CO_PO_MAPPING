const mongoose = require('mongoose');
const URI = "mongodb://localhost:27017/COPO_System";

const connectToMongoDb = () => {
	mongoose.connect(URI);
	if (mongoose.connection) {
		console.log("DB connected successfully !!");
	}
	else {
		console.log("errors to connect with DB !!");
	}
}

module.exports = connectToMongoDb;