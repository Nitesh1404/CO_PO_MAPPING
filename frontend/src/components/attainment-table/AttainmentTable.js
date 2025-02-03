import React, { useEffect, useState } from 'react';

const TableComponent = ({ copoData, DA, IDA, data, setData }) => {
	const [submitClicked, setSubmitClicked] = useState(false); // Track if the button is clicked

	const average = (Number(DA) + Number(IDA)) / 2;

	// Effect to update the table based on copoData
	useEffect(() => {
		if (copoData && typeof copoData === 'object' && submitClicked) {
			setData((prevData) =>
				prevData.map((row) => {
					if (row.id === 'DA') {
						Object.entries(copoData).forEach(([key, value]) => {
							if (value > 0 && (key.startsWith('PO') || key.startsWith('PSO'))) {
								row[key] = parseFloat(DA.toFixed(2));
							}
						});
					} else if (row.id === 'IDA') {
						Object.entries(copoData).forEach(([key, value]) => {
							if (value > 0 && (key.startsWith('PO') || key.startsWith('PSO'))) {
								row[key] = IDA;
							}
						});
					} else if (row.id === 'FINAL ATTAINMENT') {
						Object.entries(copoData).forEach(([key, value]) => {
							const roundVal = Math.round(value);
							if (roundVal > 0 && (key.startsWith('PO') || key.startsWith('PSO'))) {
								let result = 0;
								if (roundVal === 3) {
									result = average * 1;
								} else if (roundVal === 2) {
									result = average * 0.66;
								} else {
									result = average * 0.33;
								}
								row[key] = parseFloat(result.toFixed(2));
							}
						});
					}
					return row;
				})
			);

			// Reset the submitClicked flag to avoid re-triggering the effect
			setSubmitClicked(false);
		}
	}, [copoData, DA, IDA, submitClicked, average, setData]); // Remove `data` from the dependency array
	// Added submitClicked to the dependency array

	// Button click handler to trigger the update
	const handleSubmit = () => {
		setSubmitClicked(true); // Set the flag to true when the button is clicked
	};

	console.log(data);

	return (
		<div className="container mt-4 table-responsive">
			<h4 className="text-center">Course Outcomes & PO/PSO Mapping</h4>
			{/* Add a button to trigger the forward action */}
			<button
				className="btn btn-success  mt-2 mb-4 animation"
				onClick={handleSubmit}
			>
				<i className="animation"></i> generate
				<i className="animation"></i>
			</button>
			<table className="table table-bordered table-striped">
				<thead>
					<tr>
						<th>Course Outcomes</th>
						<th>PO1</th>
						<th>PO2</th>
						<th>PO3</th>
						<th>PO4</th>
						<th>PO5</th>
						<th>PO6</th>
						<th>PO7</th>
						<th>PO8</th>
						<th>PO9</th>
						<th>PO10</th>
						<th>PO11</th>
						<th>PO12</th>
						<th>PSO1</th>
						<th>PSO2</th>
						<th>PSO3</th>
					</tr>
				</thead>
				<tbody>
					{data.map((row) => (
						<tr key={row.id}>
							<td>{row.id}</td>
							<td>{row.PO1}</td>
							<td>{row.PO2}</td>
							<td>{row.PO3}</td>
							<td>{row.PO4}</td>
							<td>{row.PO5}</td>
							<td>{row.PO6}</td>
							<td>{row.PO7}</td>
							<td>{row.PO8}</td>
							<td>{row.PO9}</td>
							<td>{row.PO10}</td>
							<td>{row.PO11}</td>
							<td>{row.PO12}</td>
							<td>{row.PSO1}</td>
							<td>{row.PSO2}</td>
							<td>{row.PSO3}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableComponent;
