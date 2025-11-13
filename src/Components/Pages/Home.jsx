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
  ChevronDown,
  Shield
} from 'lucide-react';

const Home = () => {
  // State for cycling through 3 YouTube videos
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Your 3 YouTube video IDs
  const videoIds = [
    'V1f0Rfq7Jzs',   // Video 1
    'tfC34J8Yh-c',   // Video 2
    'XgzCbENPQn0'    // Video 3
  ];

  // Auto-cycle through videos every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoIds.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-x-hidden scroll-smooth">

      {/* HERO */}
      <header className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* YouTube Video Background - Cycling through 3 videos */}
        <div className="absolute inset-0">
          <iframe
            key={currentVideoIndex}
            src={`https://www.youtube.com/embed/${videoIds[currentVideoIndex]}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=${videoIds[currentVideoIndex]}`}
            title="Maritime Background Video"
            className="absolute top-1/2 left-1/2 w-screen h-screen"
            style={{ 
              minWidth: '100%',
              minHeight: '100%',
              width: '177.77vh', // 16:9 aspect ratio
              height: '56.25vw',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              border: 'none'
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          
          {/* Fallback background image in case video doesn't load */}
          <div 
            className="absolute inset-0 bg-cover bg-center -z-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&auto=format&fit=crop&q=80')`,
            }}
          />
          
          {/* Lighter overlay for better video visibility */}
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-20 flex flex-col items-center text-center text-white">
          <div className="inline-flex items-center gap-3 bg-yellow-500/30 backdrop-blur-md px-5 py-2 rounded-full border border-yellow-400/40 mb-6 animate-fade-in shadow-lg shadow-yellow-500/20">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></span>
            <span className="text-yellow-100 font-semibold text-sm drop-shadow-lg">
              Leading Maritime Future in the Gulf of Guinea
            </span>
          </div>

          <h1 className="hero-heading">
            <span className="block mb-3 text-white">
              Shaping Maritime Security and Safety in the
            </span>
            <span className="block gradient-text">
              Gulf Of Guinea
            </span>
          </h1>

          <p className="hero-subheading mt-6 text-white max-w-3xl leading-relaxed" style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.6)' }}>
            Pioneering sustainable maritime initiatives that drive economic growth
            and environmental stewardship across the Gulf of Guinea
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 bg-yellow-500 text-gray-900 px-8 md:px-10 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all shadow-2xl hover:shadow-yellow-500/50 hover:scale-105"
            >
              <span>Discover The GoGMI Journey</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Additional quick links */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/services" className="text-white/90 hover:text-yellow-300 transition-colors flex items-center gap-2 drop-shadow-lg">
              <Ship className="w-4 h-4" />
              <span>Advocacy</span>
            </Link>
            <span className="text-white/40">•</span>
            <Link to="/services" className="text-white/90 hover:text-yellow-300 transition-colors flex items-center gap-2 drop-shadow-lg">
              <Waves className="w-4 h-4" />
              <span>Research</span>
            </Link>
            <span className="text-white/40">•</span>
            <Link to="/services" className="text-white/90 hover:text-yellow-300 transition-colors flex items-center gap-2 drop-shadow-lg">
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
              { number: '25', label: 'Members', icon: <Globe className="w-6 h-6 md:w-8 md:h-8" /> }
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

      {/* GULF OF GUINEA SECTION - 2 Rows with Glass Effect Flags */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-96 h-96 bg-yellow-400 rounded-full blur-3xl -top-48 -left-48"></div>
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl -bottom-48 -right-48"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          
          {/* Main Content Grid - Map + Description */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">
            
            {/* Left: Gulf of Guinea Map */}
            <div className="relative group">
              {/* Map Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="/Nigerian Pirates Extend Reach in Gulf of Guinea.jpg"
                  alt="Gulf of Guinea Map showing member countries from Senegal to Angola"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Label Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/95 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-xs text-white/90 uppercase tracking-wide">Maritime Region</p>
                      <p className="text-2xl font-bold text-white">Gulf of Guinea</p>
                    </div>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-6 right-6 bg-yellow-400 text-blue-900 px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                  West & Central Africa
                </div>
              </div>
            </div>

            {/* Right: Description & Stats */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  The Gulf of Guinea
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                <p className="text-xl leading-relaxed">
                  A pivotal maritime region stretching along the Atlantic coastline from Senegal to Angola. This strategic waterway serves as a critical gateway for international trade, connecting <strong className="text-yellow-300">eighteen coastal nations</strong> to the global economy.
                </p>
                <p className="text-lg leading-relaxed">
                  Rich in natural resources including oil, gas, and abundant fisheries, the Gulf of Guinea plays a vital 
                  role in regional economic development. However, it also faces significant challenges in maritime security, 
                  environmental sustainability, and governance.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">18</div>
                  <div className="text-xs text-white/80 font-semibold uppercase tracking-wide">Countries</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">6K<span className="text-xl">km</span></div>
                  <div className="text-xs text-white/80 font-semibold uppercase tracking-wide">Coastline</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">$2T+</div>
                  <div className="text-xs text-white/80 font-semibold uppercase tracking-wide">GDP</div>
                </div>
              </div>
            </div>

          </div>

          {/* Member Countries - 2 Rows of 9 Flags Each */}
          <div className="mt-8">
            {/* Section Header */}
          

            {/* Flags Grid - 2 Rows x 9 Columns */}
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
                {[
                  { name: 'Senegal', code: 'sn' },
                  { name: 'Gambia', code: 'gm' },
                  { name: 'Guinea-Bissau', code: 'gw' },
                  { name: 'Guinea', code: 'gn' },
                  { name: 'Sierra Leone', code: 'sl' },
                  { name: 'Liberia', code: 'lr' },
                  { name: 'Côte d\'Ivoire', code: 'ci' },
                  { name: 'Ghana', code: 'gh' },
                  { name: 'Togo', code: 'tg' }
                ].map((country, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    {/* Flag Image with Padding */}
                    <div className="w-full p-3">
                      <div className="w-full h-16 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={`https://flagcdn.com/w320/${country.code}.png`}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    {/* Country Name */}
                    <div className="px-2 pb-3 text-center">
                      <p className="text-white font-bold text-xs leading-tight">{country.name}</p>
                    </div>

                    {/* Hover Accent */}
                    <div className="h-1 bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-3">
                {[
                  { name: 'Benin', code: 'bj' },
                  { name: 'Nigeria', code: 'ng' },
                  { name: 'Cameroon', code: 'cm' },
                  { name: 'Equatorial Guinea', code: 'gq' },
                  { name: 'São Tomé', code: 'st' },
                  { name: 'Gabon', code: 'ga' },
                  { name: 'Congo', code: 'cg' },
                  { name: 'DR Congo', code: 'cd' },
                  { name: 'Angola', code: 'ao' }
                ].map((country, idx) => (
                  <div
                    key={idx}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    {/* Flag Image with Padding */}
                    <div className="w-full p-3">
                      <div className="w-full h-16 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={`https://flagcdn.com/w320/${country.code}.png`}
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    {/* Country Name */}
                    <div className="px-2 pb-3 text-center">
                      <p className="text-white font-bold text-xs leading-tight">{country.name}</p>
                    </div>

                    {/* Hover Accent */}
                    <div className="h-1 bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                ))}
              </div>
            </div>

            
            
          </div>

        </div>

        {/* Bottom Wave Transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* SERVICES / WHAT WE DO - Ultra Minimal Tech-Savvy Design */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Section Header - Minimal */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-3 tracking-tight">
              Our Scope Of Work
            </h2>
          </div>

          {/* Services Grid - Clean Minimal Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Facilitation of Regional and International Partnerships',
                desc: 'Foster Maritime Safety and Security in the Gulf of Guinea Region through strategic collaboration and partnership building.',
                iconColor: 'text-blue-600',
                iconBg: 'bg-white',
                borderColor: 'hover:border-blue-600'
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: 'Analysis of National, Regional and International Policies',
                desc: 'On Ocean Governance and Maritime Security to inform strategic decision-making and policy development.',
                iconColor: 'text-purple-600',
                iconBg: 'bg-white',
                borderColor: 'hover:border-purple-600'
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Development, Audit and Validation Of Corporate Maritime Security Plans',
                desc: 'Comprehensive security planning and assessment services for maritime organizations and facilities.',
                iconColor: 'text-green-600',
                iconBg: 'bg-white',
                borderColor: 'hover:border-green-600'
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Organization of International Ocean Governance And Maritime Security Conferences',
                desc: 'And Exhibitions bringing together experts, practitioners, and stakeholders across the Gulf of Guinea.',
                iconColor: 'text-orange-600',
                iconBg: 'bg-white',
                borderColor: 'hover:border-orange-600'
              },
              {
                icon: <Waves className="w-12 h-12" />,
                title: 'Analysis of Activities In the Region\'s Maritime Domain',
                desc: 'Strategic research and monitoring of maritime activities, threats, and opportunities in the Gulf of Guinea.',
                iconColor: 'text-cyan-600',
                iconBg: 'bg-white',
                borderColor: 'hover:border-cyan-600'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Development of Policy Briefs, Articles and Other Relevant Publications',
                desc: 'Producing high-quality research outputs and publications that shape maritime discourse and policy.',
                iconColor: 'text-yellow-600',
                iconBg: 'bg-white',
                borderColor: 'hover:border-yellow-600'
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className={`group relative bg-white rounded-2xl p-10 border-2 border-gray-100 ${service.borderColor} transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Icon - Clean & Minimal */}
                <div className="mb-8">
                  <div className={`${service.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-blue-900 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {service.desc}
                </p>

                {/* Minimal Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${service.iconColor.replace('text-', 'bg-')} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>

          {/* CTA Button - Minimal */}
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-blue-900 text-white px-10 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION - SDG GOALS */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-yellow-400 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Contributing to Global Goals</h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Aligning our mission with the United Nations Sustainable Development Goals to create lasting impact in the Gulf Of Guinea maritime sector
            </p>
          </div>

          {/* SDG Goals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: 14,
                title: 'Life Below Water',
                desc: 'Conserve and sustainably use the oceans, seas and marine resources for sustainable development',
                color: 'from-blue-400 to-blue-600',
                icon: '🌊',
                impact: 'Leading maritime security research and blue economy initiatives across 25 countries in the Gulf of Guinea region'
              },
              {
                number: 8,
                title: 'Decent Work and Economic Growth',
                desc: 'Promote sustained, inclusive and sustainable economic growth, full and productive employment',
                color: 'from-red-500 to-red-700',
                icon: '💼',
                impact: 'Creating pathways for 500+ professionals through our Blue Mentorship Programme and capacity building initiatives'
              },
              {
                number: 16,
                title: 'Peace, Justice and Strong Institutions',
                desc: 'Promote peaceful and inclusive societies, provide access to justice and build effective institutions',
                color: 'from-blue-600 to-blue-800',
                icon: '⚖️',
                impact: 'Strengthening regional maritime security frameworks through IMSWG and policy advocacy across West Africa'
              },
              {
                number: 17,
                title: 'Partnerships for the Goals',
                desc: 'Strengthen the means of implementation and revitalize global partnerships for sustainable development',
                color: 'from-blue-700 to-blue-900',
                icon: '🤝',
                impact: 'Collaborating with 200+ strategic partners including UNESCO, IMO, ECOWAS, and international maritime organizations'
              },
              {
                number: 4,
                title: 'Quality Education',
                desc: 'Ensure inclusive and equitable quality education and promote lifelong learning opportunities',
                color: 'from-red-600 to-red-800',
                icon: '📚',
                impact: 'Delivering comprehensive training programs and workshops that empower maritime stakeholders with cutting-edge knowledge'
              },
              {
                number: 5,
                title: 'Gender Equality',
                desc: 'Achieve gender equality and empower all women and girls',
                color: 'from-orange-500 to-red-600',
                icon: '⚖️',
                impact: 'Championing gender mainstreaming in Ghana\'s maritime sector through targeted advocacy and youth engagement programs'
              }
            ].map((sdg, idx) => (
              <div
                key={idx}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                {/* SDG Header with Number */}
                <div className={`bg-gradient-to-r ${sdg.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-white/10 text-9xl font-bold leading-none">
                    {sdg.number}
                  </div>
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-4xl">{sdg.icon}</span>
                        <span className="text-white/90 font-bold text-lg">SDG {sdg.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{sdg.title}</h3>
                    </div>
                  </div>
                </div>

                {/* SDG Content */}
                <div className="p-6 space-y-4">
                  <p className="text-white/70 text-sm leading-relaxed italic border-l-2 border-yellow-400 pl-3">
                    "{sdg.desc}"
                  </p>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-yellow-300 font-semibold text-xs uppercase tracking-wider mb-2">
                      GoGMI's Contribution
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {sdg.impact}
                    </p>
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* UN SDG Logo Section */}
          <div className="text-center mt-16 space-y-6">
            
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all shadow-lg hover:scale-105"
            >
              <span>Learn More About Our Impact</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Decorative Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
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
              to="/Partners"
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
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">Upcoming Events, News and Update</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Insights, research findings, and maritime developments from across the Gulf of Guinea
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: 'Upcoming Events',
                title: 'Regional Maritime Security Conference 2024',
                excerpt: 'GoGMI hosts 200+ maritime professionals from 15 countries to discuss emerging security challenges.',
                date: 'November 15, 2024',
                image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&fit=crop'
              },
              {
                category: 'News and Updates',
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