// import React from 'react'
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-wrap">
      <img
        src="img/br-shape-1.webp"
        alt="Image"
        className="br-shape-one moveHorizontal"
      />
      <img
        src="img/br-shape-2.webp"
        alt="Image"
        className="br-shape-two animationFramesTwo"
      />
      <div className="breadcrumb-content">
        <h2>Book Appointmnet</h2>
        <ul className="breadcrumb-menu list-style">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Appointmnet</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;
