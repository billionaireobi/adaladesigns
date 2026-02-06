import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiSave, FiArrowLeft, FiUpload, FiX } from 'react-icons/fi';
import { apiService } from '../../services/api';

const AdminDesignForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    currency: 'KES',
  });
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiService.isAuthenticated()) {
      navigate('/admin/login');
      return;
    }

    if (isEditing && id) {
      loadDesign(parseInt(id));
    }
  }, [id, isEditing, navigate]);

  const loadDesign = async (designId: number) => {
    try {
      const design = await apiService.getDesign(designId);
      setFormData({
        title: design.title,
        description: design.description || '',
        category: design.category,
        price: design.price?.toString() || '',
        currency: design.currency,
      });
      if (design.image_url) {
        setImagePreview(`http://localhost:5000${design.image_url}`);
      }
    } catch (err) {
      setError('Failed to load design');
      console.error('Error loading design:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const submitData = new FormData();
      submitData.append('title', formData.title);
      submitData.append('description', formData.description);
      submitData.append('category', formData.category);
      submitData.append('currency', formData.currency);

      if (formData.price) {
        submitData.append('price', formData.price);
      }

      if (image) {
        submitData.append('image', image);
      }

      if (isEditing && id) {
        await apiService.updateDesign(parseInt(id), submitData);
      } else {
        await apiService.createDesign(submitData);
      }

      navigate('/admin/dashboard');
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } };
      setError(error.response?.data?.error || 'Failed to save design');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#1A1A1A] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link 
                to="/admin/dashboard"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiArrowLeft size={20} />
              </Link>
              <div>
                <h1 className="font-serif text-xl">{isEditing ? 'Edit Design' : 'Add New Design'}</h1>
                <p className="text-xs text-gray-400">
                  {isEditing ? 'Update your design details' : 'Create a new design for your catalogue'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <main className="max-w-4xl mx-auto px-6 py-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4">
              {error}
            </div>
          )}

          <div className="bg-white p-8">
            <h2 className="font-serif text-xl text-gray-900 mb-6">Design Image</h2>
            
            {/* Image Upload */}
            <div className="flex items-start space-x-6">
              <div className="w-48 h-64 bg-gray-100 flex items-center justify-center overflow-hidden relative group">
                {imagePreview ? (
                  <>
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FiX size={16} />
                    </button>
                  </>
                ) : (
                  <FiUpload size={32} className="text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="btn-secondary cursor-pointer inline-block"
                >
                  {imagePreview ? 'Change Image' : 'Upload Image'}
                </label>
                <p className="text-sm text-gray-500 mt-3">
                  Recommended: 600x800px or larger<br />
                  Formats: PNG, JPG, GIF, WebP (max 5MB)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8">
            <h2 className="font-serif text-xl text-gray-900 mb-6">Design Details</h2>
            
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm uppercase tracking-widest text-gray-600 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="e.g., Classic Navy Suit"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm uppercase tracking-widest text-gray-600 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Describe the design, materials, and special features..."
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm uppercase tracking-widest text-gray-600 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Select a category</option>
                  <option value="suits">Suits</option>
                  <option value="traditional">Traditional Wear</option>
                  <option value="custom">Custom Designs</option>
                  <option value="shirts">Shirts</option>
                  <option value="trousers">Trousers</option>
                  <option value="jackets">Jackets</option>
                  <option value="wedding">Wedding Attire</option>
                </select>
              </div>

              {/* Price */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <label htmlFor="currency" className="block text-sm uppercase tracking-widest text-gray-600 mb-2">
                    Currency
                  </label>
                  <select
                    id="currency"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="KES">KES (Kenyan Shilling)</option>
                    <option value="USD">USD (US Dollar)</option>
                    <option value="EUR">EUR (Euro)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="price" className="block text-sm uppercase tracking-widest text-gray-600 mb-2">
                    Price (leave empty for "Price on Request")
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="0"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Link
              to="/admin/dashboard"
              className="btn-secondary"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <FiSave className="mr-2" />
              {loading ? 'Saving...' : (isEditing ? 'Update Design' : 'Create Design')}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AdminDesignForm;