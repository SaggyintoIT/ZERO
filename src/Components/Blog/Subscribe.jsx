import React from 'react';


const Subscribe = () => {
  return (
    <section className="bodypx" >
      <div className="bg-darkgreen rounded30 py-100 signupbg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center px-4">
              <h2 className="fs-42 fw-600 color-3">Sign Up for the Latest Insights</h2>
              <p className="pe-md-4 mt-2 lightcrem">
                Get a free access to our exclusive research and tech strategies to level up your knowledge about the digital realm.
              </p>
              <div className="searchbox-wrap my-4">
                <input type="text" placeholder="Enter your Email" />
                <button>
                  <span className="lightcrem">Subscribe</span>
                </button>
              </div>
              <div className="form-check d-flex justify-content-center mt-2 lightcrem searchboxlable">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label ms-2" htmlFor="defaultCheck1">
                  I hereby agree to receive newsletters from Zerogateway and acknowledge the company's
                  <a className="lightcrem text-decoration-none" href="#">Privacy Policy.</a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
