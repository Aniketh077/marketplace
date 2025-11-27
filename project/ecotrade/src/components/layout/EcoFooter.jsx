import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Linkedin } from 'lucide-react';

export default function EcoFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo_light.png" alt="Eco Marketplace" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted B2B platform connecting industries with verified Post-Consumer Recycled materials. Driving the circular economy forward.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/eco-home" className="hover:text-[#10B981] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/eco-industries" className="hover:text-[#10B981] transition">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/eco-materials" className="hover:text-[#10B981] transition">
                  Browse Materials
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#10B981] transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-[#10B981] transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#10B981] transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#10B981] transition">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#10B981] transition">
                  Sustainability Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sales@ecodispose.com" className="hover:text-[#10B981] transition">
                  sales@ecodispose.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+918861009443" className="hover:text-[#10B981] transition">
                  +91 88610 09443
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Eco Marketplace. All rights reserved. Powered by <a href="https://www.eco-dispose.com" target="_blank" rel="noopener noreferrer" className="text-[#10B981] hover:underline">EcoDispose</a>
            </p>

            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@EcoDispose" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#10B981] transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/clenrgy.eco.dispose/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#10B981] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/clenrgy-eco-dispose-india-llp/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#10B981] transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
