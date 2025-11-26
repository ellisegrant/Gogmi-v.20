import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  TrendingUp,
  Globe,
  BookOpen,
  Image as ImageIcon,
  Video,
  Play
} from 'lucide-react';

const Home = () => {
  // YouTube Video ID
  const youtubeVideoId = 'XgzCbENPQn0';

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
      /* Hide YouTube loading spinner and branding */
      iframe[src*="youtube"] {
        opacity: 1;
        transition: opacity 0.3s ease-in;
      }
      .ytp-spinner,
      .ytp-large-play-button,
      .ytp-title,
      .ytp-watermark,
      .ytp-chrome-top,
      .ytp-show-cards-title,
      .ytp-pause-overlay {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="w-full overflow-x-hidden scroll-smooth" style={{ fontFamily: "Inter, sans-serif" }}>

      {/* HERO */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0">
          {/* Fallback Background Image */}
          <div className="absolute inset-0 bg-cover bg-center" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&fit=crop&q=90)' }}>
          </div>
          
          {/* YouTube Video Overlay */}
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3&start=0`}
            className="w-full h-full"
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '100%',
              minHeight: '100%',
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 aspect ratio
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 1,
              border: 'none',
              overflow: 'hidden'
            }}
            allow="autoplay; fullscreen"
            frameBorder="0"
            title="Hero Background Video"
          />
          
          {/* Opacity Overlays */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, rgba(19, 37, 82, 0.05), rgba(26, 51, 108, 0.05))', zIndex: 2 }}></div>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(19, 37, 82, 0.1), transparent)', zIndex: 2 }}></div>
        </div>

        <div className="relative container mx-auto max-w-6xl px-6 py-20 flex flex-col items-center text-center text-white" style={{ zIndex: 10 }}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-6 animate-fade-in"
               style={{ backgroundColor: 'rgba(142, 52, 0, 0.2)', borderColor: 'rgba(142, 52, 0, 0.3)', backdropFilter: 'blur(8px)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#8E3400' }}></span>
            <span className="font-semibold text-sm" style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Leading West Africa's Maritime Future
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 900 }}>
            Shaping The Gulf of Guinea
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

      {/* ABOUT / WELCOME - PROFESSIONAL LAYOUT */}
      <section className="py-32 md:py-40" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-[1400px] px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Content - 5 columns */}
            <div className="space-y-8 lg:col-span-5">
              <div>
                <span className="font-semibold text-sm uppercase tracking-wider inline-block mb-6" 
                      style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                  Who We Are
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8" 
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
                  Driving Maritime Excellence in the Gulf of Guinea
                </h2>
                <div className="w-20 h-1.5 rounded-full mb-8" style={{ backgroundColor: '#8E3400' }}></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                 The Gulf of Guinea Maritime Institute (GoGMI) is a non-profit think - tank organization in Ghana. The Institute provides a unique platform for maritime Strategic Thinkers, Practitioners, Experts and allies to interact,
                  share ideas and research into strategic maritime affairs affecting the Gulf of Guinea (GoG) Region.
                </p>
               
              </div>
              
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-bold hover:gap-5 transition-all text-lg mt-8 group"
                style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Professional Image - 7 columns */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[450px] lg:col-span-7 lg:-mt-60">
              <img 
                src="/aboutus.enoch.jpg" 
                alt="Maritime professionals at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Full-width content below image - Professional layout */}
          
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
          desc: 'Facilitation of Regional and International Partnerships Foster Maritime Safety and Security in the Gulf of Guinea Region',
          color: '#132552'
        },
        {
          title: 'Policy Advocacy',
          desc: 'Analysis of National, Regional and International Policies On Ocean Governance and Maritime Security.',
          color: '#8E3400'
        },
        {
          title: 'Capacity Building',
          desc: 'Development, Audit and Validation Of Corporate Maritime Security Plans.',
          color: '#1A336C'
        },
        {
          title: 'International Collaboration',
          desc: 'Organization of International Ocean Governance And Maritime Security Conferences and Exhibitions',
          color: '#6B2700'
        },
        {
          title: 'Blue Economy Development',
          desc: 'Analysis of Activities In the Regions Maritime Domain.',
          color: '#132552'
        },
        {
          title: 'Youth Mentorship',
          desc: 'Development of Policy Briefs Articles and Other Relevant Publications',
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
          <p className="leading-relaxed text-base" style={{ color: '#374151', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{service.desc}</p>
        </div>
      ))}
    </div>

   
  </div>
</section>

      
      {/* ABOUT THE GULF OF GUINEA - PROFESSIONAL LAYOUT */}
      <section className="py-32 md:py-40 bg-white">
        <div className="container mx-auto max-w-[1400px] px-8">
          <div className="text-center mb-20">
            <span className="font-semibold text-sm uppercase tracking-wider inline-block mb-6" 
                  style={{ color: '#8E3400', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
              Our Region
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              The Gulf of Guinea
            </h2>
            <div className="w-20 h-1.5 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Professional Image - 7 columns, on the left */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[800px] order-2 lg:order-1 lg:col-span-7">
              <img 
                src="/HEBREWISRAELITE.jpeg" 
                alt="Gulf of Guinea maritime view"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content - 5 columns, on the right */}
            <div className="space-y-8 order-1 lg:order-2 lg:col-span-5">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  The Gulf of Guinea is one of the world's most critical maritime regions, stretching from Senegal to Angola and encompassing over 6,000 kilometers of coastline.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  This region is vital for global trade, energy security, and economic development, yet faces significant challenges including maritime insecurity, illegal fishing, and environmental degradation.
                </p>
              </div>
              
              {/* Countries List */}
              <div className="pt-4">
                <h3 className="text-lg font-bold mb-6" style={{ color: '#132552', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
                  Gulf of Guinea Countries:
                </h3>
                <div className="grid grid-cols-2 gap-3">
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

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all" 
                     style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #ffffff 100%)' }}>
                  <div className="text-3xl font-black mb-2" 
                       style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552' }}>16</div>
                  <p className="font-semibold text-sm" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>Coastal Countries</p>
                </div>
                <div className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all" 
                     style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #ffffff 100%)' }}>
                  <div className="text-3xl font-black mb-2" 
                       style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, color: '#132552' }}>400M+</div>
                  <p className="font-semibold text-sm" style={{ color: '#4B5563', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>People</p>
                </div>
              </div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
  {[
    { name: 'ECOWAS', logo: '/ECOWAS Logo (1).png' },
    { name: 'APN', logo: '/APN.png' },
    { name: 'AU', logo: '/AU Main.png' },
    { name: 'ECCAS', logo: '/ECCAS_logo (1).jpg' },
    { name: 'DOTCAN', logo: '/DOTCAN LOGO.png' },
    { name: 'ENMAR', logo: '/Enmar.png' }
  ].map((partner, idx) => (
    <div key={idx} className="flex items-center justify-center p-6 rounded-2xl transition-all duration-500 hover:shadow-xl group cursor-pointer bg-white border border-gray-100"
         style={{ minHeight: '140px' }}>
      <div className="text-center w-full">
        {/* Logo Image Container */}
        <div className="flex items-center justify-center h-20 mb-3 px-4">
          <img 
            src={partner.logo} 
            alt={`${partner.name} logo`}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Fallback if image doesn't load
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          {/* Fallback text - hidden by default */}
          <div className="hidden w-full h-20 rounded-xl items-center justify-center text-white font-bold text-sm"
               style={{ background: 'linear-gradient(135deg, #132552 0%, #1A336C 100%)', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>
            {partner.name}
          </div>
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