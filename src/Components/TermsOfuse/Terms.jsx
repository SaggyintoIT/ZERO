import React from 'react'
import Navbar from '../Homepage/Navbar/Navbar';
import Footer from '../Homepage/Footer/Footer';

export const Terms = () => {
  return (
<>
<Navbar/>
<section className="">
  <div className="bg-darkgreen">
    <div className="container">
      <div className="linebg1 py-[100px] relative">
        <div className="row items-center md:mt-0 mt-3 pt-75 relative">
          <div className="w-full md:w-full tracking-in-expand">
            <div className="w-full" >
              <div className="header-content text-center">
                <h1 className="text-[66px] color-3 pb-3" >
                  Terms of Use
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="sec-privacy py-[100px] px-32">
  <div className="privacy py-5">
    <div className="container">
      <h2 className="text-[42px] mb-3" >
        Terms of Use
      </h2>
      <p className="text-[18px]">
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
  </div>
</section>
<Footer/>

</>
  )
}
export default Terms;
