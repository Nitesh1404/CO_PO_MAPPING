import React from 'react';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';

const Feedback = () => (
  <section className="webinfo-section py-5 text-black">
    <div className="container">
      <h2 className="mb-4">Client Feedback</h2>
      <p>Hear what our clients have to say about their experience with our web app.</p>
      <div
        id="feedbackCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    src={image4}
                    alt="Client 4"
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Michael Brown</h5>
                    <p className="card-text flex-grow-1">
                      "This tool has streamlined our workflows and improved productivity across the board!"
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    src={image5}
                    alt="Client 5"
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Sophia Davis</h5>
                    <p className="card-text flex-grow-1">
                      "The customer service was outstanding! They guided us through the setup process step by step."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    src={image6}
                    alt="Client 6"
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">David Wilson</h5>
                    <p className="card-text flex-grow-1">
                      "A perfect solution for our business needs. Highly reliable and efficient."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    src={image7}
                    alt="Client 7"
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Travis Head</h5>
                    <p className="card-text flex-grow-1">
                      "The customer service was outstanding! They guided us through the setup process step by step."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    src={image8}
                    alt="Client 8"
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Sophia Davis</h5>
                    <p className="card-text flex-grow-1">
                      "The customer service was outstanding! They guided us through the setup process step by step."
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100">
                  <img
                    src={image4}
                    alt="Client 4"
                    className="card-img-top"
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">Michael Brown</h5>
                    <p className="card-text flex-grow-1">
                      "This tool has streamlined our workflows and improved productivity across the board!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#feedbackCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#feedbackCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>
);

export default Feedback;
