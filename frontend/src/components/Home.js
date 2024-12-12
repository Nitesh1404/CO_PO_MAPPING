import React from 'react';
import SliderComponent from './SliderComponent';  // Correctly import SliderComponent
import Info from './Info';
import About from './About';
import WebInfo from './WebInfo';

const Home = () => {
  return (
    <div className="container-fluid">
      {/* Slider */}
      <SliderComponent />

      <h1 className="text-center my-4">Welcome to the Home Page</h1>

      {/* Info Component */}
      <div className="row mb-4">
        <div className="col">
          <Info />
        </div>
      </div>
      {/* Divider Line */}
      <hr className="section-divider" />

      {/* About Component */}
      <div className="row mb-4">
        <div className="col">
          <About />
        </div>
      </div>
      {/* Divider Line */}
      <hr className="section-divider" />

      {/* WebInfo Component */}
      <div className="row mb-4">
        <div className="col">
          <WebInfo />
        </div>
      </div>
    </div>
  );
};

export default Home;




