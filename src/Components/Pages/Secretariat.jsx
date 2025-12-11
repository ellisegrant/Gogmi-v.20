import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Calendar,
  FileText,
  Target,
  CheckCircle,
  Award,
  Globe,
  Briefcase,
  MessageSquare,
  Settings
} from 'lucide-react';

const Secretariat = () => {
  const services = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Event Planning & Management',
      description: 'From concept to execution, we handle every detail of your maritime events, conferences, and symposiums.',
      color: '#132552'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Stakeholder Coordination',
      description: 'Seamless coordination of regional and international stakeholders for collaborative maritime initiatives.',
      color: '#8E3400'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Technical Secretariat Services',
      description: 'Comprehensive administrative and technical support for maritime forums and working groups.',
      color: '#1A336C'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Capacity Building Programs',
      description: 'Design and implementation of training programs for maritime professionals and institutions.',
      color: '#8E3400'
    }
  ];

  const portfolioItems = [
    {
      year: '2023',
      title: 'Green Maritime Africa Coalition',
      theme: 'Advancing Net-Zero Emissions and Maritime Resilience in Africa through Continental Collaboration',
      overview: 'GoGMI collaborates with the Nigerian Maritime Administration and Safety Agency to host the Green Maritime Africa Coalition (GMAC). GMAC\'s mission is a shared continental initiative aimed at leading the global energy transition. By 2030, GMAC intends to provide zero-emission fuels for the maritime industry and implement them in both international and domestic shipping throughout Africa.',
      details: 'During the launch in November 2023, hosted by GoGMI, 37 stakeholders from the shipping industry, including the private sector, ship and port operators, fuel operators, and charterers, joined forces to advance the mission. The primary objective is to amplify Africa\'s collective voice in global greenhouse gas (GHG) emissions reduction efforts. GMAC aims to foster awareness, create opportunities, and implement concrete near and long-term actions for the continent.',
      focus: 'The coalition places a strategic focus on maritime policy, capacity building, technology, financing, and skill development. The overarching goal is to collaborate with host governments and regional institutions, strengthening maritime policies, streamlining processes, and aligning with Africa\'s priorities for sustainable development and economic growth. This multi-faceted approach reflects GMAC\'s commitment to driving impactful change in the maritime sector across the continent.',
      highlights: [
        'Thought-provoking insights from industry leaders, experts, and influencers',
        'Stakeholders had the chance to connect with peers, forge new partnerships, and expand their professional networks'
      ],
      impact: '37 stakeholders engaged',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop'
    },
    {
      year: '2023',
      title: 'Gulf of Guinea Maritime Collaboration Forum - Shared Awareness and Deconfliction (GoG-MCF SHADE)',
      overview: 'The Gulf of Guinea Maritime Collaboration Forum - Shared Awareness and Deconfliction (GoG-MCF SHADE) was a dynamic forum designed and implemented by GoGMI in collaboration with the Nigerian Maritime Administration and Safety Agency (NIMASA) as a viable platform for regional and international navies, maritime industry partners and relevant stakeholders from across the GoG and beyond to harmonise counter-piracy efforts and communication in the GoG region under the existing information sharing architecture provided by both the Yaoundé Code of Conduct and the Best Management Practices to Deter Piracy and Enhance Maritime Security off the Coast of West Africa (BMP-WA).',
      highlights: [
        'Dynamic discussions on counter-piracy efforts and communication',
        'Working group discussions on industry disruptions and collaboration',
        'Networking opportunities among stakeholders',
        'Regional coordination strengthening'
      ],
      impact: 'Enhanced regional security',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&fit=crop'
    }
  ];

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      
      {/* HERO SECTION - Advocacy-inspired */}
      <section className="relative text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&fit=crop"
            alt="Secretariat Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 37, 82, 0.7) 0%, rgba(26, 51, 108, 0.65) 100%)' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8"
                style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
              Secretariat Services
            </h1>

           

            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
                style={{ fontWeight: 700, backgroundColor: '#8E3400', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES - Similar to Advocacy's Policy Areas */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 600, color: '#8E3400' }}>What We Offer</span>
            <h2 className="text-5xl md:text-6xl mt-4 mb-6"
                style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Explore Our Services
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563', fontWeight: 400 }}>
              Whether you're planning an innovation centre, a blue economy innovation symposium, or a bespoke stakeholder event, 
              the Gulf of Guinea Maritime Institute is your trusted partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ border: '2px solid #F5F7FA' }}
              >
                <div className="mb-4 p-4 rounded-xl inline-block" style={{ backgroundColor: `${service.color}15`, color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 900, color: '#132552' }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontWeight: 400, color: '#4B5563' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Message Box */}
          
        </div>
      </section>

      {/* PORTFOLIO - Similar to Advocacy's Achievements */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 600, color: '#8E3400' }}>Our Portfolio</span>
            <h2 className="text-5xl md:text-6xl mt-4 mb-6"
                style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Signature Events & Initiatives
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563', fontWeight: 400 }}>
              Explore our track record of delivering world-class secretariat services for major maritime events
            </p>
          </div>

          <div className="space-y-6">
            {portfolioItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image section */}
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="md:col-span-3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-1.5 rounded-full text-white text-sm"
                           style={{ fontWeight: 700, backgroundColor: '#132552' }}>
                        {item.year}
                      </div>
                      {item.impact && (
                        <div className="px-4 py-1.5 rounded-full text-sm"
                             style={{ fontWeight: 600, backgroundColor: '#F5F7FA', color: '#8E3400' }}>
                          {item.impact}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl mb-3"
                        style={{ fontWeight: 900, color: '#132552' }}>
                      {item.title}
                    </h3>

                    {item.theme && (
                      <p className="text-sm font-bold mb-4 uppercase tracking-wide" style={{ color: '#8E3400' }}>
                        Theme: {item.theme}
                      </p>
                    )}

                    <p className="text-base leading-relaxed mb-4 line-clamp-3" style={{ fontWeight: 400, color: '#4B5563' }}>
                      {item.overview}
                    </p>

                    {/* Highlights */}
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-bold mb-2" style={{ color: '#132552' }}>Key Highlights:</p>
                        <ul className="space-y-1">
                          {item.highlights.slice(0, 2).map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-sm" style={{ color: '#4B5563' }}>
                              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#8E3400' }} />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          
          {/* Stakeholders Meetings */}
          <div className="mb-20">
            <h3 className="text-4xl md:text-5xl font-black mb-12 text-center" 
                style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Stakeholders Meetings
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="group relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <img 
                    src="/meeting1.png"
                    alt={`Stakeholder Meeting ${num}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Partners Meetings */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black mb-12 text-center" 
                style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Strategic Partners Meetings
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="group relative h-80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={`https://images.unsplash.com/photo-155266473${num}?w=800&fit=crop`}
                    alt={`Strategic Meeting ${num}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Advocacy-inspired */}
      <section className="py-20 md:py-32 relative overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #132552 0%, #1A336C 100%)' }}>
        <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl mb-6 text-white"
              style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            Partner With Us
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" 
             style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}>
            Let us handle the details while you focus on what matters most - creating meaningful connections and 
            driving impactful outcomes in the maritime sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl text-lg transition-all shadow-xl hover:scale-105"
              style={{ fontWeight: 700, backgroundColor: '#8E3400', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
            >
              <span>Contact Us Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl text-lg transition-all"
              style={{ fontWeight: 700, border: '2px solid rgba(255, 255, 255, 0.5)', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span>Learn More About Us</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Secretariat;