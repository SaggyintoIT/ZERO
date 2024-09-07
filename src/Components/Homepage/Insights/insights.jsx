import React from 'react';
import insights1 from '../../../assets/Insights1.jpg';
import insights2 from '../../../assets/Insights2.jpg';
import insights3 from '../../../assets/Insights3.jpg';
import '../../../csss/style.css'; // Ensure path is correct
import '../../../csss/bootstrap.min.css'; // Make sure this import doesn’t override your styles

const FeaturedInsights = () => {
  return (
    <section className="bodypx ourworksection bg-white">
      <div className="container px-md-1">
        <div className="linebg1 position-relative">
          <ul className="linebg2 whitelinebg m-0">
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
          <div className="whitelinebg py-100">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="fs-42 fw-bold mb-md-3 text-center">Featured Insights</h2>
                <p className="pe-md-4">
                  Explore our featured technology insights on news boards that are popular among our readers.
                </p>
              </div>
              <div className="pt-2 px-0">
                <div className="row">
                  <div className="col-md-4">
                    <div className="img-hover">
                      <img className="w-100 inner-img" src={insights1} alt="Insight 1" />
                    </div>
                    <div className="Insights-text">
                      <span className="fn-18 text-lgray3">March 25, 2024 | 6156 Views</span>
                      <a href="javascript:void(0)" className="d-block fs-30 fw-600 my-1 color-1 hoverunderline">
                        Passio.AI - An Edge AI Platform
                      </a>
                      <p className="pe-md-4">
                        How MindInventory contributed to the success of Passio - an edge AI platform, transforming the lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="img-hover">
                      <img className="w-100 inner-img" src={insights2} alt="Insight 2" />
                    </div>
                    <div className="Insights-text">
                      <span className="fn-18 text-lgray3">November 15, 2013 | 12705 Views</span>
                      <a href="javascript:void(0)" className="d-block fs-30 fw-600 my-1 color-1 hoverunderline">
                        Passio.AI - An Edge AI Platform
                      </a>
                      <p className="pe-md-4">
                        How MindInventory contributed to the success of Passio - an edge AI platform, transforming the lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="img-hover">
                      <img className="w-100 inner-img" src={insights3} alt="Insight 3" />
                    </div>
                    <div className="Insights-text">
                      <span className="fn-18 text-lgray3">May 25, 2024 | 6156 Views</span>
                      <a href="javascript:void(0)" className="d-block fs-30 fw-600 my-1 color-1 hoverunderline">
                        Passio.AI - An Edge AI Platform
                      </a>
                      <p className="pe-md-4">
                        How MindInventory contributed to the success of Passio - an edge AI platform, transforming the lifestyle.
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
  );
};

export default FeaturedInsights;
