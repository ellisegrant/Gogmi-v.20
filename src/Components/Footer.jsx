import React from 'react';
import { Link } from 'react-router-dom';
import { Waves, MapPin, Mail, Phone, Linkedin, Twitter, Facebook, ArrowRight, Youtube, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#132552] to-[#1A336C] rounded-xl flex items-center justify-center">
                <Waves className="w-6 h-6 text-[#8E3400]" />
              </div>
              <div>
                <div className="font-bold text-xl" style={{ fontWeight: 700 }}>GoGMI</div>
                <div className="text-sm text-gray-400" style={{ fontWeight: 400 }}>Gulf of Guinea Maritime Institute</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400" style={{ fontWeight: 400 }}>
                <MapPin className="w-5 h-5 text-[#8E3400] flex-shrink-0" />
                <span>Accra, Ghana</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400" style={{ fontWeight: 400 }}>
                <Mail className="w-5 h-5 text-[#8E3400] flex-shrink-0" />
                <span>info@gogmi.org.gh</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400" style={{ fontWeight: 400 }}>
                <Phone className="w-5 h-5 text-[#8E3400] flex-shrink-0" />
                <span>+233 50 4953400</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontWeight: 700 }}>Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Membership', path: '/Membership' },
                { name: 'Blog', path: '/blog' }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-[#8E3400] transition-colors flex items-center group"
                    style={{ fontWeight: 400 }}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ fontWeight: 700 }}>Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Library', path: '/Resources' },
                { name: 'News & Updates', path: '/blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'Careers', path: '/CareersOpportunities' },
                { name: 'Partners', path: '/partners' }
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-gray-400 hover:text-[#8E3400] transition-colors flex items-center group"
                    style={{ fontWeight: 400 }}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bold text-lg mb-4" style={{ fontWeight: 700 }}>Connect With Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 hover:text-white transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-lg mb-3 text-center md:text-left" style={{ fontWeight: 700 }}>Subscribe to Newsletter</h3>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8E3400] text-sm"
                  style={{ fontWeight: 400 }}
                />
                <button className="bg-[#8E3400] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#6B2700] transition-all text-sm" style={{ fontWeight: 600 }}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p style={{ fontWeight: 400 }}>© 2025 GoGMI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#8E3400] transition-colors" style={{ fontWeight: 400 }}>Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#8E3400] transition-colors" style={{ fontWeight: 400 }}>Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-[#8E3400] transition-colors" style={{ fontWeight: 400 }}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;