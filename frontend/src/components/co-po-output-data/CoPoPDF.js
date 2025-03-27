import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Styles for better layout
const styles = StyleSheet.create({
	page: {
		padding: 30,
		fontFamily: 'Helvetica',
	},
	header: {
		fontSize: 22,
		textAlign: 'center',
		marginBottom: 15,
		fontWeight: 'bold',
		textTransform: 'uppercase',
		borderBottomWidth: 2,
		borderBottomColor: '#000',
		paddingBottom: 5,
	},
	subHeader: {
		fontSize: 14,
		marginBottom: 10,
		fontWeight: 'bold',
		textDecoration: 'underline',
	},
	section: {
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#f5f5f5',
	},
	textRow: {
		fontSize: 12,
		marginBottom: 4,
	},
	tableContainer: {
		marginTop: 15,
	},
	tableTitle: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 5,
		textAlign: 'center',
		backgroundColor: '#ddd',
		paddingVertical: 5,
		borderRadius: 5,
	},
	table: {
		display: 'table',
		width: 'auto',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000',
		marginTop: 5,
	},
	row: {
		flexDirection: 'row',
	},
	headerCell: {
		padding: 6,
		fontWeight: 'bold',
		backgroundColor: '#007acc',
		color: '#fff',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000',
		textAlign: 'center',
	},
	cell: {
		padding: 6,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#000',
		textAlign: 'center',
		fontSize: 11,
	},
});

const CoPoPDF = ({ data }) => (
	<Document>
		<Page size="A4" style={styles.page}>
			{/* Header */}
			<Text style={styles.header}>{data.subjectName} Attainment Report</Text>

			{/* Subject Details */}
			<View style={styles.section}>
				<Text style={styles.subHeader}>Subject Details</Text>
				<Text style={styles.textRow}>📌 Subject Name: {data.subjectName}</Text>
				<Text style={styles.textRow}>📌 Subject Code: {data.subjectCode}</Text>
				<Text style={styles.textRow}>📌 Academic Year: {data.AcademicYear}</Text>
				<Text style={styles.textRow}>📌 Semester: {data.semester}</Text>
				<Text style={styles.textRow}>📌 Year: {data.year}</Text>
			</View>

			{/* Attainment Table */}
			<View style={styles.tableContainer}>
				<Text style={styles.tableTitle}>Attainment Table</Text>
				<View style={styles.table}>
					{/* Header Row */}
					<View style={styles.row}>
						<Text style={styles.headerCell}>ID</Text>
						{Array.from({ length: 12 }, (_, i) => (
							<Text key={i} style={styles.headerCell}>{`PO${i + 1}`}</Text>
						))}
						<Text style={styles.headerCell}>PSO1</Text>
						<Text style={styles.headerCell}>PSO2</Text>
						<Text style={styles.headerCell}>PSO3</Text>
					</View>

					{/* Data Rows */}
					{data.data?.map((row) => (
						<View key={row.id} style={styles.row}>
							<Text style={styles.cell}>{row.id}</Text>
							{Array.from({ length: 12 }, (_, i) => (
								<Text key={i} style={styles.cell}>{row[`PO${i + 1}`]}</Text>
							))}
							<Text style={styles.cell}>{row.PSO1}</Text>
							<Text style={styles.cell}>{row.PSO2}</Text>
							<Text style={styles.cell}>{row.PSO3}</Text>
						</View>
					))}
				</View>
			</View>
		</Page>
	</Document>
);

export default CoPoPDF;
