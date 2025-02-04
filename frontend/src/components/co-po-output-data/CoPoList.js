import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx'; // Import the xlsx library
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const CoPoList = () => {
	const [data, setData] = useState([]);

	// Fetch data from backend
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:3000/api/copo'); // Replace with your backend API URL
				setData(response.data.data);
				console.log(response.data.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	// Function to delete a specific CO-PO entry
	const deleteCoPo = async (id) => {
		try {
			await axios.delete(`http://localhost:3000/api/copo/${id}`);
			// Remove the deleted item from the state
			setData(data.filter((item) => item._id !== id));
			alert('Data deleted successfully!');
		} catch (error) {
			console.error('Error deleting data:', error);
			alert('Error deleting data!');
		}
	};

	// Function to download data as PDF for a specific mapping
	const downloadPDF = (item) => {
		const doc = new jsPDF();

		// Title
		doc.setFont('Arial', 'bold', 16);
		doc.text('CO-PO Mapping Report', 20, 20);

		// Subject Name
		doc.setFont('Arial', 'normal', 12);
		doc.text(`Subject Name: ${item.subjectName}`, 20, 30);
		doc.text(`Subject Code: ${item.subjectCode}`, 20, 40);
		doc.text(`Semester: ${item.semester}`, 20, 50);
		doc.text(`Year: ${item.year}`, 20, 60);
		doc.text(`Academic Year: ${item.AcademicYear}`, 20, 70);

		// Add the PO-PSO Table
		doc.autoTable({
			startY: 80, // Table will start at this vertical position
			head: [
				['ID', 'PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8', 'PO9', 'PO10', 'PO11', 'PO12', 'PSO1', 'PSO2', 'PSO3']
			],
			body: item.data.map(dataItem => [
				dataItem.id, dataItem.PO1, dataItem.PO2, dataItem.PO3, dataItem.PO4, dataItem.PO5, dataItem.PO6, dataItem.PO7,
				dataItem.PO8, dataItem.PO9, dataItem.PO10, dataItem.PO11, dataItem.PO12, dataItem.PSO1, dataItem.PSO2, dataItem.PSO3
			]),
			theme: 'grid',
			margin: { top: 20, left: 20, right: 20 },
		});

		// Save the PDF with the corresponding subject's name
		doc.save(`${item.subjectName}_copo_mapping_report.pdf`);
	};

	// Export to Excel
	const exportToExcel = (item) => {
		// Create a new worksheet
		const ws = XLSX.utils.aoa_to_sheet([
			['Subject Name', 'Subject Code', 'Semester', 'Year', 'Academic Year'],
			[item.subjectName, item.subjectCode, item.semester, item.year, item.AcademicYear],
			[''], // Empty row for better readability
			['ID', 'PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8', 'PO9', 'PO10', 'PO11', 'PO12', 'PSO1', 'PSO2', 'PSO3']
		]);

		// Add PO-PSO data to Excel sheet
		item.data.forEach(dataItem => {
			const row = [
				dataItem.id, dataItem.PO1, dataItem.PO2, dataItem.PO3, dataItem.PO4, dataItem.PO5, dataItem.PO6, dataItem.PO7,
				dataItem.PO8, dataItem.PO9, dataItem.PO10, dataItem.PO11, dataItem.PO12, dataItem.PSO1, dataItem.PSO2, dataItem.PSO3
			];
			XLSX.utils.sheet_add_aoa(ws, [row], { origin: -1 });
		});

		// Create a workbook
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'CO-PO Mapping');

		// Export the Excel file
		XLSX.writeFile(wb, `${item.subjectName}_copo_mapping_report.xlsx`);
	};


	return (
		<div className="container my-5">
			<h2 className="text-center text-primary mb-4">All learning outcomes data here!</h2>
			<div className="card shadow-lg">
				<div className="card-body">
					{data.length > 0 ? (
						data.map((item) => (
							<div key={item._id} className="mb-4">
								<div className="card">
									<div className="card-body">
										{/* Subject Name */}
										<h4 className="card-title text-center font-weight-bold">{item.subjectName}</h4>

										{/* Subject Code, Semester, Year, Academic Year */}
										<div className="card-text d-flex justify-content-around">
											<p className="text-center mb-2">
												<strong>Subject Code:</strong> <span className="text-secondary">{item.subjectCode}</span>
											</p>
											<p className="text-center mb-2">
												<strong>Semester:</strong> <span>{item.semester}</span>
											</p>
											<p className="text-center mb-2">
												<strong>Year:</strong> <span>{item.year}</span>
											</p>
											<p className="text-center mb-2">
												<strong>Academic Year:</strong> <span>{item.AcademicYear}</span>
											</p>
										</div>


									</div>
								</div>

								{/* Table */}
								<div className='table-responsive'>
									<table className="table table-bordered table-striped">
										<thead className="thead-dark">
											<tr>
												<th>ID</th>
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
											{item.data.map((dataItem) => (
												<tr key={dataItem._id}>
													<td>{dataItem.id}</td>
													<td>{dataItem.PO1}</td>
													<td>{dataItem.PO2}</td>
													<td>{dataItem.PO3}</td>
													<td>{dataItem.PO4}</td>
													<td>{dataItem.PO5}</td>
													<td>{dataItem.PO6}</td>
													<td>{dataItem.PO7}</td>
													<td>{dataItem.PO8}</td>
													<td>{dataItem.PO9}</td>
													<td>{dataItem.PO10}</td>
													<td>{dataItem.PO11}</td>
													<td>{dataItem.PO12}</td>
													<td>{dataItem.PSO1}</td>
													<td>{dataItem.PSO2}</td>
													<td>{dataItem.PSO3}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>

								{/* Buttons below table */}
								<div className="d-flex justify-content-center mb-3">
									<button className="btn btn-primary mx-2" style={{ width: '200px' }} onClick={() => downloadPDF(item)}>
										Download PDF
									</button>
									<button className="btn btn-success mx-2" style={{ width: '200px' }} onClick={() => exportToExcel(item)}>
										Export to Excel
									</button>
									<button className="btn btn-danger" onClick={() => deleteCoPo(item._id)}>Delete</button>

								</div>
							</div>
						))
					) : (
						<p>Loading...</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default CoPoList;
