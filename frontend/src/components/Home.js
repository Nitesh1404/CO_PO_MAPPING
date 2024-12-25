import React from 'react';
import SliderComponent from './SliderComponent';  // Correctly import SliderComponent
import Info from './Info';
import About from './About';
import Feedback from './Feedback';

const Home = () => {
  return (
    <div className="container-fluid">
      {/* Slider */}
      <SliderComponent />

      <h1 className="text-center my-4">Welcome to the Home Page</h1>

      <hr className="section-divider" />
      <div className="row mb-4">
        <div className="col">
          <About />
        </div>
      </div>
      {/* Divider Line */}
      <hr className="section-divider" />

      <div className="row mb-4">
        <div className="col">
          <Info />
        </div>
      </div>
      {/* Divider Line */}
      <hr className="section-divider" />

      <div className="row mb-4">
        <div className="col">
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Home;




