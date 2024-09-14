import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS styles
import insights1 from '../../../assets/Insights1.jpg';
import insights2 from '../../../assets/Insights2.jpg';
import insights3 from '../../../assets/Insights3.jpg';
import '../../../csss/style.css'; // Ensure path is correct
import '../../../csss/bootstrap.min.css'; // Make sure this import doesn’t override your styles

const FeaturedInsights = () => {
  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array ensures AOS.init runs only once when the component is mounted

  return (
    <section className="bodypx ourworksection bg-white pl-36 pr-36" data-aos="fade-up">
      <div className="container px-md-1">
        <div className="linebg1 relative">
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
          <div className="whitelinebg py-[100px]">
            <div className="row">
              <div className="md:w-full text-center">
                <h2 className="text-[42px] font-bold md:mb-3 text-center">Featured Insights</h2>
                <p className="md:pr-4">
                  Explore our featured technology insights on news boards that are popular among our readers.
                </p>
              </div>
              <div className="pt-2 px-0">
                <div className="row">
                  <div className="md:w-1/3">
                    <div className="img-hover">
                      <img className="w-full inner-img" src={insights1} alt="Insight 1" />
                    </div>
                    <div className="Insights-text">
                      <span className="text-[18px] text-lgray3">March 25, 2024 | 6156 Views</span>
                      <a href="javascript:void(0)" className="d-block text-[30px] font-extrabold my-1 text-grey-900 hover:underline">
                        Passio.AI - An Edge AI Platform
                      </a>
                      <p className="md:pr-4">
                        How MindInventory contributed to the success of Passio - an edge AI platform, transforming the lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="img-hover">
                      <img className="w-full inner-img" src={insights2} alt="Insight 2" />
                    </div>
                    <div className="Insights-text">
                      <span className="text-[18px] text-lgray3">November 15, 2013 | 12705 Views</span>
                      <a href="javascript:void(0)" className="d-block text-[30px] font-extrabold my-1 text-grey-900 hover:underline">
                        Passio.AI - An Edge AI Platform
                      </a>
                      <p className="md:pr-4">
                        How MindInventory contributed to the success of Passio - an edge AI platform, transforming the lifestyle.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="img-hover">
                      <img className="w-full inner-img" src={insights3} alt="Insight 3" />
                    </div>
                    <div className="Insights-text">
                      <span className="text-[18px] text-lgray3">May 25, 2024 | 6156 Views</span>
                      <a href="javascript:void(0)" className="d-block text-[30px] font-extrabold my-1 text-grey-900 hover:underline">
                        Passio.AI - An Edge AI Platform
                      </a>
                      <p className="md:pr-4">
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
