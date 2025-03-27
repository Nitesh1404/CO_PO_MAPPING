import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const CoPoList = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('http://localhost:3000/api/copo');
				setData(response.data.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	const deleteCoPo = async (id) => {
		try {
			await axios.delete(`http://localhost:3000/api/copo/${id}`);
			setData(data.filter((item) => item._id !== id));
			alert('Data deleted successfully!');
		} catch (error) {
			console.error('Error deleting data:', error);
			alert('Error deleting data!');
		}
	};

	const downloadPDF = (item) => {
		const doc = new jsPDF();
		doc.setFont('helvetica', 'bold');
		doc.text('CO-PO Mapping Report', 20, 20);
		doc.setFont('helvetica', 'normal');
		doc.text(`Subject Name: ${item.subjectName}`, 20, 30);
		doc.text(`Subject Code: ${item.subjectCode}`, 20, 40);
		doc.text(`Semester: ${item.semester}`, 20, 50);
		doc.text(`Year: ${item.year}`, 20, 60);
		doc.text(`Academic Year: ${item.AcademicYear}`, 20, 70);

		doc.autoTable({
			startY: 80,
			head: [['ID', 'PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8', 'PO9', 'PO10', 'PO11', 'PO12', 'PSO1', 'PSO2', 'PSO3']],
			body: item.data.map(dataItem => [
				dataItem.id, dataItem.PO1, dataItem.PO2, dataItem.PO3, dataItem.PO4, dataItem.PO5, dataItem.PO6, dataItem.PO7,
				dataItem.PO8, dataItem.PO9, dataItem.PO10, dataItem.PO11, dataItem.PO12, dataItem.PSO1, dataItem.PSO2, dataItem.PSO3
			]),
			theme: 'grid'
		});
		doc.save(`${item.subjectName}_copo_mapping_report.pdf`);
	};

	const exportToExcel = (item) => {
		const ws = XLSX.utils.aoa_to_sheet([
			['Subject Name', 'Subject Code', 'Semester', 'Year', 'Academic Year'],
			[item.subjectName, item.subjectCode, item.semester, item.year, item.AcademicYear],
			[''],
			['ID', 'PO1', 'PO2', 'PO3', 'PO4', 'PO5', 'PO6', 'PO7', 'PO8', 'PO9', 'PO10', 'PO11', 'PO12', 'PSO1', 'PSO2', 'PSO3']
		]);

		item.data.forEach(dataItem => {
			const row = [
				dataItem.id, dataItem.PO1, dataItem.PO2, dataItem.PO3, dataItem.PO4, dataItem.PO5, dataItem.PO6, dataItem.PO7,
				dataItem.PO8, dataItem.PO9, dataItem.PO10, dataItem.PO11, dataItem.PO12, dataItem.PSO1, dataItem.PSO2, dataItem.PSO3
			];
			XLSX.utils.sheet_add_aoa(ws, [row], { origin: -1 });
		});

		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, ws, 'CO-PO Mapping');
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
										<h4 className="card-title text-center font-weight-bold">{item.subjectName}</h4>
										<div className="card-text d-flex justify-content-around">
											<p><strong>Subject Code:</strong> {item.subjectCode}</p>
											<p><strong>Semester:</strong> {item.semester}</p>
											<p><strong>Year:</strong> {item.year}</p>
											<p><strong>Academic Year:</strong> {item.AcademicYear}</p>
										</div>
									</div>
								</div>
								<div className='table-responsive'>
									<table className="table table-bordered table-striped">
										<thead className="thead-dark">
											<tr>
												<th>ID</th>
												{[...Array(12)].map((_, i) => <th key={i}>PO{i + 1}</th>)}
												{[...Array(3)].map((_, i) => <th key={i}>PSO{i + 1}</th>)}
											</tr>
										</thead>
										<tbody>
											{item.data.map((dataItem) => (
												<tr key={dataItem._id}>
													<td>{dataItem.id}</td>
													{[...Array(12)].map((_, i) => <td key={i}>{dataItem[`PO${i + 1}`]}</td>)}
													{[...Array(3)].map((_, i) => <td key={i}>{dataItem[`PSO${i + 1}`]}</td>)}
												</tr>
											))}
										</tbody>
									</table>
								</div>
								<div className="d-flex justify-content-center mb-3">
									<button className="btn btn-primary mx-2" onClick={() => downloadPDF(item)}>Download PDF</button>
									<button className="btn btn-success mx-2" onClick={() => exportToExcel(item)}>Export to Excel</button>
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
