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
  Search,
  Filter
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
    <div className="w-full overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-yellow-500/30 mb-6">
              <ImageIcon className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-200 font-semibold text-sm">Visual Stories</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              Media Gallery
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
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

      {/* STATS SECTION */}
      <section className="relative -mt-16 z-20 px-6 pb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <ImageIcon className="w-6 h-6" />, number: '500+', label: 'Photos' },
              { icon: <Video className="w-6 h-6" />, number: '50+', label: 'Videos' },
              { icon: <FileText className="w-6 h-6" />, number: '100+', label: 'Infographics' },
              { icon: <Newspaper className="w-6 h-6" />, number: '200+', label: 'Press Features' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="text-yellow-500 flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-900 mb-1">{stat.number}</div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH AND FILTER */}
      <section className="py-12 bg-white border-b sticky top-0 z-30">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search media..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          {filteredMedia.length === 0 ? (
            <div className="text-center py-20">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-2xl text-gray-500">No media found matching your criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedia.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                    <img
                      src={item.type === 'videos' ? item.thumbnail : item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Type Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase flex items-center gap-1">
                        {item.type === 'photos' && <ImageIcon className="w-3 h-3" />}
                        {item.type === 'videos' && <Video className="w-3 h-3" />}
                        {item.type === 'infographics' && <FileText className="w-3 h-3" />}
                        {item.type === 'press' && <Newspaper className="w-3 h-3" />}
                        {item.type}
                      </span>
                    </div>

                    {/* Video Play Button */}
                    {item.type === 'videos' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}

                    {/* Duration for Videos */}
                    {item.duration && (
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-bold">
                        {item.duration}
                      </div>
                    )}

                    {/* Views */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white text-sm">
                      <Eye className="w-4 h-4" />
                      <span>{item.views?.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                      {item.location && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
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

                    <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {item.description}
                    </p>

                    {item.downloads && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 pt-3 border-t border-gray-100">
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
            className="absolute top-6 right-6 text-white hover:text-yellow-300 transition-colors z-10"
          >
            <X className="w-10 h-10" />
          </button>

          <div className="max-w-6xl w-full bg-white rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Media Display */}
              <div className="bg-gray-900 flex items-center justify-center p-8">
                {selectedMedia.type === 'videos' ? (
                  <div className="w-full aspect-video">
                    <iframe
                      src={selectedMedia.videoUrl}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={selectedMedia.image || selectedMedia.thumbnail}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg"
                  />
                )}
              </div>

              {/* Details */}
              <div className="p-8 overflow-y-auto max-h-[80vh]">
                <div className="mb-4">
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {selectedMedia.type}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  {selectedMedia.title}
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedMedia.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5 text-blue-900" />
                    <span>{selectedMedia.date}</span>
                  </div>

                  {selectedMedia.location && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-blue-900" />
                      <span>{selectedMedia.location}</span>
                    </div>
                  )}

                  {selectedMedia.source && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Newspaper className="w-5 h-5 text-blue-900" />
                      <span>{selectedMedia.source}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-5 h-5 text-blue-900" />
                    <span>{selectedMedia.views?.toLocaleString()} views</span>
                  </div>

                  {selectedMedia.duration && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Video className="w-5 h-5 text-blue-900" />
                      <span>Duration: {selectedMedia.duration}</span>
                    </div>
                  )}
                </div>

                {selectedMedia.type !== 'videos' && (
                  <button className="w-full bg-yellow-500 text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-600 transition-all shadow-lg flex items-center justify-center gap-2">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Want to Feature Your Story?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Share your maritime success stories, research, or event coverage with us
          </p>
          <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:scale-105">
            Submit Your Content
          </button>
        </div>
      </section>

    </div>
  );
};

export default MediaGallery;