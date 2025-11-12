import React from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">About GOGMI</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Championing Maritime Excellence Since 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4">
              <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2010, the Gulf of Guinea Maritime Institute (GOGMI) emerged as a response to the growing need for specialized maritime expertise in West Africa.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are a non-profit think tank that brings together maritime strategic thinkers, practitioners, and experts to research and address critical maritime challenges in the Gulf of Guinea region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through innovative research, strategic advocacy, and comprehensive capacity building programs, we're shaping the future of West Africa's blue economy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award className="w-6 h-6" />, number: '50+', label: 'Projects' },
                { icon: <Users className="w-6 h-6" />, number: '200+', label: 'Partners' },
                { icon: <TrendingUp className="w-6 h-6" />, number: '15+', label: 'Years' },
                { icon: <Target className="w-6 h-6" />, number: '25', label: 'Countries' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                  <div className="text-yellow-500 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
                  <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mt-4">Mission, Vision & Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 md:w-16 md:h-16" />,
                title: 'Our Mission',
                desc: 'To provide strategic maritime research, advocacy, and capacity building that drives sustainable blue economy development across West Africa.'
              },
              {
                icon: <Eye className="w-12 h-12 md:w-16 md:h-16" />,
                title: 'Our Vision',
                desc: 'To be the leading maritime think tank in Africa, recognized for excellence in research, policy innovation, and transformative impact.'
              },
              {
                icon: <Heart className="w-12 h-12 md:w-16 md:h-16" />,
                title: 'Our Values',
                desc: 'Integrity, Excellence, Collaboration, Innovation, and Sustainability guide everything we do in advancing maritime excellence.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all text-center">
                <div className="text-yellow-500 mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            {/* <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Our Team</span> */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mt-4">Advisory Board Members</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: 'AIR VICE MARSHAL FRANK HANSON (RTD)', role: 'Board Chair', img: '/frank.jpg' },
              { name: 'JEFFREY LANDSMAN', role: 'ASSOCIATE PROFESSOR, U.S. NAVAL WAR COLLEGE (Rtd), CAPT, USN (RTD)', img: '/jeffrey.jpg' },
              { name: 'Mrs. KATHLEEN QUARTEY AYENSU, ESQ', role: '', img: '/kathleen.jpg' },
              { name: 'COMMODORE JAMES OSEI KONTOH (RTD)', role: '', img: '/jamesO.jpg' },
              { name: 'REAR ADMIRAL SOLOMON AGADA (RTD)', role: '', img: '/solomon.jpg' }
            ].map((member, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-[3/4]">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400"><span>Image not found</span></div>';
                    }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10">Partner with us to transform West Africa's maritime future</p>
          <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl hover:scale-105">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;