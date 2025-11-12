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
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("https://i.pinimg.com/736x/00/8f/e6/008fe6a0f849690bc9f2d61052d6d5de.jpg")`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30 mb-6">
            <Mail className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-200 font-semibold text-sm">Let's Connect</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
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
                color: 'from-blue-600 to-blue-800'
              },
              {
                icon: <Mail className="w-8 h-8" />,
                title: 'Email Us',
                info: 'info@gogmi.org.gh',
                subinfo: 'We reply within 24 hours',
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: 'Visit Us',
                info: 'Accra, Ghana',
                subinfo: 'Gulf of Guinea Region',
                color: 'from-teal-600 to-cyan-700'
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2`}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg font-semibold mb-1">{item.info}</p>
                <p className="text-sm text-white/80">{item.subinfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <p className="text-green-800 font-medium">Message sent successfully! We'll be in touch soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Jonas Boss"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="jonas@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+233 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-gray-900 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Office Info & Map */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Office Hours</h3>
                <div className="space-y-4">
                  {[
                    { days: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
                    { days: 'Saturday', hours: 'closed' },
                    { days: 'Sunday', hours: 'Closed' }
                  ].map((schedule, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-yellow-500" />
                        <span className="font-semibold text-gray-800">{schedule.days}</span>
                      </div>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-gray-100 rounded-2xl overflow-hidden h-80">
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
              <div className="bg-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                <p className="text-white/80 mb-6">Follow us on social media for updates and insights</p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, link: '#', name: 'LinkedIn', color: 'hover:bg-blue-600' },
                    { icon: <Twitter className="w-5 h-5" />, link: '#', name: 'Twitter', color: 'hover:bg-sky-500' },
                    { icon: <Facebook className="w-5 h-5" />, link: '#', name: 'Facebook', color: 'hover:bg-blue-700' },
                    { icon: <Youtube className="w-5 h-5" />, link: '#', name: 'YouTube', color: 'hover:bg-red-600' },
                    { icon: <MessageCircle className="w-5 h-5" />, link: '#', name: 'WhatsApp', color: 'hover:bg-green-500' }
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center ${social.color} transition-all hover:scale-110 group relative`}
                      title={social.name}
                    >
                      {social.icon}
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
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
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <h4 className="text-lg font-bold text-blue-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;