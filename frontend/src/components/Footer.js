import React from "react";
import logo from "../components/images/logo.jpg";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Left Section: Image and About Us */}
          <div className="col-md-6 col-12 mb-4">
            <div className="d-md-flex flex-column align-items-center">
              {/* Image at the top for large screens */}
              <div className="mb-3">
                <img
                  src={logo}
                  alt="Footer Logo"
                  className="footer-img"
                  style={{ width: "175px", height: "auto" }}
                />
              </div>
              {/* About Us section */}
              <div>
                <h5>About Us</h5>
                <p>
                  CO-PO Mapping aligns Course Outcomes with Program Outcomes for
                  streamlined assessment and accreditation.<br></br>
                  college student marks mapping based on course outcomes and program outcomes application..
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Quick Links and Contact */}
          <div className="col-md-6 col-12">
            <div className="row">
              {/* Quick Links */}
              <div className="col-6 mb-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#home" className="text-white">
                      Education
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-white">
                      Mapping
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-white">
                      CO-PO{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-white">
                      structure
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-6 mb-4">
                <h5>Contact</h5>
                <p>
                  <i className="fas fa-envelope"></i> abcdl@example.com
                </p>
                <p>
                  <i className="fas fa-phone-alt"></i> +1 234 567 890
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} CO-PO Mapping. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
