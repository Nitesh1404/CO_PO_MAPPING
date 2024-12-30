import React from "react";
//import './Outcomes.css'; /// Import the custom CSS file

const Outcomes = () => {
  const programOutcomes = [
    "Apply engineering knowledge to solve complex problems.",
    "Design systems and components meeting desired needs.",
    "Conduct research and apply modern tools effectively.",
    "Understand societal and environmental impacts of engineering.",
    "Demonstrate ethical principles in professional practices.",
    "Work effectively in diverse teams.",
    "Communicate effectively with stakeholders.",
    "Engage in lifelong learning to adapt to technological changes.",
    "Manage projects with knowledge of engineering and management principles.",
    "Use critical thinking for data analysis and decision-making.",
    "Apply knowledge to innovate sustainable solutions.",
    "Develop leadership skills for multidisciplinary collaborations."
  ];

  const programSpecificOutcomes = [
    "Develop software solutions that align with current industry standards.",
    "Apply knowledge of hardware systems to design efficient solutions.",
    "Pursue advanced studies or certifications in specialized domains."
  ];

  return (
    <section className="my-5" shadow-lg>
      <div className="container">
        {/* Info Section */}
        <section id="info" className="py-5">
          <div className="container">
            <h2 className="text-center mb-3 fw-bold">
              Course Outcomes (COs) and Program Outcomes (POs)
            </h2>
            <p className="text-center text-muted mb-5">
              Explore the detailed mapping between the Course Outcomes (COs)
              and Program Outcomes (POs) to ensure seamless curriculum
              alignment.
            </p>

            {/* Program Outcomes (POs) */}
            <div className="row mb-5">
              <h3 className="text-center fw-bold mb-4">Program Outcomes (POs)</h3>
              {programOutcomes.map((outcome, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card shadow border-0 h-100 hover-card">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">PO-{index + 1}</h5>
                      <p className="card-text">{outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Program Specific Outcomes (PSOs) */}
            <div className="row">
              <h3 className="text-center fw-bold mb-4">Program Specific Outcomes (PSOs)</h3>
              {programSpecificOutcomes.map((outcome, index) => (
                <div key={index} className="col-md-6 mb-4">
                  <div className="card shadow border-0 h-100 hover-card">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">PSO-{index + 1}</h5>
                      <p className="card-text">{outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Outcomes;
