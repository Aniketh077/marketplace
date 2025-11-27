import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { industryAPI } from '../api/industryAPI';

export default function EcoIndustriesPage() {
  const [industries, setIndustries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await industryAPI.getAll();
        if (res.success) {
          setIndustries(res.industries);
        }
      } catch (error) {
        console.error('Error loading industries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIndustries();
  }, []);

  const filteredIndustries = useMemo(() => {
    if (!searchTerm.trim()) return industries;
    const term = searchTerm.toLowerCase();
    return industries.filter(
      (industry) =>
        industry.name.toLowerCase().includes(term) ||
        industry.description?.toLowerCase().includes(term)
    );
  }, [industries, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-green-200 font-semibold">
              Eco Marketplace Industries
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore All Industries We Empower
            </h1>
            <p className="text-lg text-green-100">
              Browse every sector actively sourcing post-consumer recycled materials through our network.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow p-6 md:p-8 -mt-16 mb-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm text-gray-500">Active Industries</p>
                <h2 className="text-3xl font-bold text-gray-900">
                  {industries.length}+ Industries
                </h2>
                <p className="text-gray-600">
                  Filter and explore to find the perfect match for your sourcing needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search industries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <Link
                  to="/eco-materials"
                  className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold text-center hover:bg-green-700 transition"
                >
                  Browse Materials
                </Link>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="py-20 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : filteredIndustries.length === 0 ? (
            <div className="bg-white rounded-2xl shadow p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">No industries found</h3>
              <p className="text-gray-600">
                Try adjusting your search to find the industry you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIndustries.map((industry) => (
                <Link
                  key={industry._id}
                  to={`/eco-materials?industry=${industry.slug}`}
                  className="bg-white rounded-2xl shadow hover:shadow-lg transition border border-gray-100 hover:border-green-500 overflow-hidden"
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
                          {industry.materialCount} materials listed
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {industry.description}
                    </p>
                    <div className="flex items-center justify-between text-sm font-semibold">
                      <span className="text-green-600">View compatible materials</span>
                      <span className="text-green-600 text-lg">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

