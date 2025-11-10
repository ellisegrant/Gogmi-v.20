import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Users,
  TrendingUp,
  Globe,
  Ship,
  Waves,
  BookOpen,
  Play,
  ChevronDown
} from 'lucide-react';

const Home = () => {
  // Google Drive video IDs - All 4 videos are unique and verified
  const videoIds = [
    '18PFtwSc3rbfOetzHaOnbagjuSA9UobHV', // Video 1
    '1ioOdQbaMQtxLF1pisyJNIQZT8V5KvOCo', // Video 2
    '13JqEfYsYiBnHEepgPSOyA_XBiXyxJ0O4', // Video 3
    '1p_cmjos3Y8QV17pI1sPo6YyeyV-bwvSh'  // Video 4
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Auto-cycle through videos every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
    }, 30000); // Change video every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-x-hidden scroll-smooth">

      {/* HERO */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Google Drive Video Background - Cycling through 4 different videos */}
        <div className="absolute inset-0">
          <iframe
            key={currentVideoIndex}
            src={`https://drive.google.com/file/d/${videoIds[currentVideoIndex]}/preview`}
            className="w-full h-full"
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }}
            allow="autoplay"
            frameBorder="0"
          />
          {/* Fallback background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&auto=format&fit=crop')`,
              zIndex: -1
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
          {/* Animated wave overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20 flex flex-col items-center text-center text-white">
          <div className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-yellow-500/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-yellow-200 font-semibold text-sm">
              Leading Maritime Future in the Gulf of Guinea
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl md:text-6xl font-extrabold leading-tight mb-3 animate-slide-up">
            Shaping West Africa's
            <span className="block mt-3 text-yellow-300 drop-shadow-lg">
              Blue Economy
            </span>
          </h1>

          <p className="mt-2 text-xl text-white/95 max-w-3xl leading-relaxed drop-shadow-md">
            Pioneering sustainable maritime initiatives that drive economic growth
            and environmental stewardship across the Gulf of Guinea
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-yellow-500 text-gray-900 px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all shadow-2xl hover:shadow-yellow-500/50 hover:scale-105"
            >
              <span>Discover Our Mission</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all hover:scale-105 shadow-xl"
            >
              <Globe className="w-5 h-5" />
              <span>View Our Projects</span>
            </Link> */}
          </div>

          {/* Additional quick links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/services" className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2">
              <Ship className="w-4 h-4" />
              <span>Advocacy</span>
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/services" className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2">
              <Waves className="w-4 h-4" />
              <span>Research</span>
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/services" className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Capacity Building</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <a href="#stats" aria-label="Scroll to stats">
            <ChevronDown className="w-10 h-10 text-white/70 animate-bounce" />
          </a>
        </div>
      </header>

      {/* STATS */}
      <section id="stats" className="relative -mt-20 z-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Projects', icon: <Award className="w-6 h-6 md:w-8 md:h-8" /> },
              { number: '200+', label: 'Partners', icon: <Users className="w-6 h-6 md:w-8 md:h-8" /> },
              { number: '15+', label: 'Years', icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" /> },
              { number: '25', label: 'Countries', icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg transform hover:-translate-y-2 transition cursor-default flex flex-col items-center text-center"
              >
                <div className="text-yellow-500 mb-3">{stat.icon}</div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-900">{stat.number}</div>
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / WELCOME */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
                Driving Maritime Excellence in West Africa
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Gulf of Guinea Maritime Institute (GoGMI) is a leading non-profit think tank dedicated to advancing maritime security, safety, and sustainable blue economy development across West Africa.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through strategic research, policy advocacy, and capacity building programs, we empower stakeholders to make informed decisions that drive positive change in the maritime sector.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-yellow-600 font-bold hover:gap-4 transition-all text-lg"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition">
                  <Ship className="w-12 h-12 text-blue-900 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Advocacy</h3>
                  <p className="text-gray-600">
                    Strengthening regional capacity to combat piracy and maritime crime
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-2xl p-6 hover:shadow-lg transition">
                  <TrendingUp className="w-12 h-12 text-yellow-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Capacity Building</h3>
                  <p className="text-gray-600">
                    Promoting sustainable economic growth in maritime sectors
                  </p>
                </div>
              </div>
              <div className="space-y-6 mt-12">
                <div className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition">
                  <BookOpen className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Research</h3>
                  <p className="text-gray-600">
                    Producing indigenous insights on Gulf of Guinea maritime affairs
                  </p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 hover:shadow-lg transition">
                  <Users className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Secretariate Services</h3>
                  <p className="text-gray-600">
                    Training the next generation of maritime professionals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES / WHAT WE DO */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">What We Do</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive maritime solutions addressing the critical needs of the Gulf of Guinea region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Ship className="w-12 h-12" />,
                title: 'Maritime Security Research',
                desc: 'In-depth analysis of security challenges, threats, and opportunities in the Gulf of Guinea maritime domain.',
                color: 'blue'
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Policy Advocacy',
                desc: 'Strategic engagement with policymakers to shape effective maritime governance frameworks.',
                color: 'yellow'
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: 'Capacity Building',
                desc: 'Professional training programs and workshops for maritime stakeholders and youth.',
                color: 'green'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'International Collaboration',
                desc: 'Facilitating partnerships between African and international maritime organizations.',
                color: 'purple'
              },
              {
                icon: <Waves className="w-12 h-12" />,
                title: 'Blue Economy Development',
                desc: 'Promoting sustainable economic opportunities in fisheries, shipping, and marine resources.',
                color: 'cyan'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Youth Mentorship',
                desc: 'The Blue Mentorship Programme connecting young professionals with maritime career opportunities.',
                color: 'pink'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div className={`text-${service.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:scale-105"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Making a Difference</h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Transforming the maritime landscape of West Africa through research, advocacy, and action
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '🛡️',
                title: 'Enhanced Maritime Security',
                desc: 'Contributing to the reduction of piracy incidents through coordinated regional responses and information sharing platforms.'
              },
              {
                icon: '🎓',
                title: 'Youth Empowerment',
                desc: 'Training hundreds of young professionals through the Blue Mentorship Programme and capacity building initiatives.'
              },
              {
                icon: '🤝',
                title: 'Regional Cooperation',
                desc: 'Facilitating dialogue between governments, navies, and industry stakeholders across 25+ countries.'
              }
            ].map((impact, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">{impact.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{impact.title}</h3>
                <p className="text-white/80">{impact.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all shadow-lg hover:scale-105"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Trusted By</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">Our Strategic Partners</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Working alongside leading organizations to advance maritime excellence across West Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'UNESCO', initial: 'UNESCO' },
              { name: 'IMO', initial: 'IMO' },
              { name: 'ECOWAS', initial: 'ECOWAS' },
              { name: 'ECCAS', initial: 'ECCAS' },
              { name: 'EU', initial: 'EU' },
              { name: 'GGC', initial: 'GGC' }
            ].map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all hover:shadow-lg group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition-transform mx-auto mb-2">
                    {partner.initial}
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/partners"
              className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors inline-flex items-center gap-2"
            >
              <span>View All Partners</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST NEWS SECTION */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Stay Informed</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">Latest News & Updates</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Insights, research findings, and maritime developments from across the Gulf of Guinea
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Security',
                title: 'Regional Maritime Security Conference 2024',
                excerpt: 'GoGMI hosts 200+ maritime professionals from 15 countries to discuss emerging security challenges.',
                date: 'November 15, 2024',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&fit=crop'
              },
              {
                category: 'Research',
                title: 'New Blue Economy Investment Report Released',
                excerpt: 'Latest research explores untapped opportunities in sustainable fisheries and marine tourism.',
                date: 'November 10, 2024',
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&fit=crop'
              },
              {
                category: 'Training',
                title: '50+ Professionals Complete Maritime Certification',
                excerpt: 'Our latest cohort successfully graduates from comprehensive maritime security programs.',
                date: 'November 5, 2024',
                image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&fit=crop'
              }
            ].map((news, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <Link to="/blog" className="text-yellow-600 font-semibold flex items-center hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:scale-105"
            >
              <span>View All News</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join us in shaping the future of West Africa's maritime sector
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 hover:text-white transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;