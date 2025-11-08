import React, { useState } from 'react';
import { MapPin, Calendar, Users, Award, ExternalLink, ArrowRight, Search } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'West Africa Maritime Security Initiative',
      category: 'Security',
      status: 'Ongoing',
      location: 'Gulf of Guinea Region',
      year: '2023 - Present',
      partners: 12,
      beneficiaries: '500+ Maritime Professionals',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&fit=crop',
      description: 'A comprehensive regional framework enhancing maritime security cooperation across 12 coastal nations through training, technology, and policy development.',
      impact: ['Enhanced regional cooperation', '500+ professionals trained', '30% reduction in incidents'],
      budget: '$2.5M'
    },
    {
      id: 2,
      title: 'Sustainable Fisheries Management Program',
      category: 'Blue Economy',
      status: 'Completed',
      location: 'Ghana, Senegal, Nigeria',
      year: '2021 - 2023',
      partners: 8,
      beneficiaries: '2,000+ Fishers',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop',
      description: 'Promoting responsible fishing practices and marine ecosystem conservation through community engagement and sustainable resource management.',
      impact: ['50+ communities engaged', '40% increase in sustainable practices', 'Marine habitats protected'],
      budget: '$1.8M'
    },
    {
      id: 3,
      title: 'Digital Port Transformation',
      category: 'Infrastructure',
      status: 'Ongoing',
      location: 'Port of Tema, Ghana',
      year: '2022 - 2024',
      partners: 5,
      beneficiaries: 'Port Operations Staff',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&fit=crop',
      description: 'Modernizing port operations through digital transformation, improving efficiency, and reducing turnaround times.',
      impact: ['30% efficiency improvement', 'Digital tracking systems', 'Reduced processing time'],
      budget: '$3.2M'
    },
    {
      id: 4,
      title: 'Maritime Policy Framework Development',
      category: 'Policy',
      status: 'Completed',
      location: 'ECOWAS Region',
      year: '2020 - 2022',
      partners: 15,
      beneficiaries: 'Regional Governments',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&fit=crop',
      description: 'Developing comprehensive maritime policy frameworks for ECOWAS member states to enhance governance and cooperation.',
      impact: ['15 countries adopted policies', 'Harmonized regulations', 'Enhanced cooperation'],
      budget: '$1.5M'
    },
    {
      id: 5,
      title: 'Youth Maritime Training Academy',
      category: 'Training',
      status: 'Ongoing',
      location: 'Accra, Ghana',
      year: '2023 - Present',
      partners: 6,
      beneficiaries: '300+ Young Professionals',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&fit=crop',
      description: 'Empowering youth with maritime skills and knowledge through comprehensive training programs and mentorship.',
      impact: ['300+ youth trained', '85% job placement rate', 'Skills development'],
      budget: '$900K'
    },
    {
      id: 6,
      title: 'Coastal Ecosystem Restoration',
      category: 'Environment',
      status: 'Ongoing',
      location: 'West African Coast',
      year: '2022 - 2025',
      partners: 10,
      beneficiaries: 'Coastal Communities',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&fit=crop',
      description: 'Restoring degraded coastal ecosystems and promoting climate resilience through community-based conservation.',
      impact: ['500 hectares restored', 'Climate resilience improved', 'Biodiversity enhanced'],
      budget: '$2.1M'
    }
  ];

  const filters = ['all', 'Security', 'Blue Economy', 'Infrastructure', 'Policy', 'Training', 'Environment'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = selectedFilter === 'all' || project.category === selectedFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 mb-8">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold text-sm uppercase tracking-wide">Transforming Maritime Landscapes</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 tracking-tight">Our Projects</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Driving real change through innovative maritime initiatives across West Africa
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap ${
                    selectedFilter === filter
                      ? 'bg-blue-900 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter === 'all' ? 'All Projects' : filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              Showing <span className="font-bold text-blue-900">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'project' : 'projects'}
              {selectedFilter !== 'all' && <span> in <span className="font-bold text-blue-900">{selectedFilter}</span></span>}
            </p>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-gray-500">No projects found matching your criteria</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedFilter('all'); }}
                className="mt-6 px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-4 py-2 rounded-full text-xs font-bold shadow-lg ${
                        project.status === 'Ongoing' 
                          ? 'bg-yellow-500 text-gray-900' 
                          : 'bg-green-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 rounded-full text-xs font-bold bg-blue-900 text-white shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-blue-900 group-hover:text-yellow-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        <span>{project.year}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                        <span>{project.beneficiaries}</span>
                      </div>
                    </div>

                    {/* Impact Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.impact.slice(0, 2).map((impact, idx) => (
                        <span key={idx} className="text-xs bg-blue-50 text-blue-900 px-3 py-1.5 rounded-full font-medium">
                          {impact}
                        </span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-all flex items-center justify-center gap-2 mt-4">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mt-4 mb-4">Measurable Results</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating lasting change across all our initiatives
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Active Projects' },
              { number: '25', label: 'Countries' },
              { number: '$15M+', label: 'Investment' },
              { number: '5K+', label: 'Beneficiaries' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl hover:shadow-xl transition-all border border-gray-100">
                <div className="text-5xl font-bold text-blue-900 mb-3">{stat.number}</div>
                <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Want to Partner With Us?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join us in creating transformative maritime solutions for West Africa
          </p>
          <button className="bg-yellow-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-2xl hover:scale-105 inline-flex items-center gap-2">
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;