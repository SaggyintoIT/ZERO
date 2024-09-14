import React from 'react';
import Navbar from '../Homepage/Navbar/Navbar';
import TestimonialSection from '../Homepage/Testimonial/Testimonial';
import FeaturedInsights from '../Homepage/Insights/insights';
import Footer from '../Homepage/Footer/Footer';

const Pricing = () => {
  return (
    <>  
    <Navbar/>
      <section>
      <div className="bg-darkgreen">
        <div className="container">
          <div className="linebg1 py-100 position-relative">
            <ul className="linebg2">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="row align-center mt-md-0 mt-3 pt-75 relative pl-32 pr-24">
              <div className="w-full md:w-full tracking-in-expand">
              
                <div className="row">
                  <div className="w-full md:w-2/3 xl:w-3/4">
                    <span className="text-white text-[42px] font-thin d-block">
                      Start for free,<br />
                      Pick a plan later.
                    </span>
                    <div className="text-white flex text-24 font-semibold mt-5 items-center">
                      <span>Monthly billing</span>
                      <span className="px-3 switchbutton">
                        <div className="form-check form-switch form-switch-lg">
                          <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                          <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                        </div>
                      </span>
                      <span>Annual billing <span className="color-3">(Save up to 30%)</span></span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-4 d-flex flex-column mt-md-0 mt-4">
                    <div className="ms-auto">
                      <h2 className="text-white font-semibold">3 Days Trial</h2>
                      <span className="lightcrem text-[24px] font-semibold">No credit card required. Cancel anytime</span>
                      <span className="text-white text-[24px] font-semibold mt-4 d-block">Upgrade as you grow</span>
                      <p className="mt-2 text-white text-[17px]">
                        3-day trial gives you a free account, upgrade the same account when your trial period ends.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="bodypx py-[100px] px-28">
      <div className="w-full">
        <div className="row">
          <div className="w-full md:w-full">
            <div className="table-responsive-md invoicecereen">
              <table className="price-table w-full">
                <thead>
                  <tr className="price-table-head">
                    <td>4,999 QR Code Request</td>
                    <td>
                      Starter
                      <br />
                      <span className="pricerate">
                        ₹499 <sub>/mo</sub>
                      </span>
                      <br />
                      <span className="priceratedayes">per 28 Days</span>
                    </td>
                    <td>
                      Individual
                      <br />
                      <span className="pricerate">
                        ₹499 <sub>/mo</sub>
                      </span>
                      <br />
                      <span className="priceratedayes">per 28 Days</span>
                    </td>
                    <td>
                      Enterprise
                      <br />
                      <span className="pricerate">
                        ₹499 <sub>/mo</sub>
                      </span>
                      <br />
                      <span className="priceratedayes">per 28 Days</span>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Unlimited UPI Payments</th>
                    <th className="text-center">Monthly /plan</th>
                    <th className="text-center">Monthly /plan</th>
                    <th className="text-center">Unlimited</th>
                  </tr>
                  <tr>
                    <th>0 Transaction Fee</th>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th>Realtime Transaction</th>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th>No Amount Limit</th>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th>Zero Setup Charge</th>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th>Migration Assistance</th>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th>24*7 WhatsApp Support</th>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th>Remove Branding</th>
                    <td><i className="fas fa-times"></i></td>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th>Direct Intent</th>
                    <td><i className="fas fa-times"></i></td>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                  </tr>
                  <tr>
                    <th>Incognito Payment URL</th>
                    <td><i className="fas fa-times"></i></td>
                    <td><i className="fas fa-check"></i></td>
                    <td><i className="fas fa-check"></i></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td className="price">
                      <a href="#" className="btn btn_2 tablebtn1 w-full mt-3">Buy Now</a>
                    </td>
                    <td className="price">
                      <a href="#" className="btn btn_2 tablebtn2 w-full mt-3">Buy Now</a>
                    </td>
                    <td className="price">
                      <a href="#" className="btn btn_2 tablebtn3 w-full mt-3">Buy Now</a>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TestimonialSection/>
    <FeaturedInsights/>
    <Footer/>
    </>

  );
};

export default Pricing;
