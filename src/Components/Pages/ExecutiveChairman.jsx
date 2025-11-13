import { useEffect, useState } from 'react';

const ExecutiveChairman = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute w-96 h-96 bg-yellow-400 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <p className="text-gray-300 text-sm">
              <span className="hover:text-yellow-400 transition-colors cursor-pointer">Home</span>
              <span className="mx-2">/</span>
              <span className="hover:text-yellow-400 transition-colors cursor-pointer">About Us</span>
              <span className="mx-2">/</span>
              <span className="text-yellow-400">Executive Chairman</span>
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <div className="relative group">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[3/4] relative">
                    {/* Placeholder - Replace with actual image */}
                    <img 
                      src="/api/placeholder/600/800" 
                      alt="Executive Chairman"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-transparent"></div>
                    
                    {/* Name Badge */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="backdrop-blur-sm bg-white/80 rounded-xl p-6 border border-blue-900/20">
                        <p className="text-blue-900 text-sm font-medium mb-3">Executive Chairman</p>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h2 className="text-3xl font-bold text-blue-950 leading-tight mb-2">
                              Vice Admiral Issah Adam Yakubu (Rtd.)
                            </h2>
                            <p className="text-gray-600 text-sm mt-2">nwc(USA) psc++ nsc jdc (Nigeria) MA (USA) dpa MUSni</p>
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

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl animate-pulse delay-500"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <div className="inline-block">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-1 bg-yellow-400 rounded-full"></div>
                      <span className="text-yellow-400 font-semibold tracking-wider text-sm uppercase">Leadership</span>
                    </div>
                  </div>
                  <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    Leading The Gulf of Guinea
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                      Maritime Future
                    </span>
                  </h1>
                </div>

                {/* Quote */}
                <div className="relative pl-6 border-l-4 border-yellow-400 py-2">
                  <p className="text-gray-300 text-lg italic leading-relaxed">
                    "We talk so little about the ocean that we risk overlooking the opportunities of the Blue Economy 
                    and underestimating the threats of maritime insecurity."
                  </p>
                </div>

                {/* Stats */}
                

                {/* CTA Button */}
                <button className="group relative inline-flex items-center gap-3 bg-yellow-400 text-blue-950 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/50 hover:scale-105">
                  <span>The Admiral's Blog</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Bio */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-950/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-800/50 hover:border-yellow-400/50 transition-all duration-500">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
                About the Executive Chairman
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Air Vice Marshall Frank Hanson serves as the Executive Chairman of the Gulf of Guinea Maritime Institute (GoGMI), 
                  bringing decades of distinguished service in both military and maritime sectors to his leadership role. His vision 
                  and strategic direction have positioned GoGMI as the leading indigenous think-tank for maritime affairs in West Africa.
                </p>
                <p>
                  Under his leadership, GoGMI has become a crucial platform for maritime strategic thinkers, practitioners, and experts 
                  across the Gulf of Guinea region. His commitment to addressing "sea blindness" – the tendency to overlook the ocean's 
                  vital role in national development – has driven the Institute's mission to bring maritime issues to the forefront of 
                  public consciousness and policy discourse.
                </p>
                <p>
                  Air Vice Marshall Hanson's extensive experience in defense and security, combined with his deep understanding of 
                  maritime dynamics, enables him to bridge military, civilian, and international stakeholders in addressing the complex 
                  challenges facing the Gulf of Guinea. His leadership emphasizes youth engagement, indigenous research, and sustainable 
                  blue economy development.
                </p>
              </div>
            </div>

            
            
          </div>

          {/* Sidebar - Social Media */}
          <div className={`space-y-6 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-br from-blue-900/50 to-blue-950/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/50 sticky top-6">
              <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
              
              <a 
                href="#" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 bg-blue-950/50 rounded-xl border border-blue-800/50 hover:border-blue-600 hover:bg-blue-600 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-white transition-all">
                  <svg className="w-6 h-6 text-white group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold group-hover:text-white transition-colors">
                    LinkedIn
                  </h4>
                  <p className="text-gray-400 text-sm mt-1 group-hover:text-white/80">Follow on LinkedIn</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
             
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