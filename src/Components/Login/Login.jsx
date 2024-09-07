import React, { useState } from 'react';
import '../../csss/style.css'; // Adjust the path to your CSS file
import loginleft from '../../assets/loginleft_1.svg';
import loginlogo from '../../assets/loginlogo.svg'
import { NavLink } from 'react-router-dom';
const LoginPage = () => {
  // State to manage password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-body mb-0 "style={{ width:'100vw', height:'100vh'}}>
      <div className="row login-outer g-0 h-100">
        <div className="col-lg-6 login-gradient h-100 d-flex flex-column position-relative">
          <div className="grcar d-flex justify-content-md-end align-items-center my-auto ms-auto">
            <img className="full-height-image" src={loginleft} alt="Login Illustration" />
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center my-4 my-lg-0">
          <div className="card login-form me-auto">
            <div className="py-md-4 px-md-5 mx-md-3">
              <div className="closebtn d-flex">
              <NavLink exact to="/"  className="m-auto color-6">
     
                  <i className="fas fa-times"></i>
                </NavLink>
              </div>
              <div className="text-center py-4">
                <a href="index.html">
                  <img className="loginlogo" src={loginlogo} alt="Login Logo" />
                </a>
              </div>
              <form className="py-4">
                <h4 className="heading py-2">Sign in</h4>
                <div className="col-md-12">
                  <div className="form-floating mb-3 mt-3 field">
                    <input
                      type="text"
                      className="form-control f-16 rounded-3 h50"
                      id="Email"
                      placeholder="Enter Your Email*"
                      name="Your Email*"
                    />
                    <label htmlFor="Email">Email</label>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-floating mb-3 mt-3 field">
                    <span
                      onClick={togglePassword}
                      className={`fa fa-fw ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'} field-icon toggle-password`}
                      toggle="#password-field"
                    ></span>
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      value="123456"
                      className="form-control fn-Inter f-16 rounded-3 h50"
                      id="password-field"
                      placeholder="Enter Your Password*"
                    />
                    <label htmlFor="password-field">Password</label>
                  </div>
                </div>

                <p className="text-end">
                  <a className="text-forypass logincolor" href="forgot-password.html">
                    Forgot Password?
                  </a>
                </p>
                <div className="loadmore pt-2 d-block">
                  <a
                    href="#"
                    className="loadMorebtn d-flex justify-content-center mb-4 w-100 text-uppercase fw-bold"
                    type="button"
                  >
                    Sign in
                  </a>
                </div>
                <p className="text-center rempass mb-2 color-6">
                  Don’t have an account?{' '}
                  <a className="color-6 fw-bold" href="sign-up.html">
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
