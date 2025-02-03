import React from "react";

const SubjectInput = ({ formData, setFormData }) => {

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form Data Submitted: ", formData);

		// Add your logic to submit the formData to the backend here
	};

	return (
		<div className="container mt-5">
			{/* <h2 className="text-center mb-4">Add Subject</h2> */}
			<form onSubmit={handleSubmit} className="needs-validation">
				<div className="mb-3">
					<label htmlFor="subjectName" className="form-label">
						Subject Name
					</label>
					<input
						type="text"
						className="form-control"
						id="subjectName"
						name="subjectName"
						placeholder="Enter Subject Name"
						value={formData.subjectName}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="subjectCode" className="form-label">
						Subject Code
					</label>
					<input
						type="text"
						className="form-control"
						id="subjectCode"
						name="subjectCode"
						placeholder="Enter Subject Code"
						value={formData.subjectCode}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="academicYear" className="form-label">
						Academic Year
					</label>
					<input
						type="text"
						className="form-control"
						id="academicYear"
						name="academicYear"
						placeholder="Enter Academic Year (e.g., 2021)"
						value={formData.academicYear}
						onChange={handleChange}
						required
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="year" className="form-label">
						Year
					</label>
					<select
						className="form-select"
						id="year"
						name="year"
						value={formData.year}
						onChange={handleChange}
						required
					>
						<option value="">Select Year</option>
						<option value="1 year">First Year</option>
						<option value="2 year">Second Year</option>
						<option value="3 year">Third Year</option>
						<option value="4 year">Fourth Year</option>
					</select>
				</div>

				<div className="mb-3">
					<label htmlFor="semester" className="form-label">
						Semester
					</label>
					<select
						className="form-select"
						id="semester"
						name="semester"
						value={formData.semester}
						onChange={handleChange}
						required
					>
						<option value="">Select Semester</option>
						<option value="semester 1">Semester 1</option>
						<option value="semester 2">Semester 2</option>
						<option value="semester 3">Semester 3</option>
						<option value="semester 4">Semester 4</option>
						<option value="semester 5">Semester 5</option>
						<option value="semester 6">Semester 6</option>
						<option value="semester 7">Semester 7</option>
						<option value="semester 8">Semester 8</option>
					</select>
				</div>

				<div className="text-center">
					<button
						className="btn btn-success  mt-2 mb-4 animation"
					// onClick={handleSubmit}
					>
						<i className="animation"></i> Add subject
						<i className="animation"></i>
					</button>
				</div>
			</form>
		</div>
	);
};

export default SubjectInput;
