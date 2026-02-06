import { FiInstagram, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center border-2 border-amber-500">
                <span className="font-serif font-bold text-2xl text-amber-500">A</span>
              </div>
              <span className="font-serif text-2xl tracking-wide">
                Adala<span className="text-amber-500">Designs</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Where quality meets craftsmanship. We specialize in bespoke tailoring, 
              creating timeless garments that reflect your unique style and personality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/adaborafashion"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="https://wa.me/254726539925"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                <FiPhone size={18} />
              </a>
              <a
                href="mailto:info@adaladesigns.com"
                className="w-10 h-10 flex items-center justify-center border border-gray-700 text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-amber-500">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Collection', href: '/catalogue' },
                { name: 'About Us', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm uppercase tracking-widest mb-6 text-amber-500">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-amber-500 mt-1 flex-shrink-0" size={16} />
                <div className="text-gray-400 text-sm leading-relaxed">
                  SUPERIOR CENTER<br />
                  6TH FLOOR, SHOP M6<br />
                  Kenyatta Ave & Kimathi St<br />
                  Nairobi, Kenya
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="text-amber-500 flex-shrink-0" size={16} />
                <a
                  href="tel:+254726539925"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  +254 726 539 925
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="text-amber-500 flex-shrink-0" size={16} />
                <a
                  href="mailto:info@adaladesigns.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  info@adaladesigns.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AdalaDesigns. All rights reserved.
            </p>
            <Link to="/admin/login" className="text-gray-500 hover:text-gray-400 text-sm transition-colors duration-300">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;