import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar-area header-one" id="navbar">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
              <img
                className="logo-light"
                src="img/logo.png"
                alt="logo"
              />
            </Link>
            <a
              className="navbar-toggler"
              data-bs-toggle="offcanvas"
              href="#navbarOffcanvas"
              role="button"
              aria-controls="navbarOffcanvas"
            >
              <span className="burger-menu">
                <span className="top-bar"></span>
                <span className="middle-bar"></span>
                <span className="bottom-bar"></span>
              </span>
            </a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="dropdown-toggle nav-link active"
                  >
                    Home
                  </Link>
                </li>
                
                <li className="nav-item">
                  <a
                    href="javascript:void(0)"
                    className="dropdown-toggle nav-link"
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link"
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className="dropdown-toggle nav-link"
                  >
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    {" "}
                    Contact{" "}
                  </a>
                </li>
              </ul>
              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <Link to="/appointment" className="btn-two">
                    Book Appointment
                  </Link>
                </div>
                <div className="option-item">
                  <a
                    className="sidebar-toggler"
                    data-bs-toggle="offcanvas"
                    href="#navbarOffcanvas"
                    role="button"
                    aria-controls="navbarOffcanvas"
                  >
                    <img src="img/icons/sidebar-menu.svg" alt="Image" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
