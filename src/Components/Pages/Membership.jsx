import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Award,
  BookOpen,
  Globe,
  Star,
  Building2,
  GraduationCap,
  UserCircle,
  Ship,
  Calendar,
  Mail,
  Phone,
  MapPin,
  CheckCircle2
} from 'lucide-react';

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const membershipTiers = [
    {
      id: 'student',
      name: 'Student Membership',
      icon: <GraduationCap className="w-12 h-12" />,
      price: 'GHS 100',
      period: '/year',
      description: 'For students pursuing careers in maritime studies and blue economy sectors',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
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
      icon: <UserCircle className="w-12 h-12" />,
      price: 'GHS 500',
      period: '/year',
      description: 'For maritime professionals, researchers, and practitioners',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
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
      icon: <Building2 className="w-12 h-12" />,
      price: 'GHS 5,000',
      period: '/year',
      description: 'For companies and organizations in the maritime industry',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
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
        'Corporate recognition in publications',
        'Exclusive corporate networking events'
      ]
    },
    {
      id: 'institutional',
      name: 'Institutional Membership',
      icon: <Globe className="w-12 h-12" />,
      price: 'Contact Us',
      period: '',
      description: 'For government agencies, universities, and international organizations',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
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
        'Strategic advisory access',
        'Custom engagement packages'
      ]
    }
  ];

  const benefits = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Knowledge Access',
      description: 'Access to cutting-edge maritime research, publications, and policy briefs from across the Gulf of Guinea region.'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Professional Network',
      description: 'Connect with maritime professionals, researchers, and policymakers across West and Central Africa.'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Skill Development',
      description: 'Participate in capacity building programs, workshops, and training sessions led by industry experts.'
    },
    {
      icon: <Ship className="w-10 h-10" />,
      title: 'Industry Insights',
      description: 'Stay informed about maritime security trends, blue economy opportunities, and regional developments.'
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Regional Impact',
      description: 'Contribute to shaping maritime policy and advancing sustainable blue economy initiatives in the region.'
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: 'Exclusive Events',
      description: 'Attend conferences, symposiums, and networking events with regional and international maritime leaders.'
    }
  ];

  const applicationProcess = [
    {
      step: '01',
      title: 'Choose Your Plan',
      description: 'Select the membership tier that best fits your needs and professional goals.'
    },
    {
      step: '02',
      title: 'Complete Application',
      description: 'Fill out the online application form with your details and supporting documents.'
    },
    {
      step: '03',
      title: 'Payment & Review',
      description: 'Submit payment and your application will be reviewed by our membership committee.'
    },
    {
      step: '04',
      title: 'Welcome Aboard',
      description: 'Receive your membership certificate and gain immediate access to all benefits.'
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-yellow-500/30 mb-6">
              <Star className="w-4 h-4 text-yellow-300" />
              <span className="text-yellow-200 font-semibold text-sm">Join Our Maritime Community</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
              Become a Member of
              <span className="block mt-2 text-yellow-300">GoGMI</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join West Africa's leading maritime think tank and be part of a dynamic community shaping the future of the Gulf of Guinea's blue economy
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Membership Plans</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">
              Choose Your Membership Tier
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Flexible membership options designed for students, professionals, organizations, and institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {membershipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative bg-white rounded-2xl border-2 ${tier.borderColor} shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden ${
                  tier.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`${tier.bgColor} p-8`}>
                  <div className={`text-white bg-gradient-to-br ${tier.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-4`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-blue-900">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(tier.id)}
                    className={`w-full py-4 rounded-xl font-bold transition-all bg-gradient-to-br ${tier.color} text-white hover:shadow-lg hover:scale-105`}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP BENEFITS */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Why Join</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">
              Membership Benefits
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Unlock exclusive opportunities and resources as a GoGMI member
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="text-blue-900 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">
              Simple Application Process
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Becoming a GoGMI member is quick and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {applicationProcess.map((process, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl text-2xl font-bold mb-6 shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {idx < applicationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Member Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4 mb-6">
              What Our Members Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Kwame Mensah',
                role: 'Maritime Security Researcher',
                image: '👨‍🔬',
                quote: 'GoGMI membership has opened doors to collaborative research opportunities and connected me with leading experts across the region.'
              },
              {
                name: 'Amina Osei',
                role: 'Blue Economy Entrepreneur',
                image: '👩‍💼',
                quote: 'The Blue Mentorship Programme transformed my career path. I now run a successful marine tourism business thanks to the guidance I received.'
              },
              {
                name: 'Capt. Emmanuel Adu',
                role: 'Naval Officer',
                image: '⚓',
                quote: 'Being part of IMSWG has enhanced my understanding of regional maritime security dynamics and improved our coordination efforts.'
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Have questions about membership? Our team is here to help you choose the right plan and guide you through the application process.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:membership@gogmi.org.gh" className="text-yellow-300 hover:underline">
                      membership@gogmi.org.gh
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+233546408096" className="text-yellow-300 hover:underline">
                      +233 54 640 8096
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-white/90">
                      14 Avenue, Osu Extension<br />
                      Cantonment, P.O.Box CT 4435<br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Quick Application</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Membership Type</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:border-yellow-300">
                    <option value="">Select membership type</option>
                    <option value="student">Student Membership</option>
                    <option value="individual">Individual Membership</option>
                    <option value="corporate">Corporate Membership</option>
                    <option value="institutional">Institutional Membership</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-300"
                    placeholder="Tell us about yourself and why you want to join..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-600 transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Membership;