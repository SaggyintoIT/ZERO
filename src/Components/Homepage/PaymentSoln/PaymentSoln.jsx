import {useEffect} from 'react';
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
  }, []); // Empty dependency array ensures AOS.init runs only once when the component is mounted

  return (
    <section className="text-center">
      <div className="w-full">
        <div className="linebg1 py-100 position-relative">
          <ul className="linebg2 whitelinebg">
            {Array(9).fill(null).map((_, idx) => (
              <li key={idx}></li>
            ))}
          </ul>
          <div className="text-center px-40 relative"data-aos="fade-up" >
            <h2 className="text-[42px] font-bold md:mb-4 text-center" >
              Payment Solutions
            </h2>
            <p>
              Zerogateway Payment gateway services for large & small businesses is all what you need to manage your payments collection for your
              Online e-commerce websites, Subscriptions services, In-Store & delivery operations.
            </p>
          </div>
          <div className="row align-items-md-center mt-5 position-relative pr-36 pl-40">
            <div className="w-full md:w-1/3 mb-4">
              <div className="cta_1 appdevbg p-[30px] rounded-[24px] text-start">
                <img className="d-block" src={paymentIcon} alt="Payment Links" />
                <span className="text-[30px] font-bold pt-2 pb-2 d-block">Payment links</span>
                <p>Present advertisements to your customers on the checkout page to promote your affiliate brands or your own business.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="cta_2 appdevbg p-[30px] rounded-[24px] text-start">
                <img className="d-block" src={qrCodeIcon} alt="QR Code" />
                <span className="text-[30px] font-bold pt-2 pb-2 d-block">QR Code</span>
                <p>Share the QR code of your payment handle on social media platforms, WhatsApp, SMS and receive instant payments.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="cta_3 appdevbg p-[30px] rounded24 text-start">
                <img className="d-block" src={instantIcon} alt="Instant Settlement" />
                <span className="text-[30px] font-bold pt-2 pb-2 d-block">Instant Settlement</span>
                <p>Forget about settlement issues. All payments are processed and settled in real-time to ensure trust and improve cash flow.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="cta_4 appdevbg p-[30px] rounded24 text-start">
                <img className="d-block" src={smartRouteIcon} alt="Smart Route" />
                <span className="text-[30px] font-bold pt-2 pb-2 d-block">Smart Route</span>
                <p>Accept unlimited payments without worrying about the risk of a bank account freeze, as our technology helps mitigate risks.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="cta_5 appdevbg p-[30px] rounded24 text-start">
                <img className="d-block" src={checkoutIcon} alt="Checkout Ads" />
                <span className="text-[30px] font-bold pt-2 pb-2 d-block">Checkout Ads</span>
                <p>Generate and share payment links on social media platforms, WhatsApp, SMS and receive instant payments.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="cta_6 appdevbg p-[30px] rounded24 text-start">
                <img className="d-block" src={apiAccessIcon} alt="API Access" />
                <span className="text-[30px] font-bold pt-2 pb-2 d-block">API Access</span>
                <p>Generate and share payment links on social media platforms, WhatsApp, SMS and receive instant payments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSolutionsSection;
