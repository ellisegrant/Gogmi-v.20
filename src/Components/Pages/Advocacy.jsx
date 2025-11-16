import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Scale,
  Users,
  FileText,
  Target,
  TrendingUp,
  Globe,
  CheckCircle,
  Award,
  BookOpen,
  MessageSquare,
  ExternalLink,
  Download,
  Calendar,
  Shield,
  Anchor,
  Waves
} from 'lucide-react';

const Advocacy = () => {
  const [activeTab, setActiveTab] = useState('all');

  const policyAreas = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Maritime Security',
      description: 'Advocating for enhanced regional cooperation and capacity building to combat piracy and maritime crime.',
      color: '#132552',
      initiatives: ['Regional Information Sharing', 'Naval Cooperation Frameworks', 'Port Security Standards']
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: 'Blue Economy',
      description: 'Promoting sustainable utilization of ocean resources for economic growth and marine conservation.',
      color: '#C1A875',
      initiatives: ['Sustainable Fisheries', 'Marine Tourism', 'Ocean Conservation']
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Maritime Governance',
      description: 'Strengthening legal frameworks and institutional capacity for effective maritime management.',
      color: '#1A336C',
      initiatives: ['Legal Harmonization', 'Institutional Development', 'Compliance Monitoring']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Capacity Building',
      description: 'Developing human resource capabilities across maritime institutions and communities.',
      color: '#7A4E3A',
      initiatives: ['Professional Training', 'Youth Programs', 'Technical Assistance']
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Regional Maritime Security Framework Adopted',
      description: 'Successfully advocated for the adoption of comprehensive maritime security protocols across 12 West African nations.',
      impact: '40% reduction in maritime incidents',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&fit=crop'
    },
    {
      year: '2023',
      title: 'Blue Economy Investment Fund Established',
      description: 'Led policy dialogue resulting in €50M regional fund for sustainable maritime development.',
      impact: '500+ jobs created',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&fit=crop'
    },
    {
      year: '2023',
      title: 'Maritime Training Standards Harmonized',
      description: 'Coordinated efforts to standardize maritime professional certifications across the region.',
      impact: '2,000+ professionals certified',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop'
    }
  ];

  const campaigns = [
    {
      status: 'active',
      title: 'Safe Seas Initiative',
      category: 'Maritime Security',
      description: 'Advocating for enhanced surveillance systems and coordinated patrols in high-risk maritime zones.',
      progress: 75,
      supporters: 1250,
      deadline: 'March 2025'
    },
    {
      status: 'active',
      title: 'Ocean Protection Act',
      category: 'Environment',
      description: 'Pushing for legislative frameworks to protect marine ecosystems and combat illegal fishing.',
      progress: 60,
      supporters: 890,
      deadline: 'June 2025'
    },
    {
      status: 'active',
      title: 'Youth Maritime Careers',
      category: 'Education',
      description: 'Promoting policies to create maritime job opportunities and training programs for young people.',
      progress: 45,
      supporters: 650,
      deadline: 'December 2025'
    }
  ];

  const resources = [
    {
      type: 'Policy Brief',
      title: 'Maritime Security in the Gulf of Guinea: Policy Recommendations',
      date: 'November 2024',
      downloads: 1245,
      category: 'Security'
    },
    {
      type: 'Research Report',
      title: 'Blue Economy Opportunities in West Africa',
      date: 'October 2024',
      downloads: 980,
      category: 'Economy'
    },
    {
      type: 'Position Paper',
      title: 'Strengthening Regional Maritime Governance',
      date: 'September 2024',
      downloads: 756,
      category: 'Governance'
    }
  ];

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      
      {/* HERO SECTION */}
      <section className="relative text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&fit=crop&q=90" 
            alt="Advocacy Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 37, 82, 0.9) 0%, rgba(26, 51, 108, 0.85) 100%)' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-8"
                 style={{ backgroundColor: 'rgba(193, 168, 117, 0.2)', borderColor: 'rgba(193, 168, 117, 0.3)', backdropFilter: 'blur(8px)' }}>
              <Scale className="w-4 h-4" style={{ color: '#C1A875' }} />
              <span className="font-semibold text-sm" style={{ color: '#C1A875' }}>Policy & Advocacy</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-8"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
              Shaping Maritime Policy Across West Africa
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed mb-10" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Through evidence-based research and strategic engagement, we advocate for policies that enhance maritime security, promote sustainable ocean economies, and strengthen regional cooperation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all shadow-xl hover:scale-105"
                style={{ backgroundColor: '#C1A875', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A4E3A'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="#campaigns"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all"
                style={{ border: '2px solid rgba(255, 255, 255, 0.5)', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <span>View Campaigns</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="relative -mt-20 z-20 px-6 pb-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <FileText className="w-7 h-7" />, number: '50+', label: 'Policy Briefs' },
              { icon: <Users className="w-7 h-7" />, number: '25', label: 'Partner Nations' },
              { icon: <Award className="w-7 h-7" />, number: '15+', label: 'Policy Wins' },
              { icon: <TrendingUp className="w-7 h-7" />, number: '40%', label: 'Impact Increase' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex justify-center mb-4" style={{ color: '#C1A875' }}>{stat.icon}</div>
                <div className="text-4xl font-black mb-2" 
                     style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>{stat.number}</div>
                <p className="text-sm font-semibold" style={{ color: '#4B5563' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POLICY AREAS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Our Focus Areas</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              What We Advocate For
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
              Strategic policy interventions across key maritime sectors to drive sustainable development and regional security
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {policyAreas.map((area, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ border: '2px solid #F5F7FA' }}
              >
                <div className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl transition-all duration-500 transform origin-left scale-x-0 group-hover:scale-x-100"
                     style={{ backgroundColor: area.color }}></div>

                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 rounded-2xl transition-all duration-500 group-hover:scale-110"
                       style={{ backgroundColor: '#F5F7FA', color: area.color }}>
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                      {area.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold mb-3" style={{ color: '#C1A875' }}>Key Initiatives:</p>
                  {area.initiatives.map((initiative, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" style={{ color: '#C1A875' }} />
                      <span className="text-sm" style={{ color: '#4B5563' }}>{initiative}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Track Record</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Our Advocacy Wins
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
              Measurable policy changes and tangible impact across the Gulf of Guinea region
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                  </div>

                  <div className="md:col-span-3 p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="px-5 py-2 rounded-full font-bold text-white"
                           style={{ backgroundColor: '#132552' }}>
                        {achievement.year}
                      </div>
                      <div className="px-5 py-2 rounded-full font-semibold"
                           style={{ backgroundColor: '#F5F7FA', color: '#C1A875' }}>
                        {achievement.impact}
                      </div>
                    </div>

                    <h3 className="text-3xl font-bold mb-4"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                      {achievement.title}
                    </h3>

                    <p className="text-lg leading-relaxed mb-6" style={{ color: '#4B5563' }}>
                      {achievement.description}
                    </p>

                    <button className="inline-flex items-center gap-2 font-semibold transition-all hover:gap-4"
                            style={{ color: '#C1A875' }}>
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVE CAMPAIGNS */}
      <section id="campaigns" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Get Involved</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Active Campaigns
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
              Join us in driving critical policy changes across the maritime sector
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ border: '2px solid #F5F7FA' }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-2 rounded-full text-xs font-bold uppercase"
                        style={{ backgroundColor: '#C1A875', color: 'white' }}>
                    {campaign.status}
                  </span>
                  <span className="text-sm font-semibold" style={{ color: '#4B5563' }}>
                    {campaign.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                  {campaign.title}
                </h3>

                <p className="text-base leading-relaxed mb-6" style={{ color: '#4B5563' }}>
                  {campaign.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold" style={{ color: '#4B5563' }}>Progress</span>
                    <span className="text-sm font-bold" style={{ color: '#C1A875' }}>{campaign.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#F5F7FA' }}>
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${campaign.progress}%`, backgroundColor: '#C1A875' }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid #F5F7FA' }}>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: '#C1A875' }} />
                    <span className="text-sm font-semibold" style={{ color: '#4B5563' }}>
                      {campaign.supporters} supporters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: '#C1A875' }} />
                    <span className="text-sm font-semibold" style={{ color: '#4B5563' }}>
                      {campaign.deadline}
                    </span>
                  </div>
                </div>

                <button className="w-full mt-6 px-6 py-3 rounded-2xl font-bold transition-all hover:scale-105"
                        style={{ backgroundColor: '#132552', color: 'white' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A336C'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#132552'}>
                  Support This Campaign
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES & PUBLICATIONS */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Knowledge Hub</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              Policy Resources
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563' }}>
              Access our research, policy briefs, and advocacy materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6" style={{ color: '#C1A875' }} />
                  <span className="text-xs font-bold uppercase px-3 py-1 rounded-full"
                        style={{ backgroundColor: '#F5F7FA', color: '#132552' }}>
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4 leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                  {resource.title}
                </h3>

                <div className="flex items-center gap-4 text-sm mb-6" style={{ color: '#4B5563' }}>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: '#C1A875' }} />
                    <span>{resource.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4" style={{ color: '#C1A875' }} />
                    <span>{resource.downloads}</span>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all group-hover:scale-105"
                        style={{ backgroundColor: '#F5F7FA', color: '#132552' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F5F7FA'}>
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:scale-105"
              style={{ backgroundColor: '#132552', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A336C'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#132552'}
            >
              <span>View All Resources</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO GET INVOLVED */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: '#C1A875' }}>Take Action</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 mb-6"
                style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
              How You Can Help
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: 'Join the Conversation',
                description: 'Participate in policy dialogues and consultations'
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Submit Research',
                description: 'Contribute evidence and case studies to inform policy'
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Partner With Us',
                description: 'Collaborate on advocacy campaigns and initiatives'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Support Campaigns',
                description: 'Endorse and amplify our policy recommendations'
              }
            ].map((action, idx) => (
              <div
                key={idx}
                className="group text-center p-8 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ backgroundColor: '#F5F7FA' }}
              >
                <div className="inline-flex p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500"
                     style={{ backgroundColor: 'white', color: '#C1A875' }}>
                  {action.icon}
                </div>
                <h3 className="text-xl font-bold mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                  {action.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
                  {action.description}
                </p>
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
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Partner with us to shape maritime policy and drive sustainable development across West Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105"
              style={{ backgroundColor: '#C1A875', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A4E3A'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg transition-all"
              style={{ border: '2px solid rgba(255, 255, 255, 0.5)', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            >
              <span>Explore Resources</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Advocacy;