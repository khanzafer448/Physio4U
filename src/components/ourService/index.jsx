// import React from 'react'
// import "swiper/swiper-bundle.min.css";
import PropTypes from "prop-types";

const data = [
  {
    title: "Chronic back Pain",
    img: "/img/whyUs/muscle-pain.png",
  },
  {
    title: "Neck Pain",
    img: "/img/whyUs/neckPain.png",
  },
  {
    title: "Post-accident Physiotherapy",
    img: "/img/whyUs/rehabilitation.png",
  },
  {
    title: "Frozen shoulder",
    img: "/img/whyUs/chiropractic.png",
  },
  {
    title: "Paraplegia",
    img: "/img/whyUs/massage.png",
  },
  {
    title: "Quadriplegia",
    img: "/img/whyUs/back.png",
  },
  {
    title: "Back pain by Slipped Disc",
    img: "/img/whyUs/backPain.png",
  },
  {
    title: "Paralysis",
    img: "/img/whyUs/exercise-ball.png",
  },
];

const OurService = () => {
  return (
    <div className="service-wrap ptb-100" id="services">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="section-title-one text-center mb-30">
              <span>Our Services</span>
              <h2>We Offer Various Physio Disciplines</h2>
            </div>
          </div>
          <div className="why-us-wrapper">
            {data.map((item, i) => (
              <IndividualCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;

const IndividualCard = ({ item }) => {
  return (
    <div
      className="why-us-content wh-card-one"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="300"
    >
      <img src={item?.img} alt={item?.title} />
      <p>{item?.title}</p>
    </div>
  );
};

IndividualCard.defaultProps = {
  item: {
    title: "added soon",
    img: "/img/logo.png",
  },
};

IndividualCard.propTypes = {
  item: PropTypes.object,
};
