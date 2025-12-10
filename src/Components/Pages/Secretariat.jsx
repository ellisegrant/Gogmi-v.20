import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Secretariat = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Event Planning & Management',
      description: 'From concept to execution, we handle every detail of your maritime events, conferences, and symposiums.'
    },
    {
      title: 'Stakeholder Coordination',
      description: 'Seamless coordination of regional and international stakeholders for collaborative maritime initiatives.'
    },
    {
      title: 'Technical Secretariat Services',
      description: 'Comprehensive administrative and technical support for maritime forums and working groups.'
    },
    {
      title: 'Capacity Building Programs',
      description: 'Design and implementation of training programs for maritime professionals and institutions.'
    }
  ];

  const portfolioItems = [
    {
      title: 'Green Maritime Africa Coalition',
      theme: 'Advancing Net-Zero Emissions and Maritime Resilience in Africa through Continental Collaboration',
      overview: 'GoGMI collaborates with the Nigerian Maritime Administration and Safety Agency to host the Green Maritime Africa Coalition (GMAC). GMAC\'s mission is a shared continental initiative aimed at leading the global energy transition. By 2030, GMAC intends to provide zero-emission fuels for the maritime industry and implement them in both international and domestic shipping throughout Africa.',
      details: 'During the launch in November 2023, hosted by GoGMI, 37 stakeholders from the shipping industry, including the private sector, ship and port operators, fuel operators, and charterers, joined forces to advance the mission. The primary objective is to amplify Africa\'s collective voice in global greenhouse gas (GHG) emissions reduction efforts. GMAC aims to foster awareness, create opportunities, and implement concrete near and long-term actions for the continent.',
      focus: 'The coalition places a strategic focus on maritime policy, capacity building, technology, financing, and skill development. The overarching goal is to collaborate with host governments and regional institutions, strengthening maritime policies, streamlining processes, and aligning with Africa\'s priorities for sustainable development and economic growth. This multi-faceted approach reflects GMAC\'s commitment to driving impactful change in the maritime sector across the continent.',
      highlights: [
        'Thought-provoking insights from industry leaders, experts, and influencers',
        'Stakeholders had the chance to connect with peers, forge new partnerships, and expand their professional networks'
      ],
      image: '/gmac-event.jpg'
    },
    {
      title: 'Gulf of Guinea Maritime Collaboration Forum - Shared Awareness and Deconfliction (GoG-MCF SHADE)',
      overview: 'The Gulf of Guinea Maritime Collaboration Forum - Shared Awareness and Deconfliction (GoG-MCF SHADE) was a dynamic forum designed and implemented by GoGMI in collaboration with the Nigerian Maritime Administration and Safety Agency (NIMASA) as a viable platform for regional and international navies, maritime industry partners and relevant stakeholders from across the GoG and beyond to harmonise counter-piracy efforts and communication in the GoG region under the existing information sharing architecture provided by both the Yaoundé Code of Conduct and the Best Management Practices to Deter Piracy and Enhance Maritime Security off the Coast of West Africa (BMP-WA).',
      highlights: [
        'Dynamic discussions on counter-piracy efforts and communication',
        'Working group discussions on industry disruptions and collaboration',
        'Networking opportunities among stakeholders',
        'Networking opportunities among stakeholders'
      ],
      image: '/shade-meeting.jpg'
    }
  ];

  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#132552' }}>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&fit=crop"
            alt="Secretariat Services"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
              Secretariat Services
            </h1>
            <p className="text-2xl text-white/90 mb-4 font-semibold max-w-4xl mx-auto">
              Discover Our Secretariat Portfolio: Elevating Experiences with the Gulf of Guinea Maritime Institute
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              At the Gulf of Guinea Maritime Institute, we take pride in curating exceptional events that leave a lasting impact. 
              Explore our diverse portfolio, showcasing our expertise as a premier provider of secretariat services. Each event reflects 
              our commitment to excellence, innovation, and seamless execution.
            </p>
            <button 
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:scale-105"
              style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
            >
              <span>Contact Us Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Explore Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Explore Our Services: Elevate Your Event Experience
            </h2>
            <p className="text-lg font-semibold max-w-3xl mx-auto leading-relaxed" style={{ color: '#4B5563' }}>
              Whether you're planning an innovation centre, a blue economy innovation symposium, or a bespoke stakeholder event, 
              the Gulf of Guinea Maritime Institute is your trusted partner. Our secretariat services ensure seamless execution, 
              allowing you to focus on what matters most - the success of your event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#8E3400]">
            <p className="text-lg leading-relaxed font-semibold text-center" style={{ color: '#132552' }}>
              Contact Us to discuss your upcoming event and learn more about our comprehensive secretariat services. 
              Thank you for considering GoGMI for your event management needs. We look forward to collaborating with you 
              on your next memorable experience!
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Green Maritime Africa Coalition */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop"
                alt="Green Maritime Africa Coalition"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
                Green Maritime Africa Coalition
              </h2>
              <p className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: '#8E3400' }}>
                Theme: Advancing Net-Zero Emissions and Maritime Resilience in Africa through Continental Collaboration
              </p>
              <div className="space-y-4 text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                <p className="font-bold" style={{ color: '#132552' }}>Overview:</p>
                <p>{portfolioItems[0].overview}</p>
                <p>{portfolioItems[0].details}</p>
                <p>{portfolioItems[0].focus}</p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mb-16">
            <h3 className="text-3xl font-black mb-8 text-center" style={{ color: '#132552', fontWeight: 900 }}>
              Key Highlights
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioItems[0].highlights.map((highlight, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                  <p className="text-base font-semibold" style={{ color: '#4B5563' }}>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stakeholders Meetings Gallery */}
          <div className="mb-20">
            <h3 className="text-3xl font-black mb-8 text-center" style={{ color: '#132552', fontWeight: 900 }}>
              Stakeholders Meetings
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={`/meeting1.png`}
               
                    alt={`Stakeholder Meeting ${num}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* GoG-MCF SHADE Section */}
          <div className="bg-white rounded-xl p-8 shadow-xl mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
                  Gulf of Guinea Maritime Collaboration Forum - Shared Awareness and Deconfliction (GoG-MCF SHADE)
                </h2>
                <div className="space-y-4 text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                  <p className="font-bold" style={{ color: '#132552' }}>Overview:</p>
                  <p>{portfolioItems[1].overview}</p>
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&fit=crop"
                  alt="GoG-MCF SHADE"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Highlights for SHADE */}
          <div>
            <h3 className="text-3xl font-black mb-8 text-center" style={{ color: '#132552', fontWeight: 900 }}>
              Key Highlights
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {portfolioItems[1].highlights.map((highlight, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <p className="text-sm font-semibold" style={{ color: '#4B5563' }}>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners Meetings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Strategic Partners Meetings
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={`https://images.unsplash.com/photo-155266473${num}?w=800&fit=crop`}
                  alt={`Strategic Meeting ${num}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#132552' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            Partner With Us
          </h2>
          <p className="text-xl text-white/90 mb-8 font-semibold max-w-3xl mx-auto">
            Let us handle the details while you focus on what matters most - creating meaningful connections and 
            driving impactful outcomes in the maritime sector.
          </p>
          <button 
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:scale-105"
            style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
          >
            <span>Contact Us Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Secretariat;