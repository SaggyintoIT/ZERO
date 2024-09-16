import React from 'react';
import '../../../csss/style.css'
import '../../../csss/bootstrap.min.css'

const FaqSection = () => {
  return (
    <section className="bodypx bg_blue py-[100px] px-32 Myfaq">
      <div className="container-fluid">
        <div className="flex flex-wrap -mx-4">
          <div className="container faqs">
            <div className="md:w-full md:pb-4 md:text-left">
              <h2 className="text-[42px] font-bold md:mb-3 text-white">FAQs</h2>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is the purpose of mobile app development?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The choice between cross-platform and native app
                      development depends on your business requirements. Native
                      apps are recommended for businesses needing long-term
                      growth, a seamless user experience, high performance, and
                      responsiveness. Cross-platform apps are suitable when
                      targeting both iOS and Android platforms to reach a
                      broader audience. As the top app development company, we
                      provide expert recommendations tailored to your
                      business’s needs for success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What is needed to develop a mobile app?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The choice between cross-platform and native app
                      development depends on your business requirements. Native
                      apps are recommended for businesses needing long-term
                      growth, a seamless user experience, high performance, and
                      responsiveness. Cross-platform apps are suitable when
                      targeting both iOS and Android platforms to reach a
                      broader audience. As the top app development company, we
                      provide expert recommendations tailored to your
                      business’s needs for success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are the key factors that influence the success of a
                    mobile app?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The choice between cross-platform and native app
                      development depends on your business requirements. Native
                      apps are recommended for businesses needing long-term
                      growth, a seamless user experience, high performance, and
                      responsiveness. Cross-platform apps are suitable when
                      targeting both iOS and Android platforms to reach a
                      broader audience. As the top app development company, we
                      provide expert recommendations tailored to your
                      business’s needs for success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Is cross-platform app development better than native app
                    development?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The choice between cross-platform and native app
                      development depends on your business requirements. Native
                      apps are recommended for businesses needing long-term
                      growth, a seamless user experience, high performance, and
                      responsiveness. Cross-platform apps are suitable when
                      targeting both iOS and Android platforms to reach a
                      broader audience. As the top app development company, we
                      provide expert recommendations tailored to your
                      business’s needs for success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Do I own the ownership and the code of my application?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The choice between cross-platform and native app
                      development depends on your business requirements. Native
                      apps are recommended for businesses needing long-term
                      growth, a seamless user experience, high performance, and
                      responsiveness. Cross-platform apps are suitable when
                      targeting both iOS and Android platforms to reach a
                      broader audience. As the top app development company, we
                      provide expert recommendations tailored to your
                      business’s needs for success.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Will TechAhead also provide support and maintenance
                    services?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      The choice between cross-platform and native app
                      development depends on your business requirements. Native
                      apps are recommended for businesses needing long-term
                      growth, a seamless user experience, high performance, and
                      responsiveness. Cross-platform apps are suitable when
                      targeting both iOS and Android platforms to reach a
                      broader audience. As the top app development company, we
                      provide expert recommendations tailored to your
                      business’s needs for success.
                    </p>
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

export default FaqSection;
