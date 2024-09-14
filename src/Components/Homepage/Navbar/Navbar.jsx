import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import fixed from '../../../assets/fixedlogo.svg';
import '../../../csss/bootstrap.min.css'
import '../../../csss/style.css'
import '../../../csss/sScrollBar.css'
import './Navbar.css'

const Navbar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false); // Close sidebar on route change
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=''>
      {/* Sidebar */}
      <div className= {`sidebar ${isSidebarOpen ? 'open' : ''}`} >
        <div className="sidebar-header">
          <NavLink to="/">
            <img className="w-full logo" src={logo} alt="Logo" />
          </NavLink>
          <button className="closebtn" onClick={toggleSidebar}>&times;</button>
        </div>
        <ul className= "sidebar-menu">
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/AboutUs" className="nav-link" activeClassName="active">About Us</NavLink>
          </li>
          <li>
            <NavLink exact to="/Pricing" className="nav-link" activeClassName="active">Pricing</NavLink>
          </li>
          <li>
            <NavLink exact to="/Blog" className="nav-link" activeClassName="active">Blog</NavLink>
          </li>
          <li>
            <NavLink exact to="/Contactus" className="nav-link" activeClassName="active">Contact Us</NavLink>
          </li>
          <li>
            <NavLink exact to="/Login" className="ButtonLog" activeClassName="active">Log in</NavLink>
          </li>
          <li>
            <NavLink exact to="/SignUp" className="btn btn_2" activeClassName="active">Sign up</NavLink>
          </li>
        </ul>
      </div>
    
      <div className="header intro closableBannerVisible " id="myHeader">
        <div>
          <div className="container nav-px pr-32 pl-32">
            <div className="mobile" id="linkid">
              <div id="mySidenav" className={`sidenav d-lg-flex ${isSidebarOpen ? 'open' : ''}`}>
                <ul className="list-inline align-self-center accordion centerlogo d-lg-block d-none mb-0">
                  <li className="w-150 ps-0">
                    <div>
                      <NavLink exact to="/">
                        <img className="w-100 logotop" src={logo} alt="Logo" />
                        <img className="w-100 logofixed" src={fixed} alt="Fixed Logo" />
                      </NavLink>
                    </div>
                  </li>
                </ul>

                <ul className="list-inline align-self-center accordion text-left mb-0">
                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/AboutUs" className="nav-link" activeClassName="active">About Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/Pricing" className="nav-link" activeClassName="active">Pricing</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/Blog" className="nav-link" activeClassName="active">Blog</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/Contactus" className="nav-link" activeClassName="active">Contact Us</NavLink>
                  </li>
                  <li>
                    <div className="mob-nav-booknow d-flex d-sm-none d-lg-flex ms-md-5 align-self-center">
                      <div className="me-1">
                        <NavLink exact to="/Login" className="btn btn_w" activeClassName="active">Log in</NavLink>
                      </div>
                      <div className="ms-2">
                        <NavLink exact to="/SignUp" className="btn btn_2" activeClassName="active">Sign up</NavLink>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Mobile Header */}
              <div className="row align-items-center">
                <div className="col-md-12 col-12 d-flex align-self-center justify-content-between">
                  <div className="w-250 mobilelogo d-block d-lg-none">
                    <div>
                      <NavLink to="/">
                        <img className="w-100 logo logotop" src={logo} alt="Logo" />
                        <img className="w-100 logo logofixed" src={fixed} alt="Fixed Logo" />
                      </NavLink>
                    </div>
                  </div>
                  <div className="mob-nav-booknow d-block d-lg-none">
                    <NavLink exact to="/SignUp" className="btn btn_2" activeClassName="active">Sign up</NavLink>
                  </div>
                  <div className="d-flex align-items-center heambermenu d-lg-none">
                    <div id="nav-icon4" className={`close ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;