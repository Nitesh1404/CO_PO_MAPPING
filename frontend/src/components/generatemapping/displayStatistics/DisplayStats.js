import React from 'react';

const DisplayStats = ({
	attemptedCounts,
	scoredAboveTarget,
	attainmentLevels,
	calculatePercentage,
	handleAttainmentLevelChange,
	title,
	columns,
}) => {
	return (
		<div>
			<h4>{title} CO Statistics</h4>
			<div className="row">
				{columns.map((co) => (
					<div className="col-md-4" key={co}>
						<div className="card mb-4  rounded" style={{ boxShadow: '1px 1px 8px #84f4d3c2' }}>
							<div className="card-body">
								<h5 className="card-title">{co}</h5>
								<p className="card-text">
									<strong>Students Attempted:</strong> {attemptedCounts[co]}
								</p>
								<p className="card-text">
									<strong>Students Scored Above Target:</strong> {scoredAboveTarget[co]}
								</p>
								<p className="card-text">
									<strong>Percentage of Students Above Target:</strong> {calculatePercentage(co)}%
								</p>
								<div className="form-group">
									<p className='card-text'><strong>Attainment Level: </strong> {attainmentLevels[co]}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div >
	);
};

export default DisplayStats;
