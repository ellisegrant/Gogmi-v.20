import React from 'react';
import { Download, Users, Globe, FileText, Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IMSWG = () => {
  const navigate = useNavigate();

  const goToReports = () => {
    navigate('/resources#internal-reports');
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/imswg4.jpg"
            alt="IMSWG Forum"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-800/70 to-slate-900/75"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: '"SF Pro Display", system-ui, sans-serif', letterSpacing: '-0.02em' }}>
            INTERNATIONAL MARITIME<br/>SECURITY WORKING GROUP
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8"
             style={{ fontFamily: 'Georgia, serif' }}>
            Driving policy innovation and dialogue on Gulf of Guinea maritime security
          </p>

          <button 
            onClick={goToReports}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 rounded-lg text-base font-semibold transition-all hover:scale-105 shadow-xl cursor-pointer"
            style={{ color: '#1e293b' }}
          >
            <Download className="w-5 h-5" />
            <span>Download Reports</span>
          </button>
        </div>
      </section>

      {/* About IMSWG */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest mb-4 block"
                    style={{ color: '#64748b', letterSpacing: '0.15em' }}>
                About the Forum
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: '#1e293b', fontFamily: '"SF Pro Display", sans-serif', letterSpacing: '-0.01em' }}>
                About the Working Group
              </h2>
              <div className="w-20 h-1 bg-slate-900 rounded-full mb-8"></div>
              
              <p className="text-base leading-relaxed mb-6" style={{ color: '#475569', fontFamily: 'Georgia, serif' }}>
                The International Maritime Security Working Group (IMSWG), formed by the Gulf of Guinea Maritime Institute, is the Institute's flagship forum focused on stimulating dialogue and policy innovation aimed at addressing maritime security and safety concerns in the Gulf of Guinea (GoG) region.
              </p>

              <p className="text-base leading-relaxed" style={{ color: '#64748b' }}>
                The IMSWG forum is notable as a knowledge exchange and research network on regional issues while keeping an eye on the pulse of international perspectives.
              </p>
            </div>

            <div className="relative">
              <img 
                src="/imswg2.jpg"
                alt="Maritime Collaboration"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Key Information Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-5">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#1e293b' }}>Expert Network</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b', fontFamily: 'Georgia, serif' }}>
                Government, industry, private sector, universities, research institutions and diplomatic community experts in ocean governance
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-5">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#1e293b' }}>Regional Focus</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b', fontFamily: 'Georgia, serif' }}>
                Concentrated on Gulf of Guinea maritime security and safety challenges with international perspectives
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-5">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#1e293b' }}>Policy Innovation</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b', fontFamily: 'Georgia, serif' }}>
                Develops comprehensive reforms and strategy recommendations for maritime safety development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Composition */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block"
                  style={{ color: '#64748b', letterSpacing: '0.15em' }}>
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: '#1e293b', letterSpacing: '-0.01em', fontFamily: '"SF Pro Display", sans-serif' }}>
              Forum Composition
            </h2>
            <div className="w-20 h-1 bg-slate-900 rounded-full mx-auto"></div>
          </div>

          <div className="bg-white rounded-2xl p-10 md:p-12 shadow-lg mb-10">
            <p className="text-base leading-relaxed mb-8 text-center" style={{ color: '#475569', fontFamily: 'Georgia, serif' }}>
              Made up of experts from government, industry, private sector, universities, research institutions and diplomatic community in ocean governance practice, the forum occasionally engages in exchanging ideas and making salient recommendations for heads of organizations and policymakers to comprehensively deepen reforms and strategy development, actively promote maritime safety development, and build communal consensus for social and economic prosperity.
            </p>

            <div className="bg-slate-50 rounded-xl p-8 border-l-4 border-slate-900">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🔒</span>
                </div>
                <div>
                  <h4 className="font-bold text-base mb-2" style={{ color: '#1e293b' }}>Chatham House Rule</h4>
                  <p className="text-sm leading-relaxed italic" style={{ color: '#64748b', fontFamily: 'Georgia, serif' }}>
                    IMSWG is governed by the Chatham House Rule: a rule or principle according to which information disclosed during a meeting may be reported by those present, but the source of that information may not be explicitly or implicitly identified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Activities */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block"
                  style={{ color: '#64748b', letterSpacing: '0.15em' }}>
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: '#1e293b', letterSpacing: '-0.01em', fontFamily: '"SF Pro Display", sans-serif' }}>
              Forum Activities
            </h2>
            <div className="w-20 h-1 bg-slate-900 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>Discussion Topics</h3>
              <p className="text-base leading-relaxed" style={{ color: '#64748b', fontFamily: 'Georgia, serif' }}>
                In each forum, members and participants are engaged in in-depth discussions on a wide range of topics under the theme, and offer suggestions for the promotion and development of ocean governance and the sustainable blue economy.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>Reports & Recommendations</h3>
              <p className="text-base leading-relaxed" style={{ color: '#64748b', fontFamily: 'Georgia, serif' }}>
                These discussions are available in reports and recommendations on the Institute's website and serve as a repository for policymakers and institutions working on maritime safety development in the Gulf of Guinea region.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/imswg3.jpg"
              alt="Maritime Forum Discussion"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
              <div className="p-10 text-white">
                <p className="text-2xl font-semibold mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Collaborative discussions driving maritime security innovation
                </p>
                <p className="text-slate-300" style={{ fontFamily: 'Georgia, serif' }}>
                  Bringing together experts from across the maritime ecosystem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* IMSWG 2026 - Upcoming Event */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block text-cyan-400"
                  style={{ letterSpacing: '0.15em' }}>
              Next Forum
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white"
                style={{ letterSpacing: '-0.01em', fontFamily: '"SF Pro Display", sans-serif' }}>
              IMSWG 2026 - Coming Soon
            </h2>
            <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto"
               style={{ fontFamily: 'Georgia, serif' }}>
              High-Level Expert Meeting: Optimizing Maritime Security for Sustainable Blue Economy Development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Flyer Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
              <img 
                src="/Main.jpg"
                alt="IMSWG 2026 Forum"
                className="relative rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Event Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Forum Theme</h3>
                <p className="text-lg text-slate-300 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  Optimizing Maritime Security for Sustainable Blue Economy Development: A Strategic Framework for the Gulf of Guinea
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white">Event Details</h4>
                </div>
                <div className="space-y-3 text-slate-300">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="font-semibold text-white">Date:</span> Coming Soon
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="font-semibold text-white">Format:</span> Virtual 
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span className="font-semibold text-white">Status:</span> Registration Opening Soon
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/imswg-signup')}
                  className="flex-1 px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-slate-900 rounded-xl font-bold transition-all hover:scale-105 shadow-lg cursor-pointer"
                >
                  Register Interest
                </button>
               
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-sm text-cyan-100 text-center">
                  📧 For sponsorship & inquiries: <a href="mailto:info@gogmi.org.gh" className="font-bold underline">info@gogmi.org.gh</a> | 📱 +233504953400
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports & Events */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest mb-4 block"
                  style={{ color: '#64748b', letterSpacing: '0.15em' }}>
              Get Involved
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: '#1e293b', letterSpacing: '-0.01em', fontFamily: '"SF Pro Display", sans-serif' }}>
              Reports & Upcoming Events
            </h2>
            <div className="w-20 h-1 bg-slate-900 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sign Up */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1e293b' }}>Sign Up</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#64748b', fontFamily: 'Georgia, serif' }}>
                Join the IMSWG network and participate in future forums to shape maritime policy
              </p>
              <button 
                onClick={() => navigate('/imswg-signup')}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all hover:gap-3 bg-slate-900 hover:bg-slate-800 text-white cursor-pointer"
              >
                <span>Express Your Interest</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* 2020-2024 Report */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1e293b' }}>2020-2025 Report</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#64748b', fontFamily: 'Georgia, serif' }}>
                Comprehensive report of forums held from 2020 to 2025 with key insights
              </p>
              <button 
                onClick={goToReports}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all hover:gap-3 border-2 border-slate-900 text-slate-900 hover:bg-slate-50 cursor-pointer"
              >
                <span>Download Report</span>
                <Download className="w-5 h-5" />
              </button>
            </div>

            {/* 2025 Event */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1e293b' }}>2026 Event</h3>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: '#64748b', fontFamily: 'Georgia, serif' }}>
                View upcoming 2026 forum schedule and event details
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all hover:gap-3 border-2 border-slate-900 text-slate-900 hover:bg-slate-50 cursor-pointer">
                <span>View Details</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: '"SF Pro Display", sans-serif', letterSpacing: '-0.01em' }}>
            Join the Conversation
          </h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
             style={{ fontFamily: 'Georgia, serif' }}>
            Be part of the premier forum driving maritime security policy innovation in the Gulf of Guinea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/imswg-signup')}
              className="px-10 py-4 rounded-xl font-semibold transition-all hover:scale-105 bg-white text-slate-900 shadow-xl cursor-pointer"
            >
              Register for Next Forum
            </button>
            <button 
              onClick={goToReports}
              className="px-10 py-4 rounded-xl font-semibold transition-all hover:scale-105 border-2 border-white/30 text-white hover:bg-white/10 cursor-pointer"
            >
              Download Reports
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IMSWG;