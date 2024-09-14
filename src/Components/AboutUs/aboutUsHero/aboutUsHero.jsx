import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS styles
import Navbar from '../../Homepage/Navbar/Navbar';
import mission from '../../../assets/mission.svg'
import vision from '../../../assets/vision.svg'
import values from '../../../assets/values.svg'
import leader1 from '../../../assets/leadership_1.jpg'
import leader2 from '../../../assets/leadership_2.jpg'
import leader3 from '../../../assets/leadership_3.jpg'
import leader4 from '../../../assets/leadership_4.jpg'
import FeaturedInsights from '../../Homepage/Insights/insights';
import FaqSection from '../../Homepage/FAQ/FaqSection';
import Footer from '../../Homepage/Footer/Footer';

const AboutHeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array ensures AOS.init runs only once when the component is mounted

  return (
    <>
    <Navbar/>
    <section className="">
      <div className="bg-darkgreen">
        <div className="container">
          <div className="linebg1 py-[100px] relative">
            <ul className="linebg2">
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
            <div className="row align-center mt-md-0 mt-3 pt-75 relative pl-32 pr-24">
              <div className="md:w-full tracking-in-expand">
                <div className="w-full" data-aos="fade-right">
                  <div className="header-content md:pb-5">
                    <h1 className="text-[42px] color-3 pb-3">About Zerogateway</h1>
                    <span className="text-[30px] text-white md:my-3 d-block">Who we are</span>
                    <p className="" data-aos="zoom-in">
                      Zerogateway is the next-generation Payment Solutions Provider (PSP), offering a broad range of payment solutions to financial institutions, merchants, enterprises & consumers world-wide, with a vision of democratizing e-payments. Zerogateway aims to avail payment solutions to everyone, everywhere to pay & get paid!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="text-center">
      <div className="container">
        <div className="linebg1 py-100 relative">
          <ul className="linebg2 whitelinebg">
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

          <div className="row flex md:items-center relative pl-32 pr-32">
            <div className="md:w-1/3 mb-4" data-aos="fade-right">
              <div className="cta_1 appdevbg p-[30px] rounded-[24px] text-left">
                <img className="d-block" src={vision} alt="Vision" />
                <span className="text-[30px] font-semibold pt-2 pb-2 d-block">Vision</span>
                <p>Present advertisements to your customers on the checkout page to promote your affiliate brands or your own business.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-4" data-aos="fade-up">
              <div className="cta_2 appdevbg p-[30px] rounded-[24px] text-start">
                <img className="d-block" src={mission} alt="Mission" />
                <span className="text-[30px] font-semibold pt-2 pb-2 d-block">Mission</span>
                <p>Share the QR code of your payment handle on social media platforms, WhatsApp, SMS and receive instant payments.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-left">
              <div className="cta_3 appdevbg p-[30px] rounded-[24px] text-start">
                <img className="d-block" src={values} alt="Values" />
                <span className="text-[30px] font-semibold pt-2 pb-2 d-block">Values</span>
                <p>Forget about settlement issues. All payments are processed and settled in real-time to ensure trust and improve cash flow.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container-fluid py-[100px] lightcrembg pl-28 pr-28">
      <div className="container" data-aos="fade-up">
        <div className="section-title pb-4 md:pb-4">
          <h2 className="color-6 text-[40px]">Leadership</h2>
        </div>
        <div className="row">
          <div className="w-full sm:w-1/2 md:w-1/4 mt-0 md:mt-0 mt-3">
            <div className="team-item bg-white overflow-hidden">
              <div className="team-img relative overflow-hidden">
                <img className="img-fluid w-full" src={leader1} alt="Waleed Sadek" />
                <div className="team-social">
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-twitter fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-facebook-f fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-instagram fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-linkedin-in fw-normal"></i></a>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h4 className="text-[24px] mb-0">Waleed Sadek</h4>
                <p className="mb-1 color-1 opacity-5">Founder & CEO</p>
                <p className="mb-0">Ex-Visa, Bitel</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mt-0 md:mt-0 mt-3">
            <div className="team-item bg-white overflow-hidden">
              <div className="team-img relative overflow-hidden">
                <img className="img-fluid w-full" src={leader2} alt="Mohamed Hassan" />
                <div className="team-social">
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-twitter fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-facebook-f fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-instagram fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-linkedin-in fw-normal"></i></a>
                </div>
              </div>
              <div className="md:p-4 p-3">
                <h4 className="fs-24 mb-0">Mohamed Hassan</h4>
                <p className="mb-1 color-1 opacity-5">COO</p>
                <p className="mb-0">Ex-Bitel, CityNet</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mt-0 md:mt-0 mt-3">
            <div className="team-item bg-white overflow-hidden">
              <div className="team-img relative overflow-hidden">
                <img className="img-fluid w-full" src={leader3} alt="Sarah El Sokkary" />
                <div className="team-social">
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-twitter fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-facebook-f fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-instagram fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-linkedin-in fw-normal"></i></a>
                </div>
              </div>
              <div className="md:p-4 p-3">
                <h4 className="fs-24 mb-0">Sarah El Sokkary</h4>
                <p className="mb-1 color-1 opacity-5">CSO</p>
                <p className="mb-0">Ex-Jumia, TPay</p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mt-0 md:mt-0 mt-3">
            <div className="team-item bg-light overflow-hidden">
              <div className="team-img relative overflow-hidden">
                <img className="img-fluid w-full" src={leader4} alt="Waheed Mozaffar" />
                <div className="team-social">
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-twitter fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-facebook-f fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-instagram fw-normal"></i></a>
                  <a className="socialicon" href="javascript:void(0);"><i className="fab fa-linkedin-in fw-normal"></i></a>
                </div>
              </div>
              <div className="md:p-4 p-3">
                <h4 className="text-[24px] mb-0">Waheed Mozaffar</h4>
                <p className="mb-1 color-1 opacity-5">CIO</p>
                <p className="mb-0">Ex-FH, UNB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FeaturedInsights/>
    <FaqSection/>
    <Footer/>
    </>
  );
};

export default AboutHeroSection;
