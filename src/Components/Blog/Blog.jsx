import React from 'react';
import Navbar from '../Homepage/Navbar/Navbar';
import insights1 from '../../assets/Insights1.jpg';
import BlogSearch from './BlogSerch'; // Fixed typo from 'BlogSerch' to 'BlogSearch'
import Footer from '../Homepage/Footer/Footer';
import Subscribe from './Subscribe';

const Blog = () => {
  return (
    <>
      <Navbar />
      <section className="bg-darkgreen">
        <div className="w-full">
          <div className="linebg1 py-20 md:py-32 relative">
            <ul className="linebg2">
              {/* You can keep these list items if they serve a purpose, or remove them */}
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
            <div className="row align-center mt-4 md:mt-0 mt-3 pt-8 md:pt-16 relative">
              <div className="w-full text-center">
                <div className="header-content pb-5 text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-white pb-3">Zerogateway Blogs</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bodypx ourworksection bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="linebg1 relative">
            <ul className="linebg2 whitelinebg m-0">
              {/* You can keep these list items if they serve a purpose, or remove them */}
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
            <div className="whitelinebg py-16 px-4 md:py-20 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(9)].map((_, index) => (
                  <div key={index} className="space-y-4">
                    <div className="img-hover">
                      <img className="w-full h-auto" src={insights1} alt={`Insight ${index + 1}`} />
                    </div>
                    <div className="Insights-text">
                      <span className="text-base text-lgray3">March 25, 2024 | 6156 Views</span>
                      <a href="javascript:void(0)" className="d-block text-xl md:text-2xl font-semibold my-1 color-1 hover:underline">
                        Passio.AI - An Edge AI Platform
                      </a>
                      <p className="md:pr-6">
                        How MindInventory contributed to the success of Passio - an edge AI platform, transforming the lifestyle.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </>
  );
};

export default Blog;
