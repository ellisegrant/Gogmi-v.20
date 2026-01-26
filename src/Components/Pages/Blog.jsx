import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Search, Clock, Download, FileText } from 'lucide-react';

const Blog = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('Events');
  const [searchTerm, setSearchTerm] = useState('');
  const [previewArticle, setPreviewArticle] = useState(null);

  // Handle URL parameters and scroll to IMSWG card
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    
    if (category) {
      setSelectedCategory(category);
    }

    if (location.hash === '#imswg') {
      setTimeout(() => {
        const element = document.getElementById('imswg-card');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('highlight-pulse');
          setTimeout(() => element.classList.remove('highlight-pulse'), 2000);
        }
      }, 500);
    }
  }, [location]);

  const articles = [
    // ===== EVENTS =====
    {
      id: 3,
      title: 'INTERNATIONAL MARITIME SECURITY WORKING GROUP',
      excerpt: "The International Maritime Security Working Group (IMSWG), formed by the Gulf of Guinea Maritime Institute, is the Institute's flagship forum focused on stimulating dialogue and policy innovation.",
      category: 'Events',
      date: 'December 9, 2025',
      image: '/IMSWG LOGO WHITE BG.jpg',
      isIMSWG: true,
      link: '/imswg'
    },
    {
      id: 7,
      title: 'Annual Maritime Security Conference 2024',
      excerpt: 'Join us for the largest gathering of maritime professionals in West Africa, featuring keynote speakers and panel discussions.',
      category: 'Events',
      author: 'Events Team',
      date: 'October 10, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop',
    },

    // ===== NEWS =====
    {
      id: 4,
      title: 'Partnership Announcement: GOGMI and UNESCO Collaborate',
      excerpt: 'Strategic partnership aims to enhance maritime education and research capabilities across West African institutions.',
      category: 'News',
      author: 'Dr. Kofi Mensah',
      date: 'October 28, 2024',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&fit=crop',
    },
    {
      id: 8,
      title: 'New Partnership with Regional Maritime Authority',
      excerpt: 'GoGMI announces collaboration with ECOWAS to strengthen maritime security frameworks across member states.',
      category: 'News',
      author: 'Dr. Amina Hassan',
      date: 'September 28, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
    },

    // ===== BLOGS (MOVED FROM RESOURCES) =====
    {
      id: 101,
      title: "5 ESSENTIAL TRAITS THAT MAKE YOUTH CRUCIAL TO ADDRESSING OCEAN",
      excerpt: 'Exploring how young people are becoming key drivers in addressing ocean sustainability and maritime challenges.',
      category: 'Blogs',
      date: 'July 2022',
      author: 'Lawrence Team',
      readTime: '8 min read',
      image: '/lawrence.blog.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/Essential-traits.pdf',
      pages: 4
    },
    {
      id: 102,
      title: 'AN OCEAN FOR THE YOUTH',
      excerpt: 'A holistic approach to engaging the youth in the maritime sector through education, skills development, and inclusive opportunities.',
      category: 'Blogs',
      date: 'March 2022',
      author: 'Stephanie Team',
      readTime: '10 min read',
      image: '/Stephanie.blog.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/An-Occean-for-Youth.pdf',
      pages: 10
    },
    {
      id: 103,
      title: 'A World Oceans Day Blog Post',
      excerpt: 'Celebrating World Oceans Day with insights on collective action and ocean stewardship.',
      category: 'Blogs',
      date: 'June 2022',
      author: 'Communications Team',
      readTime: '6 min read',
      image: '/occeanday.blog.png',
      fileType: 'PDF',
      downloadUrl: '/resources/pdfs/World-Ocean-Day-Collective-Action-Starts-with-You.pdf',
      pages: 3
    },
    {
      id: 104,
      title: 'IWD2022 – GENDER EQUALITY TODAY FOR A SUSTAINABLE TOMORROW',
      excerpt: 'Women are vital to safeguarding marine ecosystems, yet they often face structural barriers in the blue economy.',
      category: 'Blogs',
      date: 'April 2022',
      author: 'Gender Equality Team',
      readTime: '5 min read',
      image: '/int.women.jpg',
      fileType: 'PDF',
      downloadUrl: '/resources/Gender-Equality.pdf',
      pages: 1
    },
    // {
    //   id: 5,
    //   title: 'Digital Transformation of Port Operations Showing Results',
    //   excerpt: 'Our port digitalization project in Tema has achieved a 30% improvement in operational efficiency within the first six months.',
    //   category: 'Blogs',
    //   author: 'Tech Team',
    //   date: 'October 20, 2024',
    //   readTime: '6 min read',
    //   image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&fit=crop',
    // },
    // {
    //   id: 10,
    //   title: 'From Fisherman to Entrepreneur: Ahmed\'s Story',
    //   excerpt: 'Discover how our capacity building programs helped a local fisherman transform his community through sustainable practices.',
    //   category: 'Blogs',
    //   author: 'Communications Team',
    //   date: 'September 5, 2024',
    //   readTime: '6 min read',
    //   image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop',
    // },

    // ===== TECHNICAL NOTES =====
    {
      id: 6,
      title: 'Sustainable Fisheries: Community Impact Stories',
      excerpt: 'Hear from fishing communities in Ghana and Senegal about how sustainable practices are transforming their livelihoods.',
      category: 'Technical note',
      author: 'Communications Team',
      date: 'October 15, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop',
    },
    {
      id: 9,
      title: 'Blue Economy Project: 6-Month Progress Report',
      excerpt: 'Our blue economy initiative has created over 200 jobs and trained 500+ individuals in sustainable maritime practices.',
      category: 'Technical note',
      author: 'Project Team',
      date: 'September 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop',
    },
  ];

  const categories = ['Events', 'News', 'Blogs', 'Technical note'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (article) => {
    if (article.downloadUrl) {
      try {
        const encodedUrl = article.downloadUrl.split('/').map(part => encodeURIComponent(part)).join('/');
        const link = document.createElement('a');
        link.href = encodedUrl;
        const fileName = article.downloadUrl.split('/').pop();
        link.download = fileName;
        link.setAttribute('type', 'application/pdf');
        link.setAttribute('target', '_blank');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setTimeout(() => {
          alert(`✅ Download complete!\n\nFile: ${fileName}`);
        }, 500);
      } catch (error) {
        console.error('Download error:', error);
        alert(`Download failed!\n\nError: ${error.message}`);
      }
    }
  };

  const handlePreview = (article) => {
    if (article.downloadUrl) {
      window.open(article.downloadUrl, '_blank');
    }
  };

  // Preview Modal Component
  const PreviewModal = ({ article, onClose }) => {
    if (!article) return null;

    return (
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
          {/* Modal Header */}
          <div className="relative">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-t-2xl"></div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-all hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-[#8E3400] text-white px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 600 }}>
                  {article.category}
                </span>
                {article.fileType && (
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 600 }}>
                    {article.fileType}
                  </span>
                )}
              </div>
              <h2 className="text-3xl font-black text-white mb-2" style={{ fontWeight: 900 }}>
                {article.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-8">
            {/* Quick Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-gray-200">
              <div>
                <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>Published</p>
                <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{article.date}</p>
              </div>
              {article.author && (
                <div>
                  <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>Author</p>
                  <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{article.author}</p>
                </div>
              )}
              {article.readTime && (
                <div>
                  <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>Read Time</p>
                  <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{article.readTime}</p>
                </div>
              )}
              {article.pages && (
                <div>
                  <p className="text-xs text-gray-500 mb-1" style={{ fontWeight: 600 }}>Pages</p>
                  <p className="text-sm font-bold text-gray-900" style={{ fontWeight: 700 }}>{article.pages}</p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontWeight: 700 }}>Overview</h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontWeight: 400 }}>
                {article.excerpt}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              {article.downloadUrl && (
                <>
                  <button 
                    onClick={() => handleDownload(article)}
                    className="flex-1 bg-[#8E3400] text-white px-6 py-4 rounded-xl font-bold transition-all hover:bg-[#6B2700] flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
                    style={{ fontWeight: 700 }}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                  <button 
                    onClick={() => handlePreview(article)}
                    className="flex-1 bg-gray-100 text-gray-900 px-6 py-4 rounded-xl font-bold transition-all hover:bg-gray-200 flex items-center justify-center gap-2"
                    style={{ fontWeight: 700 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Open Preview</span>
                  </button>
                </>
              )}
              {article.link && (
                <Link
                  to={article.link}
                  className="flex-1 bg-[#132552] text-white px-6 py-4 rounded-xl font-bold transition-all hover:bg-[#1A336C] flex items-center justify-center gap-2"
                  style={{ fontWeight: 700 }}
                >
                  <span>View Full Page</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Preview Modal */}
      {previewArticle && (
        <PreviewModal 
          article={previewArticle} 
          onClose={() => setPreviewArticle(null)} 
        />
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=1600&fit=crop" 
            alt="Maritime Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/40 via-[#1A336C]/30 to-[#132552]/40"></div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-[#8E3400] rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#6B2700] rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#8E3400]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#8E3400]/30 mb-6">
            <Tag className="w-5 h-5 text-[#8E3400]" />
            <span className="text-[#F5F7FA] font-semibold text-sm" style={{ fontWeight: 600 }}>Latest Updates & Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F7FA] mb-6" style={{ fontWeight: 900 }}>
            News & Blog
          </h1>
          <p className="text-xl text-[#F5F7FA]/90 max-w-3xl mx-auto" style={{ fontWeight: 400 }}>
            Stay updated with the latest maritime news, research insights, and success stories from across the Gulf of Guinea region.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-gradient-to-br from-[#132552] to-[#1A336C]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#8E3400]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-[#F5F7FA] border-2 border-[#8E3400]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8E3400] focus:border-transparent text-[#132552] placeholder-[#132552]/50"
                style={{ fontWeight: 400 }}
              />
            </div>
          </div>

          <div>
            <h3 className="text-center text-[#8E3400] font-semibold text-sm uppercase tracking-wider mb-6" style={{ fontWeight: 600 }}>
              Filter by Category
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-4 rounded-xl font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-[#8E3400] text-white shadow-lg'
                      : 'bg-[#F5F7FA]/10 text-[#F5F7FA] border-2 border-[#8E3400]/30 hover:bg-[#F5F7FA]/20 hover:border-[#8E3400]/50'
                  }`}
                  style={{ fontWeight: 700 }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gradient-to-br from-[#F5F7FA] to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-1 bg-[#8E3400] rounded-full"></div>
            <h2 className="text-4xl font-bold text-[#132552]" style={{ fontWeight: 900 }}>
              {selectedCategory}
            </h2>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-block p-6 bg-white rounded-2xl shadow-lg">
                <Search className="w-16 h-16 text-[#8E3400] mx-auto mb-4" />
                <p className="text-2xl text-[#132552] font-semibold mb-2" style={{ fontWeight: 700 }}>
                  No articles found
                </p>
                <p className="text-[#132552]/70" style={{ fontWeight: 400 }}>
                  Try adjusting your search criteria
                </p>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <div 
                  key={article.id}
                  id={article.isIMSWG ? 'imswg-card' : undefined}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-[#8E3400]/30"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#132552]/80 via-[#132552]/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#8E3400] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg" style={{ fontWeight: 700 }}>
                        {article.category}
                      </span>
                    </div>
                    {article.fileType && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 text-[#132552] px-3 py-1 rounded-full text-xs font-bold" style={{ fontWeight: 700 }}>
                          {article.fileType}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#132552] mb-3 group-hover:text-[#8E3400] transition-colors line-clamp-2" style={{ fontWeight: 700 }}>
                      {article.title}
                    </h3>
                    
                    <p className="text-[#132552]/70 text-sm mb-4 line-clamp-3" style={{ fontWeight: 400 }}>
                      {article.excerpt}
                    </p>

                    {article.author && article.readTime && (
                      <div className="flex items-center justify-between text-sm text-[#132552]/60 mb-4" style={{ fontWeight: 400 }}>
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1 text-[#8E3400]" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1 text-[#8E3400]" />
                          {article.readTime}
                        </span>
                      </div>
                    )}

                    {article.pages && (
                      <div className="text-sm text-[#132552]/60 mb-4 flex items-center gap-2" style={{ fontWeight: 400 }}>
                        <FileText className="w-4 h-4 text-[#8E3400]" />
                        <span>{article.pages} pages</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-[#8E3400]/20">
                      <span className="text-sm text-[#132552]/60 flex items-center" style={{ fontWeight: 400 }}>
                        <Calendar className="w-4 h-4 mr-1 text-[#8E3400]" />
                        {article.date}
                      </span>
                      
                      <div className="flex gap-2 items-center">
                        {/* Preview Button for articles with downloadUrl or fileType */}
                        {(article.downloadUrl || article.fileType) && (
                          <button
                            onClick={() => setPreviewArticle(article)}
                            className="text-[#132552] hover:text-[#8E3400] transition-colors"
                            title="Preview"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                        )}

                        {/* Download Button */}
                        {article.downloadUrl && (
                          <button
                            onClick={() => handleDownload(article)}
                            className="text-[#8E3400] hover:text-[#6B2700] transition-colors"
                            title="Download PDF"
                          >
                            <Download className="w-5 h-5" />
                          </button>
                        )}
                        
                        {/* Read More Link */}
                        {article.isIMSWG ? (
                          <Link to="/imswg" className="text-[#8E3400] font-semibold text-sm flex items-center hover:text-[#6B2700] transition-colors group/btn" style={{ fontWeight: 600 }}>
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        ) : article.link ? (
                          <Link to={article.link} className="text-[#8E3400] font-semibold text-sm flex items-center hover:text-[#6B2700] transition-colors group/btn" style={{ fontWeight: 600 }}>
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        ) : (
                          <button className="text-[#8E3400] font-semibold text-sm flex items-center hover:text-[#6B2700] transition-colors group/btn" style={{ fontWeight: 600 }}>
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#132552] via-[#1A336C] to-[#132552]"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-[#8E3400] rounded-full blur-3xl top-1/2 left-1/4 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#6B2700] rounded-full blur-3xl top-1/2 right-1/4 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-[#8E3400] rounded-full"></div>
              <span className="text-[#8E3400] font-semibold tracking-wider text-sm uppercase" style={{ fontWeight: 600 }}>Newsletter</span>
              <div className="w-12 h-1 bg-[#8E3400] rounded-full"></div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F7FA] mb-6" style={{ fontWeight: 900 }}>
            Stay Updated
          </h2>
          <p className="text-xl text-[#F5F7FA]/90 mb-10" style={{ fontWeight: 400 }}>
            Subscribe to our newsletter for the latest maritime insights and updates
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8E3400] bg-[#F5F7FA] text-[#132552] placeholder-[#132552]/50"
              style={{ fontWeight: 400 }}
            />
            <button className="bg-[#8E3400] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#6B2700] transition-all shadow-xl hover:scale-105 whitespace-nowrap" style={{ fontWeight: 700 }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }

        @keyframes highlight-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(142, 52, 0, 0);
            border-color: transparent;
          }
          50% {
            box-shadow: 0 0 20px 5px rgba(142, 52, 0, 0.3);
            border-color: rgba(142, 52, 0, 0.5);
          }
        }
        
        .highlight-pulse {
          animation: highlight-pulse 1s ease-in-out 2;
        }
      `}</style>
    </div>
  );
};

export default Blog;