import React from 'react';

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



       {/* Executive Director Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section - Left */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&fit=crop" 
                  alt="Dr. Alberta Ama Sagoe"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#132552]/40 to-transparent"></div>
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
                Ellise Grant 
              </h2>
              
              <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: '#8E3400' }}></div>
              
              <p className="text-lg font-semibold mb-6" style={{ color: '#8E3400', fontWeight: 600 }}>
                Executive Director
              </p>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
                <p>
                  Dr. Ellise serves as the Executive Director of the Gulf of Guinea Maritime Institute, bringing extensive experience in maritime governance, regional security, and sustainable development to the organization.
                </p>
                
                <p>
                  With a distinguished career spanning over two decades, she has been instrumental in shaping maritime policy frameworks across West Africa and fostering collaboration among regional stakeholders to address critical maritime security challenges.
                </p>
                
                <p>
                  Under her leadership, GoGMI has emerged as a leading voice in maritime security research, capacity building, and policy advocacy in the Gulf of Guinea region. Dr. Sagoe's vision continues to drive the institute's commitment to creating sustainable solutions for Africa's maritime future.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: '#F5F7FA' }}>
                <h3 className="text-lg font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                  Key Focus Areas
                </h3>
                <div className="space-y-3">
                  {[
                    'Regional Maritime Security Frameworks',
                    'Blue Economy Development',
                    'Stakeholder Engagement & Capacity Building',
                    'Policy Research & Advocacy'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8E3400' }}></div>
                      <span className="text-sm" style={{ color: '#4B5563', fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
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
              { name: 'Samuel Jonas Aryeh', title: 'Head of Corporate Affairs', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop' },
              { name: 'Jamilatu Sulley', title: 'Head of Finance & Administration', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop' },
              { name: 'Joseph Ayitiah', title: 'Head of Technical', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop' },
              { name: 'Ms. Julliet Affrah Obeng', title: 'Research Manager', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&fit=crop' }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 bg-white aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132552]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
              { name: 'Enoch Dzane Nikoi', title: 'Communications Specialist', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&fit=crop' },
              { name: 'Caleb Acquah-Harrison', title: 'Research Analyst', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop' },
              { name: 'Lawrence Dogli', title: 'Programmes Manager', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&fit=crop' },
              { name: 'Rhodalyn Owusu', title: 'Finance & Admin Officer', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&fit=crop' }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 bg-white aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132552]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* Research */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Mavis Akortsu Ama Afefa', title: 'Office Assistant', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop' },
              { name: 'Ellise Grant Boamah', title: 'National Service Personel', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&fit=crop' },
              // { name: 'Mr. Kwabena Agyei', title: 'Research Analyst', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&fit=crop' },
              // { name: 'Ms. Abena Serwaa', title: 'Research Associate', img: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&fit=crop' }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 bg-white aspect-[3/4] shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#132552]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
    </div>
  );
};

export default Management;