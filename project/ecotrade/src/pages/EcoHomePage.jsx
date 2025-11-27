import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { industryAPI } from '../api/industryAPI';
import { materialAPI } from '../api/materialAPI';

export default function EcoHomePage() {
  const [industries, setIndustries] = useState([]);
  const [featuredMaterials, setFeaturedMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const industriesScrollRef = useRef(null);
  const featuredScrollRef = useRef(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [industriesRes, materialsRes] = await Promise.all([
        industryAPI.getAll(),
        materialAPI.getAll({ featured: true, limit: 6 })
      ]);

      if (industriesRes.success) {
        setIndustries(industriesRes.industries);
      }

      if (materialsRes.success) {
        setFeaturedMaterials(materialsRes.materials);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  const scrollContainer = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/Hero1.jpg"
            alt="Sustainable Recycling"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest text-green-200 font-semibold mb-4 animate-fade-in">
              B2B Recycled Materials Marketplace
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Post-Consumer Recycled Materials for Industry
            </h1>
            <p className="text-lg md:text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Connect with verified PCR suppliers. Accelerate your sustainability goals with quality-certified recycled content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/eco-industries"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
              >
                Explore Industries
              </Link>
              <Link
                to="/eco-materials"
                className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition border-2 border-green-100"
              >
                Browse Materials
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide text-green-600 font-semibold mb-2">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Eco Marketplace Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From discovery to delivery, we simplify PCR material sourcing with our streamlined 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-full border-2 border-green-200">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white text-2xl font-bold mb-6 mx-auto">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Choose Material
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  Browse our extensive catalog of Post-Consumer Recycled materials across multiple industries
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>500+ verified PCR materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Advanced search & filters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Detailed specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Real-time availability</span>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">
                  →
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 h-full border-2 border-blue-200">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-6 mx-auto">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Validate Supply
                </h3>
                <p className="text-gray-700 text-center mb-6">
                  Verify material quality and compliance with comprehensive documentation and certifications
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>ISO certified quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>Third-party test reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>Compliance certificates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">✓</span>
                    <span>Supplier audit reports</span>
                  </li>
                </ul>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  →
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 h-full border-2 border-orange-200">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 text-white text-2xl font-bold mb-6 mx-auto">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Start Sourcing
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Request quotes, coordinate samples, and receive materials with full logistics support
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">✓</span>
                  <span>24-hour quote response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">✓</span>
                  <span>Free sample coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">✓</span>
                  <span>End-to-end logistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">✓</span>
                  <span>Dedicated support team</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/eco-materials"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
            >
              Start Sourcing Now
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-wide text-green-600 font-semibold">
                Industries We Serve
              </p>
              <h2 className="text-3xl font-bold text-gray-800">
                Trusted by Leading Sectors
              </h2>
              <p className="text-gray-600 mt-2">
                Connecting manufacturers with sustainable material solutions across diverse industries
              </p>
            </div>
            <Link
              to="/eco-industries"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              View All Industries →
            </Link>
          </div>

          <div className="-mx-4 px-4 relative">
            <button
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center text-green-600 hover:bg-green-50 transition"
              onClick={() => scrollContainer(industriesScrollRef, 'prev')}
            >
              ‹
            </button>
            <button
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center text-green-600 hover:bg-green-50 transition"
              onClick={() => scrollContainer(industriesScrollRef, 'next')}
            >
              ›
            </button>
            <div
              ref={industriesScrollRef}
              className="overflow-x-auto hide-scrollbar pb-6 scroll-smooth"
            >
              <div className="flex gap-5 snap-x snap-mandatory min-w-max pr-4">
                {industries.map((industry) => (
                  <Link
                    key={industry._id}
                    to={`/eco-materials?industry=${industry.slug}`}
                    className="snap-start flex-none w-72 md:w-80 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100 hover:border-green-500"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        {industry.icon && (
                          <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mr-4">
                            <img
                              src={industry.icon}
                              alt={industry.name}
                              className="w-10 h-10 object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {industry.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {industry.materialCount} materials
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {industry.description}
                      </p>
                      <div className="flex items-center justify-between text-sm font-semibold">
                        <span className="text-green-600">Explore Materials</span>
                        <span className="text-green-600 text-lg">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredMaterials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-wide text-green-600 font-semibold mb-2">
                Quality Certified
              </p>
              <h2 className="text-3xl font-bold text-gray-800">
                Featured PCR Materials
              </h2>
            </div>
            <div className="-mx-4 px-4 relative">
              <button
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center text-green-600 hover:bg-green-50 transition"
                onClick={() => scrollContainer(featuredScrollRef, 'prev')}
              >
                ‹
              </button>
              <button
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 items-center justify-center text-green-600 hover:bg-green-50 transition"
                onClick={() => scrollContainer(featuredScrollRef, 'next')}
              >
                ›
              </button>
              <div
                ref={featuredScrollRef}
                className="overflow-x-auto hide-scrollbar pb-6 scroll-smooth"
              >
                <div className="flex gap-6 min-w-max pr-4">
                  {featuredMaterials.map((material) => (
                    <Link
                      key={material._id}
                      to={`/eco-materials/${material._id}`}
                      className="flex-none w-80 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden border border-gray-100 hover:border-green-500"
                    >
                      {material.images && material.images[0] && (
                        <img
                          src={material.images[0]}
                          alt={material.name}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <div className="text-sm text-green-600 font-semibold mb-2">
                          {material.materialCode}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {material.name}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                          {material.description}
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-gray-600 text-sm">
                            Available: {material.availableQuantity} {material.unit}
                          </span>
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
                            Request Quote
                          </button>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide text-green-600 font-semibold mb-2">
              The Eco Marketplace Advantage
            </p>
            <h2 className="text-3xl font-bold text-gray-800">
              Why Industry Leaders Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Certified Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Every PCR material undergoes rigorous testing and certification to meet international quality standards and compliance requirements.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Verified Suppliers</h3>
              <p className="text-gray-600 leading-relaxed">
                Access a curated network of pre-vetted suppliers with proven track records in sustainable material processing and delivery.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated sourcing specialists respond within 24 hours to coordinate samples, documentation, and logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Accelerate Your Sustainability Journey?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Connect with verified PCR suppliers and transform your material sourcing strategy today.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/eco-materials"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg"
            >
              Browse Materials
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition border-2 border-white"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
