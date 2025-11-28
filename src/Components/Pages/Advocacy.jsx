import React, { useState } from 'react';
import { FileText, Download, Search, Calendar, Eye, BookOpen, Video, Image as ImageIcon, X, ExternalLink, Clock } from 'lucide-react';

const Resources = () => {
  const [selectedType, setSelectedType] = useState('Reports & Reviews');
  const [searchTerm, setSearchTerm] = useState('');
  const [previewResource, setPreviewResource] = useState(null);

  /* 
    ========================================
    📁 FILE UPLOAD STATUS - YOUR ACTUAL FILES:
    ========================================
    
    ✅ YOU HAVE THESE FILES UPLOADED:
    1. Blue-Economy-Policy-Handbook.pdf
    2. Deep-Sea-Mining-A note-on-potentials-and-risks.pdf
    
    These two resources below will work with download!
    
    To add more resources:
    - Upload PDFs to: public/resources/pdfs/
    - Update the downloadUrl below to match file name
    ========================================
  */

  const resources = [
    {
      id: 1,
      title: "Africa's Blue Economy: A Policy Handbook",
      description: 'Comprehensive policy framework for developing sustainable blue economy initiatives across Africa.',
      fullDescription: 'This comprehensive handbook provides detailed guidelines for policymakers and stakeholders to develop sustainable blue economy strategies across the African continent.',
      type: 'Reports & Reviews',
      category: 'Policy',
      size: '2.5 MB',
      pages: 85,
      date: 'November 2024',
      downloads: 1250,
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&fit=crop',
      fileType: 'PDF',
      // ✅ THIS FILE EXISTS - Download will work!
      downloadUrl: '/resources/pdfs/Blue-Economy-Policy-Handbook.pdf',
      keyTopics: [
        'Policy framework development',
        'Sustainable resource management',
        'Economic growth strategies',
        'Regional cooperation',
        'Implementation guidelines'
      ]
    },
    {
      id: 2,
      title: 'Deep Sea Mining: A Note on Potentials and Risks',
      description: 'Analysis of deep sea mining opportunities, environmental challenges, and regulatory considerations.',
      fullDescription: 'A comprehensive analysis examining the potential economic benefits and environmental risks associated with deep sea mining operations in international waters.',
      type: 'Academic Papers',
      category: 'Research',
      size: '1.8 MB',
      pages: 45,
      date: 'October 2024',
      downloads: 890,
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&fit=crop',
      fileType: 'PDF',
      // ✅ THIS FILE EXISTS - Download will work!
      downloadUrl: '/resources/pdfs/Deep-Sea-Mining-A note-on-potentials-and-risks.pdf',
      keyTopics: [
        'Mining technology assessment',
        'Environmental impact analysis',
        'International regulations',
        'Economic feasibility',
        'Risk mitigation strategies'
      ]
    },
    {
      id: 3,
      title: 'Maritime Training Curriculum 2024',
      description: 'Complete training curriculum for maritime security professionals including modules, assessments, and certifications.',
      fullDescription: 'A comprehensive training curriculum designed for maritime security professionals at all levels.',
      type: 'Strategy Documents',
      category: 'Training',
      size: '1.8 MB',
      pages: 45,
      date: 'September 2024',
      downloads: 650,
      thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&fit=crop',
      fileType: 'PDF',
      // ❌ Upload this file to: public/resources/pdfs/training-curriculum-2024.pdf
      downloadUrl: '/resources/pdfs/training-curriculum-2024.pdf',
      keyTopics: [
        'Core competency modules',
        'Practical exercises',
        'Assessment frameworks',
        'Certification pathways',
        'Continuing education'
      ]
    },
    {
      id: 5,
      title: 'Policy Brief: Port Digitalization',
      description: 'Strategic recommendations for digital transformation of port operations in West African countries.',
      fullDescription: 'A policy brief examining digital transformation opportunities in West African ports.',
      type: 'Academic Papers',
      category: 'Technology',
      size: '850 KB',
      pages: 12,
      date: 'August 2024',
      downloads: 780,
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&fit=crop',
      fileType: 'PDF',
      // ❌ Upload this file to: public/resources/pdfs/port-digitalization-brief.pdf
      downloadUrl: '/resources/pdfs/port-digitalization-brief.pdf',
      keyTopics: [
        'Digital transformation framework',
        'Port management systems',
        'Cargo tracking technologies',
        'Cybersecurity measures',
        'Implementation strategies'
      ]
    },
    {
      id: 8,
      title: 'Annual Report 2023',
      description: 'Comprehensive annual report highlighting our achievements, financial statements, and impact metrics.',
      fullDescription: `GoGMI's complete annual report for 2023, featuring detailed program achievements, financial transparency, and impact assessment.`,
      type: 'Reports & Reviews',
      category: 'Organizational',
      size: '5.6 MB',
      pages: 95,
      date: 'January 2024',
      downloads: 1580,
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&fit=crop',
      fileType: 'PDF',
      // ❌ Upload this file to: public/resources/pdfs/annual-report-2023.pdf
      downloadUrl: '/resources/pdfs/annual-report-2023.pdf',
      keyTopics: [
        'Program achievements',
        'Financial statements',
        'Impact metrics',
        'Strategic initiatives',
        'Future outlook'
      ]
    },
    {
      id: 9,
      title: 'Ocean Governance Framework Analysis',
      description: 'Academic analysis of ocean governance frameworks and their implementation in the Gulf of Guinea region.',
      fullDescription: 'An academic paper analyzing the effectiveness of ocean governance frameworks in the Gulf of Guinea.',
      type: 'Academic Papers',
      category: 'Governance',
      size: '1.5 MB',
      pages: 32,
      date: 'May 2024',
      downloads: 540,
      thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&fit=crop',
      fileType: 'PDF',
      // ❌ Upload this file to: public/resources/pdfs/ocean-governance-analysis.pdf
      downloadUrl: '/resources/pdfs/ocean-governance-analysis.pdf',
      keyTopics: [
        'Legal framework analysis',
        'Institutional arrangements',
        'Stakeholder coordination',
        'Policy recommendations',
        'Comparative assessments'
      ]
    },
    {
      id: 10,
      title: 'Regional Maritime Strategy 2024-2030',
      description: 'Strategic document outlining maritime development goals and implementation roadmap for the next six years.',
      fullDescription: 'A forward-looking strategic document establishing vision, goals, and implementation framework for maritime development.',
      type: 'Strategy Documents',
      category: 'Policy',
      size: '3.2 MB',
      pages: 78,
      date: 'April 2024',
      downloads: 980,
      thumbnail: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&fit=crop',
      fileType: 'PDF',
      // ❌ Upload this file to: public/resources/pdfs/maritime-strategy-2024-2030.pdf
      downloadUrl: '/resources/pdfs/maritime-strategy-2024-2030.pdf',
      keyTopics: [
        'Vision and strategic goals',
        'Security enhancement',
        'Economic development',
        'Environmental protection',
        'Regional cooperation'
      ]
    }
  ];

  const types = ['Reports & Reviews', 'Strategy Documents', 'Academic Papers', 'Video', 'Infographic'];

  const filteredResources = resources.filter(resource => {
    const matchesType = resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // ===== DOWNLOAD FUNCTION - Shows "Save As" Dialog =====
  const handleDownload = async (resource) => {
    try {
      // Fetch the file
      const response = await fetch(resource.downloadUrl);
      
      if (!response.ok) {
        alert(`File not found!\n\nPlease upload the file to:\npublic/resources/pdfs/${resource.downloadUrl.split('/').pop()}`);
        return;
      }
      
      // Convert to blob
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Set suggested filename (triggers "Save As" dialog)
      const fileName = resource.downloadUrl.split('/').pop();
      link.download = fileName;
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      // Optional: Track download
      console.log(`✅ Downloaded: ${resource.title}`);
    } catch (error) {
      console.error('Download error:', error);
      alert('Download failed. Please check if the file exists in public/resources/pdfs/');
    }
  };

  // ===== PREVIEW FUNCTION - Opens file in new tab =====
  const handlePreview = (resource) => {
    // Open the file in a new browser tab for preview
    window.open(resource.downloadUrl, '_blank');
  };

  const PreviewModal = ({ resource, onClose }) => {
    if (!resource) return null;

    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
          {/* Modal Header */}
          <div className="relative">
            <img 
              src={resource.thumbnail} 
              alt={resource.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-2xl"></div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#8E3400] text-white px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 600 }}>
                  {resource.type}
                </span>
                <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 600 }}>
                  {resource.fileType}
                </span>
                <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 600 }}>
                  {resource.category}
                </span>
              </div>
              <h2 className="text-3xl font-black text-white mb-2" style={{ fontWeight: 900 }}>
                {resource.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-8">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-gray-200">
              <div>
                <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>Published</p>
                <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{resource.date}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>File Size</p>
                <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{resource.size}</p>
              </div>
              {resource.pages && (
                <div>
                  <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>Pages</p>
                  <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{resource.pages}</p>
                </div>
              )}
              {resource.duration && (
                <div>
                  <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>Duration</p>
                  <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{resource.duration}</p>
                </div>
              )}
              <div>
                <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>Downloads</p>
                <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{resource.downloads}</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontWeight: 700 }}>Overview</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontWeight: 400 }}>
                {resource.fullDescription}
              </p>
            </div>

            {/* Key Topics */}
            {resource.keyTopics && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontWeight: 700 }}>What's Included</h3>
                <ul className="space-y-2">
                  {resource.keyTopics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600" style={{ fontWeight: 400 }}>
                      <span className="text-[#8E3400] mt-1 text-lg">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button 
                onClick={() => handleDownload(resource)}
                className="flex-1 bg-[#8E3400] text-white px-6 py-4 rounded-xl font-bold transition-all hover:bg-[#6B2700] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                style={{ fontWeight: 700 }}
              >
                <Download className="w-5 h-5" />
                <span>Download Resource</span>
              </button>
              <button 
                onClick={() => handlePreview(resource)}
                className="flex-1 bg-gray-100 text-gray-900 px-6 py-4 rounded-xl font-bold transition-all hover:bg-gray-200 flex items-center justify-center gap-2"
                style={{ fontWeight: 700 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>Open Preview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full pt-20" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Preview Modal */}
      {previewResource && (
        <PreviewModal 
          resource={previewResource} 
          onClose={() => setPreviewResource(null)} 
        />
      )}

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&auto=format&fit=crop&q=80"
            alt="Maritime library and resources"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#132552]/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#8E3400]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#8E3400]/30 mb-6">
            <BookOpen className="w-5 h-5 text-[#8E3400]" />
            <span className="text-[#F5F7FA] font-semibold text-sm" style={{ fontWeight: 600 }}>Knowledge Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F7FA] mb-6" style={{ fontWeight: 900 }}>
            Resources & Publications
          </h1>
          <p className="text-xl text-[#F5F7FA]/90 max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
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
                <div className="text-[#8E3400] flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#132552] mb-1" style={{ fontWeight: 900 }}>{stat.number}</div>
                <p className="text-[#1F2933] text-sm font-medium" style={{ fontWeight: 600 }}>{stat.label}</p>
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
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8E3400] focus:border-[#8E3400]"
                style={{ fontWeight: 400 }}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-5 py-2 rounded-lg font-medium transition-all ${
                    selectedType === type
                      ? 'bg-[#8E3400] text-[#F5F7FA] shadow-lg'
                      : 'bg-white text-[#1F2933] hover:bg-[#8E3400]/10 border border-gray-200'
                  }`}
                  style={{ fontWeight: 600 }}
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
              <p className="text-2xl text-[#1F2933]" style={{ fontWeight: 400 }}>
                No resources found matching your criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="group bg-[#F5F7FA] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#132552]/10 to-[#8E3400]/10">
                    <img 
                      src={resource.thumbnail} 
                      alt={resource.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#132552] text-[#F5F7FA] px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 700 }}>
                        {resource.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#8E3400] text-white px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 700 }}>
                        {resource.fileType}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-xs text-[#1F2933]/70 mb-3 space-x-4" style={{ fontWeight: 400 }}>
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {resource.date}
                      </span>
                      <span className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {resource.downloads}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#132552] mb-3 group-hover:text-[#8E3400] transition-colors line-clamp-2" style={{ fontWeight: 700 }}>
                      {resource.title}
                    </h3>
                    
                    <p className="text-[#1F2933] text-sm mb-4 line-clamp-3" style={{ fontWeight: 400 }}>
                      {resource.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-[#1F2933]/70 mb-4 pb-4 border-b border-gray-200" style={{ fontWeight: 400 }}>
                      <span className="font-medium" style={{ fontWeight: 600 }}>{resource.size}</span>
                      {resource.pages && <span>{resource.pages} pages</span>}
                      {resource.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {resource.duration}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setPreviewResource(resource)}
                        className="flex-1 bg-white border-2 border-[#8E3400] text-[#8E3400] py-3 rounded-lg font-semibold hover:bg-[#8E3400] hover:text-white transition-all flex items-center justify-center space-x-2"
                        style={{ fontWeight: 700 }}
                      >
                        <Eye className="w-5 h-5" />
                        <span>Preview</span>
                      </button>
                      <button 
                        onClick={() => handleDownload(resource)}
                        className="flex-1 bg-[#8E3400] text-white py-3 rounded-lg font-semibold hover:bg-[#6B2700] transition-all flex items-center justify-center space-x-2 shadow-lg"
                        style={{ fontWeight: 700 }}
                      >
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                      </button>
                    </div>
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
          <h2 className="text-4xl font-bold text-[#132552] mb-6" style={{ fontWeight: 900 }}>
            Need Custom Research?
          </h2>
          <p className="text-xl text-[#1F2933] mb-10" style={{ fontWeight: 400 }}>
            We offer customized research and consulting services tailored to your specific maritime needs
          </p>
          <button className="bg-[#8E3400] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#6B2700] transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ fontWeight: 700 }}>
            Request Custom Research
          </button>
        </div>
      </section>
    </div>
  );
};

export default Resources;