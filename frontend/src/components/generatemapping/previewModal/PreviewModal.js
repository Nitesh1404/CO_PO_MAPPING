import React from "react";

const PreviewModal = ({ hidePreviewModal, img }) => {
	return (
		<div
			className="modal show d-block"
			tabIndex="-1"
			role="dialog"
			style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Upload excel format</h5>
						<button
							type="button"
							className="btn-close"
							onClick={hidePreviewModal}
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<p>
							<img
								src={img}
								alt="Excel Format Preview"
								style={{
									maxWidth: "100%", // Ensure the image fits within the modal's width
									height: "auto", // Maintain aspect ratio
									border: "1px solid #ddd", // Optional border for styling
									borderRadius: "5px", // Optional rounded corners
									boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional shadow for better visibility
								}}
							/>
						</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary animation"
							onClick={hidePreviewModal}
						>
							Close
						</button>
						<button type="button" className="btn btn-success" onClick={hidePreviewModal}>
							Understood
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PreviewModal;
