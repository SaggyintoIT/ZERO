import React from 'react';
import circle from '../../assets/tick-circle.svg';
import Navbar from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';

const PrivacyPolicySection = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="bg-darkgreen">
          <div className="container mx-auto px-4">
            <div className="linebg1 py-[100px] relative">
              <div className="flex flex-col items-center mt-3 pt-16 md:mt-0 md:pt-20 relative">
                <div className="w-full text-center">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl color-3 pb-3">
                    Our Privacy Policy
                  </h1>
                  <p className="text-base md:text-lg text-white" data-aos="zoom-in">
                    We love our customers and their privacy is our topmost priority as it is most valuable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec-privacy py-16 md:py-[100px] px-4 md:px-36">
        <div className="privacy container mx-auto">
          <h2 className="text-3xl md:text-4xl mb-4">
            Privacy Policy
          </h2>
          <p className="text-base md:text-lg mb-4">
            Protecting personal information of our customers is a significant responsibility of any organization,
            so we consider it very sincerely. Zerogateway secures the privacy by providing transparency and
            choice regarding protecting the privacy of our client's personal information as well as visitors to
            our website. This privacy policy describes what data Zerogateway (herein referred to as We, Our, or Us)
            collects, stores, and processes about you. It also explains your rights to your data and the way to
            contact us in case of any questions. We hold the right to reconstruct this privacy statement at our
            discretion and encourage you to check this section from time to time to be aware of any changes.
          </p>

          <h2 className="text-3xl md:text-4xl mb-4">
            Applicable To
          </h2>
          <p className="text-base md:text-lg mb-4">
            This privacy statement refers to people ("users" or "you") who interact with our website, subscribe to
            any of our blogs, request information, or use the chat support.
          </p>

          <h2 className="text-3xl md:text-4xl mb-4">
            How We Collect Data
          </h2>
          <p className="text-base md:text-lg mb-4">
            Depending on the services you use i.e. blogs, request information through Contact Us, or use the chat
            support, we collect data from one or more of these three sources.
          </p>

          <div className="pl-4 md:pl-16">
            <h3 className="text-xl md:text-2xl mb-2">
              1. Data we request
            </h3>
            <p className="text-base md:text-lg mb-4">
              We may ask, store, and process any/all of these data mentioned after getting your permission, when
              you request any of our services:
            </p>

            <ul className="list-disc pl-6 md:pl-8 mb-4">
              <li className="text-base md:text-lg flex gap-2 items-start mb-2">
                <img src={circle} className="w-5 h-5" alt="tick" />
                Your Name
              </li>
              <li className="text-base md:text-lg flex gap-2 items-start mb-2">
                <img src={circle} className="w-5 h-5" alt="tick" />
                Your Country
              </li>
              <li className="text-base md:text-lg flex gap-2 items-start mb-2">
                <img src={circle} className="w-5 h-5" alt="tick" />
                Your Email Id
              </li>
              <li className="text-base md:text-lg flex gap-2 items-start mb-2">
                <img src={circle} className="w-5 h-5" alt="tick" />
                Your Skype Id
              </li>
              <li className="text-base md:text-lg flex gap-2 items-start mb-2">
                <img src={circle} className="w-5 h-5" alt="tick" />
                Your Phone Number
              </li>
              <li className="text-base md:text-lg flex gap-2 items-start mb-2">
                <img src={circle} className="w-5 h-5" alt="tick" />
                Other information that you choose to share
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl mb-2">
              2. Cookies
            </h3>
            <p className="text-base md:text-lg mb-4">
              A small file placed on your computer that helps us in analyzing the web traffic and tracks you across
              the web when you first visit our website is called Cookie. We collect this data only after your
              consent and assume that you agree to our terms of usage. There is a way of avoiding it; you can
              change your browser settings for not accepting the cookie or browse as an anonymous user using
              incognito mode.
            </p>
            <p className="text-base md:text-lg mb-4">
              To enhance our website we are linked to a few authentic third-party services, and the privacy policies of
              which may be different from ours and we assume no responsibility for their agreement. The third-party
              tools we use are below, and we would appreciate if you go through their privacy policies for your
              assurance.
            </p>

            <div className="pl-4 md:pl-16">
              <h3 className="text-xl md:text-2xl mb-2">
                Google Analytics:
              </h3>
              <p className="text-base md:text-lg mb-4">
                It is used to enhance user experience and we do not collect your personally identifiable
                information. The data it collects is related to the device/browser, IP address, and on-site
                activities to measure and report statistics about your interactions on the web. To get knowledge
                about how Google Analytics deals with your data, check their <a href="privacy-policy.html" className="text-blue-600">privacy policy</a> here.
              </p>

              <h3 className="text-xl md:text-2xl mb-2 mt-3">
                Zendesk:
              </h3>
              <p className="text-base md:text-lg mb-4">
                We are ever ready for the support and for that we need to get your basic details to reach out to you
                and provide you the required services and get details regarding the same. For this service, we are
                using <a href="https://www.zendesk.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">Zendesk Chat Support</a> and we encourage you to check out the privacy policies of Zendesk Chat Support.
              </p>

              <h3 className="text-xl md:text-2xl mb-2 mt-3">
                HubSpot:
              </h3>
              <p className="text-base md:text-lg mb-4">
                To save the contact details shared by you for getting our service is securely stored in the popular
                and trusted CRM named HubSpot. You can check the details by reaching its website <a
                href="https://www.hubspot.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600">https://www.hubspot.com/</a>.
                We encourage you to visit and check its <a href="privacy-policy.html" className="text-blue-600">privacy policy</a>.
              </p>

              <h3 className="text-xl md:text-2xl mb-2 mt-3">
                MailChimp:
              </h3>
              <p className="text-base md:text-lg mb-4">
                We do have some interesting offers for you and for that, we need to reach our interested customers
                so that they can take advantage of it. For that, we need to send promotional emails and track who
                are the interested ones to provide them good support. Also, we may track an individual email opened
                by any recipient which is sent by us to calculate click rates and enhance engagement. We are using
                an authentic tool named MailChimp for email marketing and we encourage you to check their <a
                href="privacy-policy.html" className="text-blue-600">privacy policy</a> here.
              </p>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl mb-4 mt-6">
            Data Storage and Protection
          </h2>
          <p className="text-base md:text-lg mb-4">
            We care for our customer data and aim to keep it safe and secure. We use various technical, managerial,
            and organizational measures to safeguard your personal data. The data you share is encrypted and
            protected by a secure SSL connection.
          </p>

          <h2 className="text-3xl md:text-4xl mb-4 mt-6">
            Data Retention
          </h2>
          <p className="text-base md:text-lg mb-4">
            We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
            Privacy Policy unless a longer retention period is required or permitted by law.
          </p>

          <h2 className="text-3xl md:text-4xl mb-4 mt-6">
            Changes to This Privacy Policy
          </h2>
          <p className="text-base md:text-lg mb-4">
            We may update this Privacy Policy from time to time. We encourage you to review this Privacy Policy
            periodically to stay informed about how we are protecting your information.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicySection;
