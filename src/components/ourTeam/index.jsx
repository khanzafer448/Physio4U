// import React from 'react'

const OurTeam = () => {
  return (
    <div className="team-wrap" id="team">
      <img
        src="img/team/team-shape-3.webp"
        alt="Image"
        className="team-shape-one md-none"
      />
      <img
        src="img/team/team-shape-4.webp"
        alt="Image"
        className="team-shape-two md-none"
      />
      <div className="container pt-100 pb-75">
        <div className="row">
          <div
            className="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-8 offset-lg-3"
          >
            <div className="section-title-one text-center mb-30">
              <span>Our Team</span>
              <h2>Physiotherapy Services From Professionals Therapists</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div className="team-card-one">
              <div className="team-img">
                <img src="img/team/team-1.webp" alt="Image" />
              </div>
              <h3>Dr. Shaikh Abu Waqas</h3>
              <span>Founder</span>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div className="team-card-one">
              <div className="team-img">
                <img src="img/team/team-2.webp" alt="Image" />
              </div>
              <h3>Dr. Shikha Singh</h3>
              <span>Director</span>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="800"
          >
            <div className="team-card-one">
              <div className="team-img">
                <img src="img/team/team-3.webp" alt="Image" />
              </div>
              <h3>Linwood Crane</h3>
              <span>Chief Physician</span>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="1100"
          >
            <div className="team-card-one">
              <div className="team-img">
                <img src="img/team/team-4.webp" alt="Image" />
              </div>
              <h3>Keven Freeman</h3>
              <span>Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam