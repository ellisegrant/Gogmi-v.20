import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const individualPlans = [
    {
      id: 'student',
      name: 'Students Membership',
      price: 'GHS 100',
      period: '/year',
      features: [
        'Certificate of Membership',
        'Preferential training fees',
        'Invitations to webinars',
        'Stakeholder advisory opportunities',
        'Access to research reports and publications',
        'Mentorship programs'
      ]
    },
    {
      id: 'associate',
      name: 'Associate Membership (Early-Career)',
      price: 'GHS 500',
      period: '/year',
      popular: true,
      features: [
        'Certificate of Membership',
        'Invitations to conferences',
        'Preferential training fees',
        'Stakeholder advisory opportunities',
        'Access to research reports and publications',
        'Participation in trainings and workshops'
      ]
    },
    {
      id: 'professional',
      name: 'Professional Membership (5-10 yrs)',
      price: 'GHS 1000',
      period: '/year',
      features: [
        'Certificate of Membership',
        'Invitations to conferences',
        'Preferential training fees',
        'Access to research reports and publications',
        'Policy dialogue and exchange opportunities',
        'Networking with regional experts'
      ]
    },
    {
      id: 'fellow',
      name: 'Fellow Membership (Experts)',
      price: 'GHS 1500',
      period: '/year',
      features: [
        'Certificate of Membership',
        'All Professional benefits',
        'Voting rights',
        'Policy working groups participation',
        'High-level roundtables engagement',
        'Maritime Security Advice access'
      ]
    },

{
      id: 'honorary',
      name: 'Honorary Membership',
      price: 'By Invitation',
      period: '',
      features: [
        'Recognition as key strategic partner',
        'Engagement in strategic initiatives',
        'Board and advisory meetings participation',
        'Preferential strategic partnerships'
      ]
    }

  ];

  const institutionalPlans = [
    {
      id: 'academic',
      name: 'Academic & Research Institutions',
      price: 'GHS 10,000',
      period: '/year',
      features: [
        'Certificate of Membership',
        'All individual membership benefits',
        'Joint capacity building opportunities',
        'Joint policy projects',
        'Training collaboration opportunities',
        'Priority programme consideration'
      ]
    },
    {
      id: 'corporate',
      name: 'Corporate Membership',
      price: 'GHS 20,000',
      period: '/year',
      features: [
        'Certificate of Membership',
        'All individual membership benefits',
        'Company branding opportunities',
        'Advisory Events Participation',
        'Networking with regional organizations',
        'Customized briefings on key issues'
      ]
    },


    {
      id: 'honorary',
      name: 'Strategic Partner',
      price: 'By Invitation',
      period: '',
      features: [
        'Recognition as key strategic partner',
        'Engagement in strategic initiatives',
        'Preferential strategic partnerships'
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
              Join our maritime community to access exclusive research, engage with thought leaders, and expand your network across West Africa's maritime sector.
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
                  As a member, you become part of West Africa's premier maritime think tank, dedicated to advancing maritime security, sustainable blue economy development, and regional cooperation.
                </p>
                <p>
                  Members gain exclusive access to cutting-edge research, policy briefs, training programs, and networking opportunities that connect you with experts across West and Central Africa.
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
                Connect with maritime professionals, researchers, and policymakers across West and Central Africa.
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
              Individual Membership
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
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#132552', fontWeight: 700 }}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black" style={{ color: '#132552', fontWeight: 900 }}>
                        {plan.price}
                      </span>
                      <span className="font-semibold" style={{ color: '#4B5563' }}>
                        {plan.period}
                      </span>
                    </div>
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
                    onClick={() => setSelectedPlan(plan.id)}
                    className="w-full py-2.5 rounded-lg font-bold transition-all text-sm"
                    style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
                  >
                    Become Now
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
              Institutional Membership
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
                  
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black" style={{ color: '#132552', fontWeight: 900 }}>
                        {plan.price}
                      </span>
                      <span className="font-semibold" style={{ color: '#4B5563' }}>
                        {plan.period}
                      </span>
                    </div>
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
                    onClick={() => setSelectedPlan(plan.id)}
                    className="w-full py-2.5 rounded-lg font-bold transition-all text-sm"
                    style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
                  >
                    Become Now
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