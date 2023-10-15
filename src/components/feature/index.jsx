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
              <h3>Expert Therapists</h3>
              <p>
                It uses a dictionary of over Latin words, combined with a
                handful of model sentence structures, to generate which look
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
              <h3>Emergency Service</h3>
              <p>
                It uses a dictionary of over Latin words, combined with a
                handful of model sentence structures, to generate which look
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
              <h3>Free Consultation</h3>
              <p>
                It uses a dictionary of over Latin words, combined with a
                handful of model sentence structures, to generate which look
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature