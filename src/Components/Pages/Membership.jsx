import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const membershipTiers = [
    {
      id: 'student',
      name: 'Student Membership',
      price: 'GHS 100',
      period: '/year',
      description: 'For students pursuing careers in maritime studies and blue economy sectors',
      features: [
        'Access to research publications and reports',
        'Invitations to webinars and virtual events',
        'Blue Mentorship Programme participation',
        'Student networking opportunities',
        'Discounted training programs',
        'Career guidance and resources',
        'Monthly newsletter subscription',
        'Access to maritime job board'
      ]
    },
    {
      id: 'individual',
      name: 'Individual Membership',
      price: 'GHS 500',
      period: '/year',
      description: 'For maritime professionals, researchers, and practitioners',
      popular: true,
      features: [
        'All Student Membership benefits',
        'Access to IMSWG forum discussions',
        'Priority event registration',
        'Participation in policy working groups',
        'Networking with regional experts',
        'Certificate of membership',
        'Voting rights in general assemblies',
        'Access to member-only resources',
        'Professional development opportunities',
        'Research collaboration opportunities'
      ]
    },
    {
      id: 'corporate',
      name: 'Corporate Membership',
      price: 'GHS 5,000',
      period: '/year',
      description: 'For companies and organizations in the maritime industry',
      features: [
        'All Individual Membership benefits',
        'Up to 5 designated representatives',
        'Corporate branding on GoGMI platforms',
        'Sponsorship opportunities for events',
        'Customized training programs',
        'Strategic partnership opportunities',
        'Policy advocacy representation',
        'Access to industry intelligence reports',
        'Exhibition space at annual conferences',
        'Corporate recognition in publications'
      ]
    },
    {
      id: 'institutional',
      name: 'Institutional Membership',
      price: 'Contact Us',
      period: '',
      description: 'For government agencies, universities, and international organizations',
      features: [
        'All Corporate Membership benefits',
        'Unlimited designated representatives',
        'Joint research initiatives',
        'Capacity building program design',
        'Policy co-development opportunities',
        'Regional coordination support',
        'Data and intelligence sharing',
        'Institutional partnership agreements',
        'Board representation opportunities',
        'Strategic advisory access'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image - No overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&fit=crop" 
            alt="Membership"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Membership
            </h1>
            <p className="text-xl text-white/95 leading-relaxed" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
              Join West Africa's leading maritime think tank and contribute to shaping the future of the Gulf of Guinea's blue economy
            </p>
          </div>
        </div>
      </section>

      {/* What is Membership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
                <span className="text-[#C1A875] font-semibold tracking-wider text-sm uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About Membership</span>
              </div>
              <h2 className="text-4xl font-bold text-[#132552] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                What Does Membership Mean?
              </h2>
            </div>

            <div className="prose prose-lg max-w-none" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
              <p className="text-[#132552]/80 text-lg leading-relaxed mb-6">
                GoGMI membership provides access to a vibrant community of maritime professionals, researchers, policymakers, and industry leaders across the Gulf of Guinea region. As a member, you become part of West Africa's premier maritime think tank, dedicated to advancing maritime security, sustainable blue economy development, and regional cooperation.
              </p>

              <p className="text-[#132552]/80 text-lg leading-relaxed mb-6">
                Members gain exclusive access to cutting-edge research, policy briefs, training programs, and networking opportunities that connect you with experts across West and Central Africa. Whether you're a student beginning your maritime career, a professional seeking to expand your network, or an organization looking to shape regional maritime policy, GoGMI membership offers tailored benefits to support your goals.
              </p>

              <p className="text-[#132552]/80 text-lg leading-relaxed">
                By joining GoGMI, you contribute directly to addressing critical maritime challenges in the region, from combating illegal fishing and maritime crime to promoting sustainable resource management and blue economy innovation. Your membership supports our mission to foster maritime awareness, capacity building, and evidence-based policymaking across the Gulf of Guinea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
              <span className="text-[#C1A875] font-semibold tracking-wider text-sm uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Benefits</span>
              <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold text-[#132552] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Join GoGMI?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C1A875]/20">
              <h3 className="text-xl font-bold text-[#132552] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Knowledge & Research
              </h3>
              <p className="text-[#132552]/70 leading-relaxed" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                Access comprehensive maritime research, publications, and policy briefs from across the Gulf of Guinea region. Stay informed about the latest developments in maritime security and blue economy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C1A875]/20">
              <h3 className="text-xl font-bold text-[#132552] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Professional Network
              </h3>
              <p className="text-[#132552]/70 leading-relaxed" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                Connect with maritime professionals, researchers, and policymakers across West and Central Africa. Participate in regional forums, conferences, and collaborative initiatives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#C1A875]/20">
              <h3 className="text-xl font-bold text-[#132552] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Capacity Building
              </h3>
              <p className="text-[#132552]/70 leading-relaxed" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                Participate in training programs, workshops, and skill development sessions led by industry experts. Access mentorship opportunities and career development resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
              <span className="text-[#C1A875] font-semibold tracking-wider text-sm uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Membership Tiers</span>
              <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold text-[#132552] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Choose Your Plan
            </h2>
            <p className="text-[#132552]/70 text-lg max-w-3xl mx-auto" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
              Flexible membership options designed for students, professionals, organizations, and institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`bg-white rounded-xl border-2 ${
                  tier.popular ? 'border-[#C1A875] shadow-xl' : 'border-[#C1A875]/20 shadow-sm'
                } hover:shadow-lg transition-all`}
              >
                {tier.popular && (
                  <div className="bg-[#C1A875] text-[#132552] px-4 py-2 text-xs font-bold text-center rounded-t-lg" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#132552] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {tier.name}
                  </h3>
                  <p className="text-[#132552]/70 text-sm mb-6 leading-relaxed" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                    {tier.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-[#132552]" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {tier.price}
                      </span>
                      <span className="text-[#132552]/60" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                        {tier.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#C1A875] flex-shrink-0 mt-0.5" />
                        <span className="text-[#132552]/70 text-sm leading-relaxed" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(tier.id)}
                    className="w-full bg-[#C1A875] text-[#132552] py-3 rounded-lg font-semibold hover:bg-[#7A4E3A] hover:text-[#F5F7FA] transition-all"
                    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
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
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
              <span className="text-[#C1A875] font-semibold tracking-wider text-sm uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>How to Apply</span>
              <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
            </div>
            <h2 className="text-4xl font-bold text-[#132552] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Application Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C1A875] text-[#132552] rounded-full text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-[#132552] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {process.title}
                </h3>
                <p className="text-[#132552]/70 text-sm leading-relaxed" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-[#132552] to-[#1A336C] text-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Join?
            </h2>
            <p className="text-[#F5F7FA]/90 text-lg mb-8" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
              Have questions about membership? Contact our team for more information.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="font-semibold mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Email</p>
                <a href="mailto:membership@gogmi.org.gh" className="text-[#C1A875] hover:underline" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                  membership@gogmi.org.gh
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="font-semibold mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Phone</p>
                <a href="tel:+233546408096" className="text-[#C1A875] hover:underline" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                  +233 54 640 8096
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="font-semibold mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Address</p>
                <p className="text-[#F5F7FA]/90 text-sm" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                  Accra, Ghana
                </p>
              </div>
            </div>

            <a
              href="#plans"
              className="inline-flex items-center gap-3 bg-[#C1A875] text-[#132552] px-8 py-4 rounded-lg font-bold hover:bg-[#7A4E3A] hover:text-[#F5F7FA] transition-all"
              style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
            >
              <span>Apply for Membership</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;