import React, { useState, useEffect } from 'react';
import { FileText, Download, Search, Calendar, Eye, BookOpen, Video, X, ExternalLink, Lock } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedType, setSelectedType] = useState('Strategic Documents');
  const [selectedSubcategory, setSelectedSubcategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [previewResource, setPreviewResource] = useState(null);
  const [showMembershipModal, setShowMembershipModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  useEffect(() => {
    if (location.hash === '#internal-reports') {
      setSelectedType('Internal Reports');
      setTimeout(() => {
        const element = document.getElementById('internal-reports');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('gogmi_token');
    const membership = localStorage.getItem('gogmi_membership');
    
    setIsAuthenticated(!!token);
    setIsMember(!!membership);
    setLoading(false);
  };

  // Check if resource requires membership
  const requiresMembership = (resource) => {
    return resource.type === 'Internal Reports';
  };

  const resources = [
    // ===== STRATEGIC DOCUMENTS =====
    {
      id: 5,
      title: "Africa's Integrated Maritime Strategy (2050 AIM Strategy)",
      description: "African Union's comprehensive framework for transforming maritime sectors into drivers of sustainable growth and regional integration.",
      fullDescription: "Africa's Integrated Maritime Strategy (2050 AIM Strategy) is the African Union's comprehensive long-term framework for transforming the continent's maritime sector into a driver of sustainable economic growth and regional integration. Developed through extensive consultation with African experts, member states, and international partners, this strategy provides a coordinated roadmap for protecting and harnessing Africa's vast maritime resources while addressing security threats, enhancing regional cooperation, and building the capacity needed to unlock the blue economy's full potential across the continent.",
      type: 'Strategic Documents',
      category: 'Policy',
      size: '850 KB',
      pages: 49,
      date: 'August 2024',
      downloads: 780,
      thumbnail: '/unionafricaine.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/Africa-Integrated-Maritime-Strategy.pdf',
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
      title: 'ECOWAS Integrated Maritime Strategy (EIMS)',
      description: "The ECOWAS Integrated Maritime Strategy (2014) is a comprehensive regional framework addressing maritime security, governance, environmental protection, and economic development across West Africa's 2,868 nautical mile coastline.",
      fullDescription: "The ECOWAS Integrated Maritime Strategy (EIMS), adopted in August 2014, is a comprehensive policy framework designed to address maritime challenges and unlock economic opportunities across West Africa's maritime domain. The strategy covers 11 coastal ECOWAS member states with a combined 2,868 nautical mile coastline on the Atlantic Ocean, plus three landlocked countries connected through inland waterways. It establishes a vision for a prosperous, safe and peaceful maritime domain for all its peoples that will allow environmentally sustainable development and wealth creation based on efficient management and good governance.",
      type: 'Strategic Documents',
      category: 'Policy',
      size: '5.6 MB',
      pages: 95,
      date: 'January 2024',
      downloads: 1580,
      thumbnail: '/ecowas-Integated-cover.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/ECOWAS-Integrated-Maritime-Strategy.pdf',
      keyTopics: [
        'Maritime Governance and Regulatory Framework',
        'Maritime Security and Safety',
        'Environmental Protection and Sustainability',
        'Maritime Economic Development',
        'Capacity Building and Maritime Awareness'
      ]
    },
    {
      id: 9,
      title: 'THE YAOUNDÉ FRAMEWORK',
      description: "The Yaoundé Framework (2013) is a multinational maritime security cooperation architecture for West and Central Africa that addresses 12 types of transnational organized maritime crimes including piracy, IUU fishing, oil theft, and trafficking.",
      fullDescription: "The Yaoundé Framework, established through the 2013 Yaoundé Code of Conduct and subsequent agreements, is a comprehensive multinational maritime security cooperation architecture for West and Central Africa. It creates an operational structure with the Interregional Coordination Centre (ICC) in Yaoundé, Cameroon, overseeing regional coordination centers and five maritime zones (A, D, E, F, G) that address 12 types of transnational organized maritime crimes across 25 participating nations from Angola to Cape Verde.",
      type: 'Strategic Documents',
      category: 'Security',
      size: '5.6 MB',
      pages: 4,
      date: 'January 2024',
      downloads: 1580,
      thumbnail: '/yaounde.jpg',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/Yaounde-Framework.pdf',
      keyTopics: [
        'Operational Structure and Zonal Coordination',
        'Comprehensive Crime Focus Beyond Piracy',
        'Legal and Regulatory Harmonization',
        'National-Level Implementation Requirements',
        'International Partnership and Capacity Building'
      ]
    },
    {
      id: 10,
      title: 'YAOUNDÉ CODE OF CONDUCT',
      description: "The Yaoundé Code of Conduct (2013) is a multilateral agreement signed by 25 West and Central African nations establishing a comprehensive framework to combat piracy, armed robbery at sea, and 10 other types of transnational maritime crimes.",
      fullDescription: "The Yaoundé Code of Conduct, signed in 2013, is a multilateral agreement among 25 West and Central African nations establishing a comprehensive framework to combat piracy, armed robbery at sea, IUU fishing, oil theft, human trafficking, maritime terrorism, and other transnational maritime crimes. It creates coordination mechanisms through national focal points, regional information-sharing centers, and commits signatories to cooperative enforcement measures including embarked officers programs and joint operations.",
      type: 'Strategic Documents',
      category: 'Security',
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
        'Embarked Officers and Cross-Border Operations',
        'Legal Framework for Interdiction and Prosecution'
      ]
    },

    // ===== ACADEMIC PAPERS =====
    {
      id: 2,
      title: "Africa's Blue Economy: A Policy Handbook",
      description: "Africa's Blue world is made of vast lakes and rivers and an extensive ocean resource base. Thirty-eight of the fifty-four African States are coastal States.",
      fullDescription: 'This comprehensive policy handbook serves as a strategic guide for African nations to harness the economic potential of their ocean and coastal resources. It provides actionable frameworks for policymakers, government officials, and stakeholders to develop sustainable blue economy initiatives that balance economic growth with environmental conservation and social inclusion across the continent.',
      type: 'Academic Papers',
      category: 'Research',
      size: '1.8 MB',
      pages: 109,
      date: 'October 2024',
      downloads: 890,
      thumbnail: '/blueEconomyimage.png',
      fileType: 'PDF',
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
      id: 7,
      title: 'Deep Seabed Mining: A Note on Some Potentials and Risks',
      description: "Examining the environmental and economic implications of deep-sea mining in the context of sustainable ocean management.",
      fullDescription: "Deep-sea mining is increasingly promoted as a solution to rising demand for minerals used in clean energy technologies. However, the document highlights that mining the ocean floor poses serious and potentially irreversible threats to fragile marine ecosystems. It emphasizes that disturbances from extraction could last for centuries and impact species we have barely begun to understand. The note urges prioritizing ocean protection amid the climate emergency and stresses the growing global movement to place environmental safeguarding above mining interests.",
      type: 'Academic Papers',
      category: 'Research',
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

    // ===== INTERNAL REPORTS =====
    {
      id: 11,
      title: 'AN EVALUATION OF THE YAOUNDÉ ARCHITECTURE',
      description: "Comprehensive assessment of the Yaoundé Code of Conduct implementation and effectiveness in addressing maritime security challenges.",
      fullDescription: "This evaluation provides a comprehensive assessment of the Yaoundé Architecture's implementation and effectiveness in addressing maritime security challenges across West and Central Africa. It examines the operational structure, coordination mechanisms, and impact of the framework in combating transnational maritime crimes while identifying gaps and recommendations for improvement.",
      type: 'Internal Reports',
      subcategory: 'Policy Briefs',
      category: 'Assessment',
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
        'Embarked Officers and Cross-Border Operations',
        'Legal Framework for Interdiction and Prosecution'
      ]
    },
    {
      id: 12,
      title: 'BRIEFING ON THE STATUS OF IMPLEMENTATION OF THE YAOUNDÉ CODE OF CONDUCT ARCHITECTURE',
      description: "A briefing summarizing expert discussions on the implementation progress, challenges, and recommendations for strengthening the Yaoundé Code of Conduct Architecture.",
      fullDescription: "This briefing outlines the outcomes of expert-level Virtual Discussion Group meetings held between January and April 2021 on the status of implementing the Yaoundé Code of Conduct in the Gulf of Guinea. Organized by GoGMI and supported by the IMO, the meetings brought together regional, international, academic, and industry stakeholders to assess progress, address implementation gaps, and recommend strategies to enhance maritime safety and security.",
      type: 'Internal Reports',
      subcategory: 'Policy Briefs',
      category: 'Assessment',
      size: '5.6 MB',
      pages: 4,
      date: 'MARCH 2021',
      downloads: 1580,
      thumbnail: '/briefing.yaounde.code.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/Briefing-Yaounde-Implementation.pdf',
      keyTopics: [
        'Strengthening the YCoC Implementation Architecture',
        'Enhanced Cooperation Between States and International Partners',
        'Inclusion of Key Regional Institutions',
        'The Role of Academia and Research Institutions',
        'Defining the Maritime Industry\'s Role'
      ]
    },
    {
      id: 13,
      title: 'DEVELOPING BLUE CAREERS TO FOSTER STRATEGIC DEVELOPMENT OF GULF OF GUINEA MARITIME ECONOMIES',
      description: "A report on developing blue careers to drive sustainable economic growth in the Gulf of Guinea by strengthening human capital and maritime skills.",
      fullDescription: "This document presents insights from the GoGMI–International Maritime Security Working Group online event held on 25th February 2021, focused on developing blue careers to support the strategic growth of Gulf of Guinea maritime economies. The discussions highlighted Africa's vast blue economy potential, the urgent need for skilled human capital, and the role of innovation, education, and partnerships in unlocking economic opportunities.",
      type: 'Internal Reports',
      subcategory: 'IMSWG Reports',
      category: 'Development',
      size: '5.6 MB',
      pages: 8,
      date: 'FEBRUARY 2021',
      downloads: 1580,
      thumbnail: '/blue-careers-dev.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/Developing-Blue-Careers.pdf',
      keyTopics: [
        'Africa\'s Blue Economy Potential',
        'Importance of Human Capital and Skills Development',
        'Regional and International Partnerships',
        'National Efforts: Case Studies from Nigeria and Ghana',
        'Recommendations for Strengthening Blue Careers in Africa'
      ]
    },
    {
      id: 14,
      title: 'G7++FoGG Plenary, Abidjan',
      description: "Detailed event report on the 2022 G7++ Friends of the Gulf of Guinea Plenary highlighting key discussions on maritime security and regional cooperation.",
      fullDescription: "This report captures the major presentations, discussions, and conclusions from the G7++FoGG Plenary held in Abidjan from 1–2 December 2022. As a multilateral platform supporting the Yaoundé Code of Conduct, the plenary brought together over 150 delegates, including government officials, naval leaders, civil society groups, private sector actors, and international partners.",
      type: 'Internal Reports',
      subcategory: 'Quarterly Highlights',
      category: 'Events',
      size: '5.6 MB',
      pages: 8,
      date: 'DECEMBER 2022',
      downloads: 1580,
      thumbnail: '/G7.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/G7-FOGG-Event-Report.pdf',
      keyTopics: [
        'Strengthening the Yaoundé Architecture at Its 10-Year Milestone',
        'Expanding the Role of Civil Society in Maritime Governance',
        'Women in Maritime Security and Crime Prevention',
        'Regional & International Collaboration',
        'Addressing Piracy, Oil Theft & Transnational Crime'
      ]
    },
    {
      id: 15,
      title: 'SEMINAR REPORT: INTERVENTION IN THE GULF OF GUINEA',
      description: "Comprehensive seminar report examining maritime security interventions and governance in the Gulf of Guinea region.",
      fullDescription: "On October 21, 2022, GoGMI and the Atlantic Centre co-hosted a virtual seminar bringing together over 40 global participants to examine interventionism and maritime security governance in the Gulf of Guinea. The seminar featured expert panelists exploring the effectiveness of major maritime security initiatives including the Yaoundé Architecture, YARIS information system, GoG-MCF SHADE, and multilateral exercises.",
      type: 'Internal Reports',
      subcategory: 'Maritime Governance',
      category: 'Analysis',
      size: '5.6 MB',
      pages: 8,
      date: 'OCTOBER 2022',
      downloads: 1580,
      thumbnail: '/atlanticcentre.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/Interventionism-in-the-Gulf-of-Guinea.pdf',
      keyTopics: [
        'Evolution of Maritime Security Threats in the Gulf of Guinea',
        'Major Maritime Security Interventions and Frameworks',
        'The Critical Role of YARIS in Information Sharing',
        'Challenges in Regional Coordination and Capacity Building',
        'Navigating Complex Actor Relations and Competing Interests'
      ]
    },
    {
      id: 16,
      title: 'STRENGTHENING COUNTER-PIRACY RESPONSES: THE GULF OF GUINEA MARITIME COLLABORATION FORUM-SHADE',
      description: "In-depth analysis of the GoG-MCF/SHADE initiative, a regionally-owned platform to harmonize counter-piracy efforts across the Gulf of Guinea.",
      fullDescription: "The GoG-MCF/SHADE initiative represents a groundbreaking approach to maritime security in the Gulf of Guinea, born from a Memorandum of Understanding between the Government of Nigeria and the Inter-regional Coordination Centre representing 21 countries. Operating through structured plenary sessions and three specialized Working Groups, SHADE creates a vital platform for navies, industry partners, and maritime stakeholders to coordinate counter-piracy responses.",
      type: 'Internal Reports',
      subcategory: 'Maritime Governance',
      category: 'Security',
      size: '5.6 MB',
      pages: 8,
      date: 'DECEMBER 2022',
      downloads: 1580,
      thumbnail: '/strenght.shade.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/Strengthening-Counter-Piracy-SHADE.pdf',
      keyTopics: [
        'The Gulf of Guinea Piracy Crisis and Response',
        'SHADE\'s Operational Structure and Working Groups',
        'Evolution Through Five Plenary Sessions',
        'Practical Achievements and Innovations',
        'Strategic Recommendations for Sustainability'
      ]
    },
    {
      id: 17,
      title: 'Understanding and Addressing the Drivers Behind the Nexus of Blue Crime',
      description: "Analysis of the interconnected nature of maritime crimes including drug trafficking, piracy, and terrorism across the Atlantic.",
      fullDescription: "This policy brief examines the complex drivers behind the nexus of blue crime, drugs, piracy, and terror prevalent across the Atlantic. It analyzes the root causes, interconnections, and strategic approaches needed to address these transnational maritime security threats comprehensively.",
      type: 'Internal Reports',
      subcategory: 'Policy Briefs',
      category: 'Security',
      size: '5.6 MB',
      pages: 12,
      date: 'DECEMBER 2022',
      downloads: 1580,
      thumbnail: '/blue-crime-nexus.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/ABI-HSWG-policy-brief-Yakubu-final.pdf',
      keyTopics: [
        'Root Causes of Maritime Crime',
        'Interconnections Between Drug Trafficking and Piracy',
        'Terror Networks and Maritime Operations',
        'Regional Security Cooperation',
        'Policy Recommendations for Intervention'
      ]
    },
    {
      id: 22,
      title: 'IMSWG 2020-2024 Consolidated Report',
      description: "Five-year consolidated report from all IMSWG forums 2020-2024.",
      fullDescription: "Comprehensive report consolidating insights from all IMSWG forums between 2020 and 2024.",
      type: 'Internal Reports',
      subcategory: 'IMSWG Reports',
      category: 'IMSWG',
      size: '8.5 MB',
      pages: 120,
      date: 'December 2024',
      downloads: 567,
      thumbnail: '/conf3.jpg',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/IMSWG-2020-2024-Report.pdf',
      keyTopics: ['Five-Year Trends', 'Policy Evolution', 'Regional Impact']
    },

    // ===== VIDEOS =====
    {
      id: 18,
      title: 'Introduction to Gulf of Guinea Maritime Security',
      description: 'Comprehensive overview of maritime security challenges and solutions in the Gulf of Guinea region.',
      fullDescription: 'This video provides a comprehensive introduction to maritime security in the Gulf of Guinea, covering key challenges, regional initiatives, and collaborative efforts to ensure safe and secure maritime operations.',
      type: 'Videos',
      category: 'Educational',
      duration: '15:30',
      date: 'November 2024',
      views: 2340,
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop',
      fileType: 'VIDEO',
      videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1',
      keyTopics: [
        'Overview of Gulf of Guinea Maritime Domain',
        'Key Security Challenges',
        'Regional Cooperation Frameworks',
        'Success Stories and Best Practices',
        'Future Outlook and Opportunities'
      ]
    },
    {
      id: 19,
      title: 'Blue Economy Opportunities in West Africa',
      description: 'Exploring sustainable blue economy development and career opportunities in the West African maritime sector.',
      fullDescription: 'Discover the vast potential of the blue economy in West Africa. This video explores sustainable development opportunities, emerging careers, and how youth can participate in building a prosperous maritime future.',
      type: 'Videos',
      category: 'Blue Economy',
      duration: '22:45',
      date: 'October 2024',
      views: 3120,
      thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&fit=crop',
      fileType: 'VIDEO',
      videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2',
      keyTopics: [
        'Blue Economy Fundamentals',
        'Career Pathways in Maritime Sectors',
        'Sustainable Fisheries and Aquaculture',
        'Marine Tourism Development',
        'Youth Engagement and Opportunities'
      ]
    },
    {
      id: 20,
      title: 'Yaoundé Code of Conduct Explained',
      description: 'Detailed explanation of the Yaoundé Code of Conduct and its implementation across West and Central Africa.',
      fullDescription: 'An in-depth look at the Yaoundé Code of Conduct, the cornerstone of maritime security cooperation in West and Central Africa. Learn about its structure, implementation, and impact on regional security.',
      type: 'Videos',
      category: 'Security',
      duration: '18:20',
      date: 'September 2024',
      views: 1890,
      thumbnail: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&fit=crop',
      fileType: 'VIDEO',
      videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3',
      keyTopics: [
        'History and Development of Yaoundé Code',
        'Operational Structure and Coordination',
        'Regional Implementation Success Stories',
        'Challenges and Lessons Learned',
        'Future Directions and Enhancements'
      ]
    }
  ];

  const types = ['Strategic Documents', 'Academic Papers', 'Internal Reports', 'Videos'];
  const internalReportSubcategories = ['All', 'Policy Briefs', 'IMSWG Reports', 'Quarterly Highlights', 'Maritime Governance'];

  const filteredResources = resources.filter(resource => {
    const matchesType = resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For Internal Reports, also filter by subcategory
    const matchesSubcategory = selectedType !== 'Internal Reports' || 
                                selectedSubcategory === 'All' || 
                                resource.subcategory === selectedSubcategory;
    
    return matchesType && matchesSearch && matchesSubcategory;
  });

  const handleDownload = async (resource) => {
    // Check if resource requires membership
    if (!requiresMembership(resource)) {
      // Free download for Strategic Documents and Academic Papers
      const link = document.createElement('a');
      link.href = resource.downloadUrl;
      link.download = resource.downloadUrl.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        alert(`Download complete!\n\nFile: ${resource.title}`);
      }, 500);
      return;
    }

    // For Internal Reports, check membership
    if (!isAuthenticated) {
      navigate('/membership');
      return;
    }

    if (!isMember) {
      setShowMembershipModal(true);
      return;
    }

    // Member download
    try {
      const link = document.createElement('a');
      link.href = resource.downloadUrl;
      link.download = resource.downloadUrl.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        alert(`Download complete!\n\nFile: ${resource.title}`);
      }, 500);
    } catch (error) {
      console.error('Download error:', error);
      alert(`Download failed: ${error.message}`);
    }
  };

  const handlePreview = (resource) => {
    window.open(resource.downloadUrl, '_blank');
  };

  const MembershipModal = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
          <div className="p-8 text-center">
            <div className="bg-[#8E3400]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-[#8E3400]" />
            </div>
            
            <h2 className="text-3xl font-bold text-[#132552] mb-4" style={{ fontWeight: 900 }}>
              Members Only Content
            </h2>
            
            <p className="text-lg text-[#1F2933] mb-6" style={{ fontWeight: 400 }}>
              Internal Reports are exclusively available to our members. Preview the document to see what you'll get, then join us to unlock full access.
            </p>

            <div className="bg-[#F5F7FA] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-bold text-[#132552] mb-3" style={{ fontWeight: 700 }}>
                Membership Benefits
              </h3>
              <ul className="text-left space-y-2">
                <li className="flex items-start gap-2 text-[#1F2933]" style={{ fontWeight: 400 }}>
                  <span className="text-[#8E3400] mt-1">✓</span>
                  <span>Download all internal reports and analysis</span>
                </li>
                <li className="flex items-start gap-2 text-[#1F2933]" style={{ fontWeight: 400 }}>
                  <span className="text-[#8E3400] mt-1">✓</span>
                  <span>Access exclusive policy briefs and IMSWG reports</span>
                </li>
                <li className="flex items-start gap-2 text-[#1F2933]" style={{ fontWeight: 400 }}>
                  <span className="text-[#8E3400] mt-1">✓</span>
                  <span>Receive quarterly highlights and updates</span>
                </li>
                <li className="flex items-start gap-2 text-[#1F2933]" style={{ fontWeight: 400 }}>
                  <span className="text-[#8E3400] mt-1">✓</span>
                  <span>Join our maritime community network</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-bold transition-all hover:bg-gray-200"
                style={{ fontWeight: 700 }}
              >
                Close
              </button>
              <button
                onClick={() => navigate('/membership')}
                className="flex-1 bg-[#8E3400] text-white px-6 py-3 rounded-xl font-bold transition-all hover:bg-[#6B2700] shadow-lg hover:shadow-xl"
                style={{ fontWeight: 700 }}
              >
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PreviewModal = ({ resource, onClose }) => {
    if (!resource) return null;

    const needsMembership = requiresMembership(resource) && !isMember;

    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
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
                {resource.subcategory && (
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 600 }}>
                    {resource.subcategory}
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-black text-white mb-2" style={{ fontWeight: 900 }}>
                {resource.title}
              </h2>
            </div>
          </div>

          <div className="p-8">
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
              <div>
                <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>Downloads</p>
                <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{resource.downloads}</p>
              </div>
            </div>

            {needsMembership && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <Lock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-amber-900 mb-1" style={{ fontWeight: 600 }}>
                    Download requires membership
                  </p>
                  <p className="text-sm text-amber-800" style={{ fontWeight: 400 }}>
                    This Internal Report is exclusive to members. You can preview it, but membership is required to download.
                  </p>
                </div>
              </div>
            )}

            {!needsMembership && requiresMembership(resource) === false && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <Download className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-green-900 mb-1" style={{ fontWeight: 600 }}>
                    Free Download Available
                  </p>
                  <p className="text-sm text-green-800" style={{ fontWeight: 400 }}>
                    This resource is freely available to all visitors. Click download to get instant access.
                  </p>
                </div>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontWeight: 700 }}>Overview</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontWeight: 400 }}>
                {resource.fullDescription}
              </p>
            </div>

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

            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button 
                onClick={() => handleDownload(resource)}
                className="flex-1 bg-[#8E3400] text-white px-6 py-4 rounded-xl font-bold transition-all hover:bg-[#6B2700] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                style={{ fontWeight: 700 }}
              >
                {needsMembership ? (
                  <>
                    <Lock className="w-5 h-5" />
                    <span>Unlock Download</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <span>Download Resource</span>
                  </>
                )}
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="w-full pt-20" style={{ fontFamily: 'Inter, sans-serif' }}>
      {showMembershipModal && (
        <MembershipModal onClose={() => setShowMembershipModal(false)} />
      )}

      {previewResource && (
        <PreviewModal 
          resource={previewResource} 
          onClose={() => setPreviewResource(null)} 
        />
      )}

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
          <p className="text-xl text-[#F5F7FA]/90 max-w-3xl mx-auto mb-4" style={{ fontWeight: 400 }}>
            Access strategic documents, academic papers, and internal reports
          </p>
          <p className="text-sm text-[#F5F7FA]/70 flex items-center justify-center gap-2" style={{ fontWeight: 400 }}>
            <span>Strategic Documents & Academic Papers: Free for all</span>
            <span>•</span>
            <span>Internal Reports: Members only</span>
          </p>
        </div>
      </section>

      <section className="relative -mt-16 z-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <FileText />, number: '18+', label: 'Publications' },
              { icon: <Download />, number: '15K+', label: 'Downloads' },
              { icon: <BookOpen />, number: '1200+', label: 'Pages' }
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

      <section className="py-12 bg-[#F5F7FA] border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4">
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

              <div className="flex flex-wrap gap-2 justify-center">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setSelectedSubcategory('All');
                    }}
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

            {/* Subcategory filters for Internal Reports */}
            {selectedType === 'Internal Reports' && (
              <div className="flex flex-wrap gap-2 justify-center pt-4 border-t border-gray-200">
                {internalReportSubcategories.map((subcategory) => (
                  <button
                    key={subcategory}
                    onClick={() => setSelectedSubcategory(subcategory)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedSubcategory === subcategory
                        ? 'bg-[#132552] text-white shadow-lg'
                        : 'bg-white text-[#1F2933] hover:bg-[#132552]/10 border border-gray-200'
                    }`}
                    style={{ fontWeight: 600 }}
                  >
                    {subcategory}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="internal-reports" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {filteredResources.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-[#1F2933]" style={{ fontWeight: 400 }}>
                No resources found matching your criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => {
                const needsMembership = requiresMembership(resource);
                const canDownload = !needsMembership || isMember;

                return (
                  <div 
                    key={resource.id} 
                    className={`group bg-[#F5F7FA] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 ${resource.type === 'Videos' ? 'cursor-pointer' : ''}`}
                    onClick={() => {
                      if (resource.type === 'Videos' && resource.videoUrl) {
                        window.open(resource.videoUrl, '_blank');
                      }
                    }}
                  >
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#132552]/10 to-[#8E3400]/10">
                      <img 
                        src={resource.thumbnail} 
                        alt={resource.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      
                      {resource.type === 'Videos' && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-[#8E3400]/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                            <Video className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      )}
                      
                      {needsMembership && !isMember && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#8E3400] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1" style={{ fontWeight: 700 }}>
                            <Lock className="w-3 h-3" />
                            Members Only
                          </span>
                        </div>
                      )}

                      {!needsMembership && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 700 }}>
                            Free Access
                          </span>
                        </div>
                      )}
                      
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 700 }}>
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
                          {resource.type === 'Videos' ? (
                            <>
                              <Eye className="w-3 h-3 mr-1" />
                              {resource.views} views
                            </>
                          ) : (
                            <>
                              <Download className="w-3 h-3 mr-1" />
                              {resource.downloads}
                            </>
                          )}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#132552] mb-3 group-hover:text-[#8E3400] transition-colors line-clamp-2" style={{ fontWeight: 700 }}>
                        {resource.title}
                      </h3>
                      
                      <p className="text-[#1F2933] text-sm mb-4 line-clamp-3" style={{ fontWeight: 400 }}>
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-between text-sm text-[#1F2933]/70 mb-4 pb-4 border-b border-gray-200" style={{ fontWeight: 400 }}>
                        {resource.type === 'Videos' ? (
                          <>
                            <span className="font-medium" style={{ fontWeight: 600 }}>Duration: {resource.duration}</span>
                            <span className="flex items-center">
                              <Video className="w-3 h-3 mr-1" />
                              Watch
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="font-medium" style={{ fontWeight: 600 }}>{resource.size}</span>
                            {resource.pages && <span>{resource.pages} pages</span>}
                          </>
                        )}
                      </div>

                      {resource.type === 'Videos' ? (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(resource.videoUrl, '_blank');
                          }}
                          className="w-full bg-[#8E3400] text-white py-3 rounded-lg font-semibold hover:bg-[#6B2700] transition-all flex items-center justify-center space-x-2 shadow-lg"
                          style={{ fontWeight: 700 }}
                        >
                          <Video className="w-5 h-5" />
                          <span>Watch Video</span>
                        </button>
                      ) : (
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
                            className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg ${
                              canDownload
                                ? 'bg-[#8E3400] text-white hover:bg-[#6B2700]'
                                : 'bg-gray-400 text-white cursor-not-allowed hover:bg-gray-500'
                            }`}
                            style={{ fontWeight: 700 }}
                          >
                            {canDownload ? <Download className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                            <span>{canDownload ? 'Download' : 'Locked'}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#132552] to-[#1e3a7a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {!isMember ? (
            <>
              <div className="bg-[#8E3400]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-[#8E3400]" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontWeight: 900 }}>
                Unlock Internal Reports
              </h2>
              <p className="text-xl text-white/90 mb-10" style={{ fontWeight: 400 }}>
                Join our community and get access to exclusive internal reports, policy briefs, and IMSWG publications
              </p>
              <button 
                onClick={() => navigate('/membership')}
                className="bg-[#8E3400] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#6B2700] transition-all shadow-lg hover:shadow-xl hover:scale-105" 
                style={{ fontWeight: 700 }}
              >
                Become a Member
              </button>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-bold text-white mb-6" style={{ fontWeight: 900 }}>
                Need Custom Research?
              </h2>
              <p className="text-xl text-white/90 mb-10" style={{ fontWeight: 400 }}>
                We offer customized research and consulting services tailored to your specific maritime needs
              </p>
              <button className="bg-[#8E3400] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#6B2700] transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ fontWeight: 700 }}>
                Request Custom Research
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;