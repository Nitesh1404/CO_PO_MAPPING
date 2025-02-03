// Import React and required dependencies
import React from 'react';

const Boxes = () => {
  return (
    <div className="container py-5">
      {/* Page Heading */}
      <h2 className="text-center mb-5">Click here for accessing directly</h2>

      {/* Boxes Section */}
      <div className="row justify-content-center">
        {/* Box 1 */}
        <div className="col-md-4">
          <div className="card text-center border-primary mb-4" shadow-sm style={{ height: '200px' }}>
            <div
              className="card-body d-flex flex-column justify-content-center align-items-center"
              style={{ height: '100%' }}
            >
              <h5 className="card-title custom-font">Generate Mapping</h5>
              <p className="card-text text-center custom-font">Click here for generating mapping.</p>
              <button className="btn btn-primary d-flex flex-colunmn justify-content-center align-items-center "  to="/generatemapping">Generate</button>
            </div>
          </div>
        </div>

        {/* Box 2 */}
       
     
        {/* Box 1 */}
        <div className="col-md-4">
          <div className="card text-center border-primary mb-4" shadow-sm style={{ height: '200px' }}>
            <div
              className="card-body d-flex flex-column justify-content-center align-items-center"
              style={{ height: '100%' }}
            >
              <h5 className="card-title custom-font">Access Mapping</h5>
              <p className="card-text text-center custom-font">Click here for Access mapping.</p>
              <button className="btn btn-primary d-flex flex-colunmn justify-content-center align-items-center "  to="/generatemapping">Generate</button>
            </div>
          </div>
        </div>


     
      </div>
    </div>
  );
};

export default Boxes;
