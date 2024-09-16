import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS styles

const PayLeader = () => {
  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array ensures AOS.init runs only once when the component is mounted

  return (
    <section className="text-center counter-bg">
      <div className="container relative py-10 md:py-[100px] px-4 md:px-0">
        <div className="relative">
          <div className="area">
            <ul className="circles">
              {Array(10).fill(null).map((_, idx) => (
                <li key={idx}></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="shap"></div>
        <div className="text-center px-4 md:px-40 mb-5" data-aos="fade-up">
          <h2 className="text-2xl md:text-[42px] font-bold mb-4">
            Partner with the payments leader
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="counter-box text-center p-4 md:p-6  rounded-lg " data-aos="fade-up" data-aos-delay="100">
            <div className="countertext font-bold flex justify-center items-center text-2xl">
              <span>+</span><span className="counter">2</span> M
            </div>
            <p className="text-sm md:text-base">Users</p>
          </div>
          <div className="counter-box text-center p-4 md:p-6  rounded-lg " data-aos="fade-up" data-aos-delay="200">
            <div className="countertext font-bold flex justify-center items-center text-2xl">
              <span>+</span><span className="counter">10</span> M
            </div>
            <p className="text-sm md:text-base">API Hits</p>
          </div>
          <div className="counter-box text-center p-4 md:p-6  rounded-lg " data-aos="fade-up" data-aos-delay="300">
            <div className="countertext font-bold flex justify-center items-center text-2xl">
              <span>+</span><span className="counter">10</span> k
            </div>
            <p className="text-sm md:text-base">Merchants</p>
          </div>
          <div className="counter-box text-center p-4 md:p-6  rounded-lg " data-aos="fade-up" data-aos-delay="400">
            <div className="countertext font-bold flex justify-center items-center text-2xl">
              <span>+</span><span className="counter">3</span> M
            </div>
            <p className="text-sm md:text-base">Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayLeader;
