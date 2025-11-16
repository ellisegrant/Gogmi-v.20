import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Calendar,
  ChevronRight,
  Microscope,
  BookOpen,
  Radio,
  Zap,
  Award,
  Globe,
  PlayCircle
} from 'lucide-react';

const Research = () => {
  // Research Themes - Big Questions
  const researchThemes = [
    {
      question: "How can we reduce maritime piracy by 80% in the next 5 years?",
      description: "Using AI-powered surveillance, regional coordination frameworks, and predictive analytics to transform maritime security.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&fit=crop",
      lead: "Dr. Kwame Mensah",
      team: 12,
      partners: ["IMO", "INTERPOL", "EU"],
      impact: "40% reduction achieved since 2020"
    },
    {
      question: "What if we could unlock $50 billion in sustainable ocean economy?",
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

  // Research Labs
  const researchCenters = [
    {
      name: "Maritime Security Innovation Lab",
      focus: "AI & Technology Solutions",
      description: "Developing cutting-edge surveillance, tracking, and prediction systems for maritime security.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&fit=crop",
      projects: 8,
      researchers: 15
    },
    {
      name: "Blue Economy Research Center",
      focus: "Sustainable Development",
      description: "Economic analysis and policy design for sustainable ocean resource management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&fit=crop",
      projects: 12,
      researchers: 20
    },
    {
      name: "Maritime Data & Analytics Hub",
      focus: "Data Science",
      description: "Big data analytics, machine learning, and visualization for maritime intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&fit=crop",
      projects: 6,
      researchers: 10
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
    { label: "Vessels Tracked Today", value: "15,247", change: "+234" },
    { label: "Active Research Projects", value: "36", change: "+3" },
    { label: "Data Points Collected", value: "2.4M", change: "+45K" },
    { label: "Partner Institutions", value: "89", change: "+5" }
  ];

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      
      {/* HERO */}
      <section className="relative text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&fit=crop&q=90" 
            alt="Research Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 37, 82, 0.92) 0%, rgba(26, 51, 108, 0.88) 100%)' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-8"
                 style={{ backgroundColor: 'rgba(193, 168, 117, 0.2)', borderColor: 'rgba(193, 168, 117, 0.3)', backdropFilter: 'blur(8px)' }}>
              <Microscope className="w-4 h-4" style={{ color: '#C1A875' }} />
              <span className="font-semibold text-sm" style={{ color: '#C1A875' }}>Research & Innovation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-8"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
              Answering the Big Questions in Maritime Security
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed mb-10" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Our research doesn't just study problems—it solves them. From AI-powered piracy prevention to unlocking billions in blue economy potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#themes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all shadow-xl hover:scale-105"
                style={{ backgroundColor: '#C1A875', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A4E3A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}
              >
                <span>Explore Our Research</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#team"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all"
                style={{ border: '2px solid rgba(255, 255, 255, 0.5)', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <span>Meet Our Researchers</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DASHBOARD */}
      <section className="relative -mt-20 z-20 px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-3xl p-8 shadow-2xl" style={{ border: '2px solid #F5F7FA' }}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#C1A875' }}></div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                  Live Research Dashboard
                </h3>
              </div>
              <span className="text-sm font-semibold" style={{ color: '#4B5563' }}>Updated 2 min ago</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {liveData.map((item, idx) => (
                <div key={idx} className="text-center p-6 rounded-2xl transition-all hover:scale-105" 
                     style={{ backgroundColor: '#F5F7FA' }}>
                  <div className="text-4xl font-black mb-2" 
                       style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                    {item.value}
                  </div>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#4B5563' }}>{item.label}</p>
                  <span className="text-xs font-bold px-3 py-1 rounded-full" 
                        style={{ backgroundColor: '#C1A875', color: 'white' }}>
                    {item.change} today
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BIG QUESTIONS */}
      <section id="themes" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Research Themes</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              The Big Questions We're Answering
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
              Ambitious research tackling the most pressing challenges in West African maritime security
            </p>
          </div>

          <div className="space-y-8">
            {researchThemes.map((theme, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 relative h-96 md:h-auto overflow-hidden">
                    <img
                      src={theme.image}
                      alt={theme.question}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="md:col-span-3 p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Lightbulb className="w-6 h-6" style={{ color: '#C1A875' }} />
                      <span className="text-sm font-bold uppercase" style={{ color: '#C1A875' }}>
                        Research Theme {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                      {theme.question}
                    </h3>

                    <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
                      {theme.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-2xl" style={{ backgroundColor: '#F5F7FA' }}>
                        <p className="text-sm font-semibold mb-1" style={{ color: '#4B5563' }}>Research Lead</p>
                        <p className="font-bold" style={{ color: '#132552' }}>{theme.lead}</p>
                      </div>
                      <div className="p-4 rounded-2xl" style={{ backgroundColor: '#F5F7FA' }}>
                        <p className="text-sm font-semibold mb-1" style={{ color: '#4B5563' }}>Team Size</p>
                        <p className="font-bold" style={{ color: '#132552' }}>{theme.team} Researchers</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6" style={{ borderTop: '2px solid #F5F7FA' }}>
                      <div>
                        <p className="text-xs font-semibold mb-2" style={{ color: '#4B5563' }}>Key Partners</p>
                        <div className="flex gap-2">
                          {theme.partners.map((partner, i) => (
                            <span key={i} className="px-3 py-1 rounded-full text-xs font-bold"
                                  style={{ backgroundColor: '#132552', color: 'white' }}>
                              {partner}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold mb-1" style={{ color: '#4B5563' }}>Impact</p>
                        <p className="font-bold text-lg" style={{ color: '#C1A875' }}>{theme.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH CENTERS */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Our Labs</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Research Centers & Labs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchCenters.map((center, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={center.image}
                    alt={center.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: 'rgba(193, 168, 117, 0.9)' }}>
                      {center.focus}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm font-semibold">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>{center.projects} Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{center.researchers} Team</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                    {center.name}
                  </h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#4B5563' }}>
                    {center.description}
                  </p>
                  <button className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-4"
                          style={{ color: '#C1A875' }}>
                    <span>Explore Center</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCHERS */}
      <section id="team" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Our Team</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Meet Our Researchers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchers.map((researcher, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={researcher.image}
                    alt={researcher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                      {researcher.name}
                    </h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: '#C1A875' }}>
                      {researcher.role}
                    </p>
                    <div className="flex items-center gap-2 text-white text-xs">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{researcher.publications} Publications</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#4B5563' }}>
                    {researcher.bio}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase" style={{ color: '#C1A875' }}>Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {researcher.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 rounded-full text-xs font-semibold"
                              style={{ backgroundColor: '#F5F7FA', color: '#132552' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STORIES */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Impact</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Research in Action
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {impactStories.map((story, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: '#C1A875' }}>
                      {story.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-white text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{story.date}</span>
                    </div>
                    <span>{story.readTime}</span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2"
                      style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                    {story.title}
                  </h3>
                  <p className="text-sm line-clamp-3 mb-4" style={{ color: '#4B5563' }}>
                    {story.description}
                  </p>
                  <button className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-4"
                          style={{ color: '#C1A875' }}>
                    <span>Read Story</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Events</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Seminars & Webinars
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ border: '2px solid #F5F7FA' }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-2 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: '#132552' }}>
                    {event.type}
                  </span>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#C1A875' }}>
                    <Users className="w-4 h-4" />
                    <span>{event.attendees}+</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                  {event.title}
                </h3>

                <p className="text-base font-semibold mb-4" style={{ color: '#4B5563' }}>
                  with {event.speaker}
                </p>

                <div className="space-y-2 mb-6 text-sm" style={{ color: '#4B5563' }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: '#C1A875' }} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4" style={{ color: '#C1A875' }} />
                    <span>{event.time}</span>
                  </div>
                </div>

                <button className="w-full px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105"
                        style={{ backgroundColor: '#C1A875', color: 'white' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A4E3A'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}>
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #132552 0%, #1A336C 100%)' }}>
        <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
            Join Our Research Community
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Collaborate with us on groundbreaking maritime research or access our publications
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105"
              style={{ backgroundColor: '#C1A875', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A4E3A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg transition-all"
              style={{ border: '2px solid rgba(255, 255, 255, 0.5)', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span>Access Publications</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Research;