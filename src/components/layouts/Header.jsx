import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="https://octafarm.fi/_next/static/image/src/assets/images/logo.ff661cf0d78098e5bb309437cceeb044.png" 
            className="logo" alt="no" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link  ms-5">
                  Overview
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link ms-5">
                Traction
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link  ms-5">
                Tokenomics
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link  ms-5">
                  Roadmap
                </Link>
              </li>
              <li className="nav-item">
                <Link to="" className="nav-link  ms-5">
                  FAQs
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
