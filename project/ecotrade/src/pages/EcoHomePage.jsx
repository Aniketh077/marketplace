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
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Eco Marketplace for PCR Materials
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Connecting Industries with Sustainable Post-Consumer Recycled Materials
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/eco-industries"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Browse Industries
              </Link>
              <Link
                to="/eco-materials"
                className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition"
              >
                View All Materials
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm uppercase tracking-wide text-green-600 font-semibold">
                Industries
              </p>
              <h2 className="text-3xl font-bold text-gray-800">
                Industries We Serve
              </h2>
              <p className="text-gray-600 mt-2">
                Scroll horizontally to explore the sectors partnering with us
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
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Featured Materials
            </h2>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Eco Marketplace?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">
                All PCR materials are certified and tested for quality compliance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Sourcing</h3>
              <p className="text-gray-600">
                Supporting circular economy through responsible recycling
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Expert team responds to requests within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Source Sustainable Materials?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Browse our catalog and submit a request. No registration required.
          </p>
          <Link
            to="/eco-industries"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
