import { useEffect } from 'react';
import paymentIcon from '../../../assets/Payment_icon.svg';
import qrCodeIcon from '../../../assets/qrcode_icon.svg';
import instantIcon from '../../../assets/Instant_icon.svg';
import smartRouteIcon from '../../../assets/smartroute_icon.svg';
import checkoutIcon from '../../../assets/Checkout_icon.svg';
import apiAccessIcon from '../../../assets/APIAccess_icon.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS styles

const PaymentSolutionsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="text-center py-10">

      <div className="w-full">
        <div className="linebg1 py-10 relative">
          <ul className="linebg2 whitelinebg">
            {Array(9).fill(null).map((_, idx) => (
              <li key={idx}></li>
            ))}
          </ul>
          
          {/* Heading and description */}
          <div className="text-center px-6 md:px-20 relative" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Payment Solutions
            </h2>
            <p className="text-sm md:text-base">
              Zerogateway Payment gateway services for large & small businesses is all you need to manage your payments collection for your
              Online e-commerce websites, Subscriptions services, In-Store & delivery operations.
            </p>
          </div>

          {/* Padding around the grid starts large from md and lg */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 sm:px-8 md:px-32 lg:px-36 py-4">
            <div className="cta_1 appdevbg p-6 md:p-10 rounded-xl text-start" data-aos="fade-up" data-aos-delay="100" >
              <img className="mb-4" src={paymentIcon} alt="Payment Links" />
              <span className="text-xl md:text-2xl font-bold mb-2 block">Payment Links</span>
              <p className="text-sm md:text-base">Present advertisements to your customers on the checkout page to promote your affiliate brands or your own business.</p>
            </div>
            <div className="cta_2 appdevbg p-6 md:p-10 rounded-xl text-start" data-aos="fade-up" data-aos-delay="200">
              <img className="mb-4" src={qrCodeIcon} alt="QR Code" />
              <span className="text-xl md:text-2xl font-bold mb-2 block">QR Code</span>
              <p className="text-sm md:text-base">Share the QR code of your payment handle on social media platforms, WhatsApp, SMS and receive instant payments.</p>
            </div>
            <div className="cta_3 appdevbg p-6 md:p-10 rounded-xl text-start" data-aos="fade-up" data-aos-delay="300">
              <img className="mb-4" src={instantIcon} alt="Instant Settlement" />
              <span className="text-xl md:text-2xl font-bold mb-2 block">Instant Settlement</span>
              <p className="text-sm md:text-base">Forget about settlement issues. All payments are processed and settled in real-time to ensure trust and improve cash flow.</p>
            </div>
            <div className="cta_4 appdevbg p-6 md:p-10 rounded-xl text-start" data-aos="fade-up" data-aos-delay="400">
              <img className="mb-4" src={smartRouteIcon} alt="Smart Route" />
              <span className="text-xl md:text-2xl font-bold mb-2 block">Smart Route</span>
              <p className="text-sm md:text-base">Accept unlimited payments without worrying about the risk of a bank account freeze, as our technology helps mitigate risks.</p>
            </div>
            <div className="cta_5 appdevbg p-6 md:p-10 rounded-xl text-start" data-aos="fade-up" data-aos-delay="500">
              <img className="mb-4" src={checkoutIcon} alt="Checkout Ads" />
              <span className="text-xl md:text-2xl font-bold mb-2 block">Checkout Ads</span>
              <p className="text-sm md:text-base">Generate and share payment links on social media platforms, WhatsApp, SMS and receive instant payments.</p>
            </div>
            <div className="cta_6 appdevbg p-6 md:p-10 rounded-xl text-start" data-aos="fade-up" data-aos-delay="600">
              <img className="mb-4" src={apiAccessIcon} alt="API Access" />
              <span className="text-xl md:text-2xl font-bold mb-2 block">API Access</span>
              <p className="text-sm md:text-base">Generate and share payment links on social media platforms, WhatsApp, SMS and receive instant payments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSolutionsSection;
