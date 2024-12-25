import React from 'react';

const Feedback = () => (
  <section className="webinfo-section py-5 text-black">
    <div className="container">
      <h2 className="mb-4">Client Feedback</h2>
      <p>
        Hear what our clients have to say about their experience with our web app.
      </p>
      <div className="row">
  {/* Feedback 1 */}
  <div className="col-md-4 mb-4">
    <div className="card">
      <img 
        src="https://via.placeholder.com/150" 
        alt="Client 1" 
        className="card-img-top" 
      />
      <div className="card-body">
        <h5 className="card-title">John Doe</h5>
        <p className="card-text">
          "This web app has completely transformed how we manage our projects. Highly recommended!"
        </p>
      </div>
    </div>
  </div>

        {/* Feedback 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Client 2" 
              className="card-img-top" 
            />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">
                "Amazing experience! The user interface is intuitive and the support team is excellent."
              </p>
            </div>
          </div>
        </div>

        {/* Feedback 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Client 3" 
              className="card-img-top" 
            />
            <div className="card-body">
              <h5 className="card-title">Alice Johnson</h5>
              <p className="card-text">
                "I love how customizable and flexible this app is. It meets all my needs perfectly."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Feedback;


