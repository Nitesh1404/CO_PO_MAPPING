import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import AccessMapping from './Access-mapping'; // Corrected import

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <Link className="navbar-brand text-primary fw-bold" to="/">Learning Outcomes</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark custom-font" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark custom-font" to="/generate-mapping">Generate Mapping</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark custom-font" to="/access-mapping">Access Mapping</Link> 
              {/* Ensure the route matches what's defined in App.js */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
