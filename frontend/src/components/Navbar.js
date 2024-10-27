// src/components/Navbar.js

import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>Generate CO Po</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
