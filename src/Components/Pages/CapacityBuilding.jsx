import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  Award,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Globe,
  CheckCircle,
  Calendar,
  Clock,
  MapPin,
  Star,
  Building2,
  Anchor,
  Waves,
  Ship,
  UserCheck,
  BarChart3,
  Rocket,
  FileText,
  Video,
  MessageSquare,
  Shield,
  Sparkles
} from 'lucide-react';

const CapacityBuilding = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Core Programs
  const programs = [
    {
      category: 'Onsite',
      badge: 'Flagship Program',
      title: 'Blue Mentorship Programme',
      description: 'An African maritime accelerator designed to encourage youth to engage in sustainable blue economy careers and offer support through business, entrepreneurial, or career progression.',
      duration: '12 months',
      format: 'Hybrid',
      level: 'All Levels',
      participants: '30 per cohort',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&fit=crop',
      features: ['1-on-1 Mentorship', 'Industry Networks', 'Career Guidance', 'Business Development'],
      impact: '200+ youth engaged since 2021',
      nextIntake: 'March 2025'
    },
    {
      category: 'Hybrid',
      badge: 'Intensive Course',
      title: 'Youth in Africa\'s Blue Economy',
      description: 'Four-module training course exposing participants to career opportunities in Africa\'s Blue Economy with pathways for developing sustainable careers.',
      duration: '4 weeks',
      format: 'Online',
      level: 'Beginner-Intermediate',
      participants: 'Open enrollment',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
      features: ['4 Training Modules', 'Zoom Workshops', 'Success Stories', 'Certificate of Completion'],
      impact: 'Supported by IOC-UNESCO & NORAD',
      nextIntake: 'Quarterly'
    },
    {
      category: 'Virtual',
      badge: 'Annual Event',
      title: 'Blue Career & Business Expo',
      description: 'Multi-opportunity exchange platform connecting young people with maritime industry leaders to explore careers, businesses, and opportunities in Ghana\'s blue economy.',
      duration: '2 days',
      format: 'In-Person',
      level: 'All Levels',
      participants: '200+ attendees',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop',
      features: ['Panel Discussions', 'Network Sessions', 'Business Exhibition', 'Career Fair'],
      impact: 'Launched Ghana\'s Blue Business Directory',
      nextIntake: 'November 2025'
    },
    {
      category: 'Hybrid',
      badge: 'Coming Soon',
      title: 'Maritime Business Incubator',
      description: 'Comprehensive support platform partnering with global maritime industry to improve career connections, business financing, and innovation in blue start-ups.',
      duration: 'Ongoing',
      format: 'Hybrid',
      level: 'Intermediate-Advanced',
      participants: 'Rolling admission',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&fit=crop',
      features: ['Business Incubation', 'Funding Access', 'Resource Hubs', 'Maritime Data Hub'],
      impact: 'Launching Q2 2025',
      nextIntake: 'TBA'
    },
    {
      category: 'Onsite',
      badge: 'Professional Development',
      title: 'Maritime Security Training',
      description: 'Specialized training courses on maritime security, piracy prevention, and regional cooperation frameworks for maritime professionals and government officials.',
      duration: '6 weeks',
      format: 'Blended',
      level: 'Advanced',
      participants: '25 per cohort',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&fit=crop',
      features: ['Security Analysis', 'Risk Assessment', 'Regional Frameworks', 'Expert Instruction'],
      impact: 'Trained 2,000+ professionals',
      nextIntake: 'June 2025'
    },
    {
      category: 'Onsite',
      badge: 'Technical Skills',
      title: 'Blue Economy Business Development',
      description: 'Practical training on starting and scaling blue economy businesses, including fisheries, marine tourism, renewable energy, and marine biotechnology.',
      duration: '8 weeks',
      format: 'In Person',
      level: 'Intermediate',
      participants: 'Open enrollment',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&fit=crop',
      features: ['Business Planning', 'Financial Models', 'Market Analysis', 'Sustainability Practices'],
      impact: '500+ jobs created through graduates',
      nextIntake: 'Monthly'
    }
  ];

 

  // Success Stories
  const successStories = [
    {
      name: 'Ama Mensah',
      role: 'Marine Tourism Entrepreneur',
      program: 'Blue Mentorship Programme 2022',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop',
      quote: 'The Blue Mentorship Programme connected me with industry leaders who helped me launch my sustainable coastal tourism business. We\'ve created 15 jobs in just 18 months.',
      impact: '€50K revenue, 15 jobs created'
    },
    {
      name: 'Kwesi Boateng',
      role: 'Maritime Security Analyst',
      program: 'Maritime Security Training 2023',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop',
      quote: 'The advanced training equipped me with practical skills in threat assessment and regional coordination. I now work with ECOWAS on maritime security initiatives.',
      impact: 'Now leading regional security projects'
    },
    {
      name: 'Efua Asante',
      role: 'Sustainable Fisheries Manager',
      program: 'Blue Economy Business Development 2023',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&fit=crop',
      quote: 'GoGMI\'s business development course gave me the tools to transform traditional fishing practices. Our cooperative now serves 200 fishermen with sustainable practices.',
      impact: '200 fishermen impacted'
    }
  ];

  // Impact Metrics
  const impactMetrics = [
    { label: 'Youth Engaged', value: '1,200+', icon: <Users className="w-6 h-6" /> },
    { label: 'Training Programs', value: '25+', icon: <BookOpen className="w-6 h-6" /> },
    { label: 'Professionals Certified', value: '2,000+', icon: <Award className="w-6 h-6" /> },
    { label: 'Jobs Created', value: '500+', icon: <Briefcase className="w-6 h-6" /> },
    { label: 'Blue Businesses Supported', value: '150+', icon: <Rocket className="w-6 h-6" /> },
    { label: 'Partner Organizations', value: '45+', icon: <Building2 className="w-6 h-6" /> }
  ];

 

  // Filter programs
  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      
      {/* HERO SECTION */}
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
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-8"
                 style={{ backgroundColor: 'rgba(142, 52, 0, 0.2)', borderColor: 'rgba(142, 52, 0, 0.3)', backdropFilter: 'blur(8px)' }}>
              <GraduationCap className="w-4 h-4" style={{ color: '#8E3400' }} />
              <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 700, color: '#8E3400' }}>Capacity Building</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8"
                style={{ fontWeight: 900, letterSpacing: '-0.03em' }}>
              Empowering the Next Generation of Maritime Leaders
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed mb-10" style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.95)' }}>
              Through mentorship, training, and hands-on experience, we're building Africa's maritime workforce and blue economy entrepreneurs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#programs"
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

      {/* IMPACT DASHBOARD */}
      <section className="relative -mt-20 z-20 px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-3xl p-8 shadow-2xl" style={{ border: '2px solid #F5F7FA' }}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6" style={{ color: '#8E3400' }} />
                <h3 className="text-2xl" style={{ fontWeight: 900, color: '#132552' }}>
                  Our Impact
                </h3>
              </div>
              <span className="text-sm" style={{ fontWeight: 600, color: '#4B5563' }}>Since 2020</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
      </section>

     

      {/* PROGRAMS */}
      <section id="programs" className="py-20 md:py-32" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 600, color: '#8E3400' }}>Our Programs</span>
            <h2 className="text-5xl md:text-6xl mt-4 mb-6"
                style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              World-Class Training & Development
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-12" style={{ fontWeight: 400, color: '#4B5563' }}>
              From mentorship to professional certifications, we offer comprehensive programs for every stage of your maritime career
            </p>

            {/* Filter Tabs */}
            <div className="inline-flex gap-3 p-2 rounded-2xl" style={{ backgroundColor: 'white' }}>
              {[
                
                { key: 'Onsite', label: 'Onsite' },
                { key: 'Virtual', label: 'Virtual' },
                { key: 'Hybrid', label: 'Hybrid' },
              
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveCategory(tab.key)}
                  className="px-6 py-3 rounded-xl transition-all"
                  style={{
                    fontWeight: 700,
                    backgroundColor: activeCategory === tab.key ? '#8E3400' : 'transparent',
                    color: activeCategory === tab.key ? 'white' : '#4B5563'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full text-xs text-white"
                          style={{ fontWeight: 700, backgroundColor: '#8E3400' }}>
                      {program.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4 text-white text-xs mb-2">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span style={{ fontWeight: 600 }}>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span style={{ fontWeight: 600 }}>{program.format}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-3 leading-tight"
                      style={{ fontWeight: 900, color: '#132552' }}>
                    {program.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed mb-4" style={{ fontWeight: 400, color: '#4B5563' }}>
                    {program.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs"
                            style={{ fontWeight: 600, backgroundColor: '#F5F7FA', color: '#132552' }}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 mb-4" style={{ borderTop: '1px solid #F5F7FA' }}>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="mb-1" style={{ fontWeight: 600, color: '#4B5563' }}>Level</p>
                        <p style={{ fontWeight: 700, color: '#132552' }}>{program.level}</p>
                      </div>
                      <div>
                        <p className="mb-1" style={{ fontWeight: 600, color: '#4B5563' }}>Intake</p>
                        <p style={{ fontWeight: 700, color: '#132552' }}>{program.nextIntake}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(142, 52, 0, 0.1)' }}>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" style={{ color: '#8E3400' }} />
                      <span className="text-sm" style={{ fontWeight: 700, color: '#8E3400' }}>
                        {program.impact}
                      </span>
                    </div>
                  </div>

                  <button className="w-full px-6 py-3 rounded-2xl transition-all hover:scale-105"
                          style={{ fontWeight: 700, backgroundColor: '#132552', color: 'white' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A336C'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#132552'}>
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 600, color: '#8E3400' }}>Success Stories</span>
            <h2 className="text-5xl md:text-6xl mt-4 mb-6"
                style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Alumni Making Waves
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ fontWeight: 400, color: '#4B5563' }}>
              Meet the graduates who are transforming Africa's maritime and blue economy sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl text-white mb-2"
                        style={{ fontWeight: 900 }}>
                      {story.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ fontWeight: 600, color: '#8E3400' }}>
                      {story.role}
                    </p>
                    <div className="flex items-center gap-2 text-white text-xs">
                      <Award className="w-3.5 h-3.5" />
                      <span style={{ fontWeight: 600 }}>{story.program}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Star className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#8E3400' }} />
                    <p className="text-sm leading-relaxed italic" style={{ fontWeight: 400, color: '#4B5563' }}>
                      "{story.quote}"
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-xl" style={{ backgroundColor: '#F5F7FA' }}>
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

      {/* PARTNERS */}
     

      {/* APPLICATION PROCESS */}
     
    </div>
  );
};

export default CapacityBuilding;