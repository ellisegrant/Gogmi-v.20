import React from 'react';
import { Download } from 'lucide-react';

const BlueWorldInitiative = () => {
  const oceanConcepts = [
    {
      title: 'Ocean',
      description: 'The vast body of saltwater that covers over 70% of the Earth\'s surface.'
    },
    {
      title: 'Ocean Economy',
      description: 'The sum total of economic activities that take place in and around the ocean, including fishing, shipping, tourism, and energy production.'
    },
    {
      title: 'Blue Economy',
      description: 'The sustainable use of ocean resources for economic growth, job creation, and environmental preservation.'
    },
    {
      title: 'Sustainability',
      description: 'The practice of using resources in a way that does not deplete or damage them for future generations.'
    },
    {
      title: 'Marine Conservation',
      description: 'The protection and preservation of ocean ecosystems and biodiversity.'
    },
    {
      title: 'Renewable Energy',
      description: 'Energy that is generated from sources that are replenished naturally, such as wind, solar, and wave power.'
    },
    {
      title: 'Aquaculture',
      description: 'The farming of aquatic organisms such as fish, shellfish, and seaweed.'
    }
  ];

  const partners = [
    'Eden International School',
    'Galaxy',
    'CMTD-YW',
    'Fisheries Commission',
    'Ghana Navy',
    'Canadian High Commission'
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img 
          src="/BLUE WORLD INITIATIVE.jpg"
          alt="Blue World Initiative"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#132552]/90"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#8E3400', color: 'white' }}>
                <span className="font-bold text-sm">Ocean Literacy & Career Development</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
                The Blue World Initiative
              </h2>
              
              <p className="text-lg leading-relaxed mb-6 font-semibold" style={{ color: '#4B5563' }}>
                The Blue World Initiative is a transformative program by GoGMI in partnership with DOTCAN (Development of Ocean Technical Capacity for African Nations), dedicated to inspiring the next generation of ocean leaders and blue economy champions across the Gulf of Guinea.
              </p>

              <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                Through interactive career fairs, educational resources, and hands-on experiences, we empower young Africans to explore exciting maritime careers while understanding their crucial role in protecting our ocean and building a sustainable blue economy.
              </p>
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/bwi2.jpg"
                alt="Blue World Initiative Activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOTCAN Partnership Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Partnership with DOTCAN
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src="/DOTCAN LOGO.png"
                alt="DOTCAN Logo"
                className="max-w-md w-full"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#132552', fontWeight: 700 }}>
                Development of Ocean Technical Capacity for African Nations
              </h3>
              
              <p className="text-base leading-relaxed mb-4 font-semibold" style={{ color: '#4B5563' }}>
                DOTCAN is committed to building ocean technical capacity across African nations through innovative educational programs, research initiatives, and capacity-building workshops.
              </p>

              <p className="text-base leading-relaxed mb-4 font-semibold" style={{ color: '#4B5563' }}>
                Through this strategic partnership, GoGMI and DOTCAN combine expertise in maritime research, policy development, and youth education to create transformative learning experiences that inspire the next generation of ocean leaders.
              </p>

              <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                Together, we are building a sustainable blue economy across the Gulf of Guinea region through education, innovation, and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Career Fair 2023 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Ocean Career Fair 2023
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-100 h-full">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                  A Groundbreaking Event
                </h3>
                <p className="text-base leading-relaxed mb-4 font-semibold" style={{ color: '#4B5563' }}>
                  The Gulf of Guinea Maritime Institute (GoGMI) in partnership with the Development of Technical Capacity for African Nations (DOTCAN) organized a transformative one-day event that brought together students from junior high and secondary schools to interact with key maritime stakeholders.
                </p>
                <p className="text-base leading-relaxed mb-6 font-semibold" style={{ color: '#4B5563' }}>
                  Through engaging presentations and interactive sessions, students discovered the diverse career opportunities in the maritime sector and learned how they can contribute to ocean conservation and sustainable development.
                </p>

                <div className="space-y-3">
                  <p className="font-bold" style={{ color: '#132552' }}>• Interactive Sessions with Industry Experts</p>
                  <p className="font-bold" style={{ color: '#132552' }}>• Career Pathway Guidance</p>
                  <p className="font-bold" style={{ color: '#132552' }}>• Ocean Literacy Education</p>
                  <p className="font-bold" style={{ color: '#132552' }}>• Hands-on Learning Activities</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-100">
              <h4 className="text-xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                Partner Organizations
              </h4>
              <div className="space-y-3">
                {partners.map((partner, idx) => (
                  <div key={idx} className="p-3 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
                    <span className="font-semibold text-sm" style={{ color: '#4B5563' }}>{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/bwi3.jpg"
                alt="Students at Career Fair"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/bwist1.jpg"
                alt="Interactive Learning Session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/bwist2.jpg"
                alt="Career Fair Activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Concepts */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Key Ocean Concepts
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#8E3400' }}></div>
            <p className="text-lg max-w-3xl mx-auto font-semibold" style={{ color: '#4B5563' }}>
              Understanding these fundamental concepts is essential for anyone interested in ocean-related careers and the blue economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {oceanConcepts.map((concept, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-[#8E3400] transition-all duration-300 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#132552', fontWeight: 700 }}>
                  {concept.title}
                </h3>
                <p className="text-sm leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue Careers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Ocean-Related Career Pathways
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#8E3400' }}></div>
            <p className="text-lg max-w-3xl mx-auto font-semibold" style={{ color: '#4B5563' }}>
              Discover exciting career opportunities in the blue economy and maritime sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/bwi4.jpg"
                alt="Maritime Professionals"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                  Science & Research
                </h3>
                <ul className="space-y-2">
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Marine Biologist</li>
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Oceanographer</li>
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Environmental Scientist</li>
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Marine Policy Analyst</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                  Maritime Operations
                </h3>
                <ul className="space-y-2">
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Naval Officer</li>
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Marine Engineer</li>
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Coastal Planner</li>
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Fisheries Manager</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                  Blue Economy
                </h3>
                <ul className="space-y-2">
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Aquaculture Farmer</li>
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Renewable Energy Engineer</li>
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Ocean Advocate</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border-2 border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                  Education & Policy
                </h3>
                <ul className="space-y-2">
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>Marine Educator</li>
                  <li className="text-sm font-semibold" style={{ color: '#4B5563' }}>International Lawyer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border-l-4" style={{ borderColor: '#8E3400' }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
              Fun Fact About Blue Careers
            </h3>
            <p className="text-lg leading-relaxed font-semibold mb-4" style={{ color: '#4B5563' }}>
              Did you know that you can play a crucial role in safeguarding the ocean even if you do not wish to work in the careers listed above?
            </p>
            <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
              Accountants and economists can contribute to initiatives on accounting for the Ocean Economy. Doctors, lab technicians and other categories of scientists can learn more about how the release of toxins into the ocean affect human health. Even psychologists can explore the factors that affect the willingness of individuals to adopt sustainable behaviours that safeguard the ocean and its resources. In almost all career fields, you can carve a unique niche for yourself by specialising in a branch of that career that supports the blue economy!
            </p>
          </div>
        </div>
      </section>

      {/* MAN Comic Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/adventuresbwi.jpg"
                alt="MAN - Maritime Domain Awareness Comic"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: '#8E3400', color: 'white' }}>
                <span className="font-bold text-sm">Educational Comic Series</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
                MAN: The Adventures of Maritime Domain Awareness
              </h2>

              <p className="text-lg leading-relaxed mb-6 font-semibold" style={{ color: '#4B5563' }}>
                Engage young minds through exciting storytelling! Our educational comic book series brings maritime concepts to life through the adventures of MAN and his team as they protect the ocean and promote maritime domain awareness.
              </p>

              <p className="text-base leading-relaxed mb-8 font-semibold" style={{ color: '#4B5563' }}>
                Through vibrant illustrations and compelling narratives, students learn about ocean conservation, maritime security, and the importance of protecting our blue planet – all while being entertained by action-packed adventures.
              </p>

              <div className="space-y-3">
                <p className="font-bold" style={{ color: '#132552' }}>• Educational & Entertaining</p>
                <p className="font-bold" style={{ color: '#132552' }}>• Culturally Relevant Stories</p>
                <p className="font-bold" style={{ color: '#132552' }}>• Inspiring Ocean Stewardship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Initiative in Action
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/bwist4.jpg"
                alt="Student Engagement"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/bwi1.jpg"
                alt="Learning Activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20" style={{ backgroundColor: '#132552' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            Download Resources
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto font-semibold">
            Access our Blue Career Fair Handbook and other educational materials to learn more about ocean careers and the blue economy.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#8E3400' }}>
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#132552', fontWeight: 700 }}>
                Blue Career Fair Handbook
              </h3>
              <p className="text-sm mb-6 font-semibold" style={{ color: '#4B5563' }}>
                Complete guide with ocean definitions, career pathways, and industry insights.
              </p>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/bluecareerfair.handbook.pdf';
                  link.download = 'Blue-Career-Fair-Handbook.pdf';
                  link.click();
                }}
                className="px-8 py-3 rounded-lg font-bold text-white transition-all"
                style={{ backgroundColor: '#8E3400', fontWeight: 700 }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
              >
                Download Handbook
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#132552' }}>
                <span className="text-white text-2xl font-bold">?</span>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#132552', fontWeight: 700 }}>
                Get Involved
              </h3>
              <p className="text-sm mb-6 font-semibold" style={{ color: '#4B5563' }}>
                Want to participate in future Blue World Initiative events? Contact us to learn more.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-3 rounded-lg font-bold transition-all border-2"
                style={{ borderColor: '#132552', color: '#132552', fontWeight: 700 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#132552';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#132552';
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Stay Curious and Engaged
          </h2>
          <p className="text-lg leading-relaxed mb-8 font-semibold" style={{ color: '#4B5563' }}>
            We hope this initiative has provided you with useful information about the ocean and the different careers that are available in the ocean-related industry. Remember to stay curious and engaged, and take advantage of the opportunity to connect with professionals in the field and learn more about the ocean and its importance.
          </p>
          <p className="text-xl font-bold mb-8" style={{ color: '#8E3400' }}>
            Good luck in your future endeavours!
          </p>
          <p className="text-base font-semibold" style={{ color: '#4B5563' }}>
            Want to find out more? Do some online research or reach out to any member of the GoGMI team. We would be happy to talk to you!
          </p>
        </div>
      </section>
    </div>
  );
};

export default BlueWorldInitiative;