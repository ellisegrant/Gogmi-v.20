import React, { useState } from 'react';
import { 
  Image as ImageIcon, 
  Video, 
  FileText, 
  Newspaper,
  Play,
  X,
  Download,
  Calendar,
  MapPin,
  Eye,
  Search
} from 'lucide-react';

const MediaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = [
    { id: 'all', name: 'All Media', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'photos', name: 'Photos', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'videos', name: 'Videos', icon: <Video className="w-4 h-4" /> },
    { id: 'infographics', name: 'Infographics', icon: <FileText className="w-4 h-4" /> },
    { id: 'press', name: 'Press', icon: <Newspaper className="w-4 h-4" /> }
  ];

  const mediaItems = [
    // Photos
    {
      id: 1,
      type: 'photos',
      title: 'Regional Maritime Security Conference 2024',
      description: 'Over 200 maritime professionals from 15 countries gathered in Accra to discuss regional security challenges.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop',
      date: 'November 2024',
      location: 'Accra, Ghana',
      views: 1250
    },
    {
      id: 2,
      type: 'photos',
      title: 'Blue Mentorship Programme Launch',
      description: 'Launch ceremony of the Blue Mentorship Programme connecting youth with maritime industry leaders.',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&fit=crop',
      date: 'October 2024',
      location: 'Accra, Ghana',
      views: 980
    },
    {
      id: 3,
      type: 'photos',
      title: 'IMSWG Annual Meeting',
      description: 'International Maritime Security Working Group members during strategic planning session.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
      date: 'September 2024',
      location: 'Accra, Ghana',
      views: 756
    },
    {
      id: 4,
      type: 'photos',
      title: 'GoG-MCF/SHADE Forum',
      description: 'Gulf of Guinea Maritime Collaboration Forum bringing together naval forces and industry partners.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&fit=crop',
      date: 'August 2024',
      location: 'Lagos, Nigeria',
      views: 890
    },
    {
      id: 5,
      type: 'photos',
      title: 'Maritime Training Workshop',
      description: 'Capacity building workshop for West African maritime security professionals.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&fit=crop',
      date: 'July 2024',
      location: 'Dakar, Senegal',
      views: 645
    },
    {
      id: 6,
      type: 'photos',
      title: 'Port Digitalization Summit',
      description: 'Regional summit on digital transformation in port operations and logistics.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&fit=crop',
      date: 'June 2024',
      location: 'Tema, Ghana',
      views: 712
    },

    // Videos
    {
      id: 7,
      type: 'videos',
      title: 'GoGMI 2024 Year in Review',
      description: 'Highlights from our key initiatives, events, and achievements throughout the year.',
      thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '5:24',
      date: 'December 2024',
      views: 2340
    },
    {
      id: 8,
      type: 'videos',
      title: 'Blue Economy Opportunities in West Africa',
      description: 'Expert panel discussion on sustainable blue economy development in the Gulf of Guinea.',
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:45',
      date: 'November 2024',
      views: 1890
    },
    {
      id: 9,
      type: 'videos',
      title: 'Maritime Security Best Practices',
      description: 'Training video on implementing effective maritime security measures.',
      thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '8:15',
      date: 'October 2024',
      views: 1560
    },

    // Infographics
    {
      id: 10,
      type: 'infographics',
      title: 'Gulf of Guinea Maritime Statistics 2024',
      description: 'Comprehensive visual data on trade volumes, security incidents, and economic indicators.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&fit=crop',
      date: 'November 2024',
      downloads: 856,
      views: 1450
    },
    {
      id: 11,
      type: 'infographics',
      title: 'Blue Economy Value Chain',
      description: 'Visual representation of the blue economy sectors and their interconnections.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop',
      date: 'October 2024',
      downloads: 678,
      views: 1120
    },
    {
      id: 12,
      type: 'infographics',
      title: 'Maritime Security Threats Map',
      description: 'Interactive map showing security hotspots and response mechanisms in the region.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&fit=crop',
      date: 'September 2024',
      downloads: 923,
      views: 1680
    },

    // Press
    {
      id: 13,
      type: 'press',
      title: 'GoGMI Launches Revolutionary Maritime Training Program',
      description: 'New initiative aims to train 500 maritime professionals across West Africa by 2025.',
      source: 'Ghana News Agency',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&fit=crop',
      date: 'November 2024',
      link: '#',
      views: 2340
    },
    {
      id: 14,
      type: 'press',
      title: 'EU Partners with GoGMI on Blue Economy Initiative',
      description: 'European Union announces €2M funding for sustainable maritime development project.',
      source: 'Business & Financial Times',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&fit=crop',
      date: 'October 2024',
      link: '#',
      views: 1890
    },
    {
      id: 15,
      type: 'press',
      title: 'GoGMI Report Highlights Decline in Gulf Piracy',
      description: 'Annual security assessment shows 40% reduction in maritime incidents in the region.',
      source: 'Maritime Executive',
      image: 'https://images.unsplash.com/photo-1586892478025-2b5472316f22?w=800&fit=crop',
      date: 'September 2024',
      link: '#',
      views: 2100
    }
  ];

  const filteredMedia = mediaItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (item) => {
    setSelectedMedia(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      
      {/* HERO SECTION */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1600&fit=crop&q=90" 
            alt="Media Gallery Hero"
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 37, 82, 0.85) 0%, rgba(26, 51, 108, 0.75) 100%)' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-6"
                 style={{ backgroundColor: 'rgba(193, 168, 117, 0.2)', borderColor: 'rgba(193, 168, 117, 0.3)', backdropFilter: 'blur(8px)' }}>
              <ImageIcon className="w-4 h-4" style={{ color: '#C1A875' }} />
              <span className="font-semibold text-sm" style={{ color: '#C1A875' }}>Visual Stories</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6"
                style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '-0.02em' }}>
              Media Gallery
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.95)' }}>
              Explore photos, videos, infographics, and press coverage from our events, programs, and initiatives across the Gulf of Guinea
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      
      

      {/* SEARCH AND FILTER */}
      <section className="py-12 bg-white border-b sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#4B5563' }} />
              <input
                type="text"
                placeholder="Search media..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 transition-all"
                style={{ 
                  border: '2px solid #F5F7FA',
                  backgroundColor: '#F5F7FA',
                  color: '#132552'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#C1A875'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#F5F7FA'}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'shadow-lg transform scale-105'
                      : 'hover:scale-105'
                  }`}
                  style={{
                    backgroundColor: selectedCategory === category.id ? '#132552' : '#F5F7FA',
                    color: selectedCategory === category.id ? 'white' : '#132552'
                  }}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA GRID */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="container mx-auto max-w-7xl px-6">
          {filteredMedia.length === 0 ? (
            <div className="text-center py-20">
              <ImageIcon className="w-20 h-20 mx-auto mb-6" style={{ color: '#C1A875', opacity: 0.3 }} />
              <p className="text-2xl font-semibold" style={{ color: '#4B5563' }}>No media found matching your criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.type === 'videos' ? item.thumbnail : item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full text-xs font-bold uppercase flex items-center gap-2 text-white backdrop-blur-sm"
                            style={{ backgroundColor: 'rgba(19, 37, 82, 0.9)' }}>
                        {item.type === 'photos' && <ImageIcon className="w-3.5 h-3.5" />}
                        {item.type === 'videos' && <Video className="w-3.5 h-3.5" />}
                        {item.type === 'infographics' && <FileText className="w-3.5 h-3.5" />}
                        {item.type === 'press' && <Newspaper className="w-3.5 h-3.5" />}
                        {item.type}
                      </span>
                    </div>

                    {/* Video Play Button */}
                    {item.type === 'videos' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl"
                             style={{ backgroundColor: '#C1A875' }}>
                          <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}

                    {/* Duration for Videos */}
                    {item.duration && (
                      <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold">
                        {item.duration}
                      </div>
                    )}

                    {/* Views */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm font-semibold">
                      <Eye className="w-4 h-4" />
                      <span>{item.views?.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-xs font-semibold mb-4" style={{ color: '#C1A875' }}>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                      {item.location && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </>
                      )}
                      {item.source && (
                        <>
                          <span>•</span>
                          <span>{item.source}</span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-3 transition-colors line-clamp-2 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif", color: '#132552' }}>
                      {item.title}
                    </h3>

                    <p className="text-sm line-clamp-2 leading-relaxed" style={{ color: '#4B5563' }}>
                      {item.description}
                    </p>

                    {item.downloads && (
                      <div className="flex items-center gap-2 text-sm font-semibold pt-4 mt-4" 
                           style={{ color: '#4B5563', borderTop: '1px solid #F5F7FA' }}>
                        <Download className="w-4 h-4" />
                        <span>{item.downloads} downloads</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && selectedMedia && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white transition-colors hover:scale-110 duration-300 z-10"
            style={{ color: '#C1A875' }}
          >
            <X className="w-10 h-10" />
          </button>

          <div className="max-w-6xl w-full bg-white rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Media Display */}
              <div className="flex items-center justify-center p-8" style={{ backgroundColor: '#132552' }}>
                {selectedMedia.type === 'videos' ? (
                  <div className="w-full aspect-video">
                    <iframe
                      src={selectedMedia.videoUrl}
                      className="w-full h-full rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={selectedMedia.image || selectedMedia.thumbnail}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-2xl"
                  />
                )}
              </div>

              {/* Details */}
              <div className="p-10 overflow-y-auto max-h-[80vh]">
                <div className="mb-6">
                  <span className="px-4 py-2 rounded-full text-xs font-bold uppercase text-white"
                        style={{ backgroundColor: '#132552' }}>
                    {selectedMedia.type}
                  </span>
                </div>

                <h2 className="text-4xl font-black mb-6"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
                  {selectedMedia.title}
                </h2>

                <p className="text-base mb-8 leading-relaxed" style={{ color: '#4B5563' }}>
                  {selectedMedia.description}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3" style={{ color: '#4B5563' }}>
                    <Calendar className="w-5 h-5" style={{ color: '#C1A875' }} />
                    <span className="font-semibold">{selectedMedia.date}</span>
                  </div>

                  {selectedMedia.location && (
                    <div className="flex items-center gap-3" style={{ color: '#4B5563' }}>
                      <MapPin className="w-5 h-5" style={{ color: '#C1A875' }} />
                      <span className="font-semibold">{selectedMedia.location}</span>
                    </div>
                  )}

                  {selectedMedia.source && (
                    <div className="flex items-center gap-3" style={{ color: '#4B5563' }}>
                      <Newspaper className="w-5 h-5" style={{ color: '#C1A875' }} />
                      <span className="font-semibold">{selectedMedia.source}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3" style={{ color: '#4B5563' }}>
                    <Eye className="w-5 h-5" style={{ color: '#C1A875' }} />
                    <span className="font-semibold">{selectedMedia.views?.toLocaleString()} views</span>
                  </div>

                  {selectedMedia.duration && (
                    <div className="flex items-center gap-3" style={{ color: '#4B5563' }}>
                      <Video className="w-5 h-5" style={{ color: '#C1A875' }} />
                      <span className="font-semibold">Duration: {selectedMedia.duration}</span>
                    </div>
                  )}
                </div>

                {selectedMedia.type !== 'videos' && (
                  <button className="w-full px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
                          style={{ backgroundColor: '#C1A875', color: 'white' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A4E3A'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}>
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA SECTION */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: '#132552', letterSpacing: '-0.02em' }}>
            Want to Feature Your Story?
          </h2>
          <p className="text-xl mb-10 leading-relaxed" style={{ color: '#4B5563' }}>
            Share your maritime success stories, research, or event coverage with us
          </p>
          <button className="px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: '#C1A875', color: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7A4E3A'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C1A875'}>
            Submit Your Content
          </button>
        </div>
      </section>

    </div>
  );
};

export default MediaGallery;