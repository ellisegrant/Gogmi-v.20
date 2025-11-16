import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Facebook, CheckCircle, Youtube, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Hero Section with Image */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&fit=crop" 
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#132552]/20 via-[#1A336C]/15 to-[#132552]/20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-[#C1A875] rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#7A4E3A] rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-[#C1A875]/20 backdrop-blur-sm px-6 py-3 rounded-full border border-[#C1A875]/30 mb-6">
            <Mail className="w-5 h-5 text-[#C1A875]" />
            <span className="text-[#F5F7FA] font-semibold text-sm" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Let's Connect</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F7FA] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Get In Touch
          </h1>
          <p className="text-xl text-[#F5F7FA]/90 max-w-3xl mx-auto" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
            Have a question or want to work with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative -mt-16 z-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Call Us',
                info: '+233 50 4953400',
                subinfo: 'Mon-Fri 8:30 am-5pm GMT',
                color: 'from-[#132552] to-[#1A336C]'
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email Us',
                info: 'info@gogmi.org.gh',
                subinfo: 'We reply within 24 hours',
                color: 'from-[#C1A875] to-[#7A4E3A]'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Visit Us',
                info: 'Accra, Ghana',
                subinfo: 'Gulf of Guinea Region',
                color: 'from-[#1A336C] to-[#132552]'
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-[#F5F7FA] shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2`}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                <p className="text-lg font-semibold mb-1" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{item.info}</p>
                <p className="text-sm text-[#F5F7FA]/80" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{item.subinfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
                <span className="text-[#C1A875] font-semibold tracking-wider text-sm uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Contact Form</span>
              </div>
              <h2 className="text-4xl font-bold text-[#132552] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Send Us a Message</h2>
              <p className="text-lg text-[#132552]/70 mb-8" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-xl p-4 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-green-800 font-medium" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Message sent successfully! We'll be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#132552] mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#C1A875]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C1A875] focus:border-transparent text-[#132552]"
                      placeholder="Jonas Boss"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#132552] mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#C1A875]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C1A875] focus:border-transparent text-[#132552]"
                      placeholder="jonas@example.com"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#132552] mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#C1A875]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C1A875] focus:border-transparent text-[#132552]"
                      placeholder="+233 XXX XXX XXX"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#132552] mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Subject *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border-2 border-[#C1A875]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C1A875] focus:border-transparent text-[#132552]"
                      style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="services">Services Information</option>
                      <option value="project">Project Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#132552] mb-2" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-white border-2 border-[#C1A875]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C1A875] focus:border-transparent resize-none text-[#132552]"
                    placeholder="Tell us about your inquiry..."
                    style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C1A875] text-[#132552] py-4 rounded-xl font-bold text-lg hover:bg-[#7A4E3A] hover:text-[#F5F7FA] transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Source Sans Pro', sans-serif" }}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Office Info & Map */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#C1A875]/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
                  <h3 className="text-2xl font-bold text-[#132552]" style={{ fontFamily: "'Playfair Display', serif" }}>Office Hours</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { days: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
                    { days: 'Saturday', hours: 'Closed' },
                    { days: 'Sunday', hours: 'Closed' }
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-[#C1A875]/20 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-[#C1A875]" />
                        <span className="font-semibold text-[#132552]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{schedule.days}</span>
                      </div>
                      <span className="text-[#132552]/70" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 shadow-lg border-2 border-[#C1A875]/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8267995654284!2d-0.1969654!3d5.6037168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GOGMI Location"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-[#132552] to-[#1A336C] rounded-2xl p-8 text-[#F5F7FA] shadow-lg">
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Connect With Us</h3>
                <p className="text-[#F5F7FA]/80 mb-6" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Follow us on social media for updates and insights</p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, link: '#', name: 'LinkedIn', color: 'hover:bg-[#C1A875]' },
                    { icon: <Twitter className="w-5 h-5" />, link: '#', name: 'Twitter', color: 'hover:bg-[#C1A875]' },
                    { icon: <Facebook className="w-5 h-5" />, link: '#', name: 'Facebook', color: 'hover:bg-[#C1A875]' },
                    { icon: <Youtube className="w-5 h-5" />, link: '#', name: 'YouTube', color: 'hover:bg-[#C1A875]' },
                    { icon: <MessageCircle className="w-5 h-5" />, link: '#', name: 'WhatsApp', color: 'hover:bg-[#C1A875]' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-[#F5F7FA]/10 rounded-xl flex items-center justify-center ${social.color} transition-all hover:scale-110 group relative`}
                      title={social.name}
                    >
                      {social.icon}
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#132552] text-[#F5F7FA] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
                <span className="text-[#C1A875] font-semibold tracking-wider text-sm uppercase" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>FAQ</span>
                <div className="w-12 h-1 bg-[#C1A875] rounded-full"></div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-[#132552] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Frequently Asked Questions</h2>
            <p className="text-lg text-[#132552]/70" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Quick answers to common questions</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How can I partner with GOGMI?',
                a: 'We welcome partnerships! Please fill out the contact form above with "Partnership Opportunity" as the subject, and our team will reach out to discuss collaboration opportunities.'
              },
              {
                q: 'Do you offer training programs?',
                a: 'Yes, we offer various capacity building and training programs. Visit our Services page for more information or contact us directly for custom training solutions.'
              },
              {
                q: 'How long does it take to get a response?',
                a: 'We typically respond to all inquiries within 24-48 hours during business days. Urgent matters can be directed to our phone line for immediate assistance.'
              },
              {
                q: 'Can I visit your office?',
                a: 'Yes! We welcome office visits. Please schedule an appointment by contacting us in advance to ensure someone is available to meet with you.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#F5F7FA] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border-2 border-[#C1A875]/20 hover:border-[#C1A875]/40">
                <h4 className="text-lg font-bold text-[#132552] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{faq.q}</h4>
                <p className="text-[#132552]/70" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default Contact;