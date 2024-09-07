import React from 'react';
import Slider from 'react-slick';
import logo1 from '../../../assets/logo_1.svg';
import logo2 from '../../../assets/logo_2.svg';
import logo3 from '../../../assets/logo_3.svg';
import logo4 from '../../../assets/logo_4.svg';
import logo5 from '../../../assets/logo_5.svg';
import heropage from '../../../assets/illustration.svg';
import '../../../csss/style.css';
import { NavLink } from 'react-router-dom';

// Slick Slider settings
const sliderSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, arrows: false,
    dots: false,
     autoplaySpeed: 0,
   speed: 4000,
   pauseOnHover: false,
    cssEase: 'linear',
};

const HeroSection = () => {
  return (
    <section>
      <div className="bg-darkgreen" style={{ backgroundColor: '#004d40', color: '#fff' }}>
        <div className="container">
          <div className="linebg1 py-100 position-relative">
            <ul className="linebg2">
              {Array(9).fill(null).map((_, idx) => (
                <li key={idx}></li>
              ))}
            </ul>
            <div className="row align-items-center mt-md-0 mt-3 pt-75 position-relative">
              <div className="col-md-7 tracking-in-expand">
                <div className="w-100">
                  <div className="header-content pb-md-5">
                    <h1 className="fs-66 color-3" style={{ color: '#DEE965', zIndex: '1000' }}>
                      Accept free & unlimited payments with instant bank settlement
                    </h1>
                    <p style={{ color: '#ccc', zIndex: '1000' }}>
                      Unlock access to QR code, payment links, plugin, and APIs, enabling you to
                      seamlessly accept both free and unlimited payments. Experience instant bank
                      settlement while safeguarding against the risk of bank account freezes
                      through our proprietary smart route technology.
                    </p>
                    <div className="mt-md-5 mt-3">
                    <NavLink exact to="/SignUp" className="btn btn_2 me-2" >Sign up </NavLink> 
                    <NavLink exact to="/Pricing" className="btn btn_w" >Start Accepting Payments </NavLink> 
                    
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 text-md-end py-5 text-center">
                <img
                  className="imgph-w rounded30 my-4"
                  src={heropage}
                  alt="Illustration"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>

            {/* Logo slider */}
            <div className="container pt-5 text-center">
              <div className="col-md-9 mx-auto">
                <Slider {...sliderSettings}>
                  <div>
                    <img src={logo3} alt="Logo 1" style={{ width: '100px', margin: '10px' }} />
                  </div>
                  <div>
                    <img src={logo2} alt="Logo 2" style={{ width: '100px', margin: '10px' }} />
                  </div>
                  <div>
                    <img src={logo3} alt="Logo 3" style={{ width: '100px', margin: '10px' }} />
                  </div>
                  <div>
                    <img src={logo4} alt="Logo 4" style={{ width: '100px', margin: '10px' }} />
                  </div>
                  <div>
                    <img src={logo5} alt="Logo 5" style={{ width: '100px', margin: '10px' }} />
                  </div>
                  <div>
                    <img src={logo3} alt="Logo 1" style={{ width: '100px', margin: '10px' }} />
                  </div>
                  <div>
                    <img src={logo2} alt="Logo 2" style={{ width: '100px', margin: '10px' }} />
                  </div>
                  <div>
                    <img src={logo3} alt="Logo 3" style={{ width: '100px', margin: '10px' }} />
                  </div>
                  <div>
                    <img src={logo4} alt="Logo 4" style={{ width: '100px', margin: '10px' }} />
                  </div>
                  <div>
                    <img src={logo5} alt="Logo 5" style={{ width: '100px', margin: '10px' }} />
                  </div>
                </Slider>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
