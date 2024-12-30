import React from "react";
import SliderComponent from "./SliderComponent";
import Info from "./Info";
import About from "./About";
import WebInfo from "./WebInfo";
import photo from "../components/images/photo.png";
import matrix from "../components/images/matrix.jpeg";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        {/* Slider */}
        <SliderComponent />

        {/* Hero Section */}
        <header className="bg-primary text-white text-center py-5 mb-5 shadow">
          <div className="container">
            <h1 className="display-4 fw-bold">Welcome to CO-PO Mapping</h1>
            <p className="lead">
              Simplifying the alignment of Course Outcomes (CO) with Program
              Outcomes (PO) for curriculum assessment and accreditation.
            </p>
            <a href="#features" className="btn btn-light btn-lg mt-3 ">
              Learn More
            </a>
          </div>
        </header>

        {/* Divider Line */}
        <hr className="my-4" />

        {/* Features Section */}
        {/* Features Section */}
        <section id="features" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-3 fw-bold">
              Features of CO-PO Mapping
            </h2>
            <p className="text-center text-muted mb-5">
              Discover the key benefits of using our CO-PO Mapping tool for
              enhanced curriculum assessment and accreditation.
            </p>
            <div className="row">
              {/* Feature 1 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <div className="icon-circle bg-primary text-white mb-3 mx-auto">
                      <i className="fas fa-cogs fa-2x"></i>
                    </div>
                    <h5 className="card-title fw-bold">Automated Mapping</h5>
                    <p className="card-text">
                      Automatically align Course Outcomes (COs) with Program
                      Outcomes (POs) using advanced algorithms, saving time and
                      ensuring accuracy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <div className="icon-circle bg-success text-white mb-3 mx-auto">
                      <i className="fas fa-chart-bar fa-2x"></i>
                    </div>
                    <h5 className="card-title fw-bold">Visual Reports</h5>
                    <p className="card-text">
                      Generate detailed visual reports, including graphs and
                      charts, for easy evaluation, analysis, and
                      decision-making.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <div className="icon-circle bg-danger text-white mb-3 mx-auto">
                      <i className="fas fa-shield-alt fa-2x"></i>
                    </div>
                    <h5 className="card-title fw-bold">Accreditation Ready</h5>
                    <p className="card-text">
                      Ensure compliance with accreditation standards by
                      providing structured and well-documented CO-PO mapping
                      data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-5 bg-secondary text-white">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">How It Works</h2>
            <div className="row align-items-center">
              <div className="col-md-6 mb-4">
                <img
                  src={photo}
                  alt="How It Works"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
              <div className="col-md-6">
                <h5 className="fw-bold">Step 1: Input Data</h5>
                <p>
                  Enter the Course Outcomes (COs) and Program Outcomes (POs).
                </p>
                <h5 className="fw-bold">Step 2: Automated Mapping</h5>
                <p>Our tool maps COs to POs based on predefined criteria.</p>
                <h5 className="fw-bold">Step 3: Generate Reports</h5>
                <p>
                  Download comprehensive reports for evaluation and
                  accreditation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Divider Line */}
        <hr className="my-4" />

        {/* Info Section */}
        <section className="my-5">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">Info Section</h2>
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

                {/* Course Outcomes (COs) */}
                <div className="row mb-5">
                  <h3 className="text-center fw-bold mb-4">
                    Program Outcomes (POs)
                  </h3>
                  {Array.from({ length: 12 }, (_, index) => (
                    <div key={index} className="col-md-4 mb-3">
                      <div className="card shadow-sm border-0 h-100">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">PO-{index + 1}</h5>
                          <p className="card-text">
                            This course outcome focuses on achieving specific
                            learning objectives, enhancing skills, and gaining
                            knowledge in specialized areas of the curriculum.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Program Outcomes (POs) */}
                <div className="row">
                  <h3 className="text-center fw-bold mb-4">
                    Program Specific Outcomes (Psos)
                  </h3>
                  {Array.from({ length: 3 }, (_, index) => (
                    <div key={index} className="col-md-6 mb-4">
                      <div className="card shadow-sm border-0 h-100">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">
                            PSOs-{index + 1}
                          </h5>
                          <p className="card-text">
                            This program outcome ensures the development of
                            professional and technical skills necessary for
                            achieving career goals and meeting industry
                            standards.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Divider Line */}
        <hr className="my-4" />

        {/* About Section */}
        <section className="my-5">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">About Us</h2>
            {/* <div className="row">
              <div className="col-md-8 mx-auto">
                <About />
              </div>
            </div> */}

            {/* About Section */}
            <section id="about" className="py-5 bg-light">
              <div className="container">
                <h2 className="text-center fw-bold mb-4">
                  About CO-PO Mapping
                </h2>
                <p className="text-center text-muted mb-5">
                  Course Outcomes:- (COs) are what the student should be able to
                  do at the end of a course. The most important aspect of a CO
                  is that it should be observable and measurable. <br></br>{" "}
                  Program outcomes:- POS are statements that describe what the
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

        {/* WebInfo Section */}
        <section className="my-5">
          <div className="container">
            <h2 className="text-center mb-4 fw-bold">Web Section</h2>
            <div className="row">
              <div className="col-md-6 mx-auto">
                <WebInfo />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
