import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search, Clock } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Training');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    {
      id: 3,
      title: 'Capacity Building Program Graduates 50+ Maritime Professionals',
      excerpt: 'Our latest training cohort successfully completed comprehensive maritime security and management certification programs.',
      content: 'The 6-month intensive program...',
      category: 'Events',
      author: 'Admiral Grace Okoro',
      date: 'November 5, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
    },
    {
      id: 4,
      title: 'Partnership Announcement: GOGMI and UNESCO Collaborate',
      excerpt: 'Strategic partnership aims to enhance maritime education and research capabilities across West African institutions.',
      content: 'The partnership will focus on...',
      category: 'News',
      author: 'Dr. Kofi Mensah',
      date: 'October 28, 2024',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&fit=crop',
    },
    {
      id: 5,
      title: 'Digital Transformation of Port Operations Showing Results',
      excerpt: 'Our port digitalization project in Tema has achieved a 30% improvement in operational efficiency within the first six months.',
      content: 'The digital transformation initiative...',
      category: 'Blogs',
      author: 'Tech Team',
      date: 'October 20, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&fit=crop',
    },
    {
      id: 6,
      title: 'Sustainable Fisheries: Community Impact Stories',
      excerpt: 'Hear from fishing communities in Ghana and Senegal about how sustainable practices are transforming their livelihoods.',
      content: 'Through our sustainable fisheries program...',
      category: 'Technical note',
      author: 'Communications Team',
      date: 'October 15, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop',
    },
    {
      id: 7,
      title: 'Annual Maritime Security Conference 2024',
      excerpt: 'Join us for the largest gathering of maritime professionals in West Africa, featuring keynote speakers and panel discussions.',
      content: 'The conference will bring together...',
      category: 'Events',
      author: 'Events Team',
      date: 'October 10, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&fit=crop',
    },
    {
      id: 8,
      title: 'New Partnership with Regional Maritime Authority',
      excerpt: 'GoGMI announces collaboration with ECOWAS to strengthen maritime security frameworks across member states.',
      content: 'This partnership marks...',
      category: 'News',
      author: 'Dr. Amina Hassan',
      date: 'September 28, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
    },
    {
      id: 9,
      title: 'Blue Economy Project: 6-Month Progress Report',
      excerpt: 'Our blue economy initiative has created over 200 jobs and trained 500+ individuals in sustainable maritime practices.',
      content: 'The project has exceeded expectations...',
      category: 'Technical note',
      author: 'Project Team',
      date: 'September 15, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop',
    },
    {
      id: 10,
      title: 'From Fisherman to Entrepreneur: Ahmed\'s Story',
      excerpt: 'Discover how our capacity building programs helped a local fisherman transform his community through sustainable practices.',
      content: 'Ahmed\'s journey began...',
      category: 'Blog',
      author: 'Communications Team',
      date: 'September 5, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop',
    }
  ];

  const categories = ['Events', 'News', 'Blogs', 'Technical note'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=1600&fit=crop" 
            alt="Maritime Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/40 via-[#1A336C]/30 to-[#132552]/40"></div>
        </div>

        {/* Animated Background Elements */}
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
            Stay updated with the latest maritime news, research insights, and success stories from across West Africa
          </p>
        </div>
      </section>

      {/* Search and Categories Section */}
      <section className="py-12 bg-gradient-to-br from-[#132552] to-[#1A336C]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search Bar */}
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

          {/* Categories */}
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
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#132552] mb-3 group-hover:text-[#8E3400] transition-colors line-clamp-2" style={{ fontWeight: 700 }}>
                      {article.title}
                    </h3>
                    
                    <p className="text-[#132552]/70 text-sm mb-4 line-clamp-3" style={{ fontWeight: 400 }}>
                      {article.excerpt}
                    </p>

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

                    <div className="flex items-center justify-between pt-4 border-t border-[#8E3400]/20">
                      <span className="text-sm text-[#132552]/60 flex items-center" style={{ fontWeight: 400 }}>
                        <Calendar className="w-4 h-4 mr-1 text-[#8E3400]" />
                        {article.date}
                      </span>
                      <button className="text-[#8E3400] font-semibold text-sm flex items-center hover:text-[#6B2700] transition-colors group/btn" style={{ fontWeight: 600 }}>
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#132552] via-[#1A336C] to-[#132552]"></div>
        
        {/* Animated Background Elements */}
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
      `}</style>
    </div>
  );
};

export default Blog;