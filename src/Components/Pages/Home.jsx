import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  TrendingUp,
  Globe,
  Ship,
  Waves,
  BookOpen,
  Image as ImageIcon,
  Video,
  Play
} from 'lucide-react';

const Home = () => {
  // Google Drive video IDs - All 4 videos are unique and verified
  const videoIds = [
    '18PFtwSc3rbfOetzHaOnbagjuSA9UobHV', // Video 1
    '1ioOdQbaMQtxLF1pisyJNIQZT8V5KvOCo', // Video 2
    '13JqEfYsYiBnHEepgPSOyA_XBiXyxJ0O4', // Video 3
    '1p_cmjos3Y8QV17pI1sPo6YyeyV-bwvSh'  // Video 4
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Auto-cycle through videos every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Add animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes slide-up {
        from { 
          opacity: 0; 
          transform: translateY(20px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      @keyframes float {
        0%, 100% { 
          transform: translateY(0px) translateX(0px); 
        }
        25% { 
          transform: translateY(-20px) translateX(10px); 
        }
        50% { 
          transform: translateY(-10px) translateX(-10px); 
        }
        75% { 
          transform: translateY(-15px) translateX(5px); 
        }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }
      .animate-slide-up {
        animation: slide-up 1s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="w-full overflow-x-hidden scroll-smooth" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* HERO */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Google Drive Video Background */}
        <div className="absolute inset-0">
          <iframe
            key={currentVideoIndex}
            src={`https://drive.google.com/file/d/${videoIds[currentVideoIndex]}/preview?autoplay=1`}
            className="w-full h-full"
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
            allow="autoplay"
            frameBorder="0"
          />
          
          {/* Opacity Overlays */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(19, 37, 82, 0.05), rgba(26, 51, 108, 0.05))' }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(19, 37, 82, 0.1), transparent)' }}></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20 flex flex-col items-center text-center text-white">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-6 animate-fade-in"
               style={{ backgroundColor: 'rgba(142, 52, 0, 0.2)', borderColor: 'rgba(142, 52, 0, 0.3)', backdropFilter: 'blur(8px)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#8E3400' }}></span>
            <span className="font-semibold text-sm" style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Leading West Africa's Maritime Future
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}>
            Shaping West Africa's
            <span className="block mt-3 drop-shadow-lg" style={{ color: '#8E3400' }}>
              Blue Economy
            </span>
          </h1>

          <p className="mt-2 text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed drop-shadow-md" style={{ color: 'rgba(255, 255, 255, 0.95)', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Pioneering sustainable maritime initiatives that drive economic growth
            and environmental stewardship across the Gulf of Guinea
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 rounded-xl font-bold transition-all shadow-2xl hover:scale-105"
              style={{ backgroundColor: '#8E3400', color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
            >
              <span>Discover Our Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

           
          </div>
        </div>
      </header>

      {/* ABOUT / WELCOME */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Who We Are</span>
              <h2 className="text-5xl md:text-6xl font-black leading-tight" 
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
                Driving Maritime Excellence in West Africa
              </h2>
              <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#8E3400' }}></div>
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                The Gulf of Guinea Maritime Institute (GoGMI) is a leading non-profit think tank dedicated to advancing maritime security, safety, and sustainable blue economy development across West Africa.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                Through strategic research, policy advocacy, and capacity building programs, we empower stakeholders to make informed decisions that drive positive change in the maritime sector.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all text-lg mt-4"
                style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Image on the right */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&fit=crop" 
                alt="Maritime professionals at work"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / WHAT WE DO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Our Services</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6" 
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              What We Do
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              Comprehensive maritime solutions addressing the critical needs of the Gulf of Guinea region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Maritime Security Research',
                desc: 'In-depth analysis of security challenges, threats, and opportunities in the Gulf of Guinea maritime domain.',
                color: '#132552'
              },
              {
                title: 'Policy Advocacy',
                desc: 'Strategic engagement with policymakers to shape effective maritime governance frameworks.',
                color: '#8E3400'
              },
              {
                title: 'Capacity Building',
                desc: 'Professional training programs and workshops for maritime stakeholders and youth.',
                color: '#1A336C'
              },
              {
                title: 'International Collaboration',
                desc: 'Facilitating partnerships between African and international maritime organizations.',
                color: '#6B2700'
              },
              {
                title: 'Blue Economy Development',
                desc: 'Promoting sustainable economic opportunities in fisheries, shipping, and marine resources.',
                color: '#132552'
              },
              {
                title: 'Youth Mentorship',
                desc: 'The Blue Mentorship Programme connecting young professionals with maritime career opportunities.',
                color: '#8E3400'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
                style={{ border: '1px solid rgba(19, 37, 82, 0.1)' }}
              >
                {/* Accent bar on top */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ backgroundColor: service.color }}
                ></div>
                
                <h3 className="text-2xl font-bold mb-4" 
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: '#132552' }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed text-base" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:scale-105"
              style={{ backgroundColor: '#8E3400', color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      
      {/* ABOUT THE GULF OF GUINEA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Our Region</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              The Gulf of Guinea
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[550px] group">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&fit=crop&q=90" 
                alt="Gulf of Guinea maritime view"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Professional gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Elegant caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white text-lg font-semibold" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}>
                  A vital maritime region connecting nations and economies
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                The Gulf of Guinea is one of the world's most critical maritime regions, stretching from Senegal to Angola and encompassing over 6,000 kilometers of coastline.
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                This region is vital for global trade, energy security, and economic development, yet faces significant challenges including maritime insecurity, illegal fishing, and environmental degradation.
              </p>
              
              {/* Countries List */}
              <div className="pt-4">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#132552', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                  Gulf of Guinea Countries:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    'Senegal', 'Guinea-Bissau', 'Guinea', 'Sierra Leone', 'Liberia', 
                    'Côte d\'Ivoire', 'Ghana', 'Togo', 'Benin', 'Nigeria', 
                    'Cameroon', 'Equatorial Guinea', 'Gabon', 'Congo', 
                    'DR Congo', 'Angola'
                  ].map((country, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#8E3400' }}></span>
                      <span style={{ color: '#4B5563' }}>{country}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" 
                     style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #ffffff 100%)' }}>
                  <div className="text-4xl font-black mb-3" 
                       style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552' }}>16</div>
                  <p className="font-semibold text-base" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Coastal Countries</p>
                </div>
                <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" 
                     style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #ffffff 100%)' }}>
                  <div className="text-4xl font-black mb-3" 
                       style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552' }}>400M+</div>
                  <p className="font-semibold text-base" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>People</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG SECTION - UPDATED WITH BRAND COLORS */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider inline-block mb-4" 
                  style={{ 
                    color: '#8E3400',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}>
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 text-gray-900"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1'
                }}>
              Aligned with UN Sustainable<br />Development Goals
            </h2>
            <div className="w-20 h-1 mx-auto mb-8 rounded-full"
                 style={{ backgroundColor: '#8E3400' }}></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" 
               style={{ 
                 color: '#4B5563',
                 fontFamily: 'Inter, sans-serif',
                 fontWeight: 400
               }}>
              Our work directly contributes to achieving global sustainability targets through maritime excellence and regional cooperation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: '14',
                title: 'Life Below Water',
                desc: 'Protecting marine ecosystems and promoting sustainable ocean resources management',
                bgColor: '#1F8DD6',
                textColor: '#ffffff'
              },
              {
                number: '8',
                title: 'Decent Work & Economic Growth',
                desc: 'Creating maritime employment opportunities and fostering sustainable economic development',
                bgColor: '#A21942',
                textColor: '#ffffff'
              },
              {
                number: '4',
                title: 'Quality Education',
                desc: 'Providing maritime training, capacity building, and professional development programs',
                bgColor: '#C5192D',
                textColor: '#ffffff'
              },
              {
                number: '13',
                title: 'Climate Action',
                desc: 'Addressing climate impacts on maritime environments and promoting environmental stewardship',
                bgColor: '#3F7E44',
                textColor: '#ffffff'
              },
              {
                number: '16',
                title: 'Peace, Justice & Strong Institutions',
                desc: 'Strengthening maritime security governance and promoting regional stability',
                bgColor: '#00689D',
                textColor: '#ffffff'
              },
              {
                number: '17',
                title: 'Partnerships for the Goals',
                desc: 'Building regional and international collaborations for maritime security and development',
                bgColor: '#19486A',
                textColor: '#ffffff'
              }
            ].map((sdg, idx) => (
              <div 
                key={idx} 
                className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                style={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb'
                }}
              >
                {/* Top colored bar */}
                <div 
                  className="h-2"
                  style={{ backgroundColor: sdg.bgColor }}
                ></div>

                <div className="p-8">
                  {/* SDG Number Badge */}
                  <div className="mb-6">
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-xl text-white font-black text-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: sdg.bgColor,
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 900
                      }}
                    >
                      {sdg.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        lineHeight: '1.3'
                      }}>
                    {sdg.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600" 
                     style={{ 
                       fontFamily: 'Inter, sans-serif',
                       fontWeight: 400
                     }}>
                    {sdg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
                 style={{ 
                   backgroundColor: '#fef3e2',
                   border: '2px solid #8E3400'
                 }}>
              <span className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: '#8E3400' }}></span>
              <span className="font-semibold text-base" 
                    style={{ 
                      color: '#8E3400',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600
                    }}>
                Contributing to a sustainable maritime future
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Trusted By</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Our Strategic Partners
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              Working alongside leading organizations to advance maritime excellence across West Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'UNESCO', initial: 'UNESCO' },
              { name: 'IMO', initial: 'IMO' },
              { name: 'ECOWAS', initial: 'ECOWAS' },
              { name: 'ECCAS', initial: 'ECCAS' },
              { name: 'EU', initial: 'EU' },
              { name: 'GGC', initial: 'GGC' }
            ].map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center p-8 rounded-2xl transition-all duration-500 hover:shadow-xl group cursor-pointer"
                   style={{ backgroundColor: '#F5F7FA' }}
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(142, 52, 0, 0.08)'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F7FA'}
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-all duration-500 mx-auto mb-3 shadow-lg"
                       style={{ background: 'linear-gradient(135deg, #132552 0%, #1A336C 100%)', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                    {partner.initial}
                  </div>
                  <p className="text-xs font-semibold" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/partners"
              className="font-semibold transition-colors inline-flex items-center gap-2"
              style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#6B2700'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#8E3400'}
            >
              <span>View All Partners</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NEWS SECTION */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Stay Informed</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Latest News & Updates
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              Insights, research findings, and maritime developments from across the Gulf of Guinea
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Events',
                title: 'Regional Maritime Security Conference 2024',
                excerpt: 'GoGMI hosts 200+ maritime professionals from 15 countries to discuss emerging security challenges.',
                date: 'November 15, 2024',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&fit=crop'
              },
              {
                category: 'News',
                title: 'New Blue Economy Investment Report Released',
                excerpt: 'Latest research explores untapped opportunities in sustainable fisheries and marine tourism.',
                date: 'November 10, 2024',
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&fit=crop'
              },
              {
                category: 'Training',
                title: '50+ Professionals Complete Maritime Certification',
                excerpt: 'Our latest cohort successfully graduates from comprehensive maritime security programs.',
                date: 'November 5, 2024',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&fit=crop'
              }
            ].map((news, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg"
                          style={{ backgroundColor: '#132552' }}>
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#8E3400' }}></span>
                    {news.date}
                  </p>
                  <h3 className="text-xl font-bold mb-3 transition-colors leading-tight"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, color: '#132552' }}>
                    {news.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>{news.excerpt}</p>
                  <Link to="/blog" className="font-semibold flex items-center group-hover:gap-3 transition-all"
                        style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden" 
               style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #ffffff 50%, #F5F7FA 100%)' }}>
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
             style={{ backgroundColor: '#8E3400' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
             style={{ backgroundColor: '#132552' }}></div>
             
        <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
            Join us in shaping the future of West Africa's maritime sector
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105 hover:shadow-2xl group"
              style={{ backgroundColor: '#8E3400', color: 'white', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-lg"
              style={{ border: '2px solid #132552', color: '#132552', backgroundColor: 'transparent', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#132552'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#132552'; }}
            >
              <span>Learn More</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;