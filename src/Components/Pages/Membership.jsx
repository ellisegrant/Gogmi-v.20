import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleApply = (planName, planPrice) => {
    const subject = encodeURIComponent(`Membership Application - ${planName}`);
    const body = encodeURIComponent(`Hello GoGMI Team,

I am interested in applying for the ${planName} (${planPrice}).

Name: 
Email: 
Phone: 
Organization (if applicable): 

Additional Information:


Best regards,`);
    
    window.location.href = `mailto:info@gogmi.org?subject=${subject}&body=${body}`;
  };

  const individualPlans = [
    {
      id: 'student',
      name: 'Student Membership',
      price: 'GHS 100',
      period: '/year',
      description: 'Designed for undergraduate and postgraduate students with an interest in maritime, ocean, environmental, and security studies.',
      features: [
        'Official Certificate of Membership',
        'Access to GoGMI research reports and publications',
        'Invitations to student-focused webinars and seminars',
        'Discounted fees for GoGMI trainings and workshops',
        'Structured mentorship opportunities with professionals and researchers',
        'Career development support (research skills, writing clinics, CV guidance)',
        'Access to student networking platforms and discussion groups',
        'Opportunities to volunteer or intern on GoGMI projects',
      ]
    },
    {
      id: 'associate',
      name: 'Associate Membership (Early Career)',
      price: 'GHS 500',
      period: '/year',
      popular: true,
      description: 'For early-career professionals (1–5 years experience) seeking skills development, visibility, and networking.',
      features: [
        'Official Certificate of Membership',
        'Invitations to GoGMI conferences, seminars, and policy dialogues',
        'Discounted access to professional trainings and workshops',
        'Access to research reports, briefs, and policy publications',
        'Career development programmes and capacity-building sessions',
        'Opportunities to contribute to GoGMI blogs, research outputs, and junior committees',
        'Networking with regional and international maritime professionals',
        'Early access to GoGMI fellowships and project calls'
      ]
    },
    {
      id: 'professional',
      name: 'Professional Membership',
      price: 'GHS 1,000',
      period: '/year',
      subtitle: '5–10 years experience',
      description: 'For mid-level professionals seeking influence, policy engagement, and regional visibility.',
      features: [
        'Official Certificate of Membership',
        'Priority invitations to policy dialogues and expert roundtables',
        'Access to GoGMI research outputs and policy briefs',
        'Discounted access to advanced trainings and conferences',
        'Opportunities to moderate sessions or speak at GoGMI events',
        'Professional profile listing on the GoGMI website',
        'Executive networking with regional experts and institutions'
      ]
    },
    {
      id: 'fellow',
      name: 'Fellow Membership',
      price: 'GHS 1,500',
      period: '/year',
      subtitle: 'Senior experts',
      description: 'For senior professionals and experts contributing to maritime research, policy, and governance.',
      features: [
        'Official Certificate of Fellowship',
        'Participation and leadership in policy working groups',
        'Access to high-level and closed-door policy roundtables',
        'Opportunities to shape GoGMI research and policy agenda',
        'Recognition as a GoGMI Fellow (website and publications)',
        'Engagement in strategic advisory and maritime security discussions'
      ]
    }
  ];

  const institutionalPlans = [
    {
      id: 'institution',
      name: 'Institution Membership',
      price: 'GHS 10,000',
      period: '/year',
      description: 'For universities, research centres, and think tanks.',
      features: [
        'Official Institutional Membership Certificate',
        'Access to GoGMI membership benefits for nominated staff and students',
        'Joint research, training, and capacity-building programmes',
        'Co-branded research outputs and policy publications',
        'Opportunities for joint grant proposals and funded projects',
        'Priority consideration for institutional partnerships and programmes',
        'Institutional visibility on GoGMI platforms'
      ]
    },
    {
      id: 'corporate',
      name: 'Corporate Membership',
      price: 'GHS 20,000',
      period: '/year',
      description: 'For private sector organisations operating in maritime, logistics, energy, security, and related sectors.',
      features: [
        'Official Corporate Membership Certificate',
        'Corporate branding and visibility at GoGMI events and publications',
        'Invitations to high-level advisory events and stakeholder dialogues',
        'Access to customised briefings on maritime and ocean governance issues',
        'Networking with regional and international partners',
        'Opportunities to align corporate social responsibility (CSR) initiatives with GoGMI programmes'
      ]
    },
    {
      id: 'strategic',
      name: 'Strategic Partner',
      price: 'By Invitation Only',
      period: '',
      description: 'For organisations with long-term strategic alignment with GoGMI mission.',
      features: [
        'Recognition as a GoGMI Strategic Partner',
        'Co-creation and implementation of flagship initiatives',
        'Engagement in strategic planning and policy influence',
        'Priority collaboration on regional and international programmes'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#132552' }}>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&fit=crop" 
            alt="Membership"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontWeight: 900, letterSpacing: '-0.02em' }}>
              Fast track your professional journey with GoGMI Membership
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8 font-semibold">
              Join our maritime community to access exclusive research, engage with thought leaders, and expand your network across the Gulf of Guinea maritime sector.
            </p>
          </div>
        </div>
      </section>

      {/* About Membership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
                Why Join GoGMI?
              </h2>
              <div className="space-y-4 text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                <p>
                  GoGMI membership provides access to a vibrant community of maritime professionals, researchers, policymakers, and industry leaders across the Gulf of Guinea region.
                </p>
                <p>
                  As a member, you become part of the Gulf of Guinea premier maritime think tank, dedicated to advancing maritime security, sustainable blue economy development, and regional cooperation.
                </p>
                <p>
                  Members gain exclusive access to cutting-edge research, policy briefs, training programs, and networking opportunities that connect you with experts across the Gulf of Guinea.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&fit=crop"
                alt="Maritime Professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Membership Benefits
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                Knowledge & Research
              </h3>
              <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                Access comprehensive maritime research, publications, and policy briefs from across the Gulf of Guinea region.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                Professional Network
              </h3>
              <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                Connect with maritime professionals, researchers, and policymakers across the Gulf of Guinea.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#132552', fontWeight: 700 }}>
                Capacity Building
              </h3>
              <p className="text-base leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                Participate in training programs, workshops, and skill development sessions led by industry experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Membership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Individual Memberships
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {individualPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-xl border ${
                  plan.popular ? 'border-[#8E3400] shadow-xl' : 'border-gray-200 shadow-md'
                } hover:shadow-lg transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="px-4 py-2 text-sm font-bold text-center rounded-t-lg text-white" style={{ backgroundColor: '#8E3400', fontWeight: 700 }}>
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1" style={{ color: '#132552', fontWeight: 700 }}>
                    {plan.name}
                  </h3>
                  
                  {plan.subtitle && (
                    <p className="text-sm font-semibold mb-2" style={{ color: '#8E3400' }}>
                      {plan.subtitle}
                    </p>
                  )}
                  
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black" style={{ color: '#132552', fontWeight: 900 }}>
                        {plan.price}
                      </span>
                      <span className="font-semibold" style={{ color: '#4B5563' }}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed font-semibold mb-4" style={{ color: '#4B5563' }}>
                    {plan.description}
                  </p>

                  <div className="mb-3">
                    <p className="text-xs font-bold mb-2" style={{ color: '#132552' }}>Benefits</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#8E3400' }} />
                        <span className="text-xs leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleApply(plan.name, plan.price)}
                    className="w-full py-2.5 rounded-lg font-bold transition-all text-sm"
                    style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Membership Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Institutional Memberships
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {institutionalPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#132552', fontWeight: 700 }}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-3">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black" style={{ color: '#132552', fontWeight: 900 }}>
                        {plan.price}
                      </span>
                      <span className="font-semibold" style={{ color: '#4B5563' }}>
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed font-semibold mb-4" style={{ color: '#4B5563' }}>
                    {plan.description}
                  </p>

                  <div className="mb-3">
                    <p className="text-xs font-bold mb-2" style={{ color: '#132552' }}>Benefits</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#8E3400' }} />
                        <span className="text-sm leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleApply(plan.name, plan.price)}
                    className="w-full py-2.5 rounded-lg font-bold transition-all text-sm"
                    style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
              How to Apply
            </h2>
            <div className="w-20 h-1 rounded-full mx-auto" style={{ backgroundColor: '#8E3400' }}></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Choose Your Plan',
                description: 'Select the membership tier that best fits your needs and professional goals.'
              },
              {
                step: '2',
                title: 'Complete Application',
                description: 'Fill out the online application form with your details and supporting documents.'
              },
              {
                step: '3',
                title: 'Payment & Review',
                description: 'Submit payment and your application will be reviewed by our membership committee.'
              },
              {
                step: '4',
                title: 'Welcome Aboard',
                description: 'Receive your membership certificate and gain immediate access to all benefits.'
              }
            ].map((process, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl font-black mb-4 text-white" style={{ backgroundColor: '#132552', fontWeight: 900 }}>
                  {process.step}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#132552', fontWeight: 700 }}>
                  {process.title}
                </h3>
                <p className="text-sm leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Brochure Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&fit=crop"
                alt="Membership Brochure"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#132552', fontWeight: 900, letterSpacing: '-0.02em' }}>
                Download Membership Brochure
              </h2>
              <p className="text-lg mb-8 leading-relaxed font-semibold" style={{ color: '#4B5563' }}>
                Get detailed information about all membership categories, benefits, and application procedures.
              </p>
              <button 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all"
                style={{ backgroundColor: '#132552', color: 'white', fontWeight: 700 }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0F1C3F'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#132552'}
              >
                <span>Download Brochure</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;