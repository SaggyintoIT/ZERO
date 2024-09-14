import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS styles

const PayLeader = () => {
  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array ensures AOS.init runs only once when the component is mounted

  return (
    <section className="text-center counter-bg">
      <div className="container relative py-[100px]">
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
        <div className="text-center px-40 mb-5" data-aos="fade-up" >
          <h2 className="text-[42px] font-bold md:mb-4 text-center">
            Partner with the payments leader
          </h2>
        </div>
        <div className="row">
          <div className="four col-md-3 col-6">
            <div className="counter-box">
              <div className="countertext font-bold flex justify-center w-full">
                <span>+</span><span className="counter">2</span> M
              </div>
              <p>Users</p>
            </div>
          </div>
          <div className="four col-md-3 col-6">
            <div className="counter-box">
              <div className="countertext font-bold flex justify-center w-full">
                <span>+</span><span className="counter">10</span> M
              </div>
              <p>API Hits</p>
            </div>
          </div>
          <div className="four col-md-3 col-6">
            <div className="counter-box">
              <div className="countertext font-bold flex justify-center w-full">
                <span>+</span><span className="counter">10</span> k
              </div>
              <p>Merchants</p>
            </div>
          </div>
          <div className="four col-md-3 col-6">
            <div className="counter-box">
              <div className="countertext font-bold flex justify-center w-full">
                <span>+</span><span className="counter">3</span> M
              </div>
              <p>Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayLeader;
