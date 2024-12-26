import React, { useState } from 'react';
import './Button.css'
import * as XLSX from 'xlsx';
import Alert from '../alert/Alert';
import ExcelTable from './exceltable/ExcelTable';
import DisplayStats from './displayStatistics/DisplayStats';
import UploadFile from './upload/UploadFile';
import PreviewModal from './previewModal/PreviewModal';
import ESE from './formatPhotos/ESE.png';
import IA1 from './formatPhotos/IAP-1.png';
import IA2 from './formatPhotos/IAP-2.png';
// import UploadBG from './formatPhotos/uploadBG.png'

const GenerateMapping = () => {
	const [ia1Data, setIa1Data] = useState([]);
	const [ia2Data, setIa2Data] = useState([]);
	const [eseData, setEseData] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [eseHaders, setEseHeaders] = useState([]);
	// const [inputValue, setInputValue] = useState('');

	const [targetValue, setTargetValue] = useState('');
	const[targetValues,setTarget]=useState('');
	const [eseStats, setEseStats] = useState({ attempted: 0, scoredAbove: 0 });
	const [eseAttainmentLevels, setEseAttainmentLevels] = useState({});
	const [attemptedCounts, setAttemptedCounts] = useState({
		IA1: { CO1: 0, CO2: 0, CO3: 0 },
		IA2: { CO4: 0, CO5: 0, CO6: 0 },
	});
	const [scoredAboveTarget, setScoredAboveTarget] = useState({
		IA1: { CO1: 0, CO2: 0, CO3: 0 },
		IA2: { CO4: 0, CO5: 0, CO6: 0 },
	});
	const [attainmentLevels, setAttainmentLevels] = useState({
		IA1: { CO1: '', CO2: '', CO3: '' },
		IA2: { CO4: '', CO5: '', CO6: '' },
	});
	const [isIA1Open, setIsIA1Open] = useState(false);
	const [isIA2Open, setIsIA2Open] = useState(false);
	const [isESEOpen, setIsESEOpen] = useState(false);
	// const [previewData, setPreviewData] = useState({ title: "", body: "" });

	// Handle IA1 and IA2 uploads
	const handleFileUpload = (e, ia) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const data = new Uint8Array(event.target.result);
				const workbook = XLSX.read(data, { type: 'array' });
				const worksheet = workbook.Sheets[workbook.SheetNames[0]];
				const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

				if (jsonData.length > 0) {
					setHeaders(Object.keys(jsonData[0]));
					if (ia === 'IA1') {
						setIa1Data(jsonData);
					} else if (ia === 'IA2') {
						setIa2Data(jsonData);
					}
				}
			};
			reader.readAsArrayBuffer(file);
		}
	};

	// Handle ESE file upload separately
	const handleESEFileUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const data = new Uint8Array(event.target.result);
				const workbook = XLSX.read(data, { type: 'array' });
				const worksheet = workbook.Sheets[workbook.SheetNames[0]];
				const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

				if (jsonData.length > 0) {
					setEseHeaders(Object.keys(jsonData[0]));
					setEseData(jsonData);
				}
			};
			reader.readAsArrayBuffer(file);
		}
	};

	// 	const [attainmentLevel, setAttainmentLevel] = useState({ level1: null, level2: null, level3: null });

	// const handleInputChange = (event) => {
	// 	const value = event.target.value;
	// 	setInputValue(value);

	// 	// Split the input by commas and validate
	// 	const levels = value.split(',').map((v) => v.trim());
	// 	if (levels.length === 3) {
	// 		const [level1, level2, level3] = levels.map((v) => (v.match(/^\d+(\.\d+)?$/) ? Number(v) : null));
	// 		setAttainmentLevel({ level1, level2, level3 });
	// 	} else {
	// 		setAttainmentLevel({ level1: null, level2: null, level3: null });
	// 	}
	// }
