import React from 'react';
import ReactSlick from 'react-slick';  // Renamed to avoid conflict with custom component
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

const CustomSlider = () => {  // Renamed custom component to CustomSlider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mb-4">
      <ReactSlick {...sliderSettings}>  {/* Use renamed import */}
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={img1}
            alt="Slide 1"
            className="img-fluid"
            style={{ maxHeight: '500px', width: '80%' }}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={img2}
            alt="Slide 2"
            className="img-fluid"
            style={{ maxHeight: '500px', width: '80%' }}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={img3}
            alt="Slide 3"
            className="img-fluid"
            style={{ maxHeight: '500px', width: '80%' }}
          />
        </div>
      </ReactSlick>
    </div>
  );
};

export default CustomSlider;



