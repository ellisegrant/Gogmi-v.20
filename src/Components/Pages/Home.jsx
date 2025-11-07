import React from 'react';
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
  return (
    <div className="w-full overflow-x-hidden scroll-smooth">

      {/* HERO */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Video Background - Four Videos Playing in Sequence */}
        <div className="absolute inset-0">
          <video
            id="heroVideo"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={() => {
              // When video ends, switch to the next video
              const video = document.getElementById('heroVideo');
              const source = video.querySelector('source');
              const currentSrc = source.src;
              
              // Cycle through all 4 videos
              if (currentSrc.includes('video1.mp4')) {
                source.src = '/src/assets/videos/video2.mp4';
              } else if (currentSrc.includes('video2.mp4')) {
                source.src = '/src/assets/videos/video3.mp4';
              } else if (currentSrc.includes('video3.mp4')) {
                source.src = '/src/assets/videos/video4.mp4';
              } else {
                // After video4, go back to video1
                source.src = '/src/assets/videos/video1.mp4';
              }
              
              video.load();
              video.play();
            }}
          >
            <source src="/src/assets/videos/video1.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&auto=format&fit=crop"
              alt="Maritime background"
              className="w-full h-full object-cover"
            />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"></div>
          {/* Animated wave overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20 flex flex-col items-center text-center text-white">
          <div className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-yellow-500/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-yellow-200 font-semibold text-sm">
              Leading West Africa's Maritime Future
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-slide-up">
            Shaping West Africa's
            <span className="block mt-3 text-yellow-300 drop-shadow-lg">
              Blue Economy
            </span>
          </h1>

          <p className="mt-2 text-lg sm:text-xl md:text-2xl text-white/95 max-w-3xl leading-relaxed drop-shadow-md">
            Pioneering sustainable maritime initiatives that drive economic growth
            and environmental stewardship across the Gulf of Guinea
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-yellow-500 text-gray-900 px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all shadow-2xl hover:shadow-yellow-500/50 hover:scale-105"
            >
              <span>Discover Our Mission</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all hover:scale-105 shadow-xl"
            >
              <Globe className="w-5 h-5" />
              <span>View Our Projects</span>
            </Link>
          </div>

          {/* Additional quick links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/services" className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2">
              <Ship className="w-4 h-4" />
              <span>Maritime Security</span>
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/services" className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2">
              <Waves className="w-4 h-4" />
              <span>Blue Economy</span>
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/services" className="text-white/80 hover:text-yellow-300 transition-colors flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Research & Policy</span>
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
                The Gulf of Guinea Maritime Institute (GOGMI) is a leading non-profit think tank dedicated to advancing maritime security, safety, and sustainable blue economy development across West Africa.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Through strategic research, policy advocacy, and capacity building programs, we empower stakeholders to make informed decisions that drive positive change in the maritime sector.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:scale-105"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
                  <Ship className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-xl mb-2">Maritime Security</h3>
                  <p className="text-sm text-white/80">Enhanced regional cooperation</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-6 text-gray-900">
                  <BookOpen className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-xl mb-2">Research</h3>
                  <p className="text-sm text-gray-800">Evidence-based insights</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-teal-600 to-cyan-700 rounded-2xl p-6 text-white">
                  <Waves className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-xl mb-2">Blue Economy</h3>
                  <p className="text-sm text-white/80">Sustainable development</p>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="font-bold text-xl mb-2">Capacity Building</h3>
                  <p className="text-sm text-white/80">Professional training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">Our Core Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive maritime solutions tailored to the unique challenges of the Gulf of Guinea region
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Ship className="w-12 h-12" />,
                title: 'Maritime Security',
                desc: 'Strategic security assessments, threat analysis, and policy frameworks for safe maritime operations',
                color: 'from-blue-600 to-blue-800'
              },
              {
                icon: <Waves className="w-12 h-12" />,
                title: 'Blue Economy Development',
                desc: 'Sustainable ocean economy initiatives promoting economic growth and marine conservation',
                color: 'from-teal-600 to-cyan-800'
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: 'Research & Policy',
                desc: 'Cutting-edge maritime research and expert policy advisory services for informed decision-making',
                color: 'from-purple-600 to-indigo-800'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-yellow-600 font-semibold flex items-center hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
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
      <section className="py-20 md:py-28 bg-blue-900 text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Creating Lasting Change</h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Transforming the maritime landscape through strategic initiatives and collaborative partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Enhanced Security',
                desc: '30% reduction in maritime incidents through regional cooperation',
                icon: '🛡️'
              },
              {
                title: 'Capacity Built',
                desc: '500+ professionals trained in maritime security and management',
                icon: '🎓'
              },
              {
                title: 'Research Published',
                desc: '150+ policy briefs and research reports informing decisions',
                icon: '📊'
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
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">Our Partners</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Working alongside leading organizations to advance maritime excellence across West Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              { name: 'UNESCO', initial: 'U' },
              { name: 'IMO', initial: 'I' },
              { name: 'ECOWAS', initial: 'E' },
              { name: 'African Union', initial: 'AU' },
              { name: 'World Bank', initial: 'WB' },
              { name: 'European Union', initial: 'EU' }
            ].map((partner, idx) => (
              <div key={idx} className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all hover:shadow-lg group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {partner.initial}
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
                excerpt: 'GOGMI hosts 200+ maritime professionals from 15 countries to discuss emerging security challenges.',
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
