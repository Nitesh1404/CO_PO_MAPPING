import React from 'react'

const InputAttainment = ({ handleInputChange, levels }) => {

	return (
		<div className="container mt-4">
			<h4>Enter Attainment Levels</h4>

			<div className="row g-3">
				<div className="col-12 col-md-4">
					<div className="form-group text-center">
						<label htmlFor="level1">Level 1</label>
						<input
							type="text"
							id="level1"
							name="level1"
							className="form-control"
							placeholder="Enter level 1"
							value={levels.level1}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="col-12 col-md-4">
					<div className="form-group text-center">
						<label htmlFor="level2">Level 2</label>
						<input
							type="text"
							id="level2"
							name="level2"
							className="form-control"
							placeholder="Enter level 2"
							value={levels.level2}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="col-12 col-md-4">
					<div className="form-group text-center">
						<label htmlFor="level3">Level 3</label>
						<input
							type="text"
							id="level3"
							name="level3"
							className="form-control"
							placeholder="Enter level 3"
							value={levels.level3}
							onChange={handleInputChange}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InputAttainment