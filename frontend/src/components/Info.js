import React from 'react';

const Info = () => (
  <section className="info-section py-5 text-black">
    <div className="container">
      <h2 className="mb-4">Info Section</h2>
      <p>
        This is the Info component where you can display key details about your site or service.
      </p>

      <div className="row">
        {/* First Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                click here for Generate Mapping
              </p>
              <button className="btn btn-primary">Generate Mapping</button>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"> </h5>
              <p className="card-text">
                Click here for Access Mapping
              </p>
              <button className="btn btn-primary">Access Mapping</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Info;

