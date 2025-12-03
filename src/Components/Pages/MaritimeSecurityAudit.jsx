import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Share2, BookOpen, Users, Target, Check, ChevronDown } from 'lucide-react';

const MaritimeSecurityAudit = () => {
  const [activePhase, setActivePhase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const phases = [
    {
      id: 'A',
      title: 'MAPPING',
      description: 'A comprehensive mapping of the range of important maritime security initiatives and frameworks in the region and determine the complexities resulting from these',
      icon: '🗺️',
      color: '#1A5490'
    },
    {
      id: 'B',
      title: 'EVOLUTION',
      description: 'An exploration of the evolution of the range of maritime security initiatives and interventions in the Gulf of Guinea and examination of how these are crystalised into the region\'s existing maritime security architecture',
      icon: '📈',
      color: '#E67E22'
    },
    {
      id: 'C',
      title: 'OUTCOMES & RESPONSES',
      description: 'An analysis of successes and failures chalked by initiatives, as well as how varying levels of actors have responded to emerging complexities resulting from the proliferation of interventions in the region',
      icon: '🎯',
      color: '#5DADE2'
    },
    {
      id: 'D',
      title: 'OPPORTUNITIES',
      description: 'An examination of the prospects for reducing maritime governance complexities in the Gulf of Guinea and/or harmonising maritime governance efforts in the region towards enhancing maritime security',
      icon: '⚙️',
      color: '#7CB342'
    }
  ];

  const explorationAreas = [
    {
      title: 'Existing maritime security initiatives/frameworks in the region',
      questions: [
        'What are the range of existing maritime security initiatives in the region and what is their disposition, especially in terms of threat focus?',
        'How successful or otherwise have these interventions been in curbing incidents of maritime crime in the region?'
      ]
    },
    {
      title: 'Evolution of maritime security initiatives/frameworks in the region',
      questions: [
        'What are the primary reasons for varying maritime security initiatives in the Gulf of Guinea?',
        'What has been the evolutionary trajectory of the range of initiatives in the region?',
        'How did complexities evolve over time?',
        'How have the discourses and practices of actors shaped approaches to maritime security in the region over time?'
      ]
    },
    {
      title: 'Actor relations and responses',
      questions: [
        'What are the power relationships imbued within the cluster of interventions in the region?',
        'How are the resulting complexities navigated by state and non-state actors with varying interests in the region?',
        'How have the discourse and practices of various actors shaped the maritime security architecture of the region?',
        'Are there existing mechanisms to reduce complexities or facilitate coordination amongst existing initiatives, interventions or frameworks?',
        'What are the prospects for harmonising the convoluted mix of efforts in the region towards the ultimate end of enhancing maritime security?'
      ]
    }
  ];

  const outputs = [
    {
      number: '1',
      title: 'Brief Analytical Papers of Major Interventions',
      description: 'Prior to publication of the detailed study report, brief analytical papers on selected maritime security interventions will be disseminated by the Institute as separate publications. Each paper will provide a brief historical backdrop to the intervention in question, explore its scope, examine whether or not the intervention is achieving its primary objectives and investigate practicable pathways to strengthening the ability of these interventions to attain their ultimate goals.'
    },
    {
      number: '2',
      title: 'Policy Briefs',
      description: 'Useful policy actions intended to be included in the detailed report will be shared as quarterly policy briefs for the duration of the Audit. The quarterly briefs will provide direct policy recommendations for addressing gaps within the region\'s maritime security architecture.'
    },
    {
      number: '3',
      title: 'Detailed Report',
      description: 'The primary output of the study will be a detailed report of findings, conclusions and recommendations titled "The Gulf Complex: An Audit of the Range of Maritime Security Interventions in the Gulf of Guinea". The structured report will serve as a useful reference document for all stakeholders interested in gaining a complete picture of the full range of maritime security interventions in the Gulf of Guinea. Corroborated by infographics and diagrammatic representations, the report will provide a clear picture of cross-linkages between interventions in the region, as well as an analysis of the successes and failures chalked by these interventions.'
    },
    {
      number: '4',
      title: 'Dissemination Workshop',
      description: 'Following the publication of the detailed report, the Institute will conduct a regional workshop to disseminate the findings of the study across a broad range of stakeholders in the region. The workshop will particularly be aimed at enhancing high-level dialogue between policy makers across the region and key actors playing a role in the execution of the myriad of initiatives in the Gulf of Guinea, on pathways to coordinating efforts towards shared regional interests and objectives.'
    },
    {
      number: '5',
      title: 'Journal Edition: The Gulf Spectrum',
      description: 'The Institute began processes towards publication of the first edition of the Gulf Spectrum, a flagship journal intended to provide stakeholders across the Gulf of Guinea and beyond with unique, local perspectives on critical issues surrounding maritime governance, safety and security in the Gulf of Guinea. The first edition of the journal will be published under the theme, Maritime Security Interventions in the Gulf of Guinea and will provide a pathway to collating research and regional voices on the MSIA along three thematic areas: Evolution of maritime security initiatives in the Gulf of Guinea, The range of existing initiatives in the region, and Actor relations and responses.'
    }
  ];

  const shortTermOutcomes = [
    'Publication of a series of analytical papers and policy briefs to create a clearer understanding of the state of interventions in the region, as well as pathways to fostering coordination of activities across this range of initiatives',
    'Stimulation of useful dialogue on complexity, informality and experimentation in maritime governance in the Gulf of Guinea',
    'Provision of useful reference or directory of information on the number and scope of interventions in the region'
  ];

  const longTermImpacts = [
    'Restructuring of existing initiatives or the establishment of new ones to address salient gaps within the region\'s maritime security architecture',
    'Creation of viable platforms for coordination of actions and information sharing across interventions and initiatives',
    'Elimination of effort duplication in execution of interventions across the region'
  ];

  const documentarySources = [
    'Yaoundé Code of Conduct',
    'G7++ FoGG Ministerial Session Reports',
    'EU Coordinated Maritime Presences Concept Documents',
    'Interregional Coordination Centre Founding & Organizational Documents',
    'ICC Piracy & Armed Robbery Reports',
    '2050 AIM Strategy Documents',
    'Maritime Collaboration Forum (SHADE) Plenary Documents',
    'IMO Resolution MSC 483 (103)',
    'UN Security Council Resolutions'
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="/How to Ensure Hassle-Free Crew Transfers at French Ports.jpg"
            alt="Maritime Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/60 via-[#1A5490]/55 to-[#132552]/60"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(142, 52, 0, 0.1) 0%, transparent 50%)',
          }}></div>
        </div>

        {/* Content */}
        <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 backdrop-blur-md"
               style={{ backgroundColor: 'rgba(142, 52, 0, 0.2)', border: '1px solid rgba(142, 52, 0, 0.3)', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#8E3400' }}></span>
            <span className="text-xs font-semibold tracking-widest text-white">ONGOING RESEARCH PROJECT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-none"
              style={{ letterSpacing: '-0.03em', fontFamily: '"SF Pro Display", system-ui, -apple-system, sans-serif' }}>
            MARITIME SECURITY<br/>
            <span style={{ color: '#8E3400' }}>INTERVENTIONS AUDIT</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
             style={{ fontWeight: 400, fontFamily: 'Georgia, "Times New Roman", serif' }}>
            A comprehensive examination of maritime security governance complexities in the Gulf of Guinea
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base transition-all shadow-xl hover:scale-105"
                    style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 600, fontFamily: 'system-ui, sans-serif' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}>
              <Download className="w-5 h-5" />
              <span>Download Full Report</span>
            </button>
          
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </section>

      {/* Background and Rationale */}
     

      {/* Areas of Exploration */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-wider mb-4 block"
                  style={{ color: '#8E3400', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.15em' }}>
              Research Focus
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6"
                style={{ color: '#132552', letterSpacing: '-0.02em', fontFamily: '"SF Pro Display", sans-serif' }}>
              Areas of Exploration
            </h2>
            <div className="w-20 h-1.5 rounded-full mx-auto mb-8" style={{ backgroundColor: '#8E3400' }}></div>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563', fontWeight: 400, fontFamily: 'Georgia, serif' }}>
              This study seeks to contribute to the limited research on the complexity of maritime security interventions in the Gulf of Guinea, with the ultimate intent of illuminating viable pathways for harmonising collective efforts towards enhancing shared goals. The research questions are categorised under three thematic areas as indicated below:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {explorationAreas.map((area, idx) => (
              <div key={idx} 
                   className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={idx === 0 ? "/AAC starts work on maritime domain awareness constellation.jpg" : 
                         idx === 1 ? "/gggmi.jpg" : 
                         "/Dinoprajapati2003 Author Portfolio _ Freepik.jpg"}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 ${idx === 0 ? 'bg-gradient-to-br from-slate-700/60 to-slate-900/60' : 
                                   idx === 1 ? 'bg-gradient-to-br from-amber-700/60 to-orange-800/60' : 
                                   'bg-gradient-to-br from-teal-700/60 to-cyan-800/60'}`}></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black mb-6 leading-tight group-hover:text-[#8E3400] transition-colors"
                      style={{ color: '#132552', fontFamily: '"SF Pro Display", sans-serif', letterSpacing: '-0.01em' }}>
                    {area.title}
                  </h3>
                  <div className="space-y-4">
                    {area.questions.map((question, qIdx) => (
                      <div key={qIdx} className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5"
                             style={{ backgroundColor: '#8E3400' }}></div>
                        <p className="text-sm leading-relaxed" style={{ color: '#4B5563', fontWeight: 400, fontFamily: 'Georgia, serif' }}>
                          {question}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases of the Audit */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-wider mb-4 block"
                  style={{ color: '#8E3400', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.15em' }}>
              Research Methodology
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6"
                style={{ color: '#132552', letterSpacing: '-0.02em', fontFamily: '"SF Pro Display", sans-serif' }}>
              Phases of the Audit
            </h2>
            <div className="w-20 h-1.5 rounded-full mx-auto mb-8" style={{ backgroundColor: '#8E3400' }}></div>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#4B5563', fontWeight: 400, fontFamily: 'Georgia, serif' }}>
              The fundamental aim of this study is to map the range of maritime security initiatives and interventions in the Gulf of Guinea, assess the complexities these have posed to maritime security governance, examine the responses of actors to these complexities and determine whether or not efforts have been successful and can be ultimately harmonised towards enhancing the region's maritime security. To achieve this, the audit will be conducted along four different phases, depicted in the figure below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {phases.map((phase, idx) => (
              <div key={idx}
                   className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-l-4"
                   style={{ borderColor: phase.color }}
                   onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl font-black transition-transform group-hover:scale-110"
                       style={{ backgroundColor: phase.color, fontFamily: '"SF Pro Display", sans-serif' }}>
                    {phase.id.replace('PHASE ', '')}
                  </div>
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="text-xs font-bold tracking-wider mb-2 block" 
                            style={{ color: phase.color, fontFamily: 'system-ui, sans-serif', textTransform: 'uppercase' }}>
                        {phase.id}
                      </span>
                      <h3 className="text-xl font-black group-hover:text-[#8E3400] transition-colors" 
                          style={{ color: '#132552', fontFamily: 'system-ui, sans-serif' }}>
                        {phase.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#4B5563', fontWeight: 400, fontFamily: 'Georgia, serif' }}>
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Phase Diagram */}
          <div className="relative p-8 rounded-3xl" style={{ backgroundColor: '#F5F7FA' }}>
            <p className="text-center text-sm font-semibold mb-8" style={{ color: '#4B5563' }}>
              Figure 1: Phases of the Audit
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {phases.map((phase, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black shadow-lg"
                       style={{ backgroundColor: phase.color }}>
                    {phase.id}
                  </div>
                  <p className="text-sm font-bold" style={{ color: '#132552' }}>
                    {phase.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Outputs */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#132552' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-wider mb-4 block"
                  style={{ color: '#8E3400', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.15em' }}>
              Deliverables
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6"
                style={{ letterSpacing: '-0.02em', fontFamily: '"SF Pro Display", sans-serif' }}>
              Major Outputs
            </h2>
            <div className="w-20 h-1.5 rounded-full mx-auto mb-8" style={{ backgroundColor: '#8E3400' }}></div>
            <p className="text-lg max-w-3xl mx-auto text-white/80 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              The Audit has been structured by the Institute to result in a number of notable outputs, each of which will result in substantial contributions to advancing maritime security governance in the Gulf of Guinea and beyond.
            </p>
          </div>

          <div className="space-y-6">
            {outputs.map((output, idx) => (
              <div key={idx}
                   className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#8E3400]/50">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-black"
                         style={{ backgroundColor: '#8E3400', fontFamily: '"SF Pro Display", sans-serif' }}>
                      {output.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-4" style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.01em' }}>
                      {output.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                      {output.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes & Impacts */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-wider mb-4 block"
                  style={{ color: '#8E3400', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.15em' }}>
              Expected Results
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6"
                style={{ color: '#132552', letterSpacing: '-0.02em', fontFamily: '"SF Pro Display", sans-serif' }}>
              Audit Outcomes & Impacts
            </h2>
            <div className="w-20 h-1.5 rounded-full mx-auto mb-8" style={{ backgroundColor: '#8E3400' }}></div>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#4B5563', fontWeight: 400, fontFamily: 'Georgia, serif' }}>
              The Audit is a crucial first step to demystifying complexities resulting from the convoluted mix of maritime security interventions in the Gulf of Guinea. It is intended to yield an array of short-term outcomes and long-term impacts, as illustrated below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Short-Term Outcomes */}
            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-10 shadow-lg border-l-4 border-indigo-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full -mr-32 -mt-32 opacity-40"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-2"
                    style={{ color: '#4338ca', fontFamily: 'system-ui, sans-serif' }}>
                  Short-Term Outcomes
                </h3>
                <div className="w-16 h-1 rounded-full mb-8" style={{ backgroundColor: '#4338ca' }}></div>
                <div className="space-y-4">
                  {shortTermOutcomes.map((outcome, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-md flex items-center justify-center"
                             style={{ backgroundColor: '#4338ca' }}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <p className="leading-relaxed" style={{ color: '#334155', fontWeight: 400, fontFamily: 'Georgia, serif' }}>
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Long-Term Impacts */}
            <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-3xl p-10 shadow-lg border-l-4 border-emerald-600 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full -ml-32 -mb-32 opacity-40"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-2"
                    style={{ color: '#059669', fontFamily: 'system-ui, sans-serif' }}>
                  Long-Term Impacts
                </h3>
                <div className="w-16 h-1 rounded-full mb-8" style={{ backgroundColor: '#059669' }}></div>
                <div className="space-y-4">
                  {longTermImpacts.map((impact, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-md flex items-center justify-center"
                             style={{ backgroundColor: '#059669' }}>
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      </div>
                      <p className="leading-relaxed" style={{ color: '#334155', fontWeight: 400, fontFamily: 'Georgia, serif' }}>
                        {impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Impact Visualization Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/bossess.jpg"
              alt="Collaborative Maritime Operations"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
              <div className="p-10 text-white">
                <h4 className="text-3xl font-bold mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Building a Safer Maritime Future
                </h4>
                <p className="text-lg opacity-90" style={{ fontFamily: 'Georgia, serif' }}>
                  Through comprehensive research and strategic stakeholder engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-32" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-bold uppercase tracking-wider mb-4 block"
                  style={{ color: '#8E3400' }}>
              Research Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6"
                style={{ color: '#132552', letterSpacing: '-0.02em' }}>
              Methodology
            </h2>
            <div className="w-20 h-1.5 rounded-full mx-auto mb-8" style={{ backgroundColor: '#8E3400' }}></div>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4B5563', fontWeight: 400 }}>
              The research is expected to be conducted using a mix of methods, ranging from open and explorative qualitative and quantitative approaches, through desktop reviews, interviews, focus-group discussions and stakeholder surveys. Each of these approaches will be segmented according to the various phases of the research as per the figure below.
            </p>
          </div>

          {/* Methodology Phases Diagram */}
          <div className="space-y-4 mb-16">
            {[
              { phase: 'Phase 1', methods: ['Desktop research', 'Document reviews'] },
              { phase: 'Phase 2', methods: ['Document reviews', 'Expert interviews', 'Stakeholder surveys'] },
              { phase: 'Phase 3', methods: ['Desktop research', 'Document reviews', 'Expert interviews', 'Stakeholder surveys', 'Focus group discussions'] },
              { phase: 'Phase 4', methods: ['Expert interviews', 'Focus group discussions', 'Triangulation & analysis of all data'] }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-32 py-4 px-6 rounded-xl flex items-center justify-center font-black text-white"
                     style={{ backgroundColor: idx === 0 ? '#1A5490' : idx === 1 ? '#E67E22' : idx === 2 ? '#5DADE2' : '#7CB342' }}>
                  {item.phase}
                </div>
                <div className="flex-1 flex flex-wrap gap-2 items-center">
                  {item.methods.map((method, mIdx) => (
                    <span key={mIdx} 
                          className="px-4 py-2 rounded-lg text-sm font-semibold bg-white shadow-sm"
                          style={{ color: '#132552' }}>
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Documentary Sources */}
          <div className="bg-white rounded-3xl p-10 shadow-lg">
            <h3 className="text-2xl font-black mb-6"
                style={{ color: '#132552' }}>
              Patchwork List of Documentary Sources
            </h3>
            <p className="text-base mb-8" style={{ color: '#4B5563', fontWeight: 400 }}>
              Some of the documents to be reviewed are listed below in the execution of the Audit:
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {documentarySources.map((source, idx) => (
                <div key={idx} 
                     className="p-4 rounded-xl transition-all hover:scale-105"
                     style={{ backgroundColor: '#F5F7FA' }}>
                  <p className="text-sm font-semibold" style={{ color: '#132552' }}>
                    {source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Download CTA */}
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden"
               style={{ background: 'linear-gradient(135deg, #132552 0%, #1A5490 100%)' }}>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6"
              style={{ letterSpacing: '-0.02em', fontFamily: '"SF Pro Display", sans-serif' }}>
            Stay Updated on This Research
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
            Subscribe to receive updates on our findings, publications, and upcoming dissemination workshops
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg transition-all shadow-xl hover:scale-105"
                    style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700, fontFamily: 'system-ui, sans-serif' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}>
              <BookOpen className="w-5 h-5" />
              <span>Subscribe for Updates</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl text-lg transition-all backdrop-blur-md"
                    style={{ border: '2px solid rgba(255, 255, 255, 0.3)', color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)', fontWeight: 700, fontFamily: 'system-ui, sans-serif' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}>
              <Users className="w-5 h-5" />
              <span>Contact Research Team</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MaritimeSecurityAudit;


