import React from "react";
import SliderComponent from "./SliderComponent";
import Features from "./Features";
import About from "./About";
//import WebInfo from "./WebInfo";
import photo from "../components/images/photo.png";
import matrix from "../components/images/matrix.jpeg";
import Feedback from "./Feedback";
import Outcomes from "./Outcomes";
import Boxes from "./Boxes";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        {/* Slider */}
        <SliderComponent />

        <About />

        <Features />
        {/* Divider */}
        <hr className="my-4" />
        
        <Boxes />
        {/* Divider Line */}
        <hr className="my-4" />

        {/* Image Information Here  */}
        <section className="py-5 bg-secondary text-white shadow-lg">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">How It Works</h2>
            <div className="row align-items-start">
              <div className="col-md-6 mb-4">
                <img
                  src={photo}
                  alt="Process Illustration"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex align-items-start mb-3">
                  <div className="step-number bg-white text-secondary fw-bold me-3 p-2 rounded-circle">
                    1
                  </div>
                  <div>
                    <h5 className="fw-bold">Input Data</h5>
                    <p>Enter the Course Outcomes (COs) and Program Outcomes (POs).</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <div className="step-number bg-white text-secondary fw-bold me-3 p-2 rounded-circle">
                    2
                  </div>
                  <div>
                    <h5 className="fw-bold">Automated Mapping</h5>
                    <p>Our tool maps COs to POs based on predefined criteria.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="step-number bg-white text-secondary fw-bold me-3 p-2 rounded-circle">
                    3
                  </div>
                  <div>
                    <h5 className="fw-bold">Generate Reports</h5>
                    <p>Download comprehensive reports for evaluation and accreditation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Info End Here */}
        <hr className="my-4" />

        <Outcomes />

        {/* Divider CO INfo |^   Line */}
        <hr className="my-4" />

        {/* About Section */}
        <section className="my-5">
          <div className="container">
            <section id="about" className="py-5 bg-light shadow-lg">
              <div className="container">
                <h2 className="text-center fw-bold mb-4">
                  About CO-PO Mapping
                </h2>
                <p className="text-center text-muted mb-5">
                  Course Outcomes:- (COs) are what the student should be able to
                  do at the end of a course. The most important aspect of a CO
                  is that it should be observable and measurable. <br /> Program outcomes:- POS are statements that describe what the
                  knowledge, skills and attitudes students should have at the
                  time of graduation from an engineering program. That means
                  just at the end of 4 years these represent what is the
                  knowledge, skills and attitudes they should have. And at
                  present POs are 12 in number and they are identified by NBA
                  and are applicable to all engineering programs.
                </p>

                <div className="row">
                  {/* Introduction */}
                  <div className="col-lg-4 mb-4">
                    <div className="card shadow-sm border-0 h-100">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          What is CO-PO Mapping?
                        </h5>
                        <p className="card-text">
                          The "COs-POs-Mapping," is a sophisticated grading
                          system designed to empower educators in evaluating and
                          enhancing student performance. This comprehensive
                          software streamlines the grading process, providing
                          teachers with a user-friendly platform to assess,
                          analyze, and track student achievements across various
                          academic dimensions.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Purpose */}
                  <div className="col-lg-4 mb-4">
                    <div className="card shadow-sm border-0 h-100">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">
                          Why is it Important?
                        </h5>
                        <p className="card-text">
                          It ensures curriculum coherence, enhances student
                          learning outcomes, and simplifies the accreditation
                          process by providing structured evidence of program
                          effectiveness.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="col-lg-4 mb-4">
                    <div className="card shadow-sm border-0 h-100">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">Key Benefits</h5>
                        <ul className="list-unstyled">
                          <li>✔ Data-driven insights for improvement</li>
                          <li>✔ Simplified accreditation process</li>
                          <li>✔ Enhanced curriculum design</li>
                          <li>✔ Better student assessment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Divider */}
                <div className="text-center mt-5">
                  <img
                    src={matrix}
                    alt="CO-PO Mapping Diagram"
                    className="img-fluid rounded shadow"
                  />
                  <p className="mt-3 text-muted">
                    Example of a CO-PO Mapping Matrix used for accreditation and
                    curriculum assessment.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Divider Line */}
        <hr className="my-4" />

        <Feedback />
      </div>
    </>
  );
};

export default Home;
