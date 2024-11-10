import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navbar />
    
    <div className="container mt-3">
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Add more  */}
      </Routes>
    </div>
    
    <Footer />
  </div>
);

export default App;