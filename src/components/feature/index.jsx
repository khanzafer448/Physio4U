// import React from 'react'

const Feature = () => {
  return (
    <div className="feature-card-wrap">
      <div className="container pt-100 pb-75">
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="feature-card">
              <span className="feature-counter">01</span>
              <span className="feature-icon">
                <i className="flaticon-team"></i>
              </span>
              <h3>Physiotherapy</h3>
              <p>
                Physiotherapy is a clinical health profession that aims to
                rehabilitate people following injury and improve movement
                disorders.
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div className="feature-card">
              <span className="feature-counter">02</span>
              <span className="feature-icon">
                <i className="flaticon-24-hours"></i>
              </span>
              <h3>Rehabilitation</h3>
              <p>
                A physician having completed training in this field is referred
                to as a physiatrist. Physiatrists specialize in restoring
                optimal function to people with injuries to the muscles, bones.
              </p>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="700"
          >
            <div className="feature-card">
              <span className="feature-counter">03</span>
              <span className="feature-icon">
                <i className="flaticon-conversation"></i>
              </span>
              <h3>Manual Therapy</h3>
              <p>
                Manual therapy, or manipulative therapy, is a physical treatment
                primarily used by massage therapists. manual therapy is defined
                as a clinical approach utilizing skilled techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
