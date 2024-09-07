import React, { useState, useEffect } from 'react';
import '../../csss/style.css'; 
import loginlefts from '../../assets/Signupeft_1.svg';
import loginlogo from '../../assets/loginlogo.svg'
import { NavLink } from 'react-router-dom';
const SignUpPage = () => {
  // State to manage password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to toggle password visibility
  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

 
  useEffect(() => {
    
    const handleTogglePassword = () => {
      document.querySelectorAll('.toggle-password').forEach((element) => {
        element.addEventListener('click', () => {
          element.classList.toggle('fa-eye');
          element.classList.toggle('fa-eye-slash');
          const input = document.querySelector(element.getAttribute('toggle'));
          if (input) {
            input.type = input.type === 'password' ? 'text' : 'password';
          }
        });
      });

      return () => {
        document.querySelectorAll('.toggle-password').forEach((element) => {
          element.removeEventListener('click', handleTogglePassword);
        });
      };
    };

    handleTogglePassword();
  }, []);

  return (
    <div className="login-body mb-0" >
      <div className="row login-outer g-0 h-100" >
        <div className="col-lg-6 login-gradient h-100 d-flex flex-column position-relative" >
          <div className="grcar d-flex justify-content-md-end align-items-center my-auto ms-auto" style={{ height:'100vh'}}>
            <img className="me-md-5 pe-md-5 full-height-image" src={loginlefts} alt="Sign Up Illustration" />
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
                <h4 className="heading py-2">Sign up</h4>
                <div className="col-md-12">
                  <div className="form-floating mb-3 mt-3 field">
                    <input
                      type="text"
                      className="form-control f-16 rounded-3 h50"
                      id="Name"
                      placeholder="Enter Your Name*"
                      name="Your Name*"
                    />
                    <label htmlFor="Name">Name</label>
                  </div>
                </div>

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
                    <input
                      type="text"
                      className="form-control f-16 rounded-3 h50"
                      id="PhoneNumber"
                      placeholder="Enter Your Phone Number*"
                      name="Your Phone Number*"
                    />
                    <label htmlFor="PhoneNumber">Phone Number</label>
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
                      className="form-control fn-Inter f-16 rounded-3 h50"
                      id="password-field"
                      placeholder="Enter Your Password*"
                      name="Your Password*"
                    />
                    <label htmlFor="password-field">Password</label>
                  </div>
                </div>

                <div className="form-check d-flex my-3 color-6">
                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label className="form-check-label ms-2" htmlFor="defaultCheck1">
                    I accept the{' '}
                    <a className="color-6 text-decoration-underline" href="terms-of-use.html">
                      Terms of Service
                    </a>
                  </label>
                </div>

                <div className="g-recaptcha" data-sitekey="6LcU5F8pAAAAAGnT92v5YNRrcYr7ILas4P7VcYRu"></div>

                <div className="loadmore pt-2 d-block">
                <NavLink exact to="/ThankYou" 
                 className="loadMorebtn d-flex justify-content-center mb-4 w-100 text-uppercase fw-bold"
                 type="button"> Sign Up</NavLink> 
                  
                </div>

                <p className="text-center rempass mb-2 color-6">
                  Already have an account?{' '}
                  <a className="color-6 fw-bold" href="login.html">
                    Sign In
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

export default SignUpPage;
