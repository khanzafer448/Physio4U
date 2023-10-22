const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="footer-top">
        <img
          src="img/footer-shape-1.webp"
          alt="Image"
          className="footer-shape-one md-none"
        />
        <img
          src="img/footer-shape-2.webp"
          alt="Image"
          className="footer-shape-two md-none"
        />
        <div className="container">
          <div
            className="row pt-100 pb-75"
            style={{ justifyContent: "space-between" }}
          >
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="footer-widget">
                <a href="#" className="footer-logo">
                  <img className="logo-light" src="img/logo.png" alt="Image" />
                </a>
                <p className="comp-desc">
                  There are many variations of passages of Lorem Ipsum
                  available, but majority suffered alteration in some form, by
                  injected humour, orandomised words which dont look
                </p>
                <ul className="social-profile list-style">
                  <li>
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/_physio4u_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-instagram-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-sm-6">
              <div className="footer-widget">
                <h3 className="footer-widget-title">Quick Links</h3>
                <ul className="footer-menu list-style">
                  <li>
                    <a href="#"> About Us </a>
                  </li>
                  <li>
                    <a href="#"> Contact Us </a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#"> Terms & Conditions </a>
                  </li>
                  <li>
                    <a href="#"> Our Team </a>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="col-xxl-3 col-xl-2 col-lg-2 col-md-6 col-sm-6 ps-xl-4">
              <div className="footer-widget">
                <h3 className="footer-widget-title">Services</h3>
                <ul className="footer-menu list-style">
                  <li>
                    <a href="#">Physiotherapy</a>
                  </li>
                  <li>
                    <a href="#">Diagnostics</a>
                  </li>
                  <li>
                    <a href="#">Manual Therapy</a>
                  </li>
                  <li>
                    <a href="#">Massage Therapy</a>
                  </li>
                  <li>
                    <a href="#">Rehabilitation</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-5">
              <div className="footer-widget">
                <h3 className="footer-widget-title">Contact Info</h3>
                <ul className="contact-info list-style">
                  <li>
                    <span>
                      <i className="ri-phone-fill"></i>
                    </span>
                    <a href="tel:8960185577">(+91) 8960185577</a>
                  </li>
                  <li>
                    <span>
                      <i className="ri-mail-fill"></i>
                    </span>
                    <a href="mailto:physio4u23@gmail.com">
                      physio4u23@gmail.com
                    </a>
                  </li>
                  <li>
                    <span>
                      <i className="ri-map-pin-2-fill"></i>
                    </span>
                    <p>Phase-3 , Eden Enclave, Kursi Road, Lucknow 226021</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p
        className="copyright-text"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="ri-copyright-line"></i>
        2023 - Physio4U all right received
      </p>
    </footer>
  );
};

export default Footer;
