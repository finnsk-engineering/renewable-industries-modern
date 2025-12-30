import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Our Services', path: '/our-services' },
  { name: 'Our Reach', path: '/our-reach' },
  { name: 'Blog', path: '/category/blog' },
  { name: 'Employment', path: '/employment' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-12" src="https://renewableindustries.co/wp-content/uploads/2024/06/Renewable-indus-logo.png" alt="Renewable Industries Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? 'text-primary-light' : 'text-gray-300 hover:bg-slate-800 hover:text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
             <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition-transform duration-200 hover:scale-105">
                Contact Us
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-primary text-white' : 'text-gray-300 hover:bg-slate-700 hover:text-white'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
             <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-left mt-2 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-3 rounded-md">
                Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
