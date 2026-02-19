import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Award,
  BookOpen,
  Building2,
  Clock,
  MapPin,
  TrendingUp,
  Star,
  BarChart3,
  Sparkles
} from 'lucide-react';

const CapacityBuilding = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Core Programs - with status
  const programs = [
    {
      category: 'Hybrid',
      status: 'Upcoming',
      title: 'Marine Casualty Investigation and Safety Management Course ',
      description: 'An African maritime accelerator designed to encourage youth to engage in sustainable blue economy careers.',
      duration: '4 months',
      format: 'Hybrid',
      level: 'All Levels',
      image: '/marine.casuality.jpeg',
      features: ['1-on-1 Mentorship', 'Industry Networks', 'Career Guidance'],
      impact: '200+ youth engaged since 2021',
      nextIntake: 'March 2025'
    },
    {
      category: 'Virtual',
      status: 'Active',
      title: 'Youth in Africa\'s Blue Economy',
      description: 'Four-module training course exposing participants to career opportunities in Africa\'s Blue Economy.',
      duration: '4 weeks',
      format: 'Online',
      level: 'Beginner-Intermediate',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
      features: ['4 Training Modules', 'Zoom Workshops', 'Certificate'],
      impact: 'Supported by IOC-UNESCO & NORAD',
      nextIntake: 'Quarterly'
    },
    {
      category: 'Onsite',
      status: 'Completed',
      title: 'Blue Career & Business Expo',
      description: 'Platform connecting young people with maritime industry leaders to explore careers and opportunities.',
      duration: '2 days',
      format: 'In-Person',
      level: 'All Levels',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop',
      features: ['Panel Discussions', 'Network Sessions', 'Career Fair'],
      impact: 'Launched Ghana\'s Blue Business Directory',
      nextIntake: 'November 2025'
    }
  ];

  const successStories = [
    {
      name: 'Ama Mensah',
      role: 'Marine Tourism Entrepreneur',
      program: 'Blue Mentorship Programme 2022',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop',
      quote: 'The Blue Mentorship Programme connected me with industry leaders who helped me launch my sustainable coastal tourism business.',
      impact: '€50K revenue, 15 jobs created'
    },
    {
      name: 'Kwesi Boateng',
      role: 'Maritime Security Analyst',
      program: 'Maritime Security Training 2023',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop',
      quote: 'The advanced training equipped me with practical skills in threat assessment and regional coordination.',
      impact: 'Leading regional security projects'
    }
  ];

  const impactMetrics = [
    { label: 'Training Programs', value: '25+', icon: <BookOpen className="w-6 h-6" /> },
    { label: 'Professionals Certified', value: '2,000+', icon: <Award className="w-6 h-6" /> },
    { label: 'Partner Organizations', value: '45+', icon: <Building2 className="w-6 h-6" /> }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      
      {/* HERO SECTION - Original */}
      <section className="relative text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&fit=crop&q=90" 
            alt="Capacity Building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 37, 82, 0.92) 0%, rgba(26, 51, 108, 0.88) 100%)' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8"
                style={{ fontWeight: 900, letterSpacing: '-0.03em' }}>
             Capacity Building 
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed mb-10" style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.95)' }}>
            We specialize in training programs and mentoring initiatives for marine professionals, stakeholders, women,
             and youth in the blue economy, as well as maritime safety and security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://lms.gogmi.org.gh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
                style={{ fontWeight: 700, backgroundColor: '#8E3400', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
              >
                <span>Explore Our Trainings</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT DASHBOARD - Compact */}
      <section className="relative -mt-20 z-20 px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-3xl p-8 shadow-2xl" style={{ border: '2px solid #F5F7FA' }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" style={{ color: '#8E3400' }} />
                <h3 className="text-2xl" style={{ fontWeight: 900, color: '#132552' }}>
                  Our Impact
                </h3>
              </div>
              <span className="text-sm" style={{ fontWeight: 600, color: '#4B5563' }}>Since 2020</span>
            </div>
            
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
                {impactMetrics.map((metric, idx) => (
                  <div key={idx} className="text-center p-6 rounded-2xl transition-all hover:scale-105" 
                       style={{ backgroundColor: '#F5F7FA' }}>
                    <div className="inline-flex p-3 rounded-xl mb-3" style={{ backgroundColor: 'rgba(142, 52, 0, 0.1)', color: '#8E3400' }}>
                      {metric.icon}
                    </div>
                    <div className="text-3xl mb-2" style={{ fontWeight: 900, color: '#132552' }}>
                      {metric.value}
                    </div>
                    <p className="text-sm" style={{ fontWeight: 600, color: '#4B5563' }}>{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSE - MASDII */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 600, color: '#8E3400' }}>Featured Course</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-4"
                style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Now Enrolling:  MARITIME GOVERNANCE MODULAR COURSE 
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4B5563' }}>
              Professional development in maritime security strategy for African practitioners
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2" style={{ borderColor: '#E5E7EB' }}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-[350px] lg:h-auto">
                <img 
                  src="/maritime.gov.jpeg" 
                  alt="MASDII Course"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#132552]/80 to-transparent"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: '#16A34A' }}>
                    Active
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <h3 className="text-2xl md:text-3xl font-black mb-2" style={{ color: '#132552', letterSpacing: '-0.02em' }}>
                  MARITIME GOVERNANCE COURSE
                </h3>
                <p className="text-lg font-semibold mb-6" style={{ color: '#8E3400' }}>
                  A Focus on Africa
                </p>
                
                <p className="text-base leading-relaxed mb-6" style={{ color: '#4B5563' }}>
                  Comprehensive 4-week virtual course equipping professionals with expertise to develop and implement 
                  maritime security strategies across the African continent.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4" style={{ color: '#8E3400' }} />
                      <span className="text-xs font-bold" style={{ color: '#6B7280' }}>Duration</span>
                    </div>
                    <p className="text-base font-bold" style={{ color: '#132552' }}>4 weeks</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4" style={{ color: '#8E3400' }} />
                      <span className="text-xs font-bold" style={{ color: '#6B7280' }}>Format</span>
                    </div>
                    <p className="text-base font-bold" style={{ color: '#132552' }}>Virtual (Zoom)</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="w-4 h-4" style={{ color: '#8E3400' }} />
                      <span className="text-xs font-bold" style={{ color: '#6B7280' }}>Modules</span>
                    </div>
                    <p className="text-base font-bold" style={{ color: '#132552' }}>8 modules</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4" style={{ color: '#8E3400' }} />
                      <span className="text-xs font-bold" style={{ color: '#6B7280' }}>Level</span>
                    </div>
                    <p className="text-base font-bold" style={{ color: '#132552' }}>Professional</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold mb-3" style={{ color: '#6B7280' }}>DISTINGUISHED FACULTY</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Vice Admiral Issah Yakubu', 'Prof. Jeffrey Landsman', 'Dr. Alberta Sagoe'].map((faculty, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-bold border" 
                            style={{ borderColor: '#E5E7EB', color: '#132552' }}>
                        {faculty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Link
                    to="/maritimegovernancecourse"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg"
                    style={{ fontWeight: 700, backgroundColor: '#8E3400', color: 'white' }}
                  >
                    <span>View Full Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/masdii"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all border-2"
                    style={{ fontWeight: 700, borderColor: '#132552', color: '#132552' }}
                  >
                    <span>Apply Now</span>
                  </Link>
                </div>

                <div className="p-3 rounded-xl" style={{ backgroundColor: '#F5F7FA' }}>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" style={{ color: '#8E3400' }} />
                    <span className="text-sm font-bold" style={{ color: '#132552' }}>
                      Next Intake: May 5 - 28, 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER PROGRAMS - With Status Badge */}
      <section id="programs" className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 600, color: '#8E3400' }}>Our Programs</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-4"
                style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Training & Development
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ fontWeight: 400, color: '#4B5563' }}>
              Comprehensive programs for every stage of your maritime career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs text-white font-bold"
                          style={{ 
                            backgroundColor: program.status === 'Active' ? '#16A34A' : '#6B7280'
                          }}>
                      {program.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-3 text-white text-xs">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span style={{ fontWeight: 600 }}>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span style={{ fontWeight: 600 }}>{program.format}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg mb-2 leading-tight"
                      style={{ fontWeight: 900, color: '#132552' }}>
                    {program.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed mb-4" style={{ fontWeight: 400, color: '#4B5563' }}>
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {program.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 rounded text-xs"
                            style={{ fontWeight: 600, backgroundColor: '#F5F7FA', color: '#132552' }}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg mb-4" style={{ backgroundColor: 'rgba(142, 52, 0, 0.1)' }}>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" style={{ color: '#8E3400' }} />
                      <span className="text-xs" style={{ fontWeight: 700, color: '#8E3400' }}>
                        {program.impact}
                      </span>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2.5 rounded-xl transition-all hover:scale-105"
                          style={{ fontWeight: 700, backgroundColor: '#132552', color: 'white', fontSize: '0.875rem' }}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES - Original Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 600, color: '#8E3400' }}>Success Stories</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-4"
                style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Alumni Making Waves
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl text-white mb-1"
                        style={{ fontWeight: 900 }}>
                      {story.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ fontWeight: 600, color: '#8E3400' }}>
                      {story.role}
                    </p>
                    <div className="flex items-center gap-2 text-white text-xs">
                      <Award className="w-3 h-3" />
                      <span style={{ fontWeight: 600 }}>{story.program}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start gap-2 mb-4">
                    <Star className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#8E3400' }} />
                    <p className="text-sm leading-relaxed italic" style={{ fontWeight: 400, color: '#4B5563' }}>
                      "{story.quote}"
                    </p>
                  </div>
                  
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" style={{ color: '#8E3400' }} />
                      <span className="text-sm" style={{ fontWeight: 700, color: '#132552' }}>
                        {story.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16" style={{ backgroundColor: '#132552' }}>
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
            Ready to Advance Your Maritime Career?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://lms.gogmi.org.gh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all hover:scale-105 font-bold shadow-2xl"
              style={{ backgroundColor: '#8E3400', color: 'white' }}
            >
              Browse All Programs
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl transition-all hover:scale-105 border-2 border-white/30 text-white font-bold hover:bg-white/10"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CapacityBuilding;