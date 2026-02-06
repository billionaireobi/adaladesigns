import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Collection', href: '/catalogue' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border-2 transition-all duration-300 ${
              isScrolled ? 'border-amber-600' : 'border-white'
            }`}>
              <span className={`font-serif font-bold text-xl sm:text-2xl transition-colors duration-300 ${
                isScrolled ? 'text-amber-600' : 'text-white'
              }`}>A</span>
            </div>
            <span className={`font-serif text-lg sm:text-xl tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Adala<span className="text-amber-500">Designs</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-sm uppercase tracking-wider font-medium transition-colors duration-300 whitespace-nowrap ${
                  isScrolled 
                    ? isActive(item.href) ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                    : isActive(item.href) ? 'text-amber-400' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500"></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <a
              href="https://wa.me/254726539925"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs uppercase tracking-wider font-medium py-2.5 px-5 border-2 transition-all duration-300 whitespace-nowrap ${
                isScrolled 
                  ? 'border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-gray-900'
              }`}
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-fade-in">
            <div className="px-6 py-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-3 text-base font-medium tracking-wide border-b border-gray-100 transition-colors duration-300 ${
                    isActive(item.href) ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/254726539925"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 mt-4 text-center bg-amber-600 text-white font-medium tracking-widest uppercase text-sm"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;