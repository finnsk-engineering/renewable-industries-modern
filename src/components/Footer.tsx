import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-slate-800 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and About */}
          <div className="space-y-4">
            <Link to="/">
              <img className="h-16" src="https://renewableindustries.co/wp-content/uploads/2024/06/Renewable-indus-logo.png" alt="Renewable Industries Logo" />
            </Link>
            <p className="text-gray-400 text-sm">
              At Renewable Industries, we’re proud to power our community with clean, sustainable energy. From solar to wind solutions, we work with local homes and businesses to build a greener future.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/renewable.industries?igsh=aXZrcHpiY3ljejlw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-light transition-colors"><Instagram /></a>
              <a href="https://www.facebook.com/profile.php?id=61561250176617&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-light transition-colors"><Facebook /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-400 hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link to="/our-services" className="text-gray-400 hover:text-primary-light transition-colors">Our Services</Link></li>
              <li><Link to="/category/blog" className="text-gray-400 hover:text-primary-light transition-colors">Latest News</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-light transition-colors">Contact</Link></li>
              <li><Link to="/our-vendors" className="text-gray-400 hover:text-primary-light transition-colors">Financing</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-primary-light flex-shrink-0" />
                <a href="mailto:info@renewableindustries.co" className="hover:text-primary-light transition-colors">info@renewableindustries.co</a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-primary-light flex-shrink-0" />
                <a href="tel:0240627593" className="hover:text-primary-light transition-colors">02 4062 7593</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-primary-light flex-shrink-0" />
                <span>2/43 Denison Street, Carrington, NSW 2294</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Renewable Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
