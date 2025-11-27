import React, { useState } from 'react';
import { contactAPI } from '../api/contactAPI';
import { useToast } from '../contexts/ToastContext';

export default function ContactPage() {
  const { showToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in your name, email, and message.', 'error');
      return;
    }

    setSubmitting(true);
    try {
      await contactAPI.create(formData);
      showToast('Message sent successfully. Our team will reach out shortly.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to send message';
      showToast(message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/Hero3.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-green-200 font-semibold mb-3">
              Get In Touch
            </p>
            <h1 className="text-4xl font-bold mb-4">
              Connect With Our PCR Sourcing Specialists
            </h1>
            <p className="text-lg text-green-100">
              Share your material requirements and sustainability objectives. Our team will curate qualified suppliers, technical documentation, and certified samples tailored to your exact specifications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Business Inquiries</p>
                  <a href="mailto:sales@ecodispose.com" className="text-lg text-green-600 font-semibold hover:underline">
                    sales@ecodispose.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Direct Line</p>
                  <a href="tel:+918861009443" className="text-lg text-green-600 font-semibold hover:underline">
                    +91 88610 09443
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Business Hours</p>
                  <p className="text-gray-700 leading-relaxed">
                    Monday – Friday<br />
                    9:30 AM – 6:30 PM IST
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Responses within 24 hours during business days
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Request a Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="+91 88610 09443"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Material Requirements & Objectives *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Please describe your PCR material requirements, target volumes, quality specifications, delivery timelines, and sustainability objectives..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-green-600 text-white font-semibold text-lg py-3 rounded-lg hover:bg-green-700 transition disabled:bg-gray-400"
                >
                  {submitting ? 'Submitting Request...' : 'Submit Consultation Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

