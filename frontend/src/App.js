import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Info from './components/Info';
import GenerateMapping from './components/generatemapping/GenerateMapping';
//mport CoPoList from './components/co-po-output-data/CoPoList';
import AccessMapping from "./components/Access-mapping";
import CoPoList from './components/co-po-output-data/CoPoList';

const App = () => (
  <div className="d-flex flex-column min-vh-100">
    <Navbar />

    <div className="container mt-3 flex-grow-1 custom-scroll">
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<Home />} />

        {/* Route for About Page */}
        <Route path="/about" element={<About />} />

        {/* Route for generate-mapping Page */}
        <Route path="/generate-attainment" element={<GenerateMapping />} />

        {/* Route for Info Page */}
        <Route path="/info" element={<Info />} />

        {/* access mapping  */}
        <Route path="/Access-mapping" element={<CoPoList />} />

        <Route path="/generate-mapping" element={<AccessMapping />} />

      </Routes>
    </div>

    <Footer />
  </div>
);

export default App;
