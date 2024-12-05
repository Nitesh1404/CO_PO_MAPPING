import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Info from './components/Info';
import WebInfo from './components/WebInfo';

const App = () => (
  <div className="d-flex flex-column min-vh-100">
    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <div className="container mt-3 flex-grow-1 custom-scroll">
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Route for About Page */}
        <Route path="/about" element={<About />} />

        {/* Route for Info Page */}
        <Route path="/info" element={<Info />} />

        {/* Route for WebInfo Page */}
        <Route path="/webinfo" element={<WebInfo />} />
      </Routes>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default App;

