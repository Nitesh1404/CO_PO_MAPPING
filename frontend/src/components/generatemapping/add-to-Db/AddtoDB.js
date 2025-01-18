import React from 'react';
import axios from 'axios';

const AddtoDB = ({ attainmentData, formData }) => {
	const handleSubmitToDB = async () => {
		try {
			// Construct the data to send to the backend
			const payload = {
				subjectName: formData.subjectName,
				subjectCode: formData.subjectCode,
				AcademicYear: formData.academicYear,
				year: formData.year,
				semester: formData.semester,
				data: attainmentData, // Array containing CO-PO mappings
			};

			// Make a POST request to the backend
			const response = await axios.post('http://localhost:3000/api/copo', payload);

			// Handle the response from the server
			console.log('Data successfully submitted to DB:', response.data);

			alert('Data successfully submitted to the database!');
		} catch (error) {
			console.error('Error submitting data:', error);
			alert('Failed to submit data. Please try again.');
		}
	};

	return (
		<div>
			<button
				className="btn btn-success mt-2 mb-4 animation"
				onClick={handleSubmitToDB}
			>
				<i className="animation"></i> Submit to DB
				<i className="animation"></i>
			</button>
		</div>
	);
};

export default AddtoDB;
