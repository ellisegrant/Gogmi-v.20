import React, { useState } from 'react';
import { Play, Youtube, Mic, Globe, Users } from 'lucide-react';

const GulfSpectrumPodcast = () => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const themes = [
    'Geopolitics and Maritime Security',
    'Ocean Governance and Law of the Sea',
    'International Maritime Relations',
    'Global Maritime Economics',
    'Social Issues',
    'Fisheries and Aquaculture',
    'Global Commerce and Trade',
    'Blue Economy',
    'Sustainable Shipping and Technology'
  ];

  const featuredEpisodes = [
    {
      title: 'Future of Maritime Excellence I',
      guest: 'Vice Admiral Issah Adam Yakubu',
      description: 'A deep dive into the strategies, partnerships, and innovations shaping Ghana maritime sector and blue economy.',
      image: '/pod1.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=5KMyV26r8nc'
    },
    {
      title: 'Future of Maritime Excellence II',
      guest: 'Vice Admiral Issah Adam Yakubu',
      description: 'Continuing the conversation on balancing global ambitions with domestic and regional challenges.',
      image: '/pod2.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=2BEzgqw-M1U'
    },
    {
      title: 'Renewing the Gulf of Guinea Region IUU Fishing Agenda',
      guest: 'Dr. Ian Ralby',
      description: 'Reflecting on the progress made in the Gulf of Guinea fisheries landscape over the past years.',
      image: '/pod3.jpg',
      youtubeLink: 'https://www.youtube.com/watch?v=fpwxCQGAAdM'
    }
  ];

  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      <section className="relative py-32 overflow-hidden" style={{ backgroundColor: '#132552' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            
            {/* Podcast Logo with white background */}
            <div className="mb-8 flex justify-center">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <img src="/gsp.png" alt="Gulf Spectrum Podcast" className="h-24 w-auto" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
              <Mic className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Maritime Conversations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
              Gulf Spectrum Podcast
            </h1>
            
            <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Exploring the Future of Maritime Excellence in the Gulf of Guinea and Beyond
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.youtube.com/@gulfofguineamaritimeinstitute" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl" style={{ backgroundColor: '#8E3400', color: 'white' }}>
                <Youtube className="w-6 h-6" />
                <span>Watch Episodes</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm uppercase tracking-wider font-semibold mb-4 block" style={{ color: '#8E3400' }}>
                About the Podcast
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
                A Platform for Maritime Excellence
              </h2>
              <div className="w-20 h-1 rounded-full mb-8" style={{ backgroundColor: '#8E3400' }}></div>
              
              <div className="space-y-4 text-lg leading-relaxed" style={{ color: '#4B5563' }}>
                <p>
                  The Gulf Spectrum Podcast, produced by the Gulf of Guinea Maritime Institute, serves as a vital platform for exploring the future of maritime excellence in the Gulf of Guinea region and beyond.
                </p>
                <p>
                  GSP delves into cutting-edge innovations, pressing challenges, and emerging opportunities shaping the maritime industry from sustainable shipping practices and advanced technologies to the intricate dynamics of global trade.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src="/podcast.png" alt="Gulf Spectrum Podcast" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900 }}>
              What We Do
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4" style={{ borderColor: '#8E3400' }}>
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#132552' }}>
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#132552' }}>Explore</h3>
              <p className="text-base" style={{ color: '#4B5563' }}>
                Examine the latest advancements and trends in maritime technology, operations, and policy
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4" style={{ borderColor: '#8E3400' }}>
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#132552' }}>
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#132552' }}>Engage</h3>
              <p className="text-base" style={{ color: '#4B5563' }}>
                Foster dialogue and debate among experts, policymakers, and the public on key maritime challenges
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4" style={{ borderColor: '#8E3400' }}>
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#132552' }}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#132552' }}>Connect</h3>
              <p className="text-base" style={{ color: '#4B5563' }}>
                Build a network of stakeholders interested in the future of maritime excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes - Grid Layout (3 per row) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900 }}>
              Featured Episodes
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto mb-6" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredEpisodes.map((episode, idx) => (
              <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-[#8E3400] transition-all duration-500">
                {/* Episode Image */}
                <div className="relative h-64">
                  <img src={episode.image} alt={episode.guest} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <a href={episode.youtubeLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110" style={{ backgroundColor: '#8E3400' }}>
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </a>
                </div>

                {/* Episode Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black mb-2 group-hover:text-[#8E3400] transition-colors line-clamp-2" style={{ color: '#132552', fontWeight: 900 }}>
                    {episode.title}
                  </h3>

                  <p className="text-sm font-bold mb-3" style={{ color: '#8E3400' }}>
                    with {episode.guest}
                  </p>

                  <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: '#4B5563' }}>
                    {episode.description}
                  </p>

                  <a href={episode.youtubeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all hover:scale-105 text-sm" style={{ backgroundColor: '#132552', color: 'white' }}>
                    <Youtube className="w-4 h-4" />
                    <span>Watch Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900 }}>
              Key Thematic Areas
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {themes.map((theme, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border-l-4" style={{ borderColor: '#8E3400' }}>
                <p className="text-sm font-semibold" style={{ color: '#132552' }}>
                  {theme}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: '#132552' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontWeight: 900 }}>
            Subscribe and Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join the conversation on the future of maritime excellence
          </p>
        </div>
      </section>
    </div>
  );
};

export default GulfSpectrumPodcast;