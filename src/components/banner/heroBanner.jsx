import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero-wrap hero-one">
      <img
        src="img/hero/hero-shape-1.webp"
        alt="Image"
        className="hero-shape-one md-none"
      />
      <div className="container">
        <div className="swiper hero-slider-one">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="hero-slide-item bg-f hero-slide-one">
                <div
                  className="hero-video"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <img src="img/hero/hero-video-bg.webp" alt="Image" />
                  <a
                    className="play-now"
                    href="#quickview-modal"
                    data-bs-toggle="modal"
                  >
                    <i className="ri-play-fill"></i>
                    <span className="ripple"></span>
                  </a>
                  <p>Stay Healthy With Physical Therapy</p>
                </div>
                <div className="hero-content">
                  <div className="hero-bg-shape-one"></div>
                  <div className="hero-bg-shape-two"></div>
                  <div className="hero-bg-shape-three"></div>
                  <span
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    Physio4U Is The Best Physical Therapy Clinic
                  </span>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    Physiotherapy Clinic
                  </h1>
                  <div
                    className="hero-btn"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <Link to="/appointment" className="btn-one">
                      Book Appointment
                    </Link>
                    <div className="client-likes">
                      <ul className="list-style">
                        <li>
                          <img
                            src="img/clients/client-3.webp"
                            alt="Image"
                          />
                        </li>
                        <li>
                          <img
                            src="img/clients/client-4.webp"
                            alt="Image"
                          />
                        </li>
                        <li>
                          <img
                            src="img/clients/client-2.webp"
                            alt="Image"
                          />
                        </li>
                        <li>
                          <img
                            src="img/clients/client-1.webp"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <h6>10k+ Members</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="hero-slide-item bg-f hero-slide-two">
                <div
                  className="hero-video"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <img src="img/hero/hero-video-bg.webp" alt="Image" />
                  <a
                    className="play-now"
                    href="#quickview-modal"
                    data-bs-toggle="modal"
                  >
                    <i className="ri-play-fill"></i>
                    <span className="ripple"></span>
                  </a>
                  <p>Stay Healthy With Physical Therapy</p>
                </div>
                <div className="hero-content">
                  <div className="hero-bg-shape-one"></div>
                  <div className="hero-bg-shape-two"></div>
                  <div className="hero-bg-shape-three"></div>
                  <span
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    24/7 Service Available
                  </span>
                  <h1
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    Complete Health Treatment
                  </h1>
                  <div
                    className="hero-btn"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <a href="#" className="btn-one">
                      Our Services
                    </a>
                    <div className="client-likes">
                      <ul className="list-style">
                        <li>
                          <img
                            src="img/clients/client-3.webp"
                            alt="Image"
                          />
                        </li>
                        <li>
                          <img
                            src="img/clients/client-4.webp"
                            alt="Image"
                          />
                        </li>
                        <li>
                          <img
                            src="img/clients/client-2.webp"
                            alt="Image"
                          />
                        </li>
                        <li>
                          <img
                            src="img/clients/client-1.webp"
                            alt="Image"
                          />
                        </li>
                      </ul>
                      <h6>10k+ Members</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
