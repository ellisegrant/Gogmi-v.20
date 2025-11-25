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
      
      {/* Hero Section - Clean & Professional */}
      <section className="relative bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/3 to-[#8E3400]/3"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <p className="text-sm" style={{ color: '#4B5563', fontWeight: 400 }}>
              <span className="hover:text-[#8E3400] transition-colors cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span className="hover:text-[#8E3400] transition-colors cursor-pointer">Leadership</span>
              <span className="mx-2">/</span>
              <span style={{ color: '#8E3400', fontWeight: 600 }}>Executive Chairman</span>
            </p>
          </div>

          {/* Page Title */}
          <div className={`mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                  style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 600 }}>
              Leadership
            </span>
            <h1 className="text-5xl md:text-6xl font-black mb-6"
                style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Executive Chairman
            </h1>
            <div className="w-20 h-1.5 rounded-full" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: IMAGE - 5 columns */}
            <div className={`lg:col-span-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative">
                {/* Image Container */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src="/admiral.jpg" 
                      alt="Executive Chairman"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <p className="text-sm font-semibold mb-2"
                             style={{ color: '#8E3400', fontWeight: 600 }}>
                            Executive Chairman
                          </p>
                          <h2 className="text-2xl font-bold leading-tight mb-2" 
                              style={{ color: '#132552', fontWeight: 700 }}>
                            Vice Admiral Issah Adam Yakubu (Rtd.)
                          </h2>
                          <p className="text-sm" style={{ color: '#4B5563', fontWeight: 400 }}>
                            nwc(USA) psc++ nsc jdc (Nigeria) MA (USA) dpa MUSni
                          </p>
                        </div>
                        <img 
                          src="/Flag.png" 
                          alt="Three Star Ghana Navy" 
                          className="w-14 h-14 object-contain flex-shrink-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connect Section Below Image */}
                <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                    Connect
                  </h3>
                  
                  {/* LinkedIn */}
                  <a 
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-xl hover:bg-[#8E3400]/10 border border-gray-100 hover:border-[#8E3400] transition-all duration-300 mb-3"
                  >
                    <div className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold" style={{ color: '#132552', fontWeight: 600 }}>
                        LinkedIn Profile
                      </h4>
                      <p className="text-sm" style={{ color: '#4B5563', fontWeight: 400 }}>
                        Connect professionally
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-[#8E3400] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Admiral's Blog */}
                  <a 
                    href={ADMIRALS_BLOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-[#F5F7FA] rounded-xl hover:bg-[#8E3400]/10 border border-gray-100 hover:border-[#8E3400] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                         style={{ backgroundColor: '#8E3400' }}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold" style={{ color: '#132552', fontWeight: 600 }}>
                        Admiral's Blog
                      </h4>
                      <p className="text-sm" style={{ color: '#4B5563', fontWeight: 400 }}>
                        Read latest insights
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-[#8E3400] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTENT - 7 columns */}
            <div className={`lg:col-span-7 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              
              {/* Quote Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 rounded-full" style={{ backgroundColor: '#8E3400' }}></div>
                  <span className="font-semibold text-sm uppercase tracking-wider"
                        style={{ color: '#8E3400', fontWeight: 600 }}>
                    Quote
                  </span>
                </div>

                <div className="relative pl-6 border-l-4 py-2" style={{ borderColor: '#8E3400' }}>
                  <p className="text-xl italic leading-relaxed mb-6" 
                     style={{ color: '#132552', fontWeight: 400 }}>
                    "Strategy is not about the abundance of resources. It is about clarity of priorities, consensus among stakeholders, and the disciplined alignment of limited means to vital ends"
                  </p>
                  
                  {/* Attribution */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="font-bold text-lg" style={{ color: '#132552', fontWeight: 700 }}>
                      Vice Admiral Issah Adam Yakubu (Rtd.)
                    </p>
                    <p className="text-sm mt-1" style={{ color: '#4B5563', fontWeight: 400 }}>
                      nwc(USA) psc++ nsc jdc (Nigeria) MA (USA) dpa MUSni
                    </p>
                  </div>
                </div>
              </div>

              {/* Biography Section */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"
                    style={{ color: '#132552', fontWeight: 700 }}>
                  <span className="w-1.5 h-8 rounded-full" style={{ backgroundColor: '#8E3400' }}></span>
                  About the Executive Chairman
                </h3>
                
                <div className="space-y-5 text-lg leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
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
                    advanced technologies. 
                    Under his leadership, the Ghana Navy's efforts in defence diplomacy and operational innovation 
                    significantly enhanced Ghana's maritime posture and regional influence.
                  </p>
                  <p>
                    He also played a key role in the development of Ghana's National Integrated 
                    Maritime Strategy (NIMS), providing strategic direction to secure and
                    optimise the country's maritime domain.
                  </p>
                  <p>
                    Vice Admiral Issah Yakubu holds a Master of Arts Degree in International Relations from Salve 
                    Regina University, USA and a Post-graduate Diploma in Public Administration from the 
                    Ghana Institute of Management and Public Administration. 
                    He is an avid researcher and has authored numerous papers on maritime security and strategy. 
                    He is Co-Author and Co-Editor of the official history of 
                    the Ghana Navy titled "History of the Ghana Navy: 
                    A Case for a Credible Naval Force for National Development".
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl font-black mb-6"
                style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Advisory Board Members
            </h2>
            <div className="w-20 h-1.5 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'AIR VICE MARSHAL FRANK HANSON (RTD)', role: 'Advisory Board Chair', img: '/frank.jpg' },
              { name: 'JEFFREY LANDSMAN', role: 'ASSOCIATE PROFESSOR, U.S. NAVAL WAR COLLEGE (Rtd), CAPT, USN (RTD)', img: '/jeffrey.jpg' },
              { name: 'Mrs. KATHLEEN QUARTEY AYENSU, ESQ', role: '', img: '/kathleen.jpg' },
              { name: 'COMMODORE JAMES OSEI KONTOH (RTD)', role: '', img: '/jamesO.jpg' },
              { name: 'REAR ADMIRAL SOLOMON AGADA (RTD)', role: '', img: '/solomon.jpg' }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-5 bg-gray-100 aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400"><span>Image not found</span></div>';
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132552]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-bold mb-2" 
                    style={{ color: '#132552', fontWeight: 700 }}>
                  {member.name}
                </h3>
                {member.role && (
                  <p className="text-sm" style={{ color: '#4B5563', fontWeight: 400 }}>
                    {member.role}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #ffffff 50%, #F5F7FA 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
             style={{ backgroundColor: '#8E3400' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
             style={{ backgroundColor: '#132552' }}></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6"
              style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Join Our Mission
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
            Partner with us to transform the future of maritime in the Gulf of Guinea
          </p>
          <button className="inline-flex items-center justify-center gap-2 px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105 hover:shadow-2xl"
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