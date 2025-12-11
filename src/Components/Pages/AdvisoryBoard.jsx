import React from 'react';

const AdvisoryBoard = () => {
  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&fit=crop" 
            alt="Advisory Board"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/90 to-[#132552]/75"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 600 }}>
            Leadership
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6" 
              style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            Advisory Board
          </h1>
          <div className="w-20 h-1.5 rounded-full mx-auto mb-6" style={{ backgroundColor: '#8E3400' }}></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
            Distinguished experts providing strategic guidance and thought leadership to advance maritime excellence in the Gulf of Guinea
          </p>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4"
                style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Advisory Board Members
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          {/* Air Vice Marshal - Full Featured Profile */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-4">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src="/frank.jpg" 
                      alt="Advisory Board Chair"
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: 'center 20%' }}
                    />
                    
                    {/* Flag Image - Bottom Right */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg z-10">
                      <img 
                        src="/Ghana Flag.jpg" 
                        alt="Ghana flag"
                        className="w-12 h-8 object-cover rounded"
                      />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-4 pr-20">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold leading-tight flex-1" 
                              style={{ color: '#132552', fontWeight: 700 }}>
                            Air Vice Marshal Frank Hanson (Rtd.)
                          </h3>
                        </div>

                        <p className="text-xs leading-tight mb-2" style={{ fontWeight: 400, color: '#4B5563' }}>
                          Former Chief of Air Staff, Ghana Air Force
                        </p>

                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 w-fit">
                          <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#8E3400' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span className="text-xs font-semibold leading-tight" style={{ color: '#4B5563', fontWeight: 600 }}>
                            Advisory Board Chair
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2"
                      style={{ color: '#132552', fontWeight: 700 }}>
                    <span className="w-1 h-6 rounded-full" style={{ backgroundColor: '#8E3400' }}></span>
                    About the Advisory Board Chair
                  </h4>
                  
                  <div className="space-y-4 text-base leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
                    <p>
                      AVM Frank Hanson was the Chief of Air Staff of the Ghana Air Force from January 2019 to January 2023. He holds an MSc in Strategic Studies with Grand Strategy Concentration and as an ardent Peacekeeper, he served with the United Nations and African Union as a strategic Military and Aviation planner.
                    </p>
                    <p>
                      He is an expert in national and international security. An astute and highly experienced military instructor pilot. AVM Hanson has worked with leading aircraft manufacturers to develop the "static aircraft carrier concept"; for Tactical Air support for Maritime Operations (TASMO) as well as offshore Special Forces Operations. His tenure at the helm of affairs at the Ghana Air Force saw a holistic interoperability between the Ghana Navy and the Ghana Air Force. Additionally, he has participated in several AU and UN missions across the continent as part of the consultative team that worked on Ghana's National Integrated Maritime Strategy.
                    </p>
                    <p>
                      He is an alumni of the Harvard University, the US Air University, the US Air War College, Command and Staff College, Ghana, Command Staff College, Nigeria and brings over 30 years of experience in deep understanding of diplomacy, global geopolitical matters, Aviation, National Security and Strategic Leadership to the Institute.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Advisory Board Members - Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              
               { 
                name: 'Mrs. KATHLEEN QUARTEY AYENSU, ESQ', 
                role: 'Former Commissioner, African Union Commission on International Law and AU Special Rapporteur on Piracy and Maritime Security ', 
                img: '/kathleen.jpg',
                flagImg: '/Ghana Flag.jpg',
                country: 'Ghana'
              },

              { 
                name: 'REAR ADMIRAL SOLOMON AGADA (RTD)', 
                role: 'Former Chief of Training and Operations Nigerian Navy, and pioneer Co-Chair of GoG-SHADE', 
                img: '/solomon.jpg',
                flagImg: '/Nigeria flag.jpg',
                country: 'Nigeria'
              },
              
              { 
                name: 'JEFFREY LANDSMAN', 
                role: 'Prof. Jeffrey Landsman, former U.S. Navy Captain and Associate Professor, U.S. Naval War College ', 
                img: '/jeffrey.jpg',
                flagImg: '/usa flag.jpg',
                country: 'United States'
              },
             
              { 
                name: 'COMMODORE JAMES OSEI KONTOH (RTD)', 
                role: 'Former Defence Advisor of Ghana to Nigeria', 
                img: '/jamesO.jpg',
                flagImg: '/Ghana Flag.jpg',
                country: 'Ghana'
              },
              
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl bg-white aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300 mb-4">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm"><span>Image</span></div>';
                    }}
                  />
                  
                  {/* Flag Image - Bottom Right */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                    <img 
                      src={member.flagImg} 
                      alt={`${member.country} flag`}
                      className="w-10 h-7 object-cover rounded"
                    />
                  </div>
                </div>
                
                {/* Text Content - Below Image */}
                <div>
                  <h3 className="text-sm font-bold mb-1.5 leading-tight" 
                      style={{ fontWeight: 700, color: '#132552' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs leading-tight" style={{ fontWeight: 400, color: '#4B5563' }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 600 }}>
            Get In Touch
          </span>
          <h2 className="text-4xl font-black mb-6"
              style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Connect With Our Advisory Board
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
            Our Advisory Board members are committed to advancing maritime excellence. For inquiries about strategic partnerships or advisory services, please reach out.
          </p>
          
          <div className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200 inline-block">
            <p className="mb-2" style={{ color: '#132552', fontWeight: 600 }}>Advisory Board Secretariat</p>
            <a href="mailto:info@gogmi.org.gh" 
               className="text-lg hover:underline" 
               style={{ color: '#8E3400', fontWeight: 600 }}>
              info@gogmi.org.gh
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvisoryBoard;