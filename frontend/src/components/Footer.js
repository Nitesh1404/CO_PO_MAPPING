import React from "react";
import logo from "../components/images/logo.jpg";

function Footer() {
  return (
    <footer className="bg-dark text-white py-2" style={{ fontSize: "14px" }}>
      <div className="container">
        <div className="row">
          {/* Left Section: Image and About Us */}
          <div className="col-md-6 col-12 mb-2">
            <div className="d-md-flex flex-column align-items-center">
              {/* Smaller Image */}
              <div className="mb-2">
                <img
                  src={logo}
                  alt="Footer Logo"
                  className="footer-img"
                  style={{ width: "120px", height: "auto" }}
                />
              </div>
              {/* About Us section */}
              <div>
                <h6>About Us</h6>
                <p style={{ marginBottom: "5px" }}>
                  CO-PO Mapping aligns Course Outcomes with Program Outcomes for
                  assessment and accreditation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Quick Links and Contact */}
          <div className="col-md-6 col-12">
            <div className="row">
              {/* Quick Links */}
              <div className="col-6 mb-2">
                <h6>Quick Links</h6>
                <ul className="list-unstyled" style={{ marginBottom: "5px" }}>
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
                      CO-PO
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-white">
                      Structure
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-6 mb-2">
                <h6>Contact</h6>
                <p style={{ marginBottom: "5px" }}>
                  <i className="fas fa-envelope"></i> abcd@example.com
                </p>
                <p style={{ marginBottom: "5px" }}>
                  <i className="fas fa-phone-alt"></i> +1 234 567 890
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-2" />
        <div className="text-center">
          <p style={{ marginBottom: "0" }}>
            &copy; {new Date().getFullYear()} CO-PO Mapping. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
