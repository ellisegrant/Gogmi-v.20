import React from 'react';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="public\aboutus.enoch.jpg"
            alt="Maritime vessel in the Gulf of Guinea"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/90 to-[#132552]/70"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6"
              style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
            About GoGMI
          </h1>
          <div className="w-20 h-1.5 rounded-full mx-auto mb-6" style={{ backgroundColor: '#8E3400' }}></div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
             style={{ fontWeight: 400 }}>
            Championing Maritime Excellence Since 2010
          </p>
        </div>
      </section>

      {/* Our Story Section - WITH IMAGE */}
      <section className="py-32 md:py-40" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-[1400px] px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT: Content - 6 columns */}
            <div className="space-y-8 lg:col-span-6">
              <div>
                <span className="font-semibold text-sm uppercase tracking-wider inline-block mb-6" 
                      style={{ color: '#8E3400', fontWeight: 600 }}>
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8" 
                    style={{ fontWeight: 900, color: '#132552', letterSpacing: '-0.02em' }}>
                  Who We Are
                </h2>
                <div className="w-20 h-1.5 rounded-full mb-8" style={{ backgroundColor: '#8E3400' }}></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
                 
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
                  We are a non-profit think tank that brings together maritime strategic thinkers, practitioners, and experts to research and address critical maritime challenges in the Gulf of Guinea region.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#4B5563', fontWeight: 400 }}>
                  Through innovative research, strategic advocacy, and comprehensive capacity building programs, we're shaping the future of West Africa's blue economy.
                </p>
              </div>
            </div>

            {/* RIGHT: Image - 6 columns */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[550px] lg:col-span-6">
              <img 
                src="/fav11.jpg" 
                alt="Maritime operations in the Gulf of Guinea"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
          
            <h2 className="text-4xl md:text-5xl font-black mb-6"
                style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Mission, Vision & Business Model
            </h2>
            <div className="w-20 h-1.5 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-16 h-16" />,
                title: 'Our Mission',
                desc: 'To provide strategic maritime research, advocacy, and capacity building that drives sustainable blue economy development across West Africa.'
              },
              {
                icon: <Eye className="w-16 h-16" />,
                title: 'Our Vision',
                desc: 'The mission of the GoGMI is to provide an intellectual base to governments, organizations, corporate bodies and individuals whose activities impinge upon the maritime domain of the GoG Region to ensure a sustainable use of the sea. We will do that by research and advocacy in strategic maritime issues affecting the Region in order to influence policies and activities affecting the maritime environment of the Region. In conducting our business we shall uphold the values of independence, accuracy and fairness.'
              },
              {
                icon: <Heart className="w-16 h-16" />,
                title: 'Business model',
                desc: 'GoGMI is a non-profit, interdisciplinary institute dedicated to excellence in maritime research, education, media, and consultancy. It uses diverse platforms to make maritime knowledge accessible and operates a unique, community-supported model that ensures independence and sustainability. Experts within and outside the Institute create content that is shared through publications, events, and online channels to serve the needs of the Gulf of Guinea region.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group">
                <div className="mb-6 flex justify-center transition-transform duration-300 group-hover:scale-110"
                     style={{ color: '#8E3400' }}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" 
                    style={{ color: '#132552', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed" 
                   style={{ color: '#4B5563', fontWeight: 400 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="font-semibold text-sm uppercase tracking-wider inline-block mb-4" 
                  style={{ 
                    color: '#8E3400',
                    fontWeight: 600,
                    letterSpacing: '0.1em'
                  }}>
              Our Commitment
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mt-4 mb-6"
                style={{ 
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1',
                  color: '#132552'
                }}>
              Aligned with UN Sustainable<br />Development Goals
            </h2>
            <div className="w-20 h-1 mx-auto mb-8 rounded-full"
                 style={{ backgroundColor: '#8E3400' }}></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" 
               style={{ 
                 color: '#4B5563',
                 fontWeight: 400
               }}>
              Our work directly contributes to achieving global sustainability targets through maritime excellence and regional cooperation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: '14',
                title: 'Life Below Water',
                desc: 'Protecting marine ecosystems and promoting sustainable ocean resources management',
                bgColor: '#1F8DD6',
                textColor: '#ffffff'
              },
              {
                number: '8',
                title: 'Decent Work & Economic Growth',
                desc: 'Creating maritime employment opportunities and fostering sustainable economic development',
                bgColor: '#A21942',
                textColor: '#ffffff'
              },
              {
                number: '4',
                title: 'Quality Education',
                desc: 'Providing maritime training, capacity building, and professional development programs',
                bgColor: '#C5192D',
                textColor: '#ffffff'
              },
              {
                number: '13',
                title: 'Climate Action',
                desc: 'Addressing climate impacts on maritime environments and promoting environmental stewardship',
                bgColor: '#3F7E44',
                textColor: '#ffffff'
              },
              {
                number: '16',
                title: 'Peace, Justice & Strong Institutions',
                desc: 'Strengthening maritime security governance and promoting regional stability',
                bgColor: '#00689D',
                textColor: '#ffffff'
              },
              {
                number: '17',
                title: 'Partnerships for the Goals',
                desc: 'Building regional and international collaborations for maritime security and development',
                bgColor: '#19486A',
                textColor: '#ffffff'
              }
            ].map((sdg, idx) => (
              <div 
                key={idx} 
                className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                style={{ 
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb'
                }}
              >
                {/* Top colored bar */}
                <div 
                  className="h-2"
                  style={{ backgroundColor: sdg.bgColor }}
                ></div>

                <div className="p-8">
                  {/* SDG Number Badge */}
                  <div className="mb-6">
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-xl text-white font-black text-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: sdg.bgColor,
                        fontWeight: 900
                      }}
                    >
                      {sdg.number}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3"
                      style={{ 
                        fontWeight: 700,
                        lineHeight: '1.3',
                        color: '#132552'
                      }}>
                    {sdg.title}
                  </h3>
                  <p className="text-base leading-relaxed" 
                     style={{ 
                       fontWeight: 400,
                       color: '#4B5563'
                     }}>
                    {sdg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full"
                 style={{ 
                   backgroundColor: '#fef3e2',
                   border: '2px solid #8E3400'
                 }}>
              <span className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: '#8E3400' }}></span>
              <span className="font-semibold text-base" 
                    style={{ 
                      color: '#8E3400',
                      fontWeight: 600
                    }}>
                Contributing to a sustainable maritime future
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;