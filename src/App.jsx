import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';
//import Projects from './Components/Pages/Projects';
import Contact from './Components/Pages/Contact';
import Blog from './Components/Pages/Blog';
import Resources from './Components/Pages/Resources';
import NotFound from './Components/Pages/NotFound';
import CareersOpportunities from './Components/Pages/CareersOpportunities'
import Careers from './Components/Pages/CareersOpportunities';
import Membership from './Components/Pages/Membership';
import MediaGallery from './Components/Pages/MediaGallery';
import ExecutiveChairman from './Components/Pages/ExecutiveChairman';
import Partners from './Components/Pages/Partners';
import Advocacy from './Components/Pages/Advocacy';
import Research from './Components/Pages/Research';
import CapacityBuilding from './Components/Pages/CapacityBuilding';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            {/* FIXED: Changed from /Advocacy to /services/advocacy to match navbar */}
            <Route path="/services/advocacy" element={<Advocacy />} />
            <Route path="/services/research" element={<Research />} />
            <Route path="/services/capacitybuilding" element={<CapacityBuilding />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/mediagallery" element={<MediaGallery />} />
            <Route path="/Partners" element={<Partners />} />
            <Route path="/CareersOpportunities" element={<Careers />} />
            <Route path="/ExecutiveChairman" element={<ExecutiveChairman />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;