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
      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(60px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes expandWidth {
        from {
          transform: scaleX(0);
        }
        to {
          transform: scaleX(1);
        }
      }
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.7;
        }
      }
      @keyframes ping {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        50% {
          transform: scale(1.2);
          opacity: 0.7;
        }
        100% {
          transform: scale(1);
          opacity: 1;
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
    <div className="w-full overflow-x-hidden scroll-smooth" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>

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
               style={{ backgroundColor: 'rgba(193, 168, 117, 0.2)', borderColor: 'rgba(193, 168, 117, 0.3)', backdropFilter: 'blur(8px)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C1A875' }}></span>
            <span className="font-semibold text-sm" style={{ color: '#C1A875' }}>
              Leading West Africa's Maritime Future
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Shaping West Africa's
            <span className="block mt-3 drop-shadow-lg" style={{ color: '#C1A875' }}>
              Blue Economy
            </span>
          </h1>

          <p className="mt-2 text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed drop-shadow-md" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
            Pioneering sustainable maritime initiatives that drive economic growth
            and environmental stewardship across the Gulf of Guinea
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 rounded-xl font-bold transition-all shadow-2xl hover:scale-105"
              style={{ backgroundColor: '#C1A875', color: '#132552' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A4E3A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}
            >
              <span>Discover Our Mission</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(16px)', border: '2px solid rgba(255, 255, 255, 0.4)', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <Globe className="w-5 h-5" />
              <span>View Our Projects</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ABOUT / WELCOME */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Who We Are</span>
              <h2 className="text-5xl md:text-6xl font-black leading-tight" 
                  style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
                Driving Maritime Excellence in West Africa
              </h2>
              <div className="w-20 h-1 rounded-full" style={{ backgroundColor: '#C1A875' }}></div>
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                The Gulf of Guinea Maritime Institute (GoGMI) is a leading non-profit think tank dedicated to advancing maritime security, safety, and sustainable blue economy development across West Africa.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                Through strategic research, policy advocacy, and capacity building programs, we empower stakeholders to make informed decisions that drive positive change in the maritime sector.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-bold hover:gap-4 transition-all text-lg mt-4"
                style={{ color: '#C1A875' }}
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
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Our Services</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6" 
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              What We Do
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
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
                color: '#C1A875'
              },
              {
                title: 'Capacity Building',
                desc: 'Professional training programs and workshops for maritime stakeholders and youth.',
                color: '#1A336C'
              },
              {
                title: 'International Collaboration',
                desc: 'Facilitating partnerships between African and international maritime organizations.',
                color: '#7A4E3A'
              },
              {
                title: 'Blue Economy Development',
                desc: 'Promoting sustainable economic opportunities in fisheries, shipping, and marine resources.',
                color: '#132552'
              },
              {
                title: 'Youth Mentorship',
                desc: 'The Blue Mentorship Programme connecting young professionals with maritime career opportunities.',
                color: '#C1A875'
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
                    style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed text-base" style={{ color: '#4B5563' }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:scale-105"
              style={{ backgroundColor: '#132552', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A336C'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#132552'}
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
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Our Region</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
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
                <p className="text-white text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A vital maritime region connecting nations and economies
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed" style={{ color: '#4B5563' }}>
                The Gulf of Guinea is one of the world's most critical maritime regions, stretching from Senegal to Angola and encompassing over 6,000 kilometers of coastline.
              </p>
              <p className="text-xl leading-relaxed" style={{ color: '#4B5563' }}>
                This region is vital for global trade, energy security, and economic development, yet faces significant challenges including maritime insecurity, illegal fishing, and environmental degradation.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" 
                     style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #ffffff 100%)' }}>
                  <div className="text-4xl font-black mb-3" 
                       style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>16</div>
                  <p className="font-semibold text-base" style={{ color: '#4B5563' }}>Coastal Nations</p>
                </div>
                <div className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" 
                     style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #ffffff 100%)' }}>
                  <div className="text-4xl font-black mb-3" 
                       style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>400M+</div>
                  <p className="font-semibold text-base" style={{ color: '#4B5563' }}>People</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG SECTION */}
      <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #132552 0%, #1A336C 50%, #132552 100%)' }}>
        {/* Animated background elements - floating orbs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse" 
               style={{ 
                 backgroundColor: '#C1A875',
                 animation: 'float 8s ease-in-out infinite'
               }}></div>
          <div className="absolute bottom-32 right-20 w-72 h-72 rounded-full blur-3xl" 
               style={{ 
                 backgroundColor: '#7A4E3A',
                 animation: 'float 10s ease-in-out infinite reverse'
               }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl" 
               style={{ 
                 backgroundColor: '#C1A875',
                 animation: 'float 12s ease-in-out infinite',
                 animationDelay: '2s'
               }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(193, 168, 117, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(193, 168, 117, 0.3) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}></div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="font-semibold text-sm uppercase tracking-wider inline-block mb-4" 
                  style={{ 
                    color: '#C1A875',
                    animation: 'fadeInDown 0.8s ease-out'
                  }}>
              Our Commitment
            </span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6 text-white"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: '-0.02em',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both'
                }}>
              Aligned with UN Sustainable Development Goals
            </h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full"
                 style={{ 
                   background: 'linear-gradient(90deg, transparent, #C1A875, transparent)',
                   animation: 'expandWidth 1s ease-out 0.6s both'
                 }}></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" 
               style={{ 
                 color: 'rgba(255, 255, 255, 0.9)',
                 animation: 'fadeInUp 0.8s ease-out 0.4s both'
               }}>
              Our work directly contributes to achieving global sustainability targets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '14',
                title: 'Life Below Water',
                desc: 'Protecting marine ecosystems and promoting sustainable ocean resources',
                gradient: 'linear-gradient(135deg, #1976D2 0%, #0D47A1 100%)',
                icon: '🌊',
                delay: '0s'
              },
              {
                number: '8',
                title: 'Decent Work & Economic Growth',
                desc: 'Creating maritime employment opportunities and economic development',
                gradient: 'linear-gradient(135deg, #A1003C 0%, #6D0026 100%)',
                icon: '📈',
                delay: '0.2s'
              },
              {
                number: '17',
                title: 'Partnerships for the Goals',
                desc: 'Building regional and international collaborations for maritime security',
                gradient: 'linear-gradient(135deg, #19486A 0%, #0D2535 100%)',
                icon: '🤝',
                delay: '0.4s'
              }
            ].map((sdg, idx) => (
              <div 
                key={idx} 
                className="relative rounded-3xl p-10 border-2 transition-all duration-700 hover:scale-105 hover:shadow-2xl group"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  borderColor: 'rgba(193, 168, 117, 0.2)',
                  animation: `slideInUp 0.8s ease-out ${sdg.delay} both`,
                  transformOrigin: 'bottom'
                }}
              >
                {/* Animated top accent */}
                <div 
                  className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl transition-all duration-500"
                  style={{ 
                    background: sdg.gradient,
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    animation: `expandWidth 1s ease-out ${parseFloat(sdg.delay) + 0.6}s both`
                  }}
                ></div>

                <div className="flex items-start gap-4 mb-6">
                  <div 
                    className="text-6xl font-extrabold w-24 h-24 rounded-2xl flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{ 
                      background: sdg.gradient,
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  >
                    {sdg.number}
                  </div>
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500" 
                       style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '0.5s' }}>
                    {sdg.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-opacity-90 transition-all"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                  {sdg.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>{sdg.desc}</p>

                {/* Subtle hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ 
                       background: `radial-gradient(circle at center, ${sdg.gradient.match(/#[0-9A-F]{6}/i)?.[0]}15, transparent 70%)`,
                       filter: 'blur(20px)'
                     }}></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2"
                 style={{ 
                   backgroundColor: 'rgba(193, 168, 117, 0.15)',
                   borderColor: 'rgba(193, 168, 117, 0.4)',
                   backdropFilter: 'blur(10px)',
                   animation: 'pulse 2s ease-in-out infinite'
                 }}>
              <span className="w-3 h-3 rounded-full" 
                    style={{ 
                      backgroundColor: '#C1A875',
                      animation: 'ping 2s ease-in-out infinite'
                    }}></span>
              <span className="font-semibold text-lg" style={{ color: '#C1A875' }}>
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
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Trusted By</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Our Strategic Partners
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
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
                   onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(193, 168, 117, 0.08)'}
                   onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F7FA'}
              >
                <div className="text-center">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-all duration-500 mx-auto mb-3 shadow-lg"
                       style={{ background: 'linear-gradient(135deg, #132552 0%, #1A336C 100%)' }}>
                    {partner.initial}
                  </div>
                  <p className="text-xs font-semibold" style={{ color: '#4B5563' }}>{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/partners"
              className="font-semibold transition-colors inline-flex items-center gap-2"
              style={{ color: '#132552' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#C1A875'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#132552'}
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
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Stay Informed</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Latest News & Updates
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
              Insights, research findings, and maritime developments from across the Gulf of Guinea
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Security',
                title: 'Regional Maritime Security Conference 2024',
                excerpt: 'GoGMI hosts 200+ maritime professionals from 15 countries to discuss emerging security challenges.',
                date: 'November 15, 2024',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&fit=crop'
              },
              {
                category: 'Research',
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
                  <p className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: '#C1A875' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C1A875' }}></span>
                    {news.date}
                  </p>
                  <h3 className="text-xl font-bold mb-3 transition-colors leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                    {news.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed" style={{ color: '#4B5563' }}>{news.excerpt}</p>
                  <Link to="/blog" className="font-semibold flex items-center group-hover:gap-3 transition-all"
                        style={{ color: '#C1A875' }}>
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:scale-105"
              style={{ backgroundColor: '#132552', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A336C'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#132552'}
            >
              <span>View All News</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* MEDIA SHOWCASE SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>In the Spotlight</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Media Gallery
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
              Explore photos and videos from our events, programs, and maritime initiatives across the Gulf of Guinea
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                type: 'photo',
                title: 'Maritime Security Conference 2024',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&fit=crop',
                category: 'Events'
              },
              {
                type: 'video',
                title: 'Blue Economy Opportunities',
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&fit=crop',
                category: 'Videos',
                duration: '12:45'
              },
              {
                type: 'photo',
                title: 'Blue Mentorship Programme',
                image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&fit=crop',
                category: 'Programs'
              },
              {
                type: 'photo',
                title: 'Regional Training Workshop',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&fit=crop',
                category: 'Training'
              }
            ].map((media, idx) => (
              <Link
                key={idx}
                to="/media"
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={media.image}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 text-white backdrop-blur-sm"
                          style={{ backgroundColor: 'rgba(19, 37, 82, 0.9)' }}>
                      {media.type === 'video' ? (
                        <>
                          <Video className="w-3 h-3" />
                          VIDEO
                        </>
                      ) : (
                        <>
                          <ImageIcon className="w-3 h-3" />
                          PHOTO
                        </>
                      )}
                    </span>
                  </div>

                  {/* Video Play Button */}
                  {media.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl"
                           style={{ backgroundColor: '#C1A875' }}>
                        <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  {/* Duration Badge for Videos */}
                  {media.duration && (
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold">
                      {media.duration}
                    </div>
                  )}

                  {/* Title at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: '#C1A875' }}>{media.category}</p>
                    <h3 className="text-white text-lg font-bold group-hover:translate-x-1 transition-transform leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {media.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View Full Gallery Button */}
          <div className="text-center">
            <Link
              to="/MediaGallery"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #132552 0%, #1A336C 100%)', color: 'white' }}
            >
              <ImageIcon className="w-6 h-6" />
              <span>View Full Media Gallery</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden" 
               style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #ffffff 50%, #F5F7FA 100%)' }}>
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
             style={{ backgroundColor: '#C1A875' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
             style={{ backgroundColor: '#132552' }}></div>
             
        <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: '#4B5563' }}>
            Join us in shaping the future of West Africa's maritime sector
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105 hover:shadow-2xl group"
              style={{ backgroundColor: '#C1A875', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A4E3A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-lg"
              style={{ border: '2px solid #132552', color: '#132552', backgroundColor: 'transparent' }}
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