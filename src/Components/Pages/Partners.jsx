import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Partners = () => {
  const [selectedCategory, setSelectedCategory] = useState('International');

  const partners = [
    {
      id: 1,
      name: 'AFRICAN UNION',
      logo: '/AU Main.png',
      category: 'International',
      type: 'Strategic Partner',
      since: '2015',
      description: 'Collaboration on maritime education and cultural heritage preservation',
      website: 'https://au.int/',
      projects: 8
    },
    {
      id: 2,
      name: 'ECOWAS',
      logo: '/ECOWAS Logo (1).png',
      category: 'International',
      type: 'Strategic Partner',
      since: '2016',
      description: 'Maritime safety and security technical cooperation',
      website: 'https://www.ecowas.int/',
      projects: 12
    },
    {
      id: 3,
      name: 'DOTCAN',
      logo: '/DOTCAN LOGO.png',
      category: 'International',
      type: 'Strategic Partner',
      since: '2014',
      description: 'Regional maritime policy development and implementation',
      website: 'https://dotcan.institute/',
      projects: 15
    },
    {
      id: 4,
      name: 'APN',
      logo: '/APN.png',
      category: 'Regional',
      type: 'Strategic Partner',
      since: '2017',
      description: 'Continental maritime strategy and blue economy initiatives',
      website: 'https://au.int',
      projects: 6
    },
    {
      id: 5,
      name: 'ECCAS',
      logo: '/ECCAS_logo (1).jpg',
      category: 'International',
      type: 'Funding Partner',
      since: '2018',
      description: 'Maritime security capacity building programs',
      website: 'https://europa.eu',
      projects: 10
    },
    {
      id: 6,
      name: 'ENMAR',
      logo: '/Enmar.png',
      category: 'International',
      type: 'Implementation Partner',
      since: '2013',
      description: 'Maritime security operations and training',
      website: '#',
      projects: 20
    },
    {
      id: 7,
      name: 'NIGERIA NAVY',
      logo: '/nigerian navy.png',
      category: 'Government',
      type: 'Regulatory Partner',
      since: '2016',
      description: 'Maritime safety standards and compliance',
      website: 'https://www.joinnigeriannavy.navy.mil.ng/',
      projects: 9
    },
    {
      id: 8,
      name: 'GGC',
      logo: '/GGC Logo (1).jpg',
      category: 'International',
      type: 'Funding Partner',
      since: '2019',
      description: 'Blue economy development financing',
      website: 'https://worldbank.org',
      projects: 5
    },
    {
      id: 9,
      name: 'EYE ON PORT',
      logo: '/eyeonport.jpg',
      category: 'Private Sector',
      type: 'Network Partner',
      since: '2017',
      description: 'Women in maritime empowerment programs',
      website: '#',
      projects: 7
    },
    {
      id: 9,
      name: 'ICC',
      logo: '/ICC Logo (1).png',
      category: 'International',
      type: 'Network Partner',
      since: '2017',
      description: 'Women in maritime empowerment programs',
      website: '#',
      projects: 7
    },
    {
      id: 9,
      name: 'IMDEC',
      logo: '/IMDEC-Logo.png',
      category: 'Private Sector',
      type: 'Network Partner',
      since: '2017',
      description: 'Women in maritime empowerment programs',
      website: '#',
      projects: 7
    },
    {
      id: 9,
      name: '/Maritimafrica.jpg',
      category: 'Private Sector',
      type: 'Network Partner',
      since: '2017',
      description: 'Women in maritime empowerment programs',
      website: '#',
      projects: 7
    },

    {
      id: 9,
      name: '/maritime logo (1).jpg',
      category: 'Private Sector',
      type: 'Network Partner',
      since: '2017',
      description: 'Women in maritime empowerment programs',
      website: '#',
      projects: 7
    },

    {
      id: 9,
      name: '/Maritimafrica.jpg',
      category: 'Private Sector',
      type: 'Network Partner',
      since: '2017',
      description: 'Women in maritime empowerment programs',
      website: '#',
      projects: 7
    }
  ];

  const categories = ['International', 'Regional', 'Government', 'Private Sector'];

  const filteredPartners = partners.filter(partner => partner.category === selectedCategory);

  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&fit=crop" 
            alt="Partners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/85 to-[#132552]/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 600 }}>
            Our Network
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6" 
              style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            Our Partners
          </h1>
          <div className="w-20 h-1.5 rounded-full mx-auto mb-6" style={{ backgroundColor: '#8E3400' }}></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontWeight: 400 }}>
            Working together with leading organizations to advance maritime excellence across West Africa
          </p>
        </div>
      </section>

      {/* About Partnerships Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center"
                style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Strategic Partnerships for Maritime Excellence
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto mb-8" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
            <p>
              GoGMI's partnerships represent a diverse network of international organizations, regional bodies, government agencies, academic institutions, and private sector entities committed to advancing maritime security and sustainable blue economy development in the Gulf of Guinea.
            </p>

            <p>
              Through strategic collaborations, we leverage collective expertise, resources, and networks to address complex maritime challenges, build regional capacity, and promote evidence-based policymaking.
            </p>

            <p>
              Each partnership is built on shared values of transparency, mutual respect, and commitment to advancing the blue economy.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Statistics */}
      <section className="py-16" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Global Partners' },
              { number: '15+', label: 'Countries' },
              { number: '100+', label: 'Joint Projects' },
              { number: '10 Years', label: 'Collaboration' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100">
                <div className="text-4xl mb-2" style={{ color: '#132552', fontWeight: 900 }}>
                  {stat.number}
                </div>
                <p className="text-sm" style={{ color: '#4B5563', fontWeight: 600 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#132552', fontWeight: 700 }}>
              Filter by Category
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedCategory === category
                    ? 'shadow-lg'
                    : 'border-2 hover:border-[#8E3400]'
                }`}
                style={{ 
                  backgroundColor: selectedCategory === category ? '#8E3400' : 'white',
                  color: selectedCategory === category ? 'white' : '#132552',
                  borderColor: selectedCategory === category ? '#8E3400' : '#E5E7EB',
                  fontWeight: 600 
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid - Compact Logo-Focused Design */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Count Display */}
          <div className="text-center mb-10">
            <p className="text-lg" style={{ color: '#4B5563', fontWeight: 400 }}>
              Showing <span style={{ color: '#8E3400', fontWeight: 700 }}>{filteredPartners.length}</span> partners in <span style={{ color: '#8E3400', fontWeight: 700 }}>{selectedCategory}</span>
            </p>
          </div>

          {/* Compact Grid - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-[#8E3400] hover:shadow-xl transition-all duration-300 cursor-pointer relative"
              >
                {/* Project Count Badge */}
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs"
                        style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 600 }}>
                    {partner.projects}
                  </span>
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center h-20 mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Name */}
                <h3 className="text-center text-sm font-bold mb-2 line-clamp-2 min-h-[40px]" 
                    style={{ color: '#132552', fontWeight: 700 }}>
                  {partner.name}
                </h3>

                {/* Type */}
                <p className="text-center text-xs mb-3" 
                   style={{ color: '#4B5563', fontWeight: 600 }}>
                  {partner.type}
                </p>

                {/* Hover Details */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs leading-relaxed mb-3 line-clamp-2" 
                       style={{ color: '#4B5563', fontWeight: 400 }}>
                      {partner.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span style={{ color: '#4B5563', fontWeight: 400 }}>Since {partner.since}</span>
                      {partner.website !== '#' && (
                        <a 
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-[#8E3400] transition-colors"
                          style={{ color: '#132552', fontWeight: 600 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>Visit</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 600 }}>
            Join Our Network
          </span>
          <h2 className="text-4xl font-black mb-6"
              style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Become a Partner
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
            Join our network of leading organizations driving maritime excellence in West Africa. Together, we can create sustainable solutions for the Gulf of Guinea's blue economy.
          </p>
          
          <div className="bg-[#F5F7FA] rounded-xl p-6 border border-gray-200 inline-block mb-8">
            <p className="mb-2" style={{ color: '#132552', fontWeight: 600 }}>Contact Partnerships Team</p>
            <a href="mailto:partnerships@gogmi.org.gh" 
               className="text-lg hover:underline" 
               style={{ color: '#8E3400', fontWeight: 600 }}>
              partnerships@gogmi.org.gh
            </a>
          </div>

          <div>
            <button className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-lg transition-all shadow-lg hover:scale-105"
                    style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}>
              Partnership Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;