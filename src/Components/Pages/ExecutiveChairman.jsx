import { useEffect, useState } from 'react';

const ExecutiveChairman = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const LINKEDIN_URL = "https://www.linkedin.com/in/issahyakubu?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvUTupFDHT0%2BfLwgmexuyaA%3D%3D";
  const ADMIRALS_BLOG_URL = "https://www.gogmiconsult.com/"; 

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F5F7FA' }}>
      
      {/* Hero Section */}
      <section className="relative bg-white border-b border-gray-100 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/3 to-[#8E3400]/3"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <p className="text-sm" style={{ color: '#4B5563', fontWeight: 400 }}>
              <span className="hover:text-[#8E3400] transition-colors cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span style={{ color: '#8E3400', fontWeight: 600 }}>Leadership</span>
            </p>
          </div>

          {/* Page Title */}
          <div className={`text-center transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
           
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Our Leadership
            </h1>
            <div className="w-20 h-1.5 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
       

          {/* Executive Chairman - Featured */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Image - 4 columns */}
              <div className="lg:col-span-4">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src="/admiral.profille.jpg" 
                      alt="Executive Board Chairman"
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: 'center 20%' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-4">
                      <div className="flex flex-col gap-2">
                        {/* Name and Flag on same line - TIGHT */}
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold leading-tight flex-1" 
                              style={{ color: '#132552', fontWeight: 700 }}>
                            Vice Admiral Issah Adam Yakubu (Rtd.)
                          </h3>
                          <img 
                            src="/Flag.png" 
                            alt="Ghana Navy" 
                            className="w-7 h-14 object-contain flex-shrink-0"
                          />
                        </div>

                        {/* ========== CREDENTIALS BADGE - ADJUST WIDTH/SIZE HERE ========== */}
                        <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white border border-gray-200 w-full">
                          <svg className="w-6 h-4 flex-shrink-0" style={{ color: '#8E3400' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span className="text-xs font-semibold leading-tight" style={{ color: '#4B5563', fontWeight: 600 }}>
                            nwc(USA) psc++ nsc jdc (Nigeria) MA (USA) dpa MUSni
                          </span>
                        </div>
                        {/* ========== END CREDENTIALS BADGE ========== */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect Links */}
                <div className="mt-4 space-y-2">
                  <a 
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#F5F7FA] rounded-lg hover:bg-[#8E3400]/10 border border-gray-100 hover:border-[#8E3400] transition-all text-sm"
                  >
                    <div className="w-8 h-8 bg-[#0077B5] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="font-semibold" style={{ color: '#132552', fontWeight: 600 }}>LinkedIn</span>
                  </a>

                  <a 
                    href={ADMIRALS_BLOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#F5F7FA] rounded-lg hover:bg-[#8E3400]/10 border border-gray-100 hover:border-[#8E3400] transition-all text-sm"
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: '#8E3400' }}>
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="font-semibold" style={{ color: '#132552', fontWeight: 600 }}>Blog</span>
                  </a>
                </div>
              </div>

              {/* Content - 8 columns */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Quote */}
                <div className="bg-[#F5F7FA] rounded-xl p-6 border-l-4" style={{ borderColor: '#8E3400' }}>
                  <p className="text-lg italic leading-relaxed mb-4" 
                     style={{ color: '#132552', fontWeight: 400 }}>
                    "Strategy is not about the abundance of resources. It is about clarity of priorities, consensus among stakeholders, and the disciplined alignment of limited means to vital ends"
                  </p>
                  <p className="text-sm font-semibold" style={{ color: '#8E3400', fontWeight: 600 }}>
                    — Vice Admiral Issah Adam Yakubu (Rtd.)
                  </p>
                </div>

                {/* Biography */}
                <div>
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2"
                      style={{ color: '#132552', fontWeight: 700 }}>
                    <span className="w-1 h-6 rounded-full" style={{ backgroundColor: '#8E3400' }}></span>
                    About the Executive Board Chairman
                  </h4>
                  
                  <div className="space-y-4 text-base leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
                    <p>
                      Vice Admiral Issah Yakubu is the immediate past Chief of the Naval Staff of Ghana and currently 
                      serves as the Executive Chairman of the Gulf of Guinea Maritime Institute (GoGMI).
                      With a distinguished career spanning over three decades in naval leadership,
                      he is deeply committed to advancing maritime security,
                      strategic thought, and regional cooperation in the Gulf of Guinea and beyond.
                    </p>
                    <p>
                      During his tenure as Chief of the Naval Staff, he led a bold transformation agenda focused on modernising 
                      the Ghana Navy through comprehensive fleet renewal, infrastructure development, and the integration of 
                      advanced technologies. Under his leadership, the Ghana Navy's efforts in defence diplomacy and operational innovation 
                      significantly enhanced Ghana's maritime posture and regional influence.
                    </p>
                    <p>
                      Vice Admiral Issah Yakubu holds a Master of Arts Degree in International Relations from Salve 
                      Regina University, USA and a Post-graduate Diploma in Public Administration from the 
                      Ghana Institute of Management and Public Administration. He is an avid researcher and has authored numerous papers on maritime security and strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

          {/* Air Vice Marshal - Full Featured Profile Like Admiral */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-12">
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Image - 4 columns */}
              <div className="lg:col-span-4">
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src="/frank.jpg" 
                      alt="Advisory Board Chair"
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: 'center 20%' }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-4">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold leading-tight flex-1" 
                              style={{ color: '#132552', fontWeight: 700 }}>
                            Air Vice Marshal Frank Hanson (Rtd.)
                          </h3>
                        </div>

                        {/* ========== CREDENTIALS BADGE ========== */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-200 w-full">
                          <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#8E3400' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span className="text-xs font-semibold leading-tight" style={{ color: '#4B5563', fontWeight: 600 }}>
                            Advisory Board Chair
                          </span>
                        </div>
                        {/* ========== END CREDENTIALS BADGE ========== */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content - 8 columns */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Biography */}
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
              { name: 'JEFFREY LANDSMAN', role: 'ASSOCIATE PROFESSOR, U.S. NAVAL WAR COLLEGE (Rtd), CAPT, USN (RTD)', img: '/jeffrey.jpg' },
              { name: 'Mrs. KATHLEEN QUARTEY AYENSU, ESQ', role: '', img: '/kathleen.jpg' },
              { name: 'COMMODORE JAMES OSEI KONTOH (RTD)', role: '', img: '/jamesO.jpg' },
              { name: 'REAR ADMIRAL SOLOMON AGADA (RTD)', role: '', img: '/solomon.jpg' }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 bg-white aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-sm"><span>Image</span></div>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132552]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-sm font-bold mb-1" 
                    style={{ color: '#132552', fontWeight: 700 }}>
                  {member.name}
                </h3>
                {member.role && (
                  <p className="text-xs" style={{ color: '#4B5563', fontWeight: 400 }}>
                    {member.role}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4"
              style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Join Our Mission
          </h2>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
            Partner with us to transform the future of maritime in the Gulf of Guinea
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:scale-105"
                  style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}>
            <span>Get Involved</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveChairman;