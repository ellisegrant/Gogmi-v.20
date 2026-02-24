import React from 'react';
import { X } from 'lucide-react';

const Management = () => {
  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&fit=crop" 
            alt="Management Team"
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
            Management Team
          </h1>
          <div className="w-20 h-1.5 rounded-full mx-auto mb-6" style={{ backgroundColor: '#8E3400' }}></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
            Meet the dedicated professionals driving GoGMI's mission
          </p>
        </div>
      </section>

      {/* Executive Director Section - VACANT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section - Left (EMPTY FRAME) */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] bg-gray-100 border-2 border-dashed border-gray-300">
                {/* Empty Frame with VACANT indicator */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 rounded-full mb-6 flex items-center justify-center"
                       style={{ backgroundColor: 'rgba(142, 52, 0, 0.1)' }}>
                    <X className="w-16 h-16" style={{ color: '#8E3400' }} strokeWidth={3} />
                  </div>
                  <div className="text-center px-6">
                    <p className="text-2xl font-black mb-2" style={{ color: '#132552' }}>VACANT</p>
                    <p className="text-sm" style={{ color: '#6B7280' }}>Position Currently Unfilled</p>
                  </div>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 left-8 right-8">
                <div className="bg-[#8E3400] text-white px-6 py-4 rounded-xl shadow-xl">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-sm" style={{ fontWeight: 700 }}>Executive Director</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Section - Right */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4" 
                  style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
                Executive Director
              </h2>
              
              <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#8E3400' }}></div>
              
              <div className="p-8 rounded-2xl border-2 border-dashed"
                   style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full mb-6 flex items-center justify-center"
                       style={{ backgroundColor: 'rgba(142, 52, 0, 0.1)' }}>
                    <X className="w-10 h-10" style={{ color: '#8E3400' }} strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-black mb-3" style={{ color: '#132552' }}>
                    Position Vacant
                  </h3>
                  <p className="text-base max-w-md" style={{ color: '#6B7280' }}>
                    This position is currently unfilled. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department of Corporate Affairs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Joseph Ayitiah', title: 'Head of Technical' },
              { name: 'Juliet Afrah Obeng ', title: 'Research Manager' },              
              { name: 'Lawrence Dogli', title: 'Programmes Manager' }, 
              { name: 'Rhodalyn Owusu', title: 'Finance & Admin Officer' }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100 aspect-[3/4] shadow-lg border-2 border-gray-200">
                  {/* Empty frame - no image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: 'rgba(19, 37, 82, 0.05)' }}>
                      <svg className="w-12 h-12" style={{ color: '#132552' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-bold mb-1" 
                    style={{ color: '#132552', fontWeight: 700 }}>
                  {member.name}
                </h3>
                <p className="text-sm" style={{ color: '#4B5563', fontWeight: 400 }}>
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Enoch Dzane Nikoi', title: 'Communications Specialist' },
              { name: 'Caleb Acquah-Harrison', title: 'Research Analyst' },
              { name: 'Ellise Grant Boamah', title: 'National Service Personel' },
              { name: 'Jonas Aryeh', title: 'Head of Corporate Affairs' }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-100 aspect-[3/4] shadow-lg border-2 border-gray-200">
                  {/* Empty frame - no image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center"
                         style={{ backgroundColor: 'rgba(19, 37, 82, 0.05)' }}>
                      <svg className="w-12 h-12" style={{ color: '#132552' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-base font-bold mb-1" 
                    style={{ color: '#132552', fontWeight: 700 }}>
                  {member.name}
                </h3>
                <p className="text-sm" style={{ color: '#4B5563', fontWeight: 400 }}>
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section (empty in original) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Empty - no members in this section */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;