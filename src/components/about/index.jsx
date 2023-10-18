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
                  Making this the first true generator on the Internet. It uses
                  a dictiony of atim over 200 Latin words, combined this the
                  first true
                </p>
                <ul className="content-feature-list list-style">
                  <li>
                    <i className="ri-check-line"></i>Refresing to get such a
                    personal touch.
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Duis aute irure dolor in
                    reprehenderit in voluptate.
                  </li>
                  <li>
                    <i className="ri-check-line"></i>Velit esse cillum dolore eu
                    fugiat nulla pariatur.
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
