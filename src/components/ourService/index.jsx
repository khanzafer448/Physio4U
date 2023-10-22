// import React from 'react'
// import "swiper/swiper-bundle.min.css";

const OurService = () => {
  return (
    <div className="service-wrap ptb-100" id="services">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div
            className="col-xxl-3 col-xl-4 col-lg-4"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="service-content">
              <div className="content-title-one">
                <span>Our Services</span>
                <h2>We Offer Various Physio Disciplines</h2>
                <p>
                  We take pride in offering a diverse range of physiotherapy
                  disciplines, providing tailored solutions to meet the unique
                  needs of our patients.
                </p>
                <a href="#" className="btn-one">
                  View All Servises
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-xl-8 col-lg-8">
            <div className="swiper service-slider-one">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="service-card-one">
                    <div className="service-img">
                      <img src="img/services/service-1.webp" alt="Image" />
                    </div>
                    <div className="service-info">
                      <h3>
                        <a href="#">Physiotherapy Treatment</a>
                      </h3>
                      <p>
                        It is a long established fact that eade will be
                        distracted by the readable
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card-one">
                    <div className="service-img">
                      <img src="img/services/service-2.webp" alt="Image" />
                    </div>
                    <div className="service-info">
                      <h3>
                        <a href="#">Spinal Decompression</a>
                      </h3>
                      <p>
                        It is a long established fact that eade will be
                        distracted by the readable
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card-one">
                    <div className="service-img">
                      <img src="img/services/service-3.webp" alt="Image" />
                    </div>
                    <div className="service-info">
                      <h3>
                        <a href="#">Acupuncture Treatment</a>
                      </h3>
                      <p>
                        It is a long established fact that eade will be
                        distracted by the readable
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card-one">
                    <div className="service-img">
                      <img src="img/services/service-4.webp" alt="Image" />
                    </div>
                    <div className="service-info">
                      <h3>
                        <a href="#">Fitness Treatment</a>
                      </h3>
                      <p>
                        It is a long established fact that eade will be
                        distracted by the readable
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card-one">
                    <div className="service-img">
                      <img src="img/services/service-5.webp" alt="Image" />
                    </div>
                    <div className="service-info">
                      <h3>
                        <a href="#">Personalized Physio Treatment</a>
                      </h3>
                      <p>
                        It is a long established fact that eade will be
                        distracted by the readable
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="service-card-one">
                    <div className="service-img">
                      <img src="img/services/service-6.webp" alt="Image" />
                    </div>
                    <div className="service-info">
                      <h3>
                        <a href="#">Neurological Therapy</a>
                      </h3>
                      <p>
                        It is a long established fact that eade will be
                        distracted by the readable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
