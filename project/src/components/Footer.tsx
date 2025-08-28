import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
                        <img
                          src="/IMG-20250827-WA0016.png"
                          alt="ADSSY Media Logo"
                          className="h-8 w-8 object-contain rounded-xl"
                        />
              {/* <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div> */}
              <span className="text-xl font- text-white">
                Adssy Media
              </span>
            </Link>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Scaling brands with smarter ads and strategy. We help ambitious brands grow through paid advertising, performance marketing, and creative digital strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@adssymedia.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>hello@adssymedia.com</span>
              </a>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/"
                  className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white rounded-lg transition-all duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 ADSSY MEDIA. All rights reserved. Built for ambitious brands.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;