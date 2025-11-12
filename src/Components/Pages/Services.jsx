import React, { useState } from 'react';
import { Ship, Waves, BookOpen, Users, Shield, Anchor, Globe, TrendingUp, CheckCircle, ArrowRight, Award, Megaphone, FileSearch, GraduationCap, Building2 } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('advocacy');

  const services = [
    {
      id: 1,
      category: 'advocacy',
      icon: <Megaphone className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Advocacy',
      shortDesc: 'Championing policy reforms and sustainable maritime practices',
      fullDesc: 'Championing policy reforms and sustainable maritime practices across the Gulf of Guinea. We serve as the authoritative voice for maritime stakeholders, bridging the gap between maritime realities and policy action through evidence-based advocacy that shapes regional and international governance frameworks.',
      features: ['Maritime Security Advocacy', 'Blue Economy Promotion', 'Policy Development', 'Regional Collaboration'],
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&fit=crop',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      category: 'research',
      icon: <FileSearch className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Research',
      shortDesc: 'Indigenous maritime research and strategic analysis',
      fullDesc: 'Providing indigenous maritime research and strategic analysis that addresses security, safety, and blue economy challenges. Our research informs policy decisions and delivers solutions from a West African perspective, filling the critical gap in regional maritime studies and ensuring local interests are well-represented.',
      features: ['Strategic Maritime Research', 'Policy Advisory', 'Threat Analysis', 'Data-Driven Insights'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&fit=crop',
      color: 'from-purple-600 to-indigo-800'
    },
    {
      id: 3,
      category: 'capacity',
      icon: <GraduationCap className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Capacity Building',
      shortDesc: 'Empowering maritime professionals and youth',
      fullDesc: 'Empowering the next generation of maritime professionals through comprehensive training programs, mentorship initiatives, and knowledge-sharing platforms. From our flagship Blue Mentorship Programme to specialized workshops, we equip youth, practitioners, and stakeholders with the skills and knowledge needed to thrive in the blue economy.',
      features: ['Blue Mentorship Programme', 'Professional Training', 'Youth Engagement', 'Skills Development'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
      color: 'from-orange-600 to-red-800'
    },
    {
      id: 4,
      category: 'secretariat',
      icon: <Building2 className="w-12 h-12 md:w-16 md:h-16" />,
      title: 'Secretariat Services',
      shortDesc: 'Institutional backbone for maritime coordination',
      fullDesc: 'Serving as the institutional backbone for regional maritime coordination and collaboration. We provide professional secretariat support to the International Maritime Security Working Group (IMSWG) and other maritime forums, facilitating dialogue, managing operations, and ensuring effective implementation of regional maritime initiatives.',
      features: ['IMSWG Coordination', 'Forum Management', 'Stakeholder Engagement', 'Programme Implementation'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&fit=crop',
      color: 'from-teal-600 to-cyan-800'
    }
  ];

  const categories = [
    { id: 'advocacy', name: 'Advocacy', icon: <Megaphone className="w-4 h-4" /> },
    { id: 'research', name: 'Research', icon: <FileSearch className="w-4 h-4" /> },
    { id: 'capacity', name: 'Capacity Building', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'secretariat', name: 'Secretariat Services', icon: <Building2 className="w-4 h-4" /> }
  ];

  const filteredServices = services.filter(service => service.category === activeTab);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
            <Anchor className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold text-sm">Comprehensive Solutions</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Your Hub For Maritime Security, Safety and Advocacy for Sustainable Blue Economy
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all text-sm sm:text-base ${
                  activeTab === category.id
                    ? 'bg-blue-900 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                  <div className="absolute top-6 left-6 text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">{service.fullDesc}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-all flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="py-16 md:py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { icon: <Award className="w-10 h-10 md:w-12 md:h-12" />, number: '50+', label: 'Projects Delivered' },
              { icon: <Users className="w-10 h-10 md:w-12 md:h-12" />, number: '500+', label: 'Professionals Trained' },
              { icon: <Globe className="w-10 h-10 md:w-12 md:h-12" />, number: '25', label: 'Countries Served' },
              { icon: <TrendingUp className="w-10 h-10 md:w-12 md:h-12" />, number: '98%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-yellow-400 flex justify-center">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Let's discuss how our services can support your maritime objectives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2">
              <span>Request a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-900 hover:text-white transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;