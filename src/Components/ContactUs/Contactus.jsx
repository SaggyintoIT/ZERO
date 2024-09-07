import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar'
import Subscribe from '../Blog/Subscribe'
import Footer from '../Homepage/Footer/Footer'

export const Contactus = () => {
  return (
    <>
    <Navbar/>
    <section className="">
    <div className="bg-darkgreen">
      <div className="container">
        <div className="linebg1 py-100 position-relative">
          <div className="row align-items-center mt-md-0 mt-3 pt-75 position-relative">
            <div className="col-md-12 tracking-in-expand">
              <div className="w-100">
                <div className="header-content pb-md-5 text-center">
                  <h1 className="fs-66 color-3 pb-3">
                    The Zerogateway team is here <br /> to help you
                  </h1>
                  <p data-aos="zoom-in">
                    Visit our comprehensive Help Centre to find answers to the most common Zerogateway by Network questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="body-section py-100">
  <div className="container">
    <div className="row about-text align-self-center">
      <div className="col-lg-6 contectform">
        <h2 className="color-1">
          Can’t find what you need? Send us a message
        </h2>
        <p className="py-4">"This field is required" indicates required fields</p>
        <div className="mb-3 mt-3">
          <select className="form-select">
            <option value="">-Please choose an option-</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="YourName"
            placeholder="Enter Your Name*"
            name="Your Name*"
          />
          <label htmlFor="YourName">Your Name*</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
          />
          <label htmlFor="email">Email*</label>
        </div>

        <div className="form-floating mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter Phone Number*"
            name="Phone Number*"
          />
          <label htmlFor="phone">Phone Number*</label>
        </div>

        <div className="form-floating h_auto">
          <textarea
            className="form-control"
            id="Message"
            name="text"
            placeholder="Message goes here"
          ></textarea>
          <label htmlFor="Message">Message*</label>
        </div>

        <div
          className="g-recaptcha mt-4"
          data-sitekey="6Lel4Z4UAAAAAOa8LO1Q9mqKRUiMYl_00o5mXJrR"
        ></div>

        <div className="mt-4 loadmore">
          <a href="javascript:void(0);" className="loadMorebtn">
            <span>Send Message</span>
          </a>
        </div>
      </div>

      <div className="col-lg-5 ms-auto">
        <div className="process-desc mx-auto text-start">
          <div className="con-address mt-3">
            <div className="foo-address pb-2">
              <h2 className="color-1">Office Hours</h2>
              <p>
                Mon – Fri:<br />
                08:00 – 17:00 (GMT +2)
              </p>

              <h2 className="color-1 mt-md-5 mt-2">Contact Details</h2>
              <p>
                <a
                  className="color-1 text-decoration-none"
                  href="mailto:support@Zerogateway.com"
                  title="support@Zerogateway.com"
                >
                  support@Zerogateway.com
                </a>
                <br />
                tel:{' '}
                <a
                  className="color-1 text-decoration-none"
                  href="tel:27213004455"
                  title="+27 21 3004455"
                >
                  +27 21 3004455
                </a>
              </p>
            </div>
            <div className="foo-address">
              <p className="mb-0 color-1">
                <strong>Technical Support</strong>
              </p>
              <p className="color-1">
                Have you encountered a problem with our solution or have a
                question about one of its features? Write to us at
                support@Zerogateway.com and we will get back to you within
                hours.
              </p>
            </div>

            <div className="foo-address">
              <p className="mb-0 color-1">
                <strong>General inquiries</strong>
              </p>
              <p className="color-1">
                info@Zerogateway.com and the concerned department will
                respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Subscribe/>
<Footer/>
</>
  )
}