const [levels, setLevels] = useState({ level1: '', level2: '', level3: '' });
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setLevels((prevLevels) => ({ ...prevLevels, [name]: value }));
	};


	const handleTargetValueChange = (e) => {
		const value = parseFloat(e.target.value);
		if (!isNaN(value)) {
			setTargetValue(value);
		}
	};

	const handleAttainmentLevelChange = (e, co, ia) => {
		setAttainmentLevels({
			...attainmentLevels,
			[ia]: {
				...attainmentLevels[ia],
				[co]: e.target.value,
			},
		});
	};

	const calculateStatistics = (data, iaKey) => {
		if (!targetValue) {
			alert('Please set a target value');
			return;
		}

		const attempted = iaKey === 'IA1' ? { CO1: 0, CO2: 0, CO3: 0 } : { CO4: 0, CO5: 0, CO6: 0 };
		const scoredAbove = iaKey === 'IA1' ? { CO1: 0, CO2: 0, CO3: 0 } : { CO4: 0, CO5: 0, CO6: 0 };
		const targetScore = (targetValue / 100) * 5;

		data.forEach((row) => {
			const columns = iaKey === 'IA1' ? ['CO1', 'CO2', 'CO3'] : ['CO4', 'CO5', 'CO6'];
			columns.forEach((co) => {
				const value = parseFloat(row[co]);
				if (!isNaN(value) && value > 0) {
					attempted[co] += 1;
					if (value > targetScore) {
						scoredAbove[co] += 1;
					}
				}
			});
		});

		setAttemptedCounts((prev) => ({
			...prev,
			[iaKey]: attempted,
		}));

		setScoredAboveTarget((prev) => ({
			...prev,
			[iaKey]: scoredAbove,
		}));

		// Determine Attainment Level based on percentage
		const updatedAttainmentLevels = { ...attainmentLevels };
		Object.keys(attempted).forEach((co) => {
			const percentage = (scoredAbove[co] / attempted[co]) * 100;

			if (percentage >= 50) {
				updatedAttainmentLevels[iaKey][co] = '3'; // 50% or more
			} else if (percentage >= 45) {
				updatedAttainmentLevels[iaKey][co] = '2'; // 45% or more but less than 50%
			} else {
				updatedAttainmentLevels[iaKey][co] = '1'; // Less than 45%
			}
		});

		setAttainmentLevels(updatedAttainmentLevels);
	};


	const calculatePercentage = (co, iaKey) => {
		const attempted = attemptedCounts[iaKey][co];
		const scoredAbove = scoredAboveTarget[iaKey][co];
		return attempted === 0 ? 0 : ((scoredAbove / attempted) * 100).toFixed(2);
	};

	// calculation ESE 
	const calculateEseStatistics = (data) => {
		if (!targetValue) {
			alert('Please set a target value');
			return;
		}

		let attempted = 0;
		let scoredAbove = 0;
		const targetScore = (targetValue * 80) / 100; // Assuming ESE is out of 80

		data.forEach((row) => {
			const marks = parseFloat(row['ESE']); // Assuming 'Marks' column exists
			if (!isNaN(marks) && marks > 0) {
				attempted += 1;
				if (marks >= targetScore) {
					scoredAbove += 1;
				}
			}
		});

		setEseStats({ attempted, scoredAbove });

		// Set attainment level for ESE based on percentage
		const percentage = (scoredAbove / attempted) * 100;
		let attainmentLevel = '';
		if (percentage >= 50) {
			attainmentLevel = '3'; // 50% or more
		} else if (percentage >= 45) {
			attainmentLevel = '2'; // 45% or more but less than 50%
		} else {
			attainmentLevel = '1'; // Less than 45%
		}

		setEseAttainmentLevels({ ESE: attainmentLevel });
	};

	const calculateESEPercentage = (scoredAbove, attempted) => {
		return attempted === 0 ? 0 : ((scoredAbove / attempted) * 100).toFixed(2);
	};

	// preview modal functions
	const showPreviewModal = (name) => {
		if (name === "IA1") {
			setIsIA1Open(true);
		}
		else if (name === "IA2") {
			setIsIA2Open(true);
		}
		else if (name === "ESE") {
			setIsESEOpen(true);
		}

	}

	const hidePreviewModal = (name) => {
		if (name === "IA1") {
			setIsIA1Open(false);
		}
		else if (name === "IA2") {
			setIsIA2Open(false);
		}
		else if (name === "ESE") {
			setIsESEOpen(false);
		}
	}
	const handleTargetValueChanges = (event) => {
		const value = event.target.value;

		// Allow only numbers (integers or decimals)
		if (/^\d*\.?\d*$/.test(value)) {
			setTarget(value);
		}
	}
	
   

	return (
		<div className="container">
			<h2 className="mt-3">Generate Mapping</h2>
			<Alert />

			{/* IA-1 Upload */}
			<div className="mt-4 ">
				<h4 className='d-flex justify-content-center align-items-center'>Upload IA-1 Marks
					<span class="material-symbols-outlined mx-2" style={{ cursor: "pointer" }} onClick={() => showPreviewModal("IA1")}>
						preview
					</span>
					{isIA1Open ? <PreviewModal hidePreviewModal={() => hidePreviewModal("IA1")} img={IA1} /> : ""}
				</h4>
				{/* <input
					type="file"
					accept=".xls,.xlsx"
					className="form-control"
					onChange={(e) => handleFileUpload(e, 'IA1')}
				/> */}
				<UploadFile handleUpload={(e) => handleFileUpload(e, 'IA1')} />
				<div className="container">
					<ExcelTable headers={headers} data={ia1Data} />
				</div>
			</div>

			{/* IA-2 Upload */}
			<div className="mt-4">
				<h4 className='d-flex justify-content-center align-items-center'>Upload IA-2 Marks
					<span class="material-symbols-outlined mx-2" style={{ cursor: "pointer" }} onClick={() => showPreviewModal("IA2")}>
						preview
					</span>
					{isIA2Open && <PreviewModal hidePreviewModal={() => hidePreviewModal("IA2")} img={IA2} />}
				</h4>
				{/* <input
					type="file"
					accept=".xls,.xlsx"
					className="form-control"
					onChange={(e) => handleFileUpload(e, 'IA2')}
				/> */}
				<UploadFile handleUpload={(e) => handleFileUpload(e, 'IA2')} />
				<div className="container">
					<ExcelTable headers={headers} data={ia2Data} />
				</div>
			</div>

			{/* IA-1 Upload */}
			<div className="mt-4">
				<h4 className='d-flex justify-content-center align-items-center'>Upload ESE Marks
					<span class="material-symbols-outlined mx-2" style={{ cursor: "pointer" }} onClick={() => showPreviewModal("ESE")}>
						preview
					</span>
					{isESEOpen && <PreviewModal hidePreviewModal={() => hidePreviewModal("ESE")} img={ESE} />}
				</h4>
				{/* <input
					type="file"
					accept=".xls,.xlsx"
					className="form-control"
					onChange={(e) => handleESEFileUpload(e)}
				/> */}
				<UploadFile handleUpload={(e) => handleESEFileUpload(e)} />
				<div className="container">
					<ExcelTable headers={eseHaders} data={eseData} />
				</div>
			</div>
			{/* attainment level */}
			{/* <div>
			<div className="mt-4">
			<h4>Enter Attainment Levels</h4>
			<input
				type="text"
				className="form-control"
				placeholder="Enter levels for Level 1, Level 2, Level 3 (e.g., 80, 90, 85)"
				value={inputValue}
				onChange={handleInputChange}
			/>
			<small className="form-text text-muted">
				Enter three percentages separated .
			</small>

			<div className="mt-3">
				<h5>Parsed Attainment Levels:</h5>
				<p>
					Level 1: {attainmentLevel.level1 !== null ? `${attainmentLevel.level1}%` : 'Invalid'} | 
					Level 2: {attainmentLevel.level2 !== null ? `${attainmentLevel.level2}%` : 'Invalid'} | 
					Level 3: {attainmentLevel.level3 !== null ? `${attainmentLevel.level3}%` : 'Invalid'}
				</p>
			</div>
		</div> */}
			{/* </div> */}

			<div className="mt-4">
			<h4>Enter Attainment Levels</h4>

			<div style={{ display: 'flex', flexDirection: 'row', gap: '4rem', marginTop: '1rem' }}>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<label htmlFor="level1">Level 1</label>
					<input
						type="text"
						id="level1"
						name="level1"
						className="form-control"
						placeholder="enter level1"
						value={levels.level1}
						onChange={handleInputChange}
						style={{ width: '270px' }}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<label htmlFor="level2">Level 2</label>
					<input
						type="text"
						id="level2"
						name="level2"
						className="form-control"
						placeholder="enter level2"
						value={levels.level2}
						onChange={handleInputChange}
						style={{ width: '270px' }}
					/>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<label htmlFor="level3">Level 3</label>
					<input
						type="text"
						id="level3"
						name="level3"
						className="form-control"
						placeholder="enter level3"
						value={levels.level3}
						onChange={handleInputChange}
						style={{ width: '270px' }}
					/>
				</div>
			</div>

			<div className="mt-3">
				<h5>Parsed Attainment Levels:</h5>
				<p>Level 1: {levels.level1 || 'Not Entered'}</p>
				<p>Level 2: {levels.level2 || 'Not Entered'}</p>
				<p>Level 3: {levels.level3 || 'Not Entered'}</p>
			</div>
		</div>

			{/* Target Value Input */}
			<div>
				<div className="mt-4">
					<h4>Set Target Value (in %)</h4>
					<input
						type="number"
						className="form-control"
						placeholder="Enter target value as a percentage (e.g., 40)"
						value={targetValue}
						onChange={handleTargetValueChange}
					/>
					<small className="form-text text-muted">
						This target value will be used to determine how many students scored above the threshold.
					</small>
				</div>

				{/* Display Statistics */}
				<div className="mt-4">
					<h4>Statistics</h4>
					<button className="btn btn-success  mt-2 mb-4 animation" onClick={() => calculateStatistics(ia1Data, 'IA1')}>
						<i class="animation"></i>Calculate IA-1 Statistics<i class="animation"></i>
					</button>
					<DisplayStats
						attemptedCounts={attemptedCounts.IA1}
						scoredAboveTarget={scoredAboveTarget.IA1}
						attainmentLevels={attainmentLevels.IA1}
						calculatePercentage={(co) => calculatePercentage(co, 'IA1')}
						handleAttainmentLevelChange={(e, co) => handleAttainmentLevelChange(e, co, 'IA1')}
						title="IA-1"
						columns={['CO1', 'CO2', 'CO3']}
					/>

					<button className="btn btn-success mt-2 mb-4" onClick={() => calculateStatistics(ia2Data, 'IA2')}>
						<i class="animation"></i>Calculate IA-2 Statistics<i class="animation"></i>
					</button>
					<DisplayStats
						attemptedCounts={attemptedCounts.IA2}
						scoredAboveTarget={scoredAboveTarget.IA2}
						attainmentLevels={attainmentLevels.IA2}
						calculatePercentage={(co) => calculatePercentage(co, 'IA2')}
						handleAttainmentLevelChange={(e, co) => handleAttainmentLevelChange(e, co, 'IA2')}
						title="IA-2"
						columns={['CO4', 'CO5', 'CO6']}
					/>

					<button
						className="btn btn-success mt-2 mb-4"
						onClick={() => calculateEseStatistics(eseData)}
					>
						<i class="animation"></i>Calculate ESE Statistics<i class="animation"></i>
					</button>
					<div>
						<h5 className="card-title">ESE Statistics</h5>
						<div className=" container mt-1 card mb-4" style={{ boxShadow: '1px 1px 8px #84f4d3c2' }}>
							<div className="card-body" >
								<p className="card-text"><strong>Attempted:</strong> {eseStats.attempted}</p>
								<p className="card-text"><strong>Scored Above Target:</strong> {eseStats.scoredAbove}</p>
								<p className="card-text">
									<strong>Scored Above Target Percentage:</strong> {calculateESEPercentage(eseStats.scoredAbove, eseStats.attempted)}%
								</p>
								<p className="card-text">
									<strong>ESE Attainment Level:</strong> {eseAttainmentLevels.ESE || 'Not Calculated'}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
				<div className="mt-4">
			<h4>Enter Course Exit Form</h4>
			<input
				type="text"
				className="form-control"
				placeholder="Enter course exit values"
				value={targetValues}
				onChange={handleTargetValueChanges}
			/>
			<small className="form-text text-muted">
				This value can include integers or decimals (e.g., 75 or 75.5).
			</small>
		</div>
	
				</div>
			</div>
		</div >
	);
};

export default GenerateMapping;
