import React from 'react';

const ExcelTable = ({ headers, data }) => {
	if (!data || data.length === 0) {
		return <p>No data to display. Please upload an Excel file.</p>;
	}

	return (
		<div className="table-responsive">
			<table className=" table table-bordered mt-3 mb-3 table-striped">
				<thead className="thead-dark table-secondary">
					<tr>
						{headers.map((header, index) => (
							<th key={index}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{headers.map((header, cellIndex) => {
								const cellValue = row[header];
								// Ensure that empty or missing values are treated as "" and display 0 for actual 0 values
								return (
									<td key={cellIndex}>
										{cellValue === "" || cellValue === null || cellValue === undefined ? "0" : cellValue}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ExcelTable;
