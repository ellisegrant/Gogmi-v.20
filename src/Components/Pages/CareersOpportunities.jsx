import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Heart, Lightbulb, Target, GraduationCap, Globe, TrendingUp, Search, Filter, ChevronRight, FileText } from 'lucide-react';

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const jobCategories = ['All', 'Research', 'Policy & Advocacy', 'Operations', 'Communications', 'Finance', 'IT'];
  const jobTypes = ['All', 'Full-Time', 'Part-Time', 'Internship', 'Volunteer'];

  const openPositions = [
    {
      id: 1,
      title: 'Executive Director ',
      category: 'Strategic Leadership',
      type: 'Full-Time',
      location: 'Accra, Ghana',
      experience: '5-7 years',
      deadline: 'December 15, 2024',
      description: 'Lead policy research and analysis on maritime governance frameworks across West Africa. Develop policy briefs and engage with regional stakeholders.',
      requirements: ['Masters in Maritime Studies, International Relations, or related field', 'Proven experience in policy analysis', 'Excellent research and writing skills', 'Knowledge of West African maritime sector'],
      responsibilities: ['Conduct comprehensive policy research', 'Develop policy recommendations', 'Engage with government officials', 'Lead advocacy campaigns']
    },
    // {
    //   id: 2,
    //   title: 'Head of Technical ',
    //   category: 'Research',
    //   type: 'Full-Time',
    //   location: 'Accra, Ghana',
    //   experience: '3-5 years',
    //   deadline: 'December 20, 2024',
    //   description: 'Conduct marine ecosystem research and contribute to sustainable blue economy initiatives. Work with coastal communities and scientific institutions.',
    //   requirements: ['PhD in Marine Biology, Oceanography, or related field', 'Research experience in marine ecosystems', 'Strong analytical skills', 'Field research experience'],
    //   responsibilities: ['Design and execute research projects', 'Analyze marine data', 'Publish scientific papers', 'Collaborate with research partners']
    // },
    // {
    //   id: 3,
    //   title: 'Research Analyst ',
    //   category: 'Research',
    //   type: 'Full-Time',
    //   location: 'Accra, Ghana',
    //   experience: '2-4 years',
    //   deadline: 'January 10, 2025',
    //   description: 'Manage organizational communications, social media presence, and stakeholder engagement. Create compelling content about maritime issues.',
    //   requirements: ['Bachelors in Communications, Journalism, or related field', 'Proven content creation experience', 'Social media expertise', 'Excellent writing skills'],
    //   responsibilities: ['Develop communication strategies', 'Manage social media platforms', 'Create engaging content', 'Coordinate media relations']
    // },
    
  
  
  ];

  const coreValues = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do'
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Innovation',
      description: 'We embrace creative solutions to maritime challenges'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Collaboration',
      description: 'We work together to achieve greater impact'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Integrity',
      description: 'We operate with transparency and accountability'
    }
  ];

  const filteredJobs = openPositions.filter(job => {
    const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
    const matchesType = selectedType === 'All' || job.type === selectedType;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesType && matchesSearch;
  });

  return (
    <div className="w-full overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section with Image */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&auto=format&fit=crop&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#8E3400]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#8E3400]/30 mb-8">
            <Briefcase className="w-5 h-5 text-[#8E3400]" />
            <span className="text-white font-semibold text-sm uppercase tracking-wide" style={{ fontWeight: 600 }}>Join Our Team</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontWeight: 900 }}>
            Careers at GOGMI
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8" style={{ fontWeight: 400 }}>
            Be part of a team transforming The Future of the Gulf of Guinea Maritime Domain
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {[
              { number: '20+', label: 'Team Members' },
              { number: '5', label: 'Nationalities' },
              { number: '0', label: 'Open Positions' },
           
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-[#8E3400] mb-1" style={{ fontWeight: 900 }}>{stat.number}</div>
                <p className="text-white/80 text-sm" style={{ fontWeight: 400 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#8E3400] font-semibold text-sm uppercase tracking-wider" style={{ fontWeight: 600 }}>Our Values</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#132552] mt-4" style={{ fontWeight: 900 }}>What Drives Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="text-[#8E3400] mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#132552] mb-3" style={{ fontWeight: 700 }}>{value.title}</h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontWeight: 400 }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#8E3400] font-semibold text-sm uppercase tracking-wider" style={{ fontWeight: 600 }}>Opportunities</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#132552] mt-4 mb-6" style={{ fontWeight: 900 }}>Open Positions</h2>
            <p className="text-lg text-gray-600" style={{ fontWeight: 400 }}>Find your perfect role in our team</p>
          </div>

          {/* Search and Filters */}
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8E3400]"
                  style={{ fontWeight: 400 }}
                />
              </div>
              
              <div className="flex gap-3 w-full lg:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 lg:flex-initial px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8E3400] cursor-pointer"
                  style={{ fontWeight: 400 }}
                >
                  {jobCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="flex-1 lg:flex-initial px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8E3400] cursor-pointer"
                  style={{ fontWeight: 400 }}
                >
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <p className="text-gray-600 mt-4" style={{ fontWeight: 400 }}>
              Showing <span className="font-bold text-[#132552]" style={{ fontWeight: 700 }}>{filteredJobs.length}</span> {filteredJobs.length === 1 ? 'position' : 'positions'}
            </p>
          </div>

          {/* Job Listings */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 mb-4" style={{ fontWeight: 400 }}>No positions found matching your criteria</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedType('All'); }}
                className="px-6 py-3 bg-[#8E3400] text-white rounded-lg hover:bg-[#6B2700] transition-all"
                style={{ fontWeight: 600 }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-4 py-1.5 bg-[#132552] text-white rounded-full text-sm font-semibold" style={{ fontWeight: 600 }}>
                          {job.category}
                        </span>
                        <span className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                          job.type === 'Full-Time' ? 'bg-green-100 text-green-700' :
                          job.type === 'Part-Time' ? 'bg-blue-100 text-blue-700' :
                          job.type === 'Internship' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-purple-100 text-purple-700'
                        }`} style={{ fontWeight: 600 }}>
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-[#132552] mb-3" style={{ fontWeight: 700 }}>{job.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4" style={{ fontWeight: 400 }}>{job.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600" style={{ fontWeight: 400 }}>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#8E3400]" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-[#8E3400]" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#8E3400]" />
                          <span>Apply by {job.deadline}</span>
                        </div>
                      </div>
                    </div>

                    <button className="lg:flex-shrink-0 bg-[#8E3400] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#6B2700] transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2" style={{ fontWeight: 700 }}>
                      <span>Closed</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Unsolicited Applications */}
      <section className="py-20 bg-gray-50">
        
      </section>

      {/* CTA */}
     
    </div>
  );
};

export default Careers;