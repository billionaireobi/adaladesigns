import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiPhone, FiInstagram } from 'react-icons/fi';
import { apiService } from '../services/api';
import type { Design } from '../types';

const DesignDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [design, setDesign] = useState<Design | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      loadDesign(parseInt(id));
    }
  }, [id]);

  const loadDesign = async (designId: number) => {
    try {
      setLoading(true);
      const data = await apiService.getDesign(designId);
      setDesign(data);
    } catch (err) {
      setError('Failed to load design');
      console.error('Error loading design:', err);
    } finally {
      setLoading(false);
    }
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

  if (error || !design) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-[#FAF8F5]">
        <div className="text-center px-6">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">Design Not Found</h2>
          <p className="text-gray-600 mb-8">The design you're looking for doesn't exist.</p>
          <Link to="/catalogue" className="btn-primary">
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 bg-[#FAF8F5]">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <Link
          to="/catalogue"
          className="inline-flex items-center text-gray-600 hover:text-amber-600 transition-colors uppercase text-sm tracking-widest"
        >
          <FiArrowLeft className="mr-2" />
          Back to Collection
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image */}
          <div className="bg-white p-4">
            <div className="aspect-[3/4] bg-gray-200 overflow-hidden">
              {design.image_url ? (
                <img
                  src={`http://localhost:5000${design.image_url}`}
                  alt={design.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 uppercase tracking-widest">No Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="lg:py-8">
            <p className="text-amber-600 text-sm uppercase tracking-widest mb-4">
              {design.category}
            </p>
            
            <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              {design.title}
            </h1>

            <div className="font-serif text-3xl text-amber-600 mb-8">
              {formatPrice(design.price, design.currency)}
            </div>

            {design.description && (
              <div className="mb-10">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Description</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{design.description}</p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-4 mb-12">
              <a
                href={`https://wa.me/254726539925?text=Hi! I'm interested in the "${design.title}" design. Can we discuss pricing and customization options?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 transition-colors duration-300 uppercase tracking-widest text-sm"
              >
                <FiPhone className="mr-3" />
                Inquire on WhatsApp
              </a>

              <a
                href="https://www.instagram.com/adaborafashion"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-4 px-6 transition-colors duration-300 uppercase tracking-widest text-sm"
              >
                <FiInstagram className="mr-3" />
                See More on Instagram
              </a>
            </div>

            {/* Features */}
            <div className="bg-white p-8">
              <h3 className="font-serif text-xl text-gray-900 mb-6">Why Choose AdalaDesigns?</h3>
              <div className="space-y-4">
                {[
                  'Premium quality fabrics and materials',
                  'Expert craftsmanship and attention to detail',
                  'Custom measurements and fittings',
                  'Fast turnaround times',
                  'Satisfaction guarantee',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-600"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignDetail;