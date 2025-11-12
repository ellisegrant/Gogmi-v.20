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
  CheckCircle2,
  Sparkles
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
      description: 'Access to cutting-edge maritime research, publications, and policy briefs from across the Gulf of Guinea region.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Professional Network',
      description: 'Connect with maritime professionals, researchers, and policymakers across West and Central Africa.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Skill Development',
      description: 'Participate in capacity building programs, workshops, and training sessions led by industry experts.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Ship className="w-10 h-10" />,
      title: 'Industry Insights',
      description: 'Stay informed about maritime security trends, blue economy opportunities, and regional developments.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Regional Impact',
      description: 'Contribute to shaping maritime policy and advancing sustainable blue economy initiatives in the region.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Calendar className="w-10 h-10" />,
      title: 'Exclusive Events',
      description: 'Attend conferences, symposiums, and networking events with regional and international maritime leaders.',
      color: 'from-cyan-500 to-cyan-600'
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
      
      {/* MODERN HERO SECTION WITH IMAGE */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&auto=format&fit=crop&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-blue-900/95"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: '20%', left: '10%' }}></div>
            <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: '60%', left: '80%', animationDelay: '0.5s' }}></div>
            <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ top: '80%', left: '30%', animationDelay: '1s' }}></div>
            <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: '40%', left: '70%', animationDelay: '0.7s' }}></div>
            <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{ top: '70%', left: '60%', animationDelay: '1.2s' }}></div>
          </div>
        </div>
        
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-500/30 mb-8 animate-fade-in">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-yellow-200 font-semibold text-sm">Join Our Maritime Community</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
              Become a Member of
              <span className="block mt-3 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                GoGMI
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-10">
              Join West Africa's leading maritime think tank and be part of a dynamic community shaping the future of the Gulf of Guinea's blue economy
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#plans"
                className="inline-flex items-center gap-3 bg-yellow-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-2xl hover:shadow-yellow-500/50 hover:scale-105"
              >
                <span>Explore Plans</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#benefits"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS */}
      <section id="plans" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`group relative bg-white rounded-2xl border-2 hover:border-blue-900 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden ${
                  tier.popular ? 'ring-4 ring-blue-500/50 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 text-xs font-bold rounded-bl-2xl shadow-lg">
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div className={`relative p-8 ${tier.bgColor} overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 20% 50%, currentColor 0%, transparent 50%)'
                    }}></div>
                  </div>

                  <div className={`relative text-white bg-gradient-to-br ${tier.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">{tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{tier.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-blue-900">{tier.price.split(' ')[0]}</span>
                    {tier.price.split(' ')[1] && <span className="text-xl font-bold text-blue-900">{tier.price.split(' ')[1]}</span>}
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>

                <div className="p-8">
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(tier.id)}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 bg-gradient-to-br ${tier.color} text-white hover:shadow-xl hover:scale-105`}
                  >
                    Apply Now
                  </button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP BENEFITS - MODERN CARDS */}
      <section id="benefits" className="py-20 md:py-28 bg-white">
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
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`text-white bg-gradient-to-br ${benefit.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS - SLEEK DESIGN */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-white">
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

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-yellow-200 to-blue-200"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {applicationProcess.map((process, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center border border-gray-100">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl text-3xl font-bold mb-6 shadow-xl">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - MODERN CARDS */}
      <section className="py-20 md:py-28 bg-white">
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
                quote: 'GoGMI membership has opened doors to collaborative research opportunities and connected me with leading experts across the region.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                name: 'Amina Osei',
                role: 'Blue Economy Entrepreneur',
                image: '👩‍💼',
                quote: 'The Blue Mentorship Programme transformed my career path. I now run a successful marine tourism business thanks to the guidance I received.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                name: 'Capt. Emmanuel Adu',
                role: 'Naval Officer',
                image: '⚓',
                quote: 'Being part of IMSWG has enhanced my understanding of regional maritime security dynamics and improved our coordination efforts.',
                color: 'from-yellow-500 to-yellow-600'
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-5xl w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center shadow-lg`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed border-l-4 border-yellow-400 pl-4">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA - GLASSMORPHISM */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-yellow-400 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-400 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Have questions about membership? Our team is here to help you choose the right plan and guide you through the application process.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <Mail className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:membership@gogmi.org.gh" className="text-yellow-300 hover:underline">
                      membership@gogmi.org.gh
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <Phone className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+233546408096" className="text-yellow-300 hover:underline">
                      +233 54 640 8096
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
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

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Quick Application</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-300 focus:bg-white/20 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-300 focus:bg-white/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Membership Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:border-yellow-300 focus:bg-white/20 transition-all">
                    <option value="">Select membership type</option>
                    <option value="student" className="text-gray-900">Student Membership</option>
                    <option value="individual" className="text-gray-900">Individual Membership</option>
                    <option value="corporate" className="text-gray-900">Corporate Membership</option>
                    <option value="institutional" className="text-gray-900">Institutional Membership</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-yellow-300 focus:bg-white/20 transition-all resize-none"
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