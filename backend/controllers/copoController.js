const CoPo = require('../models/copoModel');

// GET all CO-PO mappings
exports.getAllCoPo = async (req, res) => {
	try {
		const data = await CoPo.find();
		res.status(200).json({
			status: 'success',
			result: data.length,
			data: data
		});

	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err.message
		});
	}
}

// POST new CO-PO mappings
exports.createCoPo = async (req, res) => {
	try {
		const { subjectName, subjectCode, AcademicYear, year, semester, data } = req.body;

		// Create a new entry using the provided data
		const newEntry = await CoPo.create({
			subjectName,
			subjectCode,
			AcademicYear,
			year,
			semester,
			data,
		});
		res.status(201).json({
			status: "success",
			copo: newEntry
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: err
		});
	}
}


// PUT (update) CO-PO mappings by ID
// exports.updateCoPO = async (req, res) => {
// 	try {
// 		const updatedData = await CoPo.findOneAndUpdate(
// 			{ id: req.params.id },
// 			req.body,
// 			{ new: true, runValidators: true }
// 		);
// 		if (!updatedData) {
// 			return res.status(404).json({ error: 'Data not found' });
// 		}
// 		res.json({ message: 'Data updated successfully', data: updatedData });
// 	} catch (err) {
// 		res.status(400).json({ error: 'Error updating data' });
// 	}
// }

// DELETE CO-PO mappings by ID
exports.deleteCoPO = async (req, res) => {
	try {
		await CoPo.findByIdAndDelete(req.params.id);

		res.status(204).json({
			status: 'success',
			data: null
		});

	} catch (err) {
		res.status(404).json({
			status: 'fail',
			message: err
		});
	}
}
