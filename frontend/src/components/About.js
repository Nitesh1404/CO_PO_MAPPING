import React from 'react';

const About = () => {
  return (
    <header className="bg-primary text-white text-center py-5 mb-5 shadow-lg">
      <div className="container">
        <h1 className="display-4 fw-bold">
          Welcome to CO-PO Mapping
        </h1>
        <p className="lead">
          Simplifying the alignment of Course Outcomes (CO) with Program Outcomes (PO)
          for curriculum assessment and accreditation.
        </p>
        <div className="d-flex justify-content-center">
          <a href="#features" className="btn btn-light btn-lg mt-3 d-flex align-items-center justify-content-center">
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
};

export default About;
