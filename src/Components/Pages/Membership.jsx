import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Membership = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    country: '',
    membershipType: '',
    plan: '',
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (!document.getElementById('paystack-script')) {
      const script = document.createElement('script');
      script.id = 'paystack-script';
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.async = true;
      script.onload = () => {
        console.log('Paystack script loaded successfully');
      };
      script.onerror = () => {
        console.error('Failed to load Paystack script');
        alert('Failed to load payment system. Please check your internet connection.');
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openMembershipModal = (plan) => {
    setSelectedPlan(plan);
    setFormData({
      ...formData,
      membershipType: plan.id.includes('student') || plan.id.includes('associate') || plan.id.includes('professional') || plan.id.includes('fellow') ? 'individual' : 'institutional',
      plan: plan.name,
      password: '',
      confirmPassword: ''
    });
    setShowModal(true);
  };

  const closeMembershipModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      position: '',
      country: '',
      membershipType: '',
      plan: '',
      password: '',
      confirmPassword: ''
    });
  };

  const validatePassword = () => {
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
    return true;
  };

  const activateMembership = async (paymentReference) => {
    try {
      const priceMatch = selectedPlan.price.match(/\d+/g);
      const amount = priceMatch ? parseFloat(priceMatch.join('').replace(',', '')) : 0;

      const applicationData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        organization: formData.organization || '',
        position: formData.position || '',
        password: formData.password,
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        membershipType: formData.membershipType,
        amount: amount,
        currency: 'USD',
        paymentReference: paymentReference
      };
      
      const apiUrl = import.meta.env.VITE_API_URL || 'https://gogmi.org.gh/api';
      const result = await fetch(`${apiUrl}/membership/apply.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(applicationData)
      });
      
      const data = await result.json();
      
      if (data.success) {
        let message = `Payment successful!\n\nReference: ${paymentReference}\nCertificate Number: ${data.data.certificateNumber}\n\nYour account has been created successfully!\n\nEmail: ${formData.email}\nPassword: [Your chosen password]\n\nYou can now login and access all member resources.`;
        
        alert(message);
        
        closeMembershipModal();
        
        setTimeout(() => {
          window.location.href = '/login';
        }, 1000);
      } else {
        alert('Payment successful but membership activation failed. Please contact support at info@gogmi.org.gh with reference: ' + paymentReference + '\n\nError: ' + data.message);
      }
      
    } catch (error) {
      console.error('Activation error:', error);
      alert('Payment successful but there was an error activating your membership. Please contact support at info@gogmi.org.gh with reference: ' + paymentReference);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.country || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all required fields');
      return;
    }

    if (!validatePassword()) {
      return;
    }

    const priceMatch = selectedPlan.price.match(/\d+/g);
    const amountUSD = priceMatch ? parseFloat(priceMatch.join('').replace(',', '')) : 0;

    if (amountUSD === 0 || selectedPlan.price === 'By Invitation Only') {
      alert('Thank you for your interest! Our team will contact you at info@gogmi.org.gh regarding this membership tier.');
      closeMembershipModal();
      return;
    }

    if (typeof window.PaystackPop === 'undefined') {
      alert('Payment system is loading. Please wait a moment and try again.');
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.async = true;
      document.body.appendChild(script);
      return;
    }

    const paystackKey = 'pk_live_c4b85f73c7df60cde1d9fa5f72d2bc9afaec4d74';
    
    const amountGHS = amountUSD * 15;
    
    try {
      const handler = window.PaystackPop.setup({
        key: paystackKey,
        email: formData.email,
        amount: amountGHS * 100,
        currency: 'GHS',
        ref: 'GOGMI-' + Math.floor((Math.random() * 1000000000) + 1),
        channels: ['card', 'mobile_money', 'bank', 'ussd', 'qr', 'bank_transfer'],
        
        metadata: {
          custom_fields: [
            {
              display_name: "Full Name",
              variable_name: "full_name",
              value: formData.fullName
            },
            {
              display_name: "Phone",
              variable_name: "phone",
              value: formData.phone
            },
            {
              display_name: "Membership Plan",
              variable_name: "membership_plan",
              value: selectedPlan.name
            },
            {
              display_name: "USD Amount",
              variable_name: "usd_amount",
              value: `$${amountUSD}`
            },
            {
              display_name: "Organization",
              variable_name: "organization",
              value: formData.organization || 'N/A'
            },
            {
              display_name: "Country",
              variable_name: "country",
              value: formData.country
            },
            {
              display_name: "Position",
              variable_name: "position",
              value: formData.position || 'N/A'
            }
          ]
        },
        
        callback: function(response) {
          console.log('Payment successful!');
          console.log('Reference:', response.reference);
          activateMembership(response.reference);
        },
        
        onClose: function() {
          console.log('Payment popup closed');
          alert('Payment cancelled. The payment window was closed.');
        }
      });
      
      handler.openIframe();
      
    } catch (error) {
      console.error('Paystack Error:', error);
      alert('Payment initialization failed. Please check your internet connection and try again.\n\nError: ' + error.message);
    }
  };

  const handleBrochureDownload = () => {
    const brochureUrl = '/resources/pdfs/GoGMI-Membership-2026.pdf';
    const link = document.createElement('a');
    link.href = brochureUrl;
    link.download = 'GoGMI-Membership-2026.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const individualPlans = [
    {
      id: 'student',
      name: 'Student Membership',
      price: 'USD 20',
      period: '/year',
      description: 'Designed for undergraduate students with an interest in maritime, ocean, environmental, and security studies.',
      features: [
        'Official Certificate of Membership',
        'Access to GoGMI research reports and publications',
        'Invitations to student-focused webinars and seminars',
        'Discounted fees for GoGMI trainings and workshops',
        'Structured mentorship opportunities with professionals and researchers',
        'Career development support (research skills, writing clinics, CV guidance)',
        'Access to student networking platforms and discussion groups',
        'Opportunities to volunteer or intern on GoGMI projects'
      ]
    },
    {
      id: 'associate',
      name: 'Associate Membership',
      price: 'USD 100',
      period: '/year',
      popular: true,
      subtitle: '2-7 Years Experience',
      description: 'For early-career professionals (1–5 years of experience) seeking skills development, visibility, and networking.',
      features: [
        'Official Certificate of Membership',
        'Invitations to GoGMI conferences, seminars, and policy dialogues',
        'Discounted access to professional training and workshops',
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
      price: 'USD 200',
      period: '/year',
      subtitle: '7 Years upwards Experience',
      description: 'For mid-level professionals seeking influence, policy engagement, and regional visibility.',
      features: [
        'Official Certificate of Membership',
        'Priority invitations to policy dialogues and expert roundtables',
        'Access to GoGMI research outputs and policy briefs',
        'Discounted access to advanced trainings and conferences',
        'Opportunity to moderate sessions or speak at GoGMI events',
        'Opportunity to mentor young graduates interested in Maritime affairs',
        'Professional profile listing on the GoGMI website',
        'Executive networking with regional experts and institutions'
      ]
    },
    {
      id: 'fellow',
      name: 'Fellow Membership',
      price: 'By Invitation Only',
      period: '',
      subtitle: 'Senior Experts',
      description: 'For senior professionals and experts contributing to maritime research, policy, and governance.',
      features: []
    }
  ];

  const institutionalPlans = [
    {
      id: 'institution',
      name: 'Institutional Membership',
      price: 'USD 2,000',
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
      price: 'USD 4,000',
      period: '/year',
      description: 'For private sector organisations operating in maritime, logistics, energy, security, and related sectors.',
      features: [
        'Official Corporate Membership Certificate',
        'Corporate branding and visibility at GoGMI website, social media, events and publications',
        'Invitations to high-level advisory events and stakeholder dialogues',
        'Access to customised briefings on maritime and ocean governance issues',
        'Networking with local, regional and international partners',
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
        'Priority collaboration on regional and international programmes',
        'Corporate branding and visibility at GoGMI website, social media, events and publications'
      ]
    }
  ];

  return (
    <div className="w-full">
      {showModal && selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl z-10">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#132552', fontWeight: 700 }}>
                    {selectedPlan.name}
                  </h3>
                  <p className="text-lg mt-1" style={{ color: '#8E3400', fontWeight: 600 }}>
                    {selectedPlan.price}{selectedPlan.period}
                  </p>
                </div>
                <button
                  onClick={closeMembershipModal}
                  className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-all"
                  style={{ color: '#4B5563' }}
                >
                  ✕
                </button>
              </div>
            </div>

            <form onSubmit={handlePayment} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#132552' }}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E3400]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#132552' }}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E3400]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#132552' }}>
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E3400]"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                {formData.membershipType === 'institutional' && (
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#132552' }}>
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleFormChange}
                      required={formData.membershipType === 'institutional'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E3400]"
                      placeholder="Enter organization name"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#132552' }}>
                    Position/Title
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E3400]"
                    placeholder="Your current position"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#132552' }}>
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E3400]"
                  >
                    <option value="">Select Country</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Côte d'Ivoire">Côte d'Ivoire</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Togo">Togo</option>
                    <option value="Benin">Benin</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h4 className="font-bold mb-3 text-sm" style={{ color: '#132552' }}>Create Account Password</h4>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#132552' }}>
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleFormChange}
                        required
                        minLength={8}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E3400] pr-12"
                        placeholder="Minimum 8 characters"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#132552' }}>
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleFormChange}
                        required
                        minLength={8}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8E3400] pr-12"
                        placeholder="Re-enter password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold mb-3" style={{ color: '#132552' }}>Membership Benefits:</h4>
                  <ul className="space-y-2">
                    {selectedPlan.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#4B5563' }}>
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#8E3400' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {selectedPlan.features.length > 4 && (
                      <li className="text-sm italic" style={{ color: '#8E3400' }}>
                        + {selectedPlan.features.length - 4} more benefits...
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeMembershipModal}
                  className="flex-1 px-6 py-3 rounded-lg font-bold border-2 transition-all"
                  style={{ borderColor: '#132552', color: '#132552', fontWeight: 700 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 rounded-lg font-bold text-white transition-all"
                  style={{ backgroundColor: '#8E3400', fontWeight: 700 }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
                >
                  {selectedPlan.price === 'By Invitation Only' ? 'Submit Application' : `Pay ${selectedPlan.price}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#132552' }}>
        <div className="absolute inset-0">
          <img 
            src="/memb2.png" 
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
            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('plans')?.offsetTop || 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg transition-all"
              style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

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
                src="/memb1.png"
                alt="Maritime Professionals"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

      <section id="plans" className="py-20 bg-white">
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

                  {plan.id !== 'fellow' && (
                    <>
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
                        onClick={() => openMembershipModal(plan)}
                        className="w-full py-2.5 rounded-lg font-bold transition-all text-sm"
                        style={{ backgroundColor: '#8E3400', color: 'white', fontWeight: 700 }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6B2700'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8E3400'}
                      >
                        Apply Now
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    onClick={() => openMembershipModal(plan)}
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
                description: 'Fill out the online application form with your details.'
              },
              {
                step: '3',
                title: 'Payment',
                description: 'Complete payment securely via Paystack. Your account is automatically created.'
              },
              {
                step: '4',
                title: 'Welcome Aboard',
                description: 'Receive your credentials and gain immediate access to all benefits.'
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

      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/memb3.png"
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
                onClick={handleBrochureDownload}
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