import React from "react";
import {FaTwitter,FaGithub ,FaTelegram,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-3">
              <h5>COMPANY</h5>
              <ul className="list-unstyled">
                <li className="blue-color">Bug Bounty</li>
                <li className="blue-color">Jobs / Career</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5>DEVELOPER</h5>
              <ul className="list-unstyled">
                <li className="blue-color">Octa Farm Documentation</li>
                <li className="blue-color">Explore Github</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5>COMMUNITY</h5>
              <ul className="list-unstyled">
                <li className="blue-color">Telegram</li>
                <li className="blue-color">Blog</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5 >LEGAL</h5>
              <ul className="list-unstyled">
                <li className="blue-color">Privacy & Terms</li>
              
              </ul>
            </div>
            </div>
           
            <div className="row">
            <div className="col-lg-12">
              <hr className="footer-line" />
            </div>
            </div>
            <div className="row pb-3">
              <div className="col">
                <img src="https://octafarm.fi/_next/static/image/src/assets/images/logo.ff661cf0d78098e5bb309437cceeb044.png" 
                 className="footer-img"
                alt="no" />
              </div>
            <div className="col">
             <p className="text-center">Copyright © 2022 PorkSwap.finance</p>
            </div>
            <div className="col">
            <div className="text-right  icons">
                
                <span className="me-2"><FaGithub size={30} color="  #6fffe9c7"/>  </span>
                <span className="me-2"> <FaTwitter size={30} color="  #6fffe9c7"/> </span>
                <span className="me-2">  <FaTelegram size={30} color="  #6fffe9c7"/> </span>
                <span className="me-2">  <FaInstagram size={30} color="  #6fffe9c7"/> </span>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
