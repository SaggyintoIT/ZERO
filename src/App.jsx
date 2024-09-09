import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
/* Add this to your global CSS file */

// Import Bootstrap CSS and JS in your React entry file (index.js or App.js)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'aos/dist/aos.css';
import './csss/aos.css'
import './csss/bootstrap.min.css'
import './csss/fontawesome.min.css'
import './csss/slick-theme.css'
import './csss/sScrollBar.css'
import './csss/style.css'
import './csss/swiper-bundle.min.css'
import {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure to import AOS styles
import AboutHeroSection from './Components/AboutUs/aboutUsHero/aboutUsHero';
import Pricing from './Components/Pricing/Pricing';
import Blog from './Components/Blog/Blog';
import { Contactus } from './Components/ContactUs/Contactus';
import LoginPage from './Components/Login/Login';
import SignUpPage from './Components/SignUp/SignUp';
import PrivacyPolicySection from './Components/Privacy/Privacy';
import Terms from './Components/TermsOfuse/Terms';
import Refund from './Components/Refund/Refund';
import ThankYou from './Components/ThankYou/ThankYou';
import HomePage from './Components/Homepage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Global animation duration (1.5 seconds)
      once: true,     // Animations will occur only once
     
    });
  }, []);

  return (
    <>
      <Router>
  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutHeroSection />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contactus" element={<Contactus/>} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/Privacy" element={<PrivacyPolicySection />}/>
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Refund" element={<Refund/>} />
          <Route path="/ThankYou" element={<ThankYou />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
