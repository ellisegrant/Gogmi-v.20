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
    <div className="min-h-screen bg-gradient-to-br from-[#132552] via-[#1A336C] to-[#132552]">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#132552]/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute w-96 h-96 bg-[#C1A875] rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#4B637F] rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <p className="text-[#F5F7FA]/70 text-sm" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
              <span className="hover:text-[#C1A875] transition-colors cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span className="hover:text-[#C1A875] transition-colors cursor-pointer">About Us</span>
              <span className="mx-2">/</span>
              <span className="text-[#C1A875]">Executive Chairman</span>
            </p>
          </div>

          {/* TOP SECTION: IMAGE + QUOTE/BUTTON/CONNECT */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT: IMAGE */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative group">
                {/* Image Container - NO decorative shadows */}
                <div className="relative bg-gradient-to-br from-[#F5F7FA] to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src="/admiral.jpg" 
                      alt="Executive Chairman"
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F5F7FA]/95 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="backdrop-blur-sm bg-[#F5F7FA]/90 rounded-xl p-6 border border-[#132552]/20 shadow-xl">
                        <p className="text-[#132552] text-sm font-semibold mb-3" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Executive Chairman</p>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h2 className="text-3xl font-bold text-[#132552] leading-tight mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                              Vice Admiral Issah Adam Yakubu (Rtd.)
                            </h2>
                            <p className="text-[#1F2933] text-sm mt-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                              nwc(USA) psc++ nsc jdc (Nigeria) MA (USA) dpa MUSni
                            </p>
                          </div>
                          <img 
                            src="/Flag.png" 
                            alt="Three Star Ghana Navy" 
                            className="w-16 h-16 object-contain flex-shrink-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: QUOTE + BUTTON + CONNECT (ALL STACKED) */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="space-y-4">
                
                {/* QUOTE LABEL */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
                  <span className="text-[#C1A875] font-semibold tracking-wider text-sm uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Quote</span>
                </div>

                {/* QUOTE TEXT */}
                <div className="relative pl-6 border-l-4 border-[#C1A875] py-2">
                  <p className="text-[#F5F7FA]/90 text-lg italic leading-relaxed" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                    "Strategy is not about the abundance of resources. It is about clarity of priorities, consensus among stakeholders, and the disciplined alignment of limited means to vital ends"
                  </p>
                </div>

                {/* ADMIRAL'S BLOG BUTTON */}
                <a 
                  href={ADMIRALS_BLOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 bg-[#C1A875] text-[#132552] px-8 py-4 rounded-full font-bold hover:bg-[#7A4E3A] hover:text-[#F5F7FA] transition-all duration-300 hover:shadow-xl hover:shadow-[#C1A875]/50 hover:scale-105"
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  <span>The Admiral's Blog</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                {/* CONNECT SECTION - IN RIGHT COLUMN */}
                <div className="bg-gradient-to-br from-[#132552]/50 to-[#1A336C]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#C1A875]/30 shadow-xl mt-6">
                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>Connect</h3>
                  
                  {/* LinkedIn */}
                  <a 
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-[#132552]/50 rounded-xl border border-[#C1A875]/30 hover:border-[#C1A875] hover:bg-[#C1A875]/20 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg mb-3"
                  >
                    <div className="w-12 h-12 bg-[#0077B5] rounded-xl flex items-center justify-center group-hover:bg-[#F5F7FA] transition-all">
                      <svg className="w-6 h-6 text-[#F5F7FA] group-hover:text-[#0077B5] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#F5F7FA] font-semibold group-hover:text-[#C1A875] transition-colors" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>LinkedIn</h4>
                      <p className="text-[#F5F7FA]/70 text-sm mt-1" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Follow on LinkedIn</p>
                    </div>
                    <svg className="w-5 h-5 text-[#C1A875] group-hover:text-[#F5F7FA] transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Admiral's Blog */}
                  <a 
                    href={ADMIRALS_BLOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 bg-[#132552]/50 rounded-xl border border-[#C1A875]/30 hover:border-[#C1A875] hover:bg-[#C1A875]/20 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-[#C1A875] rounded-xl flex items-center justify-center group-hover:bg-[#F5F7FA] transition-all">
                      <svg className="w-6 h-6 text-[#132552] group-hover:text-[#C1A875] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#F5F7FA] font-semibold group-hover:text-[#C1A875] transition-colors" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Admiral's Blog</h4>
                      <p className="text-[#F5F7FA]/70 text-sm mt-1" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Read Latest Posts</p>
                    </div>
                    <svg className="w-5 h-5 text-[#C1A875] group-hover:text-[#F5F7FA] transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: FULL WIDTH BIOGRAPHY */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* SINGLE FULL WIDTH CARD */}
          <div className="bg-gradient-to-br from-[#132552]/50 to-[#1A336C]/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#C1A875]/30 hover:border-[#C1A875]/50 transition-all duration-500 shadow-xl">
            
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#F5F7FA] mb-8 flex items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="w-2 h-10 bg-[#C1A875] rounded-full"></span>
              About the Executive Chairman
            </h2>
            
            {/* Biography Text in 2 Columns */}
            <div className="grid md:grid-cols-2 gap-8 text-[#F5F7FA]/90 leading-relaxed text-lg" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
              <div className="space-y-6">
                <p>
                  Vice Admiral Issah Yakubu is the immediate past Chief of the Naval Staff of Ghana and currently 
                  serve as the Executive Chairman of the Gulf of Guinea Maritime Institute (GoGMI).
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
              </div>
              <div className="space-y-6">
                <p>
                  He also played a key role in the development of Ghana's National Integrated 
                  Maritime Strategy (NIMS), providing strategic direction to secure and
                  optimise the country's maritime domain.
                </p>
                <p>
                  Vice Admiral Issah Yakubu holds a Master of Arts Degree in International Relations from the Salve 
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
      
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default ExecutiveChairman;