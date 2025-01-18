const mongoose = require('mongoose');

// Define a schema for CO-PO mapping
const copoSchema = new mongoose.Schema({
	subjectName: {
		type: String,
		required: true
	},
	subjectCode: {
		type: String,
		required: true
	},
	AcademicYear: {
		type: String
	},
	year: {
		type: String,
	},
	semester: {
		type: String,
	},
	data: [
		{
			id: {
				type: String,
				required: true
			},
			PO1: {
				type: mongoose.Schema.Types.Mixed, // Allows for both Number and String
				default: 0
			},
			PO2: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			},
			PO3: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			},
			PO4: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			},
			PO5: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			},
			PO6: {
				type: Number,
				default: 0
			},
			PO7: {
				type: Number,
				default: 0
			},
			PO8: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			},
			PO9: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			},
			PO10: {
				type: Number,
				default: 0
			},
			PO11: {
				type: Number,
				default: 0
			},
			PO12: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			},
			PSO1: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			},
			PSO2: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			},
			PSO3: {
				type: mongoose.Schema.Types.Mixed,
				default: 0
			}
		}
	]
});

const CoPo = mongoose.model('CoPo', copoSchema);

module.exports = CoPo;
