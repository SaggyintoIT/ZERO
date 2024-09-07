import React from 'react';
import logo from '../../../assets/logo.svg'
import fb from '../../../assets/facebook.svg'
import x from '../../../assets/xicon.svg'
import linkdn from '../../../assets/linkedin.svg'
import Youtube from '../../../assets/youtube.svg'
import insta from '../../../assets/instagram.svg'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="">
      <div className="container-xl">
        <div className="row align-items-center justify-content-between text-white py-4">
          <div className="col-lg">
            <div className="footer-logo">
              <a href="index.html">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>
          <div className="col-lg">
            <div className="footer-icon text-end">
              <ul className="d-flex ps-0 mt-4 justify-content-md-end justify-content-center">
                <li>
                  <a href="javascript:void(0);" title="Facebook">
                    <img src={fb} alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" title="Instagram">
                    <img src={insta} alt="Instagram" width="16" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" title="Linkedin">
                    <img src={linkdn} alt="LinkedIn" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0);" title="Youtube">
                    <img src={Youtube} alt="YouTube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <div className="footer-bottum-box px-xl-0 px-md-5 px-3">
          <div className="row align-items-center justify-content-between lightcrem">
            <div className="col-lg">
              <div className="copyright">
                © 2024 - ZeroGateway Payment Solutions | All rights reserved
              </div>
            </div>
            <div className="col-lg d-md-block d-none">
              <div className="footer-links">
                <ul className="d-flex p-0 mb-0 justify-content-end">
                  <li>
                  <NavLink exact to="/Privacy"  >Privacy</NavLink> 
                  </li>
                  <li>
                  <NavLink exact to="/Terms"  >Terms of Use</NavLink> 
                  </li>
                  <li>
                  <NavLink exact to="/Refund"  >Refund Policy</NavLink> 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
