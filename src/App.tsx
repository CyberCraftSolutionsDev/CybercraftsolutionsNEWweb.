import React from 'react';
import Spinner from './components/Spinner';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import OfferSection from './pages/Offer';
import AboutFeaturesTeam from './pages/About';
import ServicesAndTestimonials from './pages/Services';
import BlogSection from './pages/Blog';
import Contact from './pages/Contact';

import Team from './pages/Team';
import Features from './pages/Features';

import Kraetims from './pages/Kra-etims';
import SoftwareDevelopment from './pages/SoftDev';
import PrivacyPolicy from './pages/privacypolicy';
import Apply from './pages/Apply';
import { Helmet } from 'react-helmet';
import WhatsAppIcon from './components/Whatsappicon';

const App: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Cyber+Craft+Solutions- Innovative Tech Solutions for Businesses</title>
        <meta name="description" content="Cyber+Craft+Solutions offers innovative technology solutions to help businesses grow, including software development and consulting services." />
        <meta name="keywords" content="technology solutions, software development, consulting, business growth" />
        
        <meta name="author" content="" />

        <meta property="og:title" content="Cyber+Craft+Solutions - Technology Solutions for Your Business" />
  <meta property="og:description" content="Cyber+Craft+Solutions offers cutting-edge software development and consulting to help businesses grow." />
  <meta property="og:image" content="https://www.cybercraftsolutions.com/images/og-image.jpg" />
  <meta property="og:url" content="https://www.cybercraftsolutions.com" />
  
  
  
      </Helmet>
 
      <Topbar />
      <Navbar /> {/* This Navbar will appear on all pages */}
      
      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<OfferSection />} />
        <Route path="/about" element={<AboutFeaturesTeam />} />
        <Route path="/services" element={<ServicesAndTestimonials />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/contact" element={<Contact />} />
      
        <Route path="/team" element={<Team/>} />
      
        <Route path="/kra-etims" element={<Kraetims/>} />
        <Route path="/soft-dev" element={<SoftwareDevelopment/>} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/apply" element={<Apply/>} />
      </Routes>
      <div>
        <WhatsAppIcon />
       
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
