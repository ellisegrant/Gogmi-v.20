import React, { useState } from 'react';
import { FileText, Download, Search, Filter, Calendar, Eye, BookOpen, Video, Image as ImageIcon } from 'lucide-react';

const Resources = () => {
  const [selectedType, setSelectedType] = useState('Reports & Reviews');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Maritime Security Framework for West Africa 2024',
      description: 'Comprehensive policy framework for enhancing maritime security cooperation across the Gulf of Guinea region.',
      type: 'Reports & Reviews',
      category: 'Security',
      size: '2.5 MB',
      pages: 85,
      date: 'November 2024',
      downloads: 1250,
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 2,
      title: 'Blue Economy Investment Opportunities Guide',
      description: 'Detailed analysis of investment opportunities in sustainable fisheries, marine tourism, and renewable ocean energy.',
      type: 'Reports & Reviews',
      category: 'Blue Economy',
      size: '4.8 MB',
      pages: 120,
      date: 'October 2024',
      downloads: 890,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 3,
      title: 'Maritime Training Curriculum 2024',
      description: 'Complete training curriculum for maritime security professionals including modules, assessments, and certifications.',
      type: 'Strategy Documents',
      category: 'Training',
      size: '1.8 MB',
      pages: 45,
      date: 'September 2024',
      downloads: 650,
      thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 4,
      title: 'Regional Maritime Security Conference 2024',
      description: 'Full video recording of our flagship annual conference featuring keynotes from regional maritime leaders.',
      type: 'Video',
      category: 'Events',
      size: '580 MB',
      duration: '3h 25min',
      date: 'November 2024',
      downloads: 420,
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&fit=crop',
      fileType: 'MP4'
    },
    {
      id: 5,
      title: 'Policy Brief: Port Digitalization',
      description: 'Strategic recommendations for digital transformation of port operations in West African countries.',
      type: 'Academic Papers',
      category: 'Technology',
      size: '850 KB',
      pages: 12,
      date: 'August 2024',
      downloads: 780,
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 6,
      title: 'Infographic: Gulf of Guinea Maritime Statistics 2023',
      description: 'Visual representation of key maritime statistics, trade volumes, and security incidents in the region.',
      type: 'Infographic',
      category: 'Data',
      size: '3.2 MB',
      date: 'July 2024',
      downloads: 1100,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&fit=crop',
      fileType: 'PNG'
    },
    // {
    //   id: 7,
    //   title: 'Sustainable Fisheries Best Practices Manual',
    //   description: 'Practical guide for implementing sustainable fishing practices in coastal communities.',
    //   type: 'Maritime Governance Index',
    //   category: 'Blue Economy',
    //   size: '2.1 MB',
    //   pages: 68,
    //   date: 'June 2024',
    //   downloads: 920,
    //   thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&fit=crop',
    //   fileType: 'PDF'
    // },
    {
      id: 8,
      title: 'Annual Report 2023',
      description: 'Comprehensive annual report highlighting our achievements, financial statements, and impact metrics.',
      type: 'Reports & Reviews',
      category: 'Organizational',
      size: '5.6 MB',
      pages: 95,
      date: 'January 2024',
      downloads: 1580,
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 9,
      title: 'Ocean Governance Framework Analysis',
      description: 'Academic analysis of ocean governance frameworks and their implementation in the Gulf of Guinea region.',
      type: 'Academic Papers',
      category: 'Governance',
      size: '1.5 MB',
      pages: 32,
      date: 'May 2024',
      downloads: 540,
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&fit=crop',
      fileType: 'PDF'
    },
    {
      id: 10,
      title: 'Regional Maritime Strategy 2024-2030',
      description: 'Strategic document outlining maritime development goals and implementation roadmap for the next six years.',
      type: 'Strategy Documents',
      category: 'Policy',
      size: '3.2 MB',
      pages: 78,
      date: 'April 2024',
      downloads: 980,
      thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&fit=crop',
      fileType: 'PDF'
    }
    // {
    //   id: 11,
    //   title: 'West African Maritime Governance Index 2023',
    //   description: 'Comprehensive index measuring maritime governance effectiveness across 18 coastal nations in the region.',
    //   type: 'Maritime Governance Index',
    //   category: 'Governance',
    //   size: '4.5 MB',
    //   pages: 105,
    //   date: 'March 2024',
    //   downloads: 1320,
    //   thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&fit=crop',
    //   fileType: 'PDF'
    // }
  ];

  const types = ['Reports & Reviews', 'Strategy Documents', 'Academic Papers', 'Video', 'Infographic'];

  const filteredResources = resources.filter(resource => {
    const matchesType = resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&auto=format&fit=crop&q=80"
            alt="Maritime library and resources"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-[#132552]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#C1A875]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#C1A875]/30 mb-6">
            <BookOpen className="w-5 h-5 text-[#C1A875]" />
            <span className="text-[#F5F7FA] font-semibold text-sm" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Knowledge Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F7FA] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Resources & Publications
          </h1>
          <p className="text-xl text-[#F5F7FA]/90 max-w-3xl mx-auto" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            Access our library of research reports, policy briefs, training materials, and multimedia content
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <FileText />, number: '150+', label: 'Publications' },
              { icon: <Download />, number: '10K+', label: 'Downloads' },
              { icon: <Video />, number: '25+', label: 'Videos' },
              { icon: <ImageIcon />, number: '50+', label: 'Infographics' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#F5F7FA] rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="text-[#C1A875] flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#132552] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.number}</div>
                <p className="text-[#1F2933] text-sm font-medium" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-[#F5F7FA] border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1F2933]/60" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C1A875] focus:border-[#C1A875]"
                style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2 rounded-lg font-medium transition-all ${
                    selectedType === type
                      ? 'bg-[#132552] text-[#F5F7FA] shadow-lg'
                      : 'bg-white text-[#1F2933] hover:bg-[#C1A875]/10 border border-gray-200'
                  }`}
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {filteredResources.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-[#1F2933]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                No resources found matching your criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="group bg-[#F5F7FA] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#132552]/10 to-[#C1A875]/10">
                    <img 
                      src={resource.thumbnail} 
                      alt={resource.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#132552] text-[#F5F7FA] px-3 py-1 rounded-full text-xs font-bold" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                        {resource.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#C1A875] text-[#132552] px-3 py-1 rounded-full text-xs font-bold" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                        {resource.fileType}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-[#1F2933]/70 mb-3 space-x-4" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {resource.date}
                      </span>
                      <span className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {resource.downloads}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#132552] mb-3 group-hover:text-[#C1A875] transition-colors line-clamp-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {resource.title}
                    </h3>
                    
                    <p className="text-[#1F2933] text-sm mb-4 line-clamp-3" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-[#1F2933]/70 mb-4 pb-4 border-b border-gray-200" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      <span className="font-medium">{resource.size}</span>
                      {resource.pages && <span>{resource.pages} pages</span>}
                      {resource.duration && <span>{resource.duration}</span>}
                    </div>

                    <button className="w-full bg-[#132552] text-[#F5F7FA] py-3 rounded-lg font-semibold hover:bg-[#C1A875] hover:text-[#132552] transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#132552] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Need Custom Research?
          </h2>
          <p className="text-xl text-[#1F2933] mb-10" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            We offer customized research and consulting services tailored to your specific maritime needs
          </p>
          <button className="bg-[#C1A875] text-[#132552] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#7A4E3A] hover:text-[#F5F7FA] transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            Request Custom Research
          </button>
        </div>
      </section>
    </div>
  );
};

export default Resources;