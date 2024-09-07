import React from 'react';
import Slider from 'react-slick';
import smile from '../../../assets/smile.svg'
import left from '../../../assets/left.png'
import right from '../../../assets/right.png'
import Dhirendra from '../../../assets/Dhirendra.svg'
import Priya from '../../../assets/Ayush.svg'

const TestimonialSection = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    loop:true,
    speed: 300, 
    autoplaySpeed: 5000,
    autoplay: true,
    
    
    responsive: [
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
    }
  }
  
]
  };

  return (
    <section className="bodypx lightgreenbg Testimonial py-100 paddingleft">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 text-center">
            <img className="smile" src={smile} alt="smile" />
            <h2 className="fs-66 diagrammr  color-4">
              Customer<br />
              <span className="fw-600">Happiness</span>
              <span className="fs-48 color-5 d-block">Guaranteed</span>
            </h2>
            <div className="btn-wrap">
              <button className="prev-btn com-btn mr-3">
                <span>
                  <img src={left} alt="Previous" />
                </span>
              </button>
              <button className="next-btn com-btn">
                <span>
                  <img src={right} alt="Next" />
                </span>
              </button>
            </div>
          </div>
          <div className="col-md-9 px-md-1">
            <div className="pt-3 px-0">
              <Slider {...settings} className="testimonial-slider">
                <div className="testimonial-slide">
                  <div className="testimonial_box">
                    <div className="testimonial_box-inner">
                      <div className="testimonial_box-top">
                        <div className="testimonial_box-text fn-Inter fw-400">
                          <p>
                            I encountered issues with another payment gateway where money disappeared without any response. Now, I've switched to using ZeroGateway, and I receive instant settlements.
                          </p>
                        </div>
                        <div className="testimonial_box-shape"></div>
                        <div className="testimonial_box-bottom mt-2">
                          <div className="testimonial_box-profile align-items-center">
                            <div className="testimonial_box-img">
                              <img src={Dhirendra} alt="Dhirendra" />
                            </div>
                            <div className="testimonial_box-info">
                              <div className="testimonial_box-name">
                                <h3 className="mb-0 fn-Inter fw-bold">Aman Singh</h3>
                                <p className="mb-1 fn-Inter">E-Commerce Business</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label htmlFor="star1" title="text">1 star</label>
                          </div>
                          <span className="fw-bold fn-18">3.0 / 3.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-slide">
                  <div className="testimonial_box">
                    <div className="testimonial_box-inner">
                      <div className="testimonial_box-top">
                        <div className="testimonial_box-text fn-Inter fw-400">
                          <p>
                            I am thrilled to have discovered ZeroGateway. Since my profit margin is quite slim, the fact that ZeroGateway UPI charges 0% commission and provides instant settlements brings me immense joy.
                          </p>
                        </div>
                        <div className="testimonial_box-shape"></div>
                        <div className="testimonial_box-bottom mt-2">
                          <div className="testimonial_box-profile align-items-center">
                            <div className="testimonial_box-img">
                              <img src={Priya} alt="Ayush" />
                            </div>
                            <div className="testimonial_box-info">
                              <div className="testimonial_box-name">
                                <h3 className="mb-0 fn-Inter fw-bold">Priya Patel</h3>
                                <p className="mb-1 fn-Inter">Priya Beauty World</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label htmlFor="star1" title="text">1 star</label>
                          </div>
                          <span className="fw-bold fn-18">3.0 / 3.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-slide">
                  <div className="testimonial_box">
                    <div className="testimonial_box-inner">
                      <div className="testimonial_box-top">
                        <div className="testimonial_box-text fn-Inter fw-400">
                          <p>
                            I am thrilled to have discovered ZeroGateway. Since my profit margin is quite slim, the fact that ZeroGateway UPI charges 0% commission and provides instant settlements brings me immense joy.
                          </p>
                        </div>
                        <div className="testimonial_box-shape"></div>
                        <div className="testimonial_box-bottom mt-2">
                          <div className="testimonial_box-profile align-items-center">
                            <div className="testimonial_box-img">
                              <img src={Priya} alt="Ayush" />
                            </div>
                            <div className="testimonial_box-info">
                              <div className="testimonial_box-name">
                                <h3 className="mb-0 fn-Inter fw-bold">Priya Patel</h3>
                                <p className="mb-1 fn-Inter">Priya Beauty World</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label htmlFor="star1" title="text">1 star</label>
                          </div>
                          <span className="fw-bold fn-18">3.0 / 3.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-slide">
                  <div className="testimonial_box">
                    <div className="testimonial_box-inner">
                      <div className="testimonial_box-top">
                        <div className="testimonial_box-text fn-Inter fw-400">
                          <p>
                            I am thrilled to have discovered ZeroGateway. Since my profit margin is quite slim, the fact that ZeroGateway UPI charges 0% commission and provides instant settlements brings me immense joy.
                          </p>
                        </div>
                        <div className="testimonial_box-shape"></div>
                        <div className="testimonial_box-bottom mt-2">
                          <div className="testimonial_box-profile align-items-center">
                            <div className="testimonial_box-img">
                              <img src={Priya} alt="Ayush" />
                            </div>
                            <div className="testimonial_box-info">
                              <div className="testimonial_box-name">
                                <h3 className="mb-0 fn-Inter fw-bold">Priya Patel</h3>
                                <p className="mb-1 fn-Inter">Priya Beauty World</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                          <div className="rate">
                            <input type="radio" id="star5" name="rate" value="5" />
                            <label htmlFor="star5" title="text">5 stars</label>
                            <input type="radio" id="star4" name="rate" value="4" />
                            <label htmlFor="star4" title="text">4 stars</label>
                            <input type="radio" id="star3" name="rate" value="3" />
                            <label htmlFor="star3" title="text">3 stars</label>
                            <input type="radio" id="star2" name="rate" value="2" />
                            <label htmlFor="star2" title="text">2 stars</label>
                            <input type="radio" id="star1" name="rate" value="1" />
                            <label htmlFor="star1" title="text">1 star</label>
                          </div>
                          <span className="fw-bold fn-18">3.0 / 3.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
