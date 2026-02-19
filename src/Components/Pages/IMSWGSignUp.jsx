import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IMSWGSignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    position: '',
    bio: '',
    country: '',
    areaOfInterest: '',
    areaOfExpertise: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.bio.trim()) {
      newErrors.bio = 'Bio is required';
    } else if (formData.bio.trim().length < 50) {
      newErrors.bio = 'Bio must be at least 50 characters';
    }
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.areaOfExpertise.trim()) newErrors.areaOfExpertise = 'Area of expertise is required';
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    try {
      const apiUrl = 'https://aquamarine-kingfisher-700098.hostingersite.com/api';
      const response = await fetch(`${apiUrl}/imswg-signup.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to submit application');
      }

      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        whatsappNumber: '',
        position: '',
        bio: '',
        country: '',
        areaOfInterest: '',
        areaOfExpertise: ''
      });

      setTimeout(() => {
        navigate('/imswg');
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ 
        submit: error.message || 'Failed to submit application. Please try again or contact us at info@gogmi.org.gh'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-10 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1e293b' }}>
            Application Submitted!
          </h2>
          <p className="text-lg mb-6" style={{ color: '#64748b' }}>
            Thank you for your interest in joining the International Maritime Security Working Group.
          </p>
          <p className="text-base mb-8" style={{ color: '#64748b' }}>
            Our secretariat will review your application and get back to you via email within 5-7 business days.
          </p>
          <button
            onClick={() => navigate('/imswg')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to IMSWG</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/imswg')}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to IMSWG</span>
          </button>
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#1e293b' }}>
            Join IMSWG
          </h1>
          <p className="text-lg" style={{ color: '#64748b' }}>
            International Maritime Security Working Group Application
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
          {/* Introduction */}
          <div className="mb-10 p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900">
            <p className="text-base leading-relaxed" style={{ color: '#475569' }}>
              If you are interested in ocean governance, maritime safety and security, think tank development, 
              international relations, international maritime and trade development and other international issues, 
              and are willing to join the International Maritime Security Working Group, please submit the following 
              information and the forum Secretariat will get back to you.
            </p>
          </div>

          {/* Error Message */}
          {errors.submit && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 font-semibold">{errors.submit}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#1e293b' }}>
                Personal Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent ${
                      errors.fullName ? 'border-red-300' : 'border-slate-200'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-sm mt-1 font-semibold">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent ${
                      errors.email ? 'border-red-300' : 'border-slate-200'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1 font-semibold">{errors.email}</p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                    Country of Residence <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent ${
                      errors.country ? 'border-red-300' : 'border-slate-200'
                    }`}
                    placeholder="e.g., Ghana"
                  />
                  {errors.country && (
                    <p className="text-red-600 text-sm mt-1 font-semibold">{errors.country}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#1e293b' }}>
                Professional Information
              </h3>
              
              <div className="space-y-6">
                {/* Position */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                    Current Professional/Position or Title Held <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent ${
                      errors.position ? 'border-red-300' : 'border-slate-200'
                    }`}
                    placeholder="e.g., Maritime Security Analyst"
                  />
                  {errors.position && (
                    <p className="text-red-600 text-sm mt-1 font-semibold">{errors.position}</p>
                  )}
                </div>

                {/* Area of Expertise */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                    Area of Expertise <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="areaOfExpertise"
                    value={formData.areaOfExpertise}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent ${
                      errors.areaOfExpertise ? 'border-red-300' : 'border-slate-200'
                    }`}
                  >
                    <option value="">Select your area of expertise</option>
                    <option value="Maritime Security">Maritime Security</option>
                    <option value="Ocean Governance">Ocean Governance</option>
                    <option value="Blue Economy">Blue Economy</option>
                    <option value="International Relations">International Relations</option>
                    <option value="Maritime Law">Maritime Law</option>
                    <option value="Naval Operations">Naval Operations</option>
                    <option value="Port & Shipping">Port & Shipping</option>
                    <option value="Fisheries Management">Fisheries Management</option>
                    <option value="Environmental Policy">Environmental Policy</option>
                    <option value="Trade & Economics">Trade & Economics</option>
                    <option value="Policy Research">Policy Research</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.areaOfExpertise && (
                    <p className="text-red-600 text-sm mt-1 font-semibold">{errors.areaOfExpertise}</p>
                  )}
                </div>

                {/* Area of Interest (Optional) */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                    Area of Interest <span className="text-slate-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    placeholder="e.g., Piracy prevention, Blue carbon credits"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#1e293b' }}>
                    A Brief Bio of You <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 bg-white border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-none ${
                      errors.bio ? 'border-red-300' : 'border-slate-200'
                    }`}
                    placeholder="Tell us about your background, experience, and interest in maritime security... (minimum 50 characters)"
                  ></textarea>
                  <div className="flex justify-between items-center mt-2">
                    {errors.bio ? (
                      <p className="text-red-600 text-sm font-semibold">{errors.bio}</p>
                    ) : (
                      <p className="text-slate-400 text-sm">
                        {formData.bio.length} / 50 minimum characters
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-200">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
              </button>
              <p className="text-sm text-center mt-4" style={{ color: '#64748b' }}>
                By submitting this form, you agree to be contacted regarding IMSWG activities
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IMSWGSignUp;