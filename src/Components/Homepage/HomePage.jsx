import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/Hero';
import PaymentSolutionsSection from './PaymentSoln/PaymentSoln';
import PayLeader from './PaymentLeader/PayLeader';
import TestimonialSection from './Testimonial/Testimonial';
import FeaturedInsights from './Insights/insights';
import FaqSection from './FAQ/FaqSection';
import Footer from './Footer/Footer';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <PaymentSolutionsSection/>
    <PayLeader/>
    <TestimonialSection/>
    <FeaturedInsights/>
    <FaqSection/>
    <Footer/>
    </>

  )
}

export default HomePage;