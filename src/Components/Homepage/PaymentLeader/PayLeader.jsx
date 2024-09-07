import React from 'react';


const PayLeader = () => {
  return (
    <section className="text-center counter-bg">
      <div className="container position-relative py-100">
        <div className="position-relative">
          <div className="area">
            <ul className="circles">
              {Array(10).fill(null).map((_, idx) => (
                <li key={idx}></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="shap"></div>
        <div className="text-center px-40 mb-5" >
          <h2 className="fs-42 fw-bold mb-md-4 text-center">
            Partner with the payments leader
          </h2>
        </div>
        <div className="row">
          <div className="four col-md-3 col-6">
            <div className="counter-box">
              <div className="countertext fw-600 d-flex justify-content-center w-100">
                <span>+</span><span className="counter">2</span> M
              </div>
              <p>Users</p>
            </div>
          </div>
          <div className="four col-md-3 col-6">
            <div className="counter-box">
              <div className="countertext fw-600 d-flex justify-content-center w-100">
                <span>+</span><span className="counter">10</span> M
              </div>
              <p>API Hits</p>
            </div>
          </div>
          <div className="four col-md-3 col-6">
            <div className="counter-box">
              <div className="countertext fw-600 d-flex justify-content-center w-100">
                <span>+</span><span className="counter">10</span> k
              </div>
              <p>Merchants</p>
            </div>
          </div>
          <div className="four col-md-3 col-6">
            <div className="counter-box">
              <div className="countertext fw-600 d-flex justify-content-center w-100">
                <span>+</span><span className="counter">3</span> M
              </div>
              <p>Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayLeader;
