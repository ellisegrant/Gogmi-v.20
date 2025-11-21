import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Partners = () => {
  const [selectedCategory, setSelectedCategory] = useState('International');

  const partners = [
    {
      id: 1,
      name: 'UNESCO',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=UNESCO',
      category: 'International',
      type: 'Strategic Partner',
      since: '2015',
      description: 'Collaboration on maritime education and cultural heritage preservation',
      website: 'https://unesco.org',
      projects: 8
    },
    {
      id: 2,
      name: 'International Maritime Organization',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=IMO',
      category: 'International',
      type: 'Technical Partner',
      since: '2016',
      description: 'Maritime safety and security technical cooperation',
      website: 'https://imo.org',
      projects: 12
    },
    {
      id: 3,
      name: 'ECOWAS',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=ECOWAS',
      category: 'Regional',
      type: 'Strategic Partner',
      since: '2014',
      description: 'Regional maritime policy development and implementation',
      website: 'https://ecowas.int',
      projects: 15
    },
    {
      id: 4,
      name: 'African Union',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=AU',
      category: 'Regional',
      type: 'Strategic Partner',
      since: '2017',
      description: 'Continental maritime strategy and blue economy initiatives',
      website: 'https://au.int',
      projects: 6
    },
    {
      id: 5,
      name: 'European Union',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=EU',
      category: 'International',
      type: 'Funding Partner',
      since: '2018',
      description: 'Maritime security capacity building programs',
      website: 'https://europa.eu',
      projects: 10
    },
    {
      id: 6,
      name: 'Ghana Navy',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=GHANA+NAVY',
      category: 'Government',
      type: 'Implementation Partner',
      since: '2013',
      description: 'Maritime security operations and training',
      website: '#',
      projects: 20
    },
    {
      id: 7,
      name: 'Nigerian Maritime Administration',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=NIMASA',
      category: 'Government',
      type: 'Regulatory Partner',
      since: '2016',
      description: 'Maritime safety standards and compliance',
      website: '#',
      projects: 9
    },
    {
      id: 8,
      name: 'World Bank',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=WORLD+BANK',
      category: 'International',
      type: 'Funding Partner',
      since: '2019',
      description: 'Blue economy development financing',
      website: 'https://worldbank.org',
      projects: 5
    },
    {
      id: 9,
      name: 'WISTA Ghana',
      logo: 'https://via.placeholder.com/200x100/003366/FFFFFF?text=WISTA',
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
    <div className="w-full" style={{ fontFamily: "'Inter', 'Circular', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image - Minimal overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&fit=crop" 
            alt="Partners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/20 via-[#1A336C]/15 to-[#132552]/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontWeight: 700 }}>
              Our Partners
            </h1>
            <p className="text-xl text-white/95 leading-relaxed" style={{ fontWeight: 400 }}>
              Working together with leading organizations to advance maritime excellence across West Africa
            </p>
          </div>
        </div>
      </section>

      {/* About Partnerships Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-[#8E3400] rounded-full"></div>
                <span className="text-[#8E3400] tracking-wider text-sm uppercase" style={{ fontWeight: 600 }}>Our Network</span>
              </div>
              <h2 className="text-4xl text-[#132552] mb-6" style={{ fontWeight: 700 }}>
                Strategic Partnerships for Maritime Excellence
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-[#132552]/80 text-lg leading-relaxed mb-6" style={{ fontWeight: 400 }}>
                GoGMI's partnerships represent a diverse network of international organizations, regional bodies, government agencies, academic institutions, and private sector entities committed to advancing maritime security and sustainable blue economy development in the Gulf of Guinea.
              </p>

              <p className="text-[#132552]/80 text-lg leading-relaxed mb-6" style={{ fontWeight: 400 }}>
                Through strategic collaborations, we leverage collective expertise, resources, and networks to address complex maritime challenges, build regional capacity, and promote evidence-based policymaking. Our partnerships enable joint research initiatives, knowledge sharing platforms, training programs, and policy advocacy that benefit maritime stakeholders across West and Central Africa.
              </p>

              <p className="text-[#132552]/80 text-lg leading-relaxed" style={{ fontWeight: 400 }}>
                Each partnership is built on shared values of transparency, mutual respect, and commitment to advancing the blue economy. Together with our partners, we work to strengthen maritime governance, enhance regional cooperation, and create sustainable opportunities for communities dependent on ocean resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Statistics */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+', label: 'Global Partners' },
              { number: '15+', label: 'Countries' },
              { number: '100+', label: 'Joint Projects' },
              { number: '10 Years', label: 'Collaboration' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-[#8E3400]/20">
                <div className="text-4xl text-[#132552] mb-2" style={{ fontWeight: 700 }}>
                  {stat.number}
                </div>
                <p className="text-[#132552]/70" style={{ fontWeight: 600 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-[#8E3400]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#8E3400] rounded-full"></div>
              <span className="text-[#8E3400] tracking-wider text-sm uppercase" style={{ fontWeight: 600 }}>Filter by Category</span>
              <div className="w-12 h-1 bg-[#8E3400] rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-[#8E3400] text-white shadow-lg'
                    : 'bg-[#F5F7FA] text-[#132552] border-2 border-[#8E3400]/20 hover:border-[#8E3400]/50'
                }`}
                style={{ fontWeight: 600 }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border-2 border-[#8E3400]/20 hover:border-[#8E3400]/50 hover:shadow-lg transition-all"
              >
                {/* Logo */}
                <div className="bg-[#F5F7FA] p-8 flex items-center justify-center h-40 relative">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#8E3400] text-white px-3 py-1 rounded-full text-xs" style={{ fontWeight: 700 }}>
                      {partner.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl text-[#132552]" style={{ fontWeight: 700 }}>
                      {partner.name}
                    </h3>
                    {partner.website !== '#' && (
                      <a 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8E3400] hover:text-[#132552] transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#132552]/60" style={{ fontWeight: 400 }}>Type:</span>
                      <span className="text-[#132552]" style={{ fontWeight: 600 }}>
                        {partner.type}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#132552]/60" style={{ fontWeight: 400 }}>Since:</span>
                      <span className="text-[#132552]" style={{ fontWeight: 600 }}>
                        {partner.since}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#132552]/60" style={{ fontWeight: 400 }}>Projects:</span>
                      <span className="text-[#8E3400]" style={{ fontWeight: 600 }}>
                        {partner.projects}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#132552]/70 text-sm mb-4 leading-relaxed" style={{ fontWeight: 400 }}>
                    {partner.description}
                  </p>

                  <button className="w-full bg-[#8E3400] text-white py-3 rounded-lg hover:bg-[#132552] transition-all" style={{ fontWeight: 600 }}>
                    View Partnership
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-br from-[#132552] to-[#1A336C] text-[#F5F7FA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#8E3400] rounded-full"></div>
              <span className="text-[#8E3400] tracking-wider text-sm uppercase" style={{ fontWeight: 600 }}>Join Our Network</span>
              <div className="w-12 h-1 bg-[#8E3400] rounded-full"></div>
            </div>
          </div>

          <h2 className="text-4xl mb-6" style={{ fontWeight: 700 }}>
            Become a Partner
          </h2>
          <p className="text-xl text-[#F5F7FA]/90 mb-10 leading-relaxed" style={{ fontWeight: 400 }}>
            Join our network of leading organizations driving maritime excellence in West Africa. Together, we can create sustainable solutions for the Gulf of Guinea's blue economy.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 inline-block mb-8">
            <p className="mb-2" style={{ fontWeight: 600 }}>Contact Partnerships Team</p>
            <a href="mailto:partnerships@gogmi.org.gh" className="text-[#8E3400] hover:underline text-lg" style={{ fontWeight: 600 }}>
              partnerships@gogmi.org.gh
            </a>
          </div>

          <div>
            <button className="bg-[#8E3400] text-white px-10 py-4 rounded-lg text-lg hover:bg-white hover:text-[#132552] transition-all shadow-lg" style={{ fontWeight: 700 }}>
              Partnership Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;