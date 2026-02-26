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
      color: '#8E3400',
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
      color: '#8E3400',
      initiatives: ['Professional Training', 'Youth Programs', 'Technical Assistance']
    }
  ];

  const achievements = [
    {
      year: '2010-2025',
      title: 'International Maritime Security Working Group',
      description: `The International Maritime Security Working Group (IMSWG), formed by the Gulf of Guinea Maritime Institute, is the Institute's flagship forum focused on stimulating dialogue and policy innovation aimed at addressing maritime security and safety concerns in the Gulf of Guinea (GoG) region. The IMSWG forum is notable as a knowledge exchange and research network on regional issues while keeping an eye on the pulse of international perspectives.`,
      impact: '40% reduction in maritime incidents',
      image: '/IMSWG LOGO WHITE BG.jpg',
      link: '/imswg'
    },
    {
      year: '2023',
      title: 'Blue Career and Business Expo',
      description: `The Blue Career and Business Expo is a yearly programme designed to create dynamic opportunity-exchange platforms that enable young people to engage with maritime industry leaders and actively contribute to building a robust blue economy in Africa. The three-month initiative commence with a two-day Business Expo Conference, specifically targeted at youth (with full gender inclusivity). The conference will feature in-depth panel discussions, networking sessions, and an exhibition of maritime businesses, serving as a strategic gathering point for Ghana's maritime industry leaders, relevant ministries, maritime enterprises, and young people followed by a three (3) month mentorship program co-managed by GoGMI to support career development among participants. Through the mentorship program, students who enroll will be paired with experienced maritime professionals, helping them map out clear career pathways and gain practical insights into the maritime sector`,
      impact: '500+ jobs created',
      image: '/bluecareer.webp',
      link: '/bluecareerexpo'  // Link to Blue Career Expo page - you can add links like this to any achievement
    },
    // {
    //   year: '2023',
    //   title: 'Gulf of Guinea Maritime Collaboration Forum and Shared Awareness and De-confliction (GoG-MCF/SHADE)',
    //   description: `The Gulf of Guinea Maritime Collaboration Forum and Shared Awareness and De-confliction (GoG-MCF/SHADE) seeks to create a viable platform for navies, industry partners and other relevant stakeholders from across the Gulf of Guinea and beyond to harmonise counter-piracy efforts and communication in the region under the existing information sharing architecture provided by both the Yaoundé Code of Conduct (YCOC) and the Best Management Practices to Deter Piracy and Enhance Maritime Security off the Coast of West Africa (BMP-WA)`,
    //   impact: '2,000+ professionals certified',
    //   image: '/shade.png',
    //   link: '/shade'  // ✅ ADDED LINK TO SHADE PAGE
    // },

    {
      year: '2023',
      title: 'Blue World Initiative',
      description: "BWI is an Ocean literacy program for Basic and Second Cycle school students with the knowledge and tools to become informed and engaged ocean stewards. Our ocean covers over 70% of our planet and plays an essential role in regulating climate, providing food and resources, and supporting incredible biodiversity.",
      image: '/GoGMI_PNG.png',
      link: '/blue-world-initiative'
    },

//  {
//       year: '2025',
//       title: '10th Anniversary Consultative Meeting on the Yaoundé Code of Conduct – "Impact of the Yaoundé Code of Conduct on ECOWAS Maritime Domain: 10 Years After Its Adoption"',
//       description: 'As part of a youth ocean career study, the Blue Career Fair engaged students, educators, and maritime professionals to explore opportunities in the blue economy, with presentations, panels, and exhibitions from the Ghana Navy, Ghana Maritime Authority, and Regional Maritime University.',
//       image: '/shade.png'
//     }

  ];

  const campaigns = [
    {
      status: 'active',
      title: 'International Maritime Security Working Group',
      category: 'Maritime Security',
      description: 'The IMSWG forum is a leading platform for regional knowledge sharing and research, with insight into international trends.',
      supporters: 2450,
      deadline: 'Ongoing',
      logo: '/IMSWG LOGO WHITE BG.jpg',
      link: '/imswg'
    },
    {
      status: 'active',
      title: 'Blue Career and Business Expo',
      category: 'Youth Development',
      description: "The Blue Career and Business Expo is a yearly event that connects young people with maritime industry leaders to support Africa's blue economy.",
      supporters: 1890,
      deadline: 'Annual Event',
      logo: '/bluecareer.webp'
    },
    // {
    //   status: 'active',
    //   title: 'National Maritime Safety and Security (NaMSSec) Forum ',
    //   category: 'Maritime Safety',
    //   description: 'A high level stakeholder forum organized to discuss and advise on policies and identify policy gaps for necessary interventions',
    //   supporters: 3200,
    //   deadline: 'Ongoing',
    //   logo: '/shade.png'
    // },
    {
      status: 'active',
      title: 'Blue World Initiative',
      category: 'Youth Development',
      description: 'BWI is an ocean literacy program equipping Basic and Second Cycle students to become informed and engaged ocean stewards.',
      supporters: 1250,
      deadline: 'March 2025',
      logo: '/safe-seas-logo.png'
    },
  ];

  

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      
      {/* HERO SECTION */}
      <section className="relative text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&fit=crop&q=90" 
            alt="Advocacy Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 37, 82, 0.7) 0%, rgba(26, 51, 108, 0.65) 100%)' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="max-w-4xl">
           

            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8"
                style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
             Advocacy
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed mb-10" style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.95)' }}>
             We raise awareness on how crucial the marine sector is in shaping policy, advancing the blue economy,
              and promoting sustainable ocean use in the Gulf of Guinea.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl transition-all shadow-xl hover:scale-105"
                style={{ fontWeight: 700, backgroundColor: '#8E3400', color: 'white' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            
            </div>
          </div>
        </div>
      </section>




      {/* ACTIVE CAMPAIGNS */}
      <section id="campaigns" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 600, color: '#8E3400' }}>Get Involved</span>
            <h2 className="text-5xl md:text-6xl mt-4 mb-6"
                style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Active Campaigns
            </h2>
      
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ border: '2px solid #F5F7FA' }}
              >
                {/* Logo Section */}
                <div className="flex items-center justify-center mb-4 h-20">
                  <img 
                    src={campaign.logo} 
                    alt={campaign.title}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-300 text-sm">Logo</div>';
                    }}
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1.5 rounded-full text-xs uppercase"
                        style={{ fontWeight: 700, backgroundColor: '#10B981', color: 'white' }}>
                    {campaign.status}
                  </span>
                  <span className="text-sm" style={{ fontWeight: 600, color: '#4B5563' }}>
                    {campaign.category}
                  </span>
                </div>

                <h3 className="text-xl mb-3"
                    style={{ fontWeight: 900, color: '#132552' }}>
                  {campaign.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ fontWeight: 400, color: '#4B5563' }}>
                  {campaign.description}
                </p>

                <div className="flex items-center justify-between pt-4 mb-4" style={{ borderTop: '1px solid #F5F7FA' }}>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: '#8E3400' }} />
                    <span className="text-xs" style={{ fontWeight: 600, color: '#4B5563' }}>
                      {campaign.supporters}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: '#8E3400' }} />
                    <span className="text-xs" style={{ fontWeight: 600, color: '#4B5563' }}>
                      {campaign.deadline}
                    </span>
                  </div>
                </div>

                <Link
                  to={campaign.link || `/campaigns/${campaign.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block w-full px-5 py-2.5 rounded-xl text-center text-sm transition-all hover:scale-105"
                  style={{ fontWeight: 700, backgroundColor: '#132552', color: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1A336C'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#132552'}
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      {/* ACHIEVEMENTS */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-wider" style={{ fontWeight: 600, color: '#8E3400' }}>Track Record</span>
            <h2 className="text-5xl md:text-6xl mt-4 mb-6"
                style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
              Our Advocacy Wins
            </h2>
           
          </div>

          <div className="space-y-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image/Logo section - centered and contained */}
                  <div className="md:col-span-2 relative h-64 md:h-72 bg-white flex items-center justify-center p-8">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="max-w-full max-h-full object-contain"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  <div className="md:col-span-3 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-4 py-1.5 rounded-full text-white text-sm"
                           style={{ fontWeight: 700, backgroundColor: '#132552' }}>
                        {achievement.year}
                      </div>
                      {achievement.impact && (
                        <div className="px-4 py-1.5 rounded-full text-sm"
                             style={{ fontWeight: 600, backgroundColor: '#F5F7FA', color: '#8E3400' }}>
                          {achievement.impact}
                        </div>
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl mb-4 line-clamp-2"
                        style={{ fontWeight: 900, color: '#132552' }}>
                      {achievement.title}
                    </h3>

                    <p className="text-base leading-relaxed mb-5 line-clamp-3" style={{ fontWeight: 400, color: '#4B5563' }}>
                      {achievement.description}
                    </p>

                    {/* Learn More Link - connects to actual pages 
                        HOW TO ADD LINKS: Simply add a 'link' property to the achievement object
                        Example: link: '/imswg' or link: '/bluecareerexpo'
                        If no link is provided, it will use a default URL
                    */}
                    <Link
                      to={achievement.link || `/projects/${achievement.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 transition-all hover:gap-4 text-base"
                      style={{ fontWeight: 600, color: '#8E3400' }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #132552 0%, #1A336C 100%)' }}>
        <div className="container mx-auto max-w-5xl px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl mb-6 text-white"
              style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}>
            Partner with us to shape maritime policy and drive sustainable development across the Gulf of Guinea .
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl text-lg transition-all shadow-xl hover:scale-105"
              style={{ fontWeight: 700, backgroundColor: '#8E3400', color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl text-lg transition-all"
              style={{ fontWeight: 700, border: '2px solid rgba(255, 255, 255, 0.5)', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
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