import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPlus, FiEdit, FiTrash2, FiLogOut, FiGrid, FiHome } from 'react-icons/fi';
import { apiService } from '../../services/api';
import type { Design } from '../../types';
import { env } from '../../config/env';

const AdminDashboard = () => {
  const [designs, setDesigns] = useState<Design[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!apiService.isAuthenticated()) {
      navigate('/admin/login');
      return;
    }
    loadDesigns();
  }, [navigate]);

  const loadDesigns = async () => {
    try {
      setLoading(true);
      const data = await apiService.getDesigns();
      setDesigns(data);
    } catch (err) {
      setError('Failed to load designs');
      console.error('Error loading designs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this design?')) return;

    try {
      await apiService.deleteDesign(id);
      setDesigns(designs.filter(design => design.id !== id));
    } catch (err) {
      alert('Failed to delete design');
      console.error('Error deleting design:', err);
    }
  };

  const handleLogout = () => {
    apiService.logout();
    navigate('/admin/login');
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 flex items-center justify-center border border-amber-500">
                <span className="font-serif font-bold text-lg text-amber-500">A</span>
              </div>
              <div>
                <h1 className="font-serif text-xl">Admin Dashboard</h1>
                <p className="text-xs text-gray-400">Manage your catalogue</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
              >
                <FiHome size={18} />
                <span className="hidden sm:inline text-sm">View Site</span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
              >
                <FiLogOut size={18} />
                <span className="hidden sm:inline text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Stats & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <div>
            <h2 className="font-serif text-3xl text-gray-900">Your Designs</h2>
            <p className="text-gray-600">{designs.length} items in your catalogue</p>
          </div>
          <Link 
            to="/admin/design/new" 
            className="btn-primary flex items-center"
          >
            <FiPlus className="mr-2" />
            Add New Design
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 mb-8">
            {error}
          </div>
        )}

        {designs.length === 0 ? (
          <div className="bg-white text-center py-20 px-6">
            <FiGrid size={48} className="mx-auto text-gray-300 mb-6" />
            <h3 className="font-serif text-2xl text-gray-900 mb-3">No Designs Yet</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start building your catalogue by adding your first design. 
              Showcase your craftsmanship to the world!
            </p>
            <Link to="/admin/design/new" className="btn-primary inline-flex items-center">
              <FiPlus className="mr-2" />
              Add Your First Design
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {designs.map((design) => (
              <div key={design.id} className="bg-white overflow-hidden group">
                {/* Image */}
                <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                  {design.image_url ? (
                    <img
                      src={`${env.apiBaseUrl}${design.image_url}`}
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-500 text-xs uppercase tracking-widest">No Image</span>
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-gray-900">
                      {design.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-serif text-lg text-gray-900 mb-1 truncate">{design.title}</h3>
                  <p className="text-amber-600 font-medium mb-4">
                    {formatPrice(design.price, design.currency)}
                  </p>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Link
                      to={`/admin/design/edit/${design.id}`}
                      className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-sm py-2 px-4 transition-colors duration-300 flex items-center justify-center"
                    >
                      <FiEdit size={14} className="mr-2" />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(design.id!)}
                      className="bg-red-600 hover:bg-red-700 text-white text-sm py-2 px-4 transition-colors duration-300 flex items-center justify-center"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;