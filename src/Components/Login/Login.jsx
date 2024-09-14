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
    <div className="login-body mb-0  "style={{ width:'100vw', height:'100vh'}}>
      <div className="row login-outer g-0 h-full">
        <div className="w-full lg:w-1/2 login-gradient h-full flex  justify-center item-center px-16">
          <div className=" flex md:justify-center justify-center align-item-center my-auto ml-auto">
            <img className="full-height-image" src={loginleft} alt="Login Illustration" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center my-4 my-lg-0">
          <div className="card login-form me-auto px-7">
            <div className="md:py-4 md:px-5 md:mx-3">
              <div className="closebtn flex">
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
                <div className="w-full md:w-full">
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

                <div className="w-full">
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
                    className="loadMorebtn flex justify-content-center mb-4 w-100 text-uppercase fw-bold"
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
