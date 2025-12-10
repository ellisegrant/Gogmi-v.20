import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const BlueCareerExpo = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
    
    // Add CSS animation styles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      .animate-fade-in {
        animation: fadeIn 1s ease-out;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const eventStats = [
    { number: '10', label: 'Workshops' },
    { number: '5', label: 'Days' },
    { number: '16', label: 'Sessions' },
    { number: '200+', label: 'Participants' },
    { number: '6', label: 'Host Countries' }
  ];

  const keyThemes = [
    {
      title: 'Ocean economy and blue sectors',
      color: '#4A90E2'
    },
    {
      title: 'Blue careers',
      color: '#E67E22'
    },
    {
      title: 'Blue economy opportunities',
      color: '#95A5A6'
    },
    {
      title: 'Capacity development and training opportunities',
      color: '#F39C12'
    },
    {
      title: 'Advocacy, governance, and decision-making processes',
      color: '#3498DB'
    },
    {
      title: 'SME solutions',
      color: '#27AE60'
    }
  ];

  const vvips = [
    {
      name: 'H.E. Kwii Crocus',
      title: 'Special Guest',
      image: '/vip1.jpg'
    },
    {
      name: 'Hon. Elijah Mohammed',
      title: 'Youth Employment Agency Executive Director',
      image: '/vip2.jpg'
    },
    {
      name: 'Rear Admiral Isaac Tawiah',
      title: 'Chief of Defense Staff',
      image: '/vip3.jpg'
    },
    {
      name: 'Hon. Kathleen Quartey-Quaittey',
      title: 'Guest Speaker',
      image: '/vip4.jpg'
    },
    {
      name: 'Dr. Juri Stibu',
      title: 'Guest Lecturer',
      image: '/vip5.jpg'
    }
  ];

  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#132552' }}>
        <div className="absolute inset-0">
          <img 
            src="/conf4.jpg"
            alt="Blue Career Expo"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
              Blue Career & Business Expo 2021
            </h1>
            <p className="text-2xl text-white/90 mb-8 font-semibold max-w-3xl mx-auto">
              Building a Robust Blue Economy, Leaving No One Behind
            </p>
            
          </div>
        </div>
      </section>


      {/* Hosted By Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block">
                <h2 className="text-6xl md:text-7xl font-black mb-2" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: '0.9' }}>BLUE</h2>
                <h2 className="text-6xl md:text-7xl font-black mb-2" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: '0.9' }}>CAREER</h2>
                <div className="text-center">
                  <span className="text-xl font-bold tracking-widest" style={{ color: '#132552' }}>AND</span>
                </div>
                <h2 className="text-6xl md:text-7xl font-black" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: '0.9' }}>BUSINESS</h2>
                <h3 className="text-4xl md:text-5xl font-black mt-2" style={{ color: '#132552', fontWeight: 900 }}>EXPO 2021</h3>
              </div>
              <div className="mt-8">
                <p className="text-sm font-bold mb-3" style={{ color: '#4B5563' }}>Hosted by</p>
                <div className="flex justify-center md:justify-start">
                  <div className="w-24 h-24 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
                    <span className="text-sm font-bold" style={{ color: '#132552' }}>GoGMI</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm font-bold mb-3" style={{ color: '#4B5563' }}>In collaboration with</p>
                <div className="flex justify-center md:justify-start">
                  <div className="w-32 h-20 bg-white rounded-lg shadow-md p-2 flex items-center justify-center">
                    <span className="text-sm font-bold" style={{ color: '#132552' }}>WISTA Ghana</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <img src="/conf4.jpg" alt="Blue Career Expo Event" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group hover:bg-black/40 transition-all">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all group-hover:scale-110" style={{ backgroundColor: '#8E3400' }}>
                    <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-white border-b-10 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 rounded-lg font-bold text-sm transition-all hover:scale-105 shadow-md" style={{ backgroundColor: '#132552', color: 'white', fontWeight: 700 }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F1C3F'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#132552'}>
              DOWNLOAD BLUE CAREER AND BUSINESS EXPO 2021 PUBLIC REPORT HERE
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#132552', fontWeight: 900 }}>
            Event Summary
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {eventStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F5F7FA', border: '2px solid #132552' }}>
                  <span className="text-4xl font-black" style={{ color: '#132552', fontWeight: 900 }}>
                    {stat.number}
                  </span>
                </div>
                <p className="text-sm font-bold uppercase tracking-wide" style={{ color: '#4B5563' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20" style={{ backgroundColor: '#132552' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            Building A Robust Blue Economy, Leaving No One Behind
          </h2>
          <p className="text-lg text-white/90 leading-relaxed font-semibold">
            The Blue Economy and Business Expo 2021 was attended by several students representing countries that actively 
            engage in ocean economy. As a result, numerous valuable insights were shared. Youth engagement across various 
            sectors represented the commitment to leaving no one behind. This empowered the youth, created awareness and 
            bridged the enormous disparity for the AU commission and its 54 member nations had the objective benefits and 
            better programming officer of the Economic Community of West African Groups facilitated and groups like Coastal 
            Area Management Authorities.
          </p>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
                About the Event
              </h2>
              <div className="space-y-4 text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                <p>
                  The Gulf of Guinea Maritime Institute (GoGMI), in collaboration with West Africa's Blue Economy Stakeholders, 
                  organized the inaugural Blue Career and Business Expo 2021 (BCBE 2021). This unique forum was dedicated to 
                  promoting sustainable maritime solutions, which facilitated young people (students and adults) to have a greater 
                  awareness of the opportunities available for career advancement in the blue economy.
                </p>
                <p>
                  The 5-day programme brought together young African stakeholders to discuss innovative proposals on various 
                  subjects that highlighted important issues concerning the blue economy. Participants joined the expo virtually 
                  to hear inspiring stories about successful careers and businesses in areas such as Blue Economy, Illegal 
                  Fishing, Environment Shipping, Logistics, UN and ISA Economy, Climate, Public Health Insurgence, 
                  Resource Security, Marine and Ocean Management.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/conf3.jpg"
                alt="Conference Event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Video Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559223607-c52a27ec60b5?w=800&fit=crop"
                alt="Event Highlights"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110" style={{ backgroundColor: '#8E3400' }}>
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4" style={{ color: '#132552', fontWeight: 900 }}>
                Watch Event Highlights
              </h3>
              <p className="text-base leading-relaxed font-semibold mb-6" style={{ color: '#4B5563' }}>
                Experience the energy and insights from the Blue Career and Business Expo 2021. Watch how young African 
                professionals and students engaged with maritime industry leaders to explore opportunities in the blue economy.
              </p>
              <button 
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all"
                style={{ backgroundColor: '#132552', color: 'white', fontWeight: 700 }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F1C3F'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#132552'}
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Key Themes
            </h2>
            <p className="text-lg font-semibold max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
              The expo featured diverse discussions and presentations on critical topics shaping Africa's blue economy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {keyThemes.map((theme, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all bg-white border-l-4"
                style={{ borderColor: theme.color }}
              >
                <p className="text-base font-bold leading-relaxed" style={{ color: '#132552' }}>
                  {theme.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participation Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Event Impact
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-black mb-4" style={{ color: '#132552', fontWeight: 900 }}>
                One of the primary differentiators of the BCBE was its scope of panel discussions and presentations.
              </h3>
              <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                The diversity in debate participants by nation, focus, and rank set at BCBS apart especially one which drew 
                thousands of Africans university students in search of the best of innovative mind management and inspiring speeches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: '#4A90E2', color: 'white' }}>
                <p className="text-lg font-bold">
                  Speakers from a wide range of disciplines spoke at length about their subjects. 
                  They shared personal tales of tragedy and victory and offered advice for overcoming obstacles.
                </p>
              </div>
              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: '#27AE60', color: 'white' }}>
                <p className="text-lg font-bold">
                  In the end, the BCBE brought together approximately 200 participants from 16 African countries 
                  in 1 shared commitment to building a successful Blue Economy.
                </p>
              </div>
              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: '#95A5A6', color: 'white' }}>
                <p className="text-lg font-bold">
                  One day of the event culminated with on-campus presentations on feasible and climate at the Maritime 
                  Space to add to the following online roundtable.
                </p>
              </div>
            </div>

            <div className="text-center bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <p className="text-lg leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                The panel discussions were heavily engaging, with youth showing keen interest in all three discussion phases 
                that shuffled focus and related debate were characterized by high levels of youth representation among the 
                panelists in each of the discussions as well as the overall diversity among experts from government, 
                industry practitioners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: '#3498DB', color: 'white' }}>
                <p className="text-lg font-bold">
                  One day of the event commenced with on-campus presentations on feasible and climate at the Maritime 
                  Space followed by a youth networking roundtable.
                </p>
              </div>
              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: '#16A085', color: 'white' }}>
                <p className="text-lg font-bold">
                  The roundtables were pivotal in inspiring youth to promote youth-centred Blue Economy initiatives.
                </p>
              </div>
              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: '#27AE60', color: 'white' }}>
                <p className="text-lg font-bold">
                  The BCBS Expo brought together several individuals, institutions, and private & public sectors.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                The day's outcome also included the launch of African Blue and Green University: a SMART Learning/Training 
                to provide an avenue of accessible and approachable policy advocacy including capacity and blue literacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VVIPs Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Distinguished Speakers
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {vvips.map((vip, idx) => {
              const bgColor = idx % 2 === 0 ? '#4A90E2' : '#F39C12';
              const initials = vip.name.split(' ').map(n => n[0]).join('');
              
              return (
                <div key={idx} className="text-center">
                  <div 
                    className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg flex items-center justify-center text-white text-6xl font-bold"
                    style={{ backgroundColor: bgColor }}
                  >
                    {initials}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#132552', fontWeight: 700 }}>
                    {vip.name}
                  </h3>
                  <p className="text-sm font-semibold" style={{ color: '#4B5563' }}>
                    {vip.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Prospectus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Event Prospectus
            </h2>
            <p className="text-lg font-semibold mb-8" style={{ color: '#4B5563' }}>
              Access comprehensive documentation and insights from the Blue Career and Business Expo 2021
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Event Agenda', icon: '📅' },
              { title: 'Information Pack', icon: '📋' },
              { title: 'Event Report', icon: '📊' },
              { title: 'Event Portfolio', icon: '📁' }
            ].map((item, idx) => (
              <button
                key={idx}
                className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 bg-white hover:border-[#8E3400]"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold" style={{ color: '#132552', fontWeight: 700 }}>
                  {item.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#132552' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            Join Our Next Event
          </h2>
          <p className="text-xl text-white/90 mb-8 font-semibold">
            Stay connected with GoGMI and be the first to know about our upcoming events and initiatives
          </p>
          <button 
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
            style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
          >
            <span>Get Notified</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlueCareerExpo;