import React from 'react';
import circle from '../../assets/tick-circle.svg'
import Navbar from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';

const PrivacyPolicySection = () => {
  return (
    <>
    <Navbar/>
    <section className="">
      <div className="bg-darkgreen">
        <div className="container">
          <div className="linebg1 py-[100px] relative">    
            <div className="row align-center md:mt-0 mt-3 pt-75 relative">
              <div className="md:col-span-12 tracking-in-expand">
                <div className="w-full" >
                  <div className="header-content text-center">
                    <h1 className="text-[66px] color-3 pb-3" >
                      Our Privacy Policy
                    </h1>         
                    <p className="" data-aos="zoom-in">
                      We love our customers and their privacy is our topmost priority as it is most valuable.  
                    </p>              
                  </div>
                </div>                    
              </div>                    
            </div>             
          </div>
        </div>
      </div>
    </section> 
    <section className="sec-privacy py-[100px] px-36">
    <div className="privacy">
      <div className="container">
        <h2 className="text-[42px] mb-3" >
          Privacy Policy
        </h2>
        <p className="text-[18px]" >
          Protecting personal information of their customers is a significant responsibility of any organization
          so, we consider it very sincerely. Zerogateway secures the privacy by providing transparency and
          choice regarding protecting the privacy of our client's personal information as well as visitors to
          our website. This privacy policy describes what data Zerogateway (herein referred to as We, Our, or Us)
          collects, stores, and processes about you. It also explains your rights to your data and the way to
          contact us in case of any questions. We hold the right to reconstruct this privacy statement at our
          discretion and encourage you to check this section from time to time to be aware of any changes.
        </p>

        <h2 className="text-[42px] md:mb-3 md:mt-5 mb-2 mt-3" >
          Applicable To
        </h2>
        <p className="text-[18px]" >
          This privacy statement refers to people ("users" or "you") who interact with our website, subscribe to
          any of our blogs, request information, or use the chat support.
        </p>

        <h2 className="text-[42px] mb-md-3 mt-md-5 mb-2 mt-3" >
          How We Collect Data
        </h2>
        <p className="text-[18px] mb-4">
          Depending on the services you use i.e. blogs, request information through Contact Us, or use the chat
          support, we collect data from one or more of these three sources.
        </p>

        <div className="custom-padding-left-60" >
          <h3 className="text-[22px] mb-2" >
            1. Data we request
          </h3>
          <p className="text-[18px]" >
            We may ask, store, and process any/all of these data mentioned after getting your permission, when
            you request any of our services:
          </p>

          <ul className="list-unstyled mt-4 mb-4 md:ps-0 ps-1" >
            <li className="text-[18px] flex gap-2 items-start">
              <img src={circle} className="me-2" alt="tick" />
              Your Name
            </li>
            <li className="text-[18px] flex gap-2 items-start mt-2">
              <img src={circle} className="me-2" alt="tick" />
              Your Country
            </li>
            <li className="text-[18px] flex gap-2 items-start mt-2">
              <img src={circle} className="me-2" alt="tick" />
              Your Email Id
            </li>
            <li className="text-[18px] flex gap-2 items-start mt-2">
              <img src={circle} className="me-2" alt="tick" />
              Your Skype Id
            </li>
            <li className="text-[18px] flex gap-2 items-start mt-2">
              <img src={circle} className="me-2" alt="tick" />
              Your Phone Number
            </li>
            <li className="text-[18px] flex gap-2 items-start mt-2">
              <img src={circle} className="me-2" alt="tick" />
              Other information that you choose to share
            </li>
          </ul>

          <h3 className="text-[22px] mb-2" >
            2. Cookies
          </h3>
          <p className="text-[18px] mb-2" >
            Small file placed on your computer that helps us in analyzing the web traffic and tracks you across
            the web when you first visit our website is called Cookie. We collect this data only after your
            consent and assume that you agree to our terms of usage. There is a way of avoiding it, you can
            change your browser settings for not accepting the cookie or browse as an anonymous user using
            incognito mode.
          </p>
          <p className="text-[18px] mb-4" >
            To enhance our website we are linked to a few authentic third-party services and the privacy policy of
            which may be different from us and we assume no responsibility for their agreement. The third-party
            tools we use are below and we would appreciate if you go through their privacy policy for your
            assurance.
          </p>

          <div className="padding-inner" >
            <h3 className="text-[22px] mb-2" >
              Google Analytics:
            </h3>
            <p className="text-[18px]" >
              It is used to enhance user experience and we do not collect your personally identifiable
              information. The data it collects is related to the device/browser, IP address, and on-site
              activities to measure and report statistics about your interactions on the web. To get knowledge
              about how Google Analytics deals with your data, check their <a href="privacy-policy.html">privacy
              policy</a> here.
            </p>

            <h3 className="text-[22px] mb-2 mt-3" >
              Zendesk:
            </h3>
            <p className="text-[18px]" >
              We are ever ready for the support and for that we need to get your basic details to reach to you
              and provide you the required services and get details regarding same. For this service we are
              using <a href="https://www.zendesk.com" target="_blank" rel="noopener noreferrer">Zendesk Chat Support</a> and we encourage you to check out the privacy policies of the Zendesk Chat Support.
            </p>

            <h3 className="text-[22px] mb-2 mt-3" >
              HubSpot:
            </h3>
            <p className="text-[18px]" >
              To save the contact details shared by you for getting our service is securely stored in the popular
              and trusted CRM named HubSpot. You can check the details by reaching its website <a
              href="https://www.hubspot.com/" target="_blank" rel="noopener noreferrer">https://www.hubspot.com/</a>.
              We encourage you to visit and check its <a href="privacy-policy.html">privacy policy</a>.
            </p>

            <h3 className="text-[22px] mb-2 mt-3" >
              MailChimp:
            </h3>
            <p className="text-[18px]">
              We do have some interesting offers for you and for that we need to reach our interested customers
              so that they can take advantage of it. For that, we need to send promotional emails and track who
              are the interested ones to provide them good support. Also, we may track an individual email opened
              by any recipient which is sent by us to calculate click rates and enhance engagement. We are using
              an authentic tool named MailChimp for email marketing and we encourage you to check their <a
              href="privacy-policy.html">privacy policy</a> here.
            </p>
          </div>
        </div>

        <h2 className="text-[42px] mb-1 mt-md-5 mt-3" >
          Why We Collect Your Data Once You Permit?
        </h2>
        <p className="font-20 mb-2" >
          Following are reasons of collecting data:
        </p>

        <ul className="list-unstyled mt-4 mb-4" >
          <li className="text-[18px] flex gap-2 items-start mb-2">
            <img src={circle} className="me-2" alt="tick" />
            To communicate with you regarding services that you enquired or for current projects with us.
          </li>
          <li className="text-[18px] flex gap-2 items-start mb-2">
            <img src={circle} className="me-2" alt="tick" />
            To notify you (using email) if there will be any changes to this Privacy Policy, Terms of Service, or
            important notices.
          </li>
          <li className="text-[18px] flex gap-2 items-start mb-2">
            <img src={circle} className="me-2" alt="tick" />
            To administer our website services and track activities and trends to improve our services.
          </li>
          <li className="text-[18px] flex gap-2 items-start mb-2">
            <img src={circle} className="me-2" alt="tick" />
            To prevent, detect, and resolve fraud and other illegal activities.
          </li>
        </ul>

        <h2 className="text-[42px] mb-md-3 mt-md-5 mt-3" >
          How Do We Store Your Data?
        </h2>
        <p className="text-[18px] mb-4" >
          We take various technical and organizational security measures to ensure your data is kept safe. We
          store data within secured servers protected from unauthorized access.
        </p>

        <h2 className="text-[42px] mb-md-3 mt-md-5 mt-3" >
          Data Retention Policy
        </h2>
        <p className="text-[18px] mb-4" >
          We retain your data only as long as necessary to fulfill the purpose for which it was collected, comply
          with our legal obligations, resolve disputes, and enforce our agreements.
        </p>

        <h2 className="text-[42px] mb-md-3 mt-md-5 mt-3" >
          Your Rights
        </h2>
        <p className="text-[18px] mb-4" >
          You have the right to access, update, or delete your personal information that we hold. To exercise these
          rights, please contact us using the details provided below.
        </p>

        <h2 className="text-[42px] mb-md-3 mt-md-5 mt-3" >
          Contact Us
        </h2>
        <p className="text-[18px] mb-4" >
          If you have any questions or concerns about our privacy practices, please contact us at:
          <br />
          Email: <a href="mailto:privacy@zerogateway.com">privacy@zerogateway.com</a>
        </p>
      </div>
    </div>
  </section>
  <Footer/>
  </>
  );
};

export default PrivacyPolicySection;
