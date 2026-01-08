import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Calendar,
  Microscope,
  BookOpen,
  Radio
} from 'lucide-react';

const Research = () => {
  // Research Themes
  const researchThemes = [
    {
      question: "MARITIME SECURITY INTERVENTIONS AUDIT",
      description: "Comprehensive audit mapping maritime security interventions across the Gulf of Guinea, analyzing their evolution, effectiveness, and the complex interplay of regional and international actors in addressing maritime threats",
      image: "/Marsof operators fastrope on A Dutch naval vessel.jpg",
      lead: "Dr. Julliet",
      team: 12,
      partners: ["IDEC",  "UN"],
      impact: "Framework for harmonizing 15+ security initiatives"
    },
    {
      question: "GOG MARITIME GOVERNANCE INDEX",
      description: "Mapping untapped blue economy opportunities across fisheries, tourism, renewable energy, and marine biotechnology.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&fit=crop",
      lead: "Dr. Ama Osei",
      team: 8,
      partners: ["World Bank", "UNDP", "AfDB"],
      impact: "€200M in new investments catalyzed"
    },
    {
      question: "Can regional data sharing prevent 90% of illegal fishing?",
      description: "Building the first integrated maritime information system connecting 16 West African nations in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&fit=crop",
      lead: "Prof. Ibrahim Diallo",
      team: 15,
      partners: ["FAO", "ECOWAS", "NOAA"],
      impact: "2M+ data points tracked daily"
    }
  ];

  // Researchers
  const researchers = [
    {
      name: "Dr. Kwame Mensah",
      role: "Lead Researcher, Maritime Security",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop",
      bio: "15+ years analyzing maritime security threats. Former IMO consultant.",
      expertise: ["Piracy Analysis", "Risk Assessment", "Regional Security"],
      publications: 45
    },
    {
      name: "Dr. Ama Osei",
      role: "Director, Blue Economy Research",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&fit=crop",
      bio: "Economic policy expert specializing in sustainable ocean economies.",
      expertise: ["Economic Modeling", "Policy Design", "Investment Analysis"],
      publications: 38
    },
    {
      name: "Prof. Ibrahim Diallo",
      role: "Chief Data Scientist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop",
      bio: "Pioneer in maritime data systems and AI-powered threat detection.",
      expertise: ["Machine Learning", "Data Systems", "Predictive Analytics"],
      publications: 52
    },
    {
      name: "Dr. Fatima Koné",
      role: "Senior Researcher, Governance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop",
      bio: "International law expert focused on maritime governance frameworks.",
      expertise: ["Maritime Law", "Policy Analysis", "Institutional Development"],
      publications: 31
    }
  ];

  // Impact Stories
  const impactStories = [
    {
      title: "Real-Time Piracy Alerts Save 23 Ships in 6 Months",
      category: "Impact Story",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop",
      description: "Our AI surveillance system detected and prevented 23 potential piracy incidents, protecting $850M in cargo.",
      date: "November 2024",
      readTime: "5 min"
    },
    {
      title: "Field Study: Mapping Ghana's Blue Carbon Potential",
      category: "Field Research",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&fit=crop",
      description: "Six-month coastal survey reveals $2.3B opportunity in mangrove restoration and carbon credits.",
      date: "October 2024",
      readTime: "8 min"
    },
    {
      title: "Behind the Data: How We Track 15,000 Vessels Daily",
      category: "Methodology",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&fit=crop",
      description: "Inside our Maritime Intelligence Center: the technology and team powering regional vessel tracking.",
      date: "September 2024",
      readTime: "10 min"
    }
  ];

  // Events
  const upcomingEvents = [
    {
      type: "Webinar",
      title: "Maritime AI: The Future of Security",
      speaker: "Dr. Kwame Mensah",
      date: "December 15, 2024",
      time: "14:00 GMT",
      attendees: 450
    },
    {
      type: "Workshop",
      title: "Blue Economy Data Analysis Masterclass",
      speaker: "Prof. Ibrahim Diallo",
      date: "January 10, 2025",
      time: "09:00 GMT",
      attendees: 120
    },
    {
      type: "Seminar",
      title: "Regional Maritime Governance Forum",
      speaker: "Dr. Fatima Koné",
      date: "January 25, 2025",
      time: "10:00 GMT",
      attendees: 300
    }
  ];

  // Live Data
  const liveData = [
    { label: "Active Research Projects", value: "36", change: "+3" },
    { label: "Data Points Collected", value: "2.4M", change: "+45K" },
    { label: "Partner Institutions", value: "89", change: "+5" }
  ];

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      
      {/* HERO */}
      <section className="relative text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/researchimage.jpg" 
            alt="Research Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 37, 82, 0.92) 0%, rgba(26, 51, 108, 0.88) 100%)' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-6"
                 style={{ backgroundColor: 'rgba(142, 52, 0, 0.2)', borderColor: 'rgba(142, 52, 0, 0.3)', backdropFilter: 'blur(8px)' }}>
              <Microscope className="w-4 h-4" style={{ color: '#8E3400' }} />
              <span className="text-xs uppercase tracking-wider" style={{ color: '#8E3400', fontWeight: 700 }}>Research & Innovation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
                style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Answering the Big Questions in Maritime Security
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400 }}>
              We focus on strategic maritime research addressing safety, security, and environmental challenges in the Gulf of Guinea.


            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="http://www.gulfspectrumjournal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105"
                style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 600 }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
              >
                <span>Explore Our Research</span>
                <ArrowRight className="w-5 h-5" />
              </a>
             
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DASHBOARD */}
      <section className="relative -mt-16 z-20 px-6 pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl p-6 shadow-xl" style={{ border: '1px solid #E5E7EB' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#8E3400' }}></div>
                <h3 className="text-lg" style={{ fontWeight: 700, color: '#132552' }}>
                  Research Dashboard
                </h3>
              </div>
              <span className="text-xs" style={{ fontWeight: 500, color: '#6B7280' }}>Updated 2 min ago</span>
            </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl">
                {liveData.map((item, idx) => (
                  <div key={idx} className="text-center p-4 rounded-xl transition-all hover:scale-105" 
                       style={{ backgroundColor: '#F9FAFB' }}>
                    <div className="text-3xl mb-1" 
                         style={{ fontWeight: 800, color: '#132552' }}>
                      {item.value}
                    </div>
                    <p className="text-xs mb-2" style={{ fontWeight: 500, color: '#6B7280' }}>{item.label}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full" 
                          style={{ fontWeight: 600, backgroundColor: '#8E3400', color: 'white' }}>
                      {item.change} today
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH THEMES - COMPACT */}
      <section id="themes" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest" style={{ fontWeight: 600, color: '#8E3400', letterSpacing: '0.1em' }}>Research Themes</span>
            <h2 className="text-4xl md:text-5xl mt-3 mb-4"
                style={{ fontWeight: 800, color: '#132552', letterSpacing: '-0.01em' }}>
              Our Research Focus
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ fontWeight: 400, color: '#4B5563' }}>
              Ambitious research tackling pressing challenges in Gulf of Guinea maritime security
            </p>
          </div>

          <div className="space-y-5">
            {researchThemes.map((theme, idx) => (
              <Link
                key={idx}
                to={idx === 0 ? '/research/maritime-security-audit' : `/research/project-${idx + 1}`}
                className="group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white block"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="md:col-span-2 relative h-64 md:h-72 overflow-hidden">
                    <img
                      src={theme.image}
                      alt={theme.question}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-5 md:p-6 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs uppercase tracking-wide" style={{ fontWeight: 600, color: '#8E3400' }}>
                        Research Theme {idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl mb-3 leading-tight group-hover:text-[#8E3400] transition-colors"
                        style={{ fontWeight: 700, color: '#132552', fontFamily: 'system-ui, sans-serif' }}>
                      {theme.question}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-3 line-clamp-2" style={{ fontWeight: 400, color: '#4B5563', fontFamily: 'Georgia, serif' }}>
                      {theme.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-2.5 mb-3">
                      <div className="p-2.5 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                        <p className="text-xs mb-0.5" style={{ fontWeight: 500, color: '#6B7280' }}>Lead</p>
                        <p className="text-sm" style={{ fontWeight: 600, color: '#132552' }}>{theme.lead}</p>
                      </div>
                      <div className="p-2.5 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                        <p className="text-xs mb-0.5" style={{ fontWeight: 500, color: '#6B7280' }}>Team</p>
                        <p className="text-sm" style={{ fontWeight: 600, color: '#132552' }}>{theme.team} Researchers</p>
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-between pt-3 mt-auto" style={{ borderTop: '1px solid #E5E7EB' }}>
                      {/* Partners */}
                      <div className="flex gap-1.5 flex-wrap">
                        {theme.partners.map((partner, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-full text-xs"
                                style={{ fontWeight: 600, backgroundColor: '#132552', color: 'white' }}>
                            {partner}
                          </span>
                        ))}
                      </div>
                      
                      {/* Learn More About This Research */}
                      <div className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all ml-auto"
                           style={{ fontWeight: 600, color: '#8E3400' }}>
                        <span>Learn More About This Research</span>
                        <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #132552 0%, #1A336C 100%)' }}>
        <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl mb-4 text-white"
              style={{ fontWeight: 800, letterSpacing: '-0.01em' }}>
            Join Our Research Community
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}>
            Collaborate with us on groundbreaking maritime research or access our publications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base transition-all shadow-lg hover:scale-105"
              style={{ fontWeight: 600, backgroundColor: '#8E3400', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://gulfspectrumjournal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base transition-all"
              style={{ fontWeight: 600, border: '2px solid rgba(255, 255, 255, 0.5)', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span>Access Publications</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Research;