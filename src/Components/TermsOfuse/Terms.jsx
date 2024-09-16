import React from 'react';
import Navbar from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';

export const Terms = () => {
  return (
    <>
      <Navbar />
      <section className="bg-darkgreen">
        <div className="container mx-auto px-4">
          <div className="py-16 md:py-[100px] relative">
            <div className="flex flex-col items-center mt-3 md:mt-0 pt-6 md:pt-75 relative">
              <h1 className="text-4xl md:text-[66px] text-white font-bold pb-3 text-center">
                Terms of Use
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-privacy py-12 md:py-[100px] px-4 md:px-32">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-[42px] mb-3 font-semibold">
            Terms of Use
          </h2>
          <p className="text-base md:text-[18px] leading-relaxed">
            Protecting personal information of their customers is a significant
            responsibility of any organization so, we consider it very sincerely.
            INDTechmark secures the privacy by providing transparency and choice
            regarding protecting the privacy of our client's personal information
            as well as visitors to our website. This privacy policy describes what
            data INDTechmark (herein referred to as We, Our, or Us) collects,
            stores, and processes about you. It also explains your rights to your
            data and the way to contact us in case of any questions. We hold the
            right to reconstruct this privacy statement at our discretion and
            encourage you to check this section from time to time to be aware of
            any changes.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Terms;
