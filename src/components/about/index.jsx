// import React from 'react'

const About = () => {
  return (
    <div className="about-wrap-one" id="about">
      <img
        src="img/about/about-shape-1.webp"
        alt="Image"
        className="about-shape-one moveHorizontal md-none"
      />
      <img
        src="img/about/about-shape-2.webp"
        alt="Image"
        className="about-shape-two md-none"
      />
      <img
        src="img/about/about-thumb-1.webp"
        alt="Image"
        className="about-thumb-img bounce md-none"
      />
      <div className="container">
        <div className="row align-items-center gx-5">
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="about-img">
              <img src="img/about/about-img-1.webp" alt="Image" />
            </div>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="about-content">
              <div className="content-title-one">
                <span>About Clinic</span>
                <h2>We’re Offering Whole Range of Treatments For You</h2>
                <p>
                  Physio4u is a modern well-equipped physiotherapy and
                  health-care service provider in Lucknow with online and ofﬂine
                  concept of health-care services. It’s an initiative by Physio
                  Shaikh Abu Waqas and Physio Shikha singh . Under his
                  leadership he has conducted many camps in healthcare.
                </p>
                <ul className="content-feature-list list-style">
                  <li>
                    <i className="ri-check-line"></i>A hands-on approach to help
                    achieve your goals.
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Combining passion and
                    knowledge to heal.
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Helping you keep active and
                    injury free.
                  </li>
                </ul>
                <a href="#" className="btn-one">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
