import React, { useState } from 'react';
import { FileText, Download, Search, Calendar, Eye, BookOpen, Video, Image as ImageIcon, X, ExternalLink, Clock } from 'lucide-react';

const Resources = () => {
  const [selectedType, setSelectedType] = useState('Reports & Reviews');
  const [searchTerm, setSearchTerm] = useState('');
  const [previewResource, setPreviewResource] = useState(null);


  const resources = [
    {
      id: 1,
      title: "5 ESSENTIAL TRAITS THAT MAKE YOUTH CRUCIAL TO ADDRESSING OCEAN",
      description: 'Comprehensive policy framework for developing sustainable blue economy initiatives across Africa.',
      fullDescription: 'This comprehensive handbook provides detailed guidelines for policymakers and stakeholders to develop sustainable blue economy strategies across the African continent.',
      type: 'Blogs',
      category: 'Youth',
      size: '2.5 MB',
      pages: 4,
      date: 'July 2022',
      downloads: 1250,
      thumbnail: '/lawrence.blog.png',
      fileType: 'PDF',
      // ✅ Correct path (single /resources)
      downloadUrl: '/resources/pdfs/Essential-traits.pdf',
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
      title: "Africa's Blue Economy:  A policy handbook",
      description: "Africa's Blue word is made of vast lakes and rivers and an extensive ocean resource base. Thirty-eight of the fifty-four African States are coastal States. ore than 90 percent of Africa’s imports and exports are conducted by sea and some of the most straegic gateways for international trade are in Africa, underscoring the geopolitical importance of the region.",
      fullDescription: 'This comprehensive policy handbook serves as a strategic guide for African nations to harness the economic potential of their ocean and coastal resources. It provides actionable frameworks for policymakers, government officials, and stakeholders to develop sustainable blue economy initiatives that balance economic growth with environmental conservation and social inclusion across the continent.',
      type: 'Academic Papers',
      category: 'Research',
      size: '1.8 MB',
      pages: 109,
      date: 'October 2024',
      downloads: 890,
      thumbnail: '/blueEconomyimage.png',
      fileType: 'PDF',
      // ✅ Correct path (single /resources)
      downloadUrl: '/resources/pdfs/Blue-Economy-Policy-Handbook.pdf',
      keyTopics: [
       'Policy and regulatory frameworks for blue economy development',
      'Sustainable fisheries and aquaculture management',
      'Marine conservation and biodiversity protection',
      'Coastal tourism and infrastructure development',
      'Regional cooperation and capacity building strategies'
          ]
    },
    {
      id: 3,
      title: 'AN OCEAN FOR THE YOUTH',
      description: 'AN OCEAN FOR THE YOUTH, A HOLISTIC APPROACH TO ENGAGING THE YOUTH IN THE MARITIME SECTOR',
      fullDescription: 'An Ocean for the Youth” emphasizes the importance of empowering young people to actively participate in the maritime sector through education, awareness, skills development, and inclusive opportunities. It highlights the need for a holistic approach that connects ocean literacy, career pathways, environmental stewardship, innovation, and community engagement. By equipping the youth with knowledge and practical exposure, the initiative aims to build the next generation of ocean leaders who can contribute to sustainable maritime development, blue economy growth, and the long-term protection of marine resources.',
      type: 'Blogs',
      category: 'Training',
      size: '1.8 MB',
      pages: 10,
      date: 'March 2022',
      downloads: 650,
      thumbnail: '/Stephanie.blog.png',
      fileType: 'PDF',
      // ❌ Upload this file to: public/resources/pdfs/training-curriculum-2024.pdf
      downloadUrl: '/resources/pdfs/An-Occean-for-Youth.pdf',
      keyTopics: [
        'Ocean Literacy and Early Educations',
        'Skills Development and Capacity Building',
        'Career Pathways in the Blue Economy',
        'Youth Leadership and Innovation',
        'Environmental Stewardship and Community Engagement'
      ]
    },

      {
      id: 4,
      title: 'A World Oceans Day Blog Post',
      description: 'AN OCEAN FOR THE YOUTH, A HOLISTIC APPROACH TO ENGAGING THE YOUTH IN THE MARITIME SECTOR',
      fullDescription: 'An Ocean for the Youth” emphasizes the importance of empowering young people to actively participate in the maritime sector through education, awareness, skills development, and inclusive opportunities. It highlights the need for a holistic approach that connects ocean literacy, career pathways, environmental stewardship, innovation, and community engagement. By equipping the youth with knowledge and practical exposure, the initiative aims to build the next generation of ocean leaders who can contribute to sustainable maritime development, blue economy growth, and the long-term protection of marine resources.',
      type: 'Blogs',
      category: 'Celebrations',
      size: '1.8 MB',
      pages: 3,
      date: 'June 2022',
      downloads: 650,
      thumbnail: '/occeanday.blog.png',
      fileType: 'PDF',
      // ❌ Upload this file to: public/resources/pdfs/training-curriculum-2024.pdf
      downloadUrl: '/resources/pdfs/World-Ocean-Day-Collective-Action-Starts-with-You.pdf',
      keyTopics: [
        'Ocean Literacy and Early Educations',
        'Skills Development and Capacity Building',
        'Career Pathways in the Blue Economy',
        'Youth Leadership and Innovation',
        'Environmental Stewardship and Community Engagement'
      ]
    },
    {
      id: 5,
      title: "Africa's Integrated Maritime Strategy (2050 AIM Strategy)",
      description: "African Union's comprehensive framework for transforming maritime sectors into drivers of sustainable growth and regional integration.",
      fullDescription: "Africa's Integrated Maritime Strategy (2050 AIM Strategy) is the African Union's comprehensive long-term framework for transforming the continent's maritime sector into a driver of sustainable economic growth and regional integration. Developed through extensive consultation with African experts, member states, and international partners, this strategy provides a coordinated roadmap for protecting and harnessing Africa's vast maritime resources while addressing security threats, enhancing regional cooperation, and building the capacity needed to unlock the blue economy's full potential across the continent.",
      type: 'Strategic Documents',
      category: 'Technology',
      size: '850 KB',
      pages: 49,
      date: 'August 2024',
      downloads: 780,
      thumbnail: '/unionafricaine.png',
      fileType: 'PDF',
      downloadUrl: '/resources/Africa-Integrated-Maritime-Strategy.pdf',
      keyTopics: [
    'Establishment of Combined Exclusive Maritime Zone of Africa (CEMZA)',
    'Maritime security and safety enhancement through regional cooperation',
    'Sustainable fisheries management and blue economy development',
    'Maritime infrastructure development and trade competitiveness',
    'Capacity building and human resource development for maritime sectors'
  ]
    },
    {
      id: 6,
      title: 'Ecowas Integrated Maritime strategy (EIMs)',
      description: "The ECOWAS Integrated Maritime Strategy (2014) is a comprehensive regional framework addressing maritime security, governance, environmental protection, and economic development across West Africa's 2,868 nautical mile coastline. It establishes coordinated approaches to combat threats like piracy, IUU fishing, and pollution while promoting sustainable use of maritime resources for the benefit of all 15 ECOWAS member states.",
      fullDescription: "The ECOWAS Integrated Maritime Strategy (EIMS), adopted in August 2014, is a comprehensive policy framework designed to address maritime challenges and unlock economic opportunities across West Africa's maritime domain. The strategy covers 11 coastal ECOWAS member states with a combined 2,868 nautical mile coastline on the Atlantic Ocean, plus three landlocked countries connected through inland waterways. It establishes a vision for a prosperous, safe and peaceful EMD for all its peoples that will allow environmentally sustainable development and wealth creation based on efficient management and good governance",
      type: 'Strategic Documents',
      category: 'Organizational',
      size: '5.6 MB',
      pages: 95,
      date: 'January 2024',
      downloads: 1580,
      thumbnail: '/ecowas-Integated-cover.png',
      fileType: 'PDF',
      downloadUrl: '/resources/Africa-Integrated-Maritime-Strategy.pdf',
      keyTopics: [
        'Maritime Governance and Regulatory Framework',
        'Maritime Security and Safety',
        'Environmental Protection and Sustainability',
        'Maritime Economic Development',
        'Capacity Building and Maritime Awareness'
      ]
    },
    {
      id: 7,
      title: 'Deep Seabed Mining: A Note on Some Potentials and Risks to the Sustainable Mineral Extraction from the Oceans',
      description: " ",
      fullDescription: "Deep-sea mining is increasingly promoted as a solution to rising demand for minerals used in clean energy technologies. However, the document highlights that mining the ocean floor poses serious and potentially irreversible threats to fragile marine ecosystems. It emphasizes that disturbances from extraction could last for centuries and impact species we have barely begun to understand. The note urges prioritizing ocean protection amid the climate emergency and stresses the growing global movement—including commitments at the UN Ocean Conference—to place environmental safeguarding above mining interests.",
      type: 'Academic Papers',
      category: 'Policy',
      size: '1.5 MB',
      pages: 109,
      date: 'May 2024',
      downloads: 540,
      thumbnail: '/seabed.jpg',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/Deep-Sea-Mining-A-note-on-potentials-and-risks.pdf',
      keyTopics: [
        'Rising Demand for Minerals in the Clean Energy Transition',
        'Environmental Risks to Deep-Sea Ecosystems',
        'Long-Lasting Ecological Disturbance',
        'Global Calls for Ocean Protection',
        'International Pushback and Policy Action'
      ]
    },
    {
      id: 8,
      title: 'IWD2022–GENDEREQUALITY TODAY FORASUSTAINABLETOMORROW',
      description: 'Women are vital to safeguarding marine ecosystems, yet they often face structural barriers in the blue economy. Recognizing their leadership and ensuring equal opportunities is key to achieving long-term ocean sustainability and driving meaningful change.',
      fullDescription: 'This note highlights the essential role women play in ocean sustainability and how gender equality strengthens environmental protection. It stresses that empowering women—especially in coastal and marine sectors—leads to better policy decisions, stronger communities, and more sustainable blue economy practices.',
      type: 'Blogs',
      category: "International Women's day",
      size: '3.2 MB',
      pages: 1,
      date: 'April 2022',
      downloads: 980,
      thumbnail: '/int.women.jpg',
      fileType: 'PDF',
      downloadUrl: '/resources/Gender-Equality.pdf',
      keyTopics: [
        'The Interconnection Between Gender Equality and Environmental Sustainability',
        'Women’s Crucial Role in Marine and Coastal Ecosystems',
        'The Importance of Women’s Leadership in Ocean Governance',
        'Gender Inequalities Within the Blue Economy',
        'The Call to #BreakTheBias for Ocean Sustainability'
      ]
    },

    {
      id: 9,
      title: ' THE YAOUNDÉ FRAMEWORK',
      description: "The Yaoundé Framework (2013) is a multinational maritime security cooperation architecture for West and Central Africa that addresses 12 types of transnational organized maritime crimes including piracy, IUU fishing, oil theft, and trafficking. It establishes an Interregional Coordination Centre in Yaoundé, Cameroon, overseeing five maritime zones spanning 25 countries with support from international partners.",
      fullDescription: "The Yaoundé Framework, established through the 2013 Yaoundé Code of Conduct and subsequent agreements, is a comprehensive multinational maritime security cooperation architecture for West and Central Africa. It creates an operational structure with the Interregional Coordination Centre (ICC) in Yaoundé, Cameroon, overseeing regional coordination centers and five maritime zones (A, D, E, F, G) that address 12 types of transnational organized maritime crimes across 25 participating nations from Angola to Cape Verde.",
      type: 'Strategic Documents',
      category: 'Organizational',
      size: '5.6 MB',
      pages: 4,
      date: 'January 2024',
      downloads: 1580,
      thumbnail: '/yaounde.jpg',
      fileType: 'PDF',
      downloadUrl: '/resources/Africa-Integrated-Maritime-Strategy.pdf',
      keyTopics: [
        'Operational Structure and Zonal Coordination',
        'Comprehensive Crime Focus Beyond Piracy',
        'Legal and Regulatory Harmonization',
        'National-Level Implementation Requirements',
        ' International Partnership and Capacity Building'
      ]
    },


    {
      id: 10,
      title: 'YAOUNDE CODE OF CONDUCT ',
      description: "The Yaoundé Code of Conduct (2013) is a multilateral agreement signed by 25 West and Central African nations establishing a comprehensive framework to combat piracy, armed robbery at sea, and 10 other types of transnational maritime crimes including IUU fishing, oil theft, human trafficking, and maritime terrorism. It creates coordination mechanisms through national focal points, regional information-sharing centers, and commits signatories to cooperative enforcement measures including embarked officers programs and joint operations.",
      fullDescription: "The Yaoundé Framework, established through the 2013 Yaoundé Code of Conduct and subsequent agreements, is a comprehensive multinational maritime security cooperation architecture for West and Central Africa. It creates an operational structure with the Interregional Coordination Centre (ICC) in Yaoundé, Cameroon, overseeing regional coordination centers and five maritime zones (A, D, E, F, G) that address 12 types of transnational organized maritime crimes across 25 participating nations from Angola to Cape Verde.",
      type: 'Strategic Documents',
      category: 'Organizational',
      size: '5.6 MB',
      pages: 15,
      date: 'January 2024',
      downloads: 1580,
      thumbnail: '/yaoundecode.conduct.jpg',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/Yaounde-Code-of-Conduct.pdf',
      keyTopics: [
        'Comprehensive Definition of Maritime Crimes',
        'National-Level Implementation Obligations',
        'Coordination and Information Sharing Architecture',
        ' Embarked Officers and Cross-Border Operations',
        'Legal Framework for Interdiction and Prosecution'
      ]
    },

    {
      id: 11,
      title: 'AN EVALUATION OF THE YAOUNDE ARCHITECTURE',
      description: "The Yaoundé Code of Conduct (2013) is a multilateral agreement signed by 25 West and Central African nations establishing a comprehensive framework to combat piracy, armed robbery at sea, and 10 other types of transnational maritime crimes including IUU fishing, oil theft, human trafficking, and maritime terrorism. It creates coordination mechanisms through national focal points, regional information-sharing centers, and commits signatories to cooperative enforcement measures including embarked officers programs and joint operations.",
      fullDescription: "The Yaoundé Framework, established through the 2013 Yaoundé Code of Conduct and subsequent agreements, is a comprehensive multinational maritime security cooperation architecture for West and Central Africa. It creates an operational structure with the Interregional Coordination Centre (ICC) in Yaoundé, Cameroon, overseeing regional coordination centers and five maritime zones (A, D, E, F, G) that address 12 types of transnational organized maritime crimes across 25 participating nations from Angola to Cape Verde.",
      type: 'Internal Reports',
      category: 'Organizational',
      size: '5.6 MB',
      pages: 15,
      date: 'JULY 2022',
      downloads: 1580,
      thumbnail: '/yaounde.eval.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/An Evaluation of the Yaoundé Architecture.pdf',
      keyTopics: [
        'Comprehensive Definition of Maritime Crimes',
        'National-Level Implementation Obligations',
        'Coordination and Information Sharing Architecture',
        ' Embarked Officers and Cross-Border Operations',
        'Legal Framework for Interdiction and Prosecution'
      ]
    }



  ];

  const types = ['Blogs', 'Strategic Documents','Academic Papers', 'Internal Reports', 'Videos'];

  const filteredResources = resources.filter(resource => {
    const matchesType = resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  // ===== DOWNLOAD FUNCTION - Direct Download (More Reliable) =====
  const handleDownload = (resource) => {
    try {
      console.log(`🔄 Starting download: ${resource.title}`);
      console.log(`📁 File path: ${resource.downloadUrl}`);
      
      // Encode URL to handle spaces and special characters
      const encodedUrl = resource.downloadUrl.split('/').map(part => encodeURIComponent(part)).join('/');
      
      // Create direct download link (no blob conversion)
      const link = document.createElement('a');
      link.href = encodedUrl;
      
      // Extract filename from URL
      const fileName = resource.downloadUrl.split('/').pop();
      link.download = fileName;
      
      // Add attributes to force download
      link.setAttribute('type', 'application/pdf');
      link.setAttribute('target', '_blank');
      
      // Append, click, remove
      document.body.appendChild(link);
      console.log(`💾 Triggering download for: ${fileName}`);
      link.click();
      document.body.removeChild(link);
      
      console.log(`✅ Download initiated: ${fileName}`);
      
      // Show success message
      setTimeout(() => {
        alert(`✅ Download complete!\n\nFile: ${fileName}\n\nSaved to: C:\\Users\\Corporate Affairs\\Downloads\\`);
      }, 500);
      
    } catch (error) {
      console.error('❌ Download error:', error);
      alert(`Download failed!\n\nError: ${error.message}\n\nPlease check if file exists in public/resources/pdfs/`);
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
