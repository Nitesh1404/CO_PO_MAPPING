import React, { useState, useEffect } from 'react';

const About = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Welcome to Learning Outcomes"];

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timer = setTimeout(() => {
        setCurrentWordIndex(currentWordIndex + 1);
      }, 1500); // Adjust timing for each word
      return () => clearTimeout(timer);
    }
  }, [currentWordIndex, words.length]);

  return (
    <header className="bg-primary text-white text-center py-5 mb-5 shadow-lg">
      <div className="container">
        <h1 className="display-4 fw-bold">
          {words.slice(0, currentWordIndex).join(" ")}
        </h1>
        <p className="lead">
          Simplifying the alignment of Course Outcomes (CO) with Program Outcomes (PO)
          for curriculum assessment and accreditation.
        </p>
        <div className="d-flex justify-content-center">
          <a
            href="#features"
            className="btn btn-light btn-lg mt-3 d-flex align-items-center justify-content-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
};

export default About;
