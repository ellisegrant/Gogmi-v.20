import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, ArrowRight, Waves, Ship, TrendingUp, Users, Award, ChevronDown } from 'lucide-react';

const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About Us', 'Services', 'Projects', 'Contact'];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: <Award className="w-8 h-8" /> },
    { number: '200+', label: 'Partners Worldwide', icon: <Users className="w-8 h-8" /> },
    { number: '15+', label: 'Years Experience', icon: <TrendingUp className="w-8 h-8" /> },
  ];

  const features = [
    {
      icon: <Ship className="w-12 h-12" />,
      title: 'Maritime Research',
      description: 'Cutting-edge research driving sustainable blue economy development across West Africa'
    },
    {
      icon: <Waves className="w-12 h-12" />,
      title: 'Ocean Conservation',
      description: 'Innovative approaches to marine ecosystem protection and sustainable resource management'
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: 'Policy Development',
      description: 'Strategic frameworks shaping maritime governance and regional cooperation'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Glassmorphic Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' 
          : 'bg-white/10 backdrop-blur-md py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <Waves className="w-6 h-6 text-yellow-500" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              GOGMI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  scrolled
                    ? 'text-gray-700 hover:text-blue-900'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            ))}
            <button className="ml-4 bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 mt-3 py-4 px-6 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item}
                className="block w-full text-left py-3 text-gray-700 hover:text-blue-900 font-medium"
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-4 bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          {/* Using a placeholder - Replace with actual video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23003366;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23001a33;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23g)'/%3E%3C/svg%3E"
          >
            {/* Add your video source here */}
            {/* <source src="/path-to-your-maritime-video.mp4" type="video/mp4" /> */}
          </video>
          
          {/* Fallback: Animated maritime background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
            {/* Animated subtle waves */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 50%, rgba(218,165,32,0.1) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(218,165,32,0.1) 0%, transparent 50%)
                `
              }}></div>
            </div>
          </div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Shaping West Africa's<br />Blue Economy
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Pioneering sustainable maritime initiatives that drive economic growth and environmental stewardship
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all flex items-center space-x-2">
              <span>Explore Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-yellow-500">
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-bold text-blue-900">
                    {stat.number}
                  </div>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Welcome to GOGMI
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Where we explore and foster the Blue Economy in West Africa. Our mission is to innovate and support sustainable maritime initiatives that drive economic growth and environmental stewardship. Dive into our projects and services to learn how we are shaping a prosperous future.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-blue-900 mb-6 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-yellow-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join us in creating a sustainable maritime future for West Africa. Let's collaborate on innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition-all flex items-center justify-center space-x-2">
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <Waves className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <div className="font-bold">GOGMI</div>
                <div className="text-xs text-gray-400">Blue Economy Excellence</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              © 2023 GOGMI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HomePage;