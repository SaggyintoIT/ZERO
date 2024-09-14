import React from 'react'
import loginlogo from '../../assets/awesome-img.png'
import left from '../../assets/loginleft_1.svg'
import { NavLink } from 'react-router-dom'

const ThankYou = () => {
  return (
    <>
    <div className="row login-outer g-0 h-full">
  <div className="col-lg-6 login-gradient h-full flex flex-col relative">
    <div className="grcar flex justify-content-md-end align-center my-auto ms-auto" style={{height:'100vh'}}>
      <img className="me-md-5 pe-md-5" src={left} alt="" />
    </div>
  </div>
  <div className="col-lg-6 d-flex align-items-center justify-content-center my-4 my-lg-0">
    <div className="card login-form me-auto">
      <div className="py-md-4 px-md-5 mx-md-3">
        <div className="text-center py-4">
          <img className="loginlogo" src={loginlogo} alt="" />
          <h2 className="color-6">Thank You!</h2>
          <p className="color-6">
            Thank you for contacting us. We are reviewing your request and we’ll get in touch as soon as possible. Meanwhile, check our blog for further information.
          </p>
        </div>

        <div className="loadmore pt-2 d-block">
        <NavLink exact to="/" className="loadMorebtn d-flex justify-content-center mb-4 w-100 text-uppercase fw-bold"  >Go to Home</NavLink> 
         
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ThankYou