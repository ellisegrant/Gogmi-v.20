import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search, Clock } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const articles = [
    
    {
      id: 3,
      title: 'Capacity Building Program Graduates 50+ Maritime Professionals',
      excerpt: 'Our latest training cohort successfully completed comprehensive maritime security and management certification programs.',
      content: 'The 6-month intensive program...',
      category: 'Training',
      author: 'Admiral Grace Okoro',
      date: 'November 5, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Partnership Announcement: GOGMI and UNESCO Collaborate',
      excerpt: 'Strategic partnership aims to enhance maritime education and research capabilities across West African institutions.',
      content: 'The partnership will focus on...',
      category: 'Partnerships',
      author: 'Dr. Kofi Mensah',
      date: 'October 28, 2024',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Digital Transformation of Port Operations Showing Results',
      excerpt: 'Our port digitalization project in Tema has achieved a 30% improvement in operational efficiency within the first six months.',
      content: 'The digital transformation initiative...',
      category: 'Projects',
      author: 'Tech Team',
      date: 'October 20, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Sustainable Fisheries: Community Impact Stories',
      excerpt: 'Hear from fishing communities in Ghana and Senegal about how sustainable practices are transforming their livelihoods.',
      content: 'Through our sustainable fisheries program...',
      category: 'Impact Stories',
      author: 'Communications Team',
      date: 'October 15, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop',
      featured: false
    }
  ];

  const categories = [, 'Events', 'News', 'Blogs', 'Technical note'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="w-full">
      {/* Hero - Add proper padding top */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
            <Tag className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold text-sm">Latest Updates & Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">News & Blog</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest maritime news, research insights, and success stories from across West Africa
          </p>
        </div>
      </section>

      {/* Featured Articles - Fix spacing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-yellow-400 text-sm font-semibold mb-2 block">{article.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{article.title}</h3>
                    <div className="flex items-center space-x-4 text-white/80 text-sm">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <button className="text-blue-900 font-semibold flex items-center hover:text-yellow-600 transition-colors">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Categories - Remove sticky, fix spacing */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Articles' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid - Fix spacing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">All Articles</h2>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No articles found matching your criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {filteredArticles.filter(a => !a.featured).map((article) => (
                <div key={article.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <button className="text-blue-900 font-semibold text-sm flex items-center hover:text-yellow-600 transition-colors">
                        <span>Read</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter - Fix spacing */}
      <section className="py-20 bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Subscribe to our newsletter for the latest maritime insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;