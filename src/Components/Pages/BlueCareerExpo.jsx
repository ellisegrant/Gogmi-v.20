import React, { useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const BlueCareerExpo = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const eventStats = [
    { number: '10', label: 'Workshops' },
    { number: '5', label: 'Days' },
    { number: '16', label: 'Sessions' },
    { number: '200+', label: 'Participants' },
    { number: '6', label: 'Host Countries' }
  ];

  const keyThemes = [
    'Ocean economy and blue sectors',
    'Blue careers',
    'Blue economy opportunities',
    'Capacity development and training opportunities',
    'Advocacy, governance, and decision-making processes',
    'SME solutions'
  ];

  const vvips = [
    { name: 'H.E. Kwii Crocus', title: 'Special Guest' },
    { name: 'Hon. Elijah Mohammed', title: 'Youth Employment Agency Executive Director' },
    { name: 'Rear Admiral Isaac Tawiah', title: 'Chief of Defense Staff' },
    { name: 'Hon. Kathleen Quartey-Quaittey', title: 'Guest Speaker' },
    { name: 'Dr. Juri Stibu', title: 'Guest Lecturer' }
  ];

  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#132552' }}>
        <div className="absolute inset-0">
          <img 
            src="/bcbe5.jpg"
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

      {/* Program Logo Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-center">
              <p className="text-sm font-semibold mb-4" style={{ color: '#4B5563' }}>Hosted by</p>
              <div className="w-32 h-32 bg-gray-50 rounded-xl shadow-md border border-gray-200 flex items-center justify-center">
                <img src="/GoGMI_PNG.png" alt="BCBE Logo" className="w-full h-full object-contain p-4" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold mb-4" style={{ color: '#4B5563' }}>In collaboration with</p>
              <div className="w-32 h-32 bg-gray-50 rounded-xl shadow-md border border-gray-200 flex items-center justify-center">
                <img src="/wista ghana.jpg" alt="WISTA Ghana" className="w-full h-full object-contain p-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-16 bg-white">
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
          <p className="text-lg text-white/90 leading-relaxed">
            The Blue Economy and Business Expo 2021 was attended by several students representing countries that actively 
            engage in ocean economy. As a result, numerous valuable insights were shared. Youth engagement across various 
            sectors represented the commitment to leaving no one behind.
          </p>
        </div>
      </section>

      {/* About the Event with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
                About the Event
              </h2>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#4B5563' }}>
                <p>
                  The Gulf of Guinea Maritime Institute (GoGMI), in collaboration with West Africa's Blue Economy Stakeholders, 
                  organized the inaugural Blue Career and Business Expo 2021 (BCBE 2021). This unique forum was dedicated to 
                  promoting sustainable maritime solutions, which facilitated young people to have greater awareness of the 
                  opportunities available for career advancement in the blue economy.
                </p>
                <p>
                  The 5-day programme brought together young African stakeholders to discuss innovative proposals on various 
                  subjects that highlighted important issues concerning the blue economy.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <img src="/bcbe1.jpg" alt="Event" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Additional Event Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <img src="/bcbe3.jpg" alt="Event Moment 1" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <img src="/bcbe2.jpg" alt="Event Moment 2" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <img src="/bcbe4.jpg" alt="Event Highlights" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4" style={{ color: '#132552', fontWeight: 900 }}>
                Event Highlights
              </h3>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#4B5563' }}>
                Experience the energy and insights from the Blue Career and Business Expo 2021. Young African 
                professionals and students engaged with maritime industry leaders to explore opportunities in the blue economy.
              </p>
              <button 
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-md"
                style={{ backgroundColor: '#132552', color: 'white', fontWeight: 700 }}
              >
                <Download className="w-5 h-5" />
                <span>Download Report</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Key Themes
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {keyThemes.map((theme, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl shadow-md bg-white border-l-4 hover:shadow-lg transition-all"
                style={{ borderColor: '#8E3400' }}
              >
                <p className="text-base font-semibold leading-relaxed" style={{ color: '#132552' }}>
                  {theme}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Impact - Professional Version */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Event Impact
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#132552' }}>
                Diverse Panel Discussions
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                One of the primary differentiators of the BCBE was its scope of panel discussions and presentations. 
                The diversity in debate participants by nation, focus, and rank set BCBE apart, drawing thousands of 
                African university students in search of innovative mind management and inspiring speeches.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#8E3400] transition-all">
                <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                  Speakers from a wide range of disciplines spoke at length about their subjects, sharing personal 
                  tales and offering advice for overcoming obstacles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#8E3400] transition-all">
                <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                  The BCBE brought together approximately 200 participants from 16 African countries in one shared 
                  commitment to building a successful Blue Economy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[#8E3400] transition-all">
                <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                  Events culminated with on-campus presentations on feasible climate solutions in the Maritime Space.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                The panel discussions were heavily engaging, with youth showing keen interest in all discussion phases. 
                Debates were characterized by high levels of youth representation among the panelists and overall diversity 
                among experts from government and industry practitioners.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#132552' }}>
                  <span className="text-2xl text-white font-bold">01</span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                  On-campus presentations on feasible climate solutions at the Maritime Space followed by youth networking roundtables.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#132552' }}>
                  <span className="text-2xl text-white font-bold">02</span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                  Roundtables were pivotal in inspiring youth to promote youth-centered Blue Economy initiatives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
                <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#132552' }}>
                  <span className="text-2xl text-white font-bold">03</span>
                </div>
                <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                  The BCBE Expo brought together individuals, institutions, and private & public sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguished Speakers */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Distinguished Speakers
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {vvips.map((vip, idx) => (
              <div key={idx} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
                  <span className="text-5xl font-black" style={{ color: '#132552' }}>
                    {vip.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-base font-bold mb-2" style={{ color: '#132552' }}>
                  {vip.name}
                </h3>
                <p className="text-sm" style={{ color: '#4B5563' }}>
                  {vip.title}
                </p>
              </div>
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
          <p className="text-xl text-white/90 mb-8">
            Stay connected with GoGMI and be the first to know about our upcoming events and initiatives
          </p>
          <button 
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:scale-105"
            style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
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