import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiService } from '../../services/api';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.login(formData.username, formData.password);
      localStorage.setItem('token', response.token);
      navigate('/admin/dashboard');
    } catch (err: unknown) {
      const error = err as { response?: { data?: { error?: string } } };
      setError(error.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A1A1A] py-12 px-6">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center border-2 border-amber-500">
              <span className="font-serif font-bold text-3xl text-amber-500">A</span>
            </div>
          </Link>
          <h2 className="mt-6 font-serif text-3xl text-white">Admin Portal</h2>
          <p className="mt-2 text-gray-400">Sign in to manage your catalogue</p>
        </div>

        {/* Form */}
        <div className="bg-white p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="username" className="block text-sm uppercase tracking-widest text-gray-600 mb-2">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm uppercase tracking-widest text-gray-600 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link to="/" className="text-amber-600 hover:text-amber-700 text-sm uppercase tracking-widest">
              ← Back to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;