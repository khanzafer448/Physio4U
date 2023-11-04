import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div className="header navbar-area sticky">
      <Navbar expand="lg">
        <div className="container">
          <Link to="/">
            <img src="img/logo.png" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ gap: "16px", marginLeft: "20px" }}
              navbarScroll
            >
              <Link className="nav-link" to="/">Home</Link>
              <a className="nav-link" href="/#about">About Us</a>
              <a className="nav-link" href="/#services">Services</a>
              <a className="nav-link" href="/#team">Our Teams</a>
            </Nav>
            <Link className="btn-two" to="/appointment">Book Appointment</Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
