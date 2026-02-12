import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiGrid, FiList, FiFilter } from 'react-icons/fi';
import { apiService } from '../services/api';
import type { Design } from '../types';
import { env } from '../config/env';

const Catalogue = () => {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const selectedCategory = searchParams.get('category');

  useEffect(() => {
    loadDesigns();
    loadCategories();
  }, [selectedCategory]);

  const loadDesigns = async () => {
    try {
      setLoading(true);
      const data = await apiService.getDesigns(selectedCategory || undefined);
      setDesigns(data);
    } catch (err) {
      setError('Failed to load designs');
      console.error('Error loading designs:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadCategories = async () => {
    try {
      const data = await apiService.getCategories();
      setCategories(data);
    } catch (err) {
      console.error('Error loading categories:', err);
    }
  };

  const handleCategoryChange = (category: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  const formatPrice = (price?: number, currency: string = 'KES') => {
    if (!price) return 'Price on Request';
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-[#1A1A1A]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url('/client3.jpeg')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-amber-400 uppercase tracking-[0.4em] text-sm mb-4">Explore</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-4">Our Collection</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Discover our exquisite range of bespoke garments, each crafted with precision and passion
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleCategoryChange(null)}
                className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 ${
                  !selectedCategory
                    ? 'bg-gray-900 text-white'
                    : 'bg-transparent text-gray-600 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-transparent text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 border border-gray-300 p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors duration-300 ${
                  viewMode === 'grid' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiGrid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors duration-300 ${
                  viewMode === 'list' ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <FiList size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Designs Grid */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {error && (
            <div className="text-center py-16">
              <p className="text-red-600 mb-4">{error}</p>
              <button onClick={loadDesigns} className="btn-secondary">
                Try Again
              </button>
            </div>
          )}

          {designs.length === 0 && !error ? (
            <div className="text-center py-20">
              <FiFilter size={48} className="mx-auto text-gray-400 mb-6" />
              <h3 className="font-serif text-2xl text-gray-900 mb-3">No Designs Found</h3>
              <p className="text-gray-600 mb-8">
                {selectedCategory
                  ? `No designs in the "${selectedCategory}" category yet.`
                  : 'No designs available yet. Check back soon!'}
              </p>
              <a
                href="https://wa.me/c/254726539925"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View WhatsApp Catalogue
              </a>
            </div>
          ) : (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                : 'space-y-8'
            }>
              {designs.map((design, index) => (
                <Link
                  key={design.id}
                  to={`/design/${design.id}`}
                  className={`group bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className={`image-zoom ${
                    viewMode === 'grid' ? 'aspect-[3/4]' : 'w-64 h-48 flex-shrink-0'
                  } bg-gray-200`}>
                    {design.image_url ? (
                      <img
                        src={`${env.apiBaseUrl}${design.image_url}`}
                        alt={design.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-sm uppercase tracking-widest">No Image</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
                    <p className="text-amber-600 text-xs uppercase tracking-widest mb-2">
                      {design.category}
                    </p>
                    <h3 className="font-serif text-xl text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {design.title}
                    </h3>
                    {design.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {design.description}
                      </p>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="font-serif text-lg text-gray-900">
                        {formatPrice(design.price, design.currency)}
                      </span>
                      <span className="text-amber-600 text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-[#1A1A1A] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="section-subtitle text-amber-400">Want More?</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
            Explore Our Complete Collection
          </h2>
          <p className="text-gray-400 mb-8">
            Check out our WhatsApp catalogue for the latest designs, fabrics, and exclusive offers.
          </p>
          <a
            href="https://wa.me/c/254726539925"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            📱 WhatsApp Catalogue
          </a>
        </div>
      </section>
    </div>
  );
};

export default Catalogue;