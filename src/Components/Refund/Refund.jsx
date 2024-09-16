import React from 'react';
import Navbar from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';

export const Refund = () => {
  return (
    <>
      <Navbar />
      <section className="bg-darkgreen">
        <div className="container mx-auto px-4">
          <div className="py-16 md:py-[100px] relative">
            <div className="flex flex-col items-center mt-3 md:mt-0 pt-6 md:pt-[75px] relative">
              <h1 className="text-3xl md:text-[66px] text-white font-bold pb-3 text-center">
                Refund Policy
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-privacy py-12 md:py-[100px] px-4 md:px-32">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-[42px] mb-3 font-semibold">
            Refund Policy
          </h2>
          <p className="text-base md:text-[18px] mb-4 leading-relaxed">
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

          <h2 className="text-2xl md:text-[42px] mb-3 md:mt-5 mt-3 font-semibold">
            Understanding Refund Policies
          </h2>
          <p className="text-base md:text-[18px] mb-4 leading-relaxed">
            Refund policies are critical components of customer service and
            business operations. They dictate how businesses handle returns and
            refunds, impacting customer satisfaction and loyalty. As consumers
            increasingly demand flexibility and fairness in transactions,
            understanding and navigating refund policies becomes crucial for both
            businesses and customers.
          </p>
          <p className="text-base md:text-[18px] mb-4 leading-relaxed">
            This article aims to demystify refund policies, exploring their various
            types, legal requirements, and best practices for both businesses and
            customers. By comprehending these policies, consumers can make informed
            decisions, and businesses can foster trust and ensure legal compliance.
          </p>

          <h2 className="text-2xl md:text-[42px] mb-3 md:mt-5 mt-3 font-semibold">
            Legal Aspects of Refund Policies
          </h2>
          <p className="text-base md:text-[18px] mb-4 leading-relaxed">
            Understanding the legal framework surrounding refund policies is
            crucial for both businesses and consumers. In many jurisdictions, laws
            mandate specific refund rights for consumers, such as the right to a
            refund for faulty goods or services. For example, the European Union’s
            Consumer Rights Directive provides a 14-day withdrawal period for
            distance and off-premises contracts.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Refund;
