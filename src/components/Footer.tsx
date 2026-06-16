import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail } from
'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { Input } from './Input';
export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Logo
              textClassName="text-white"
              iconClassName="bg-brand-500 text-white"
              className="mb-6" />
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm">
              South Africa's premier real estate marketplace. Find your perfect
              home, investment property, or commercial space with confidence.
            </p>
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">
                Subscribe to our newsletter
              </h4>
              <div className="flex gap-2">
                <Input
                  placeholder="Email address"
                  className="bg-ink-charcoal border-gray-700 text-white placeholder:text-gray-500 focus:border-brand-500 focus:ring-brand-500" />
                
                <Button variant="primary">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Properties</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link
                  to="/listings?type=buy"
                  className="hover:text-brand-500 transition-colors">
                  
                  Houses for Sale
                </Link>
              </li>
              <li>
                <Link
                  to="/listings?type=rent"
                  className="hover:text-brand-500 transition-colors">
                  
                  Apartments to Rent
                </Link>
              </li>
              <li>
                <Link
                  to="/listings?propertyType=Commercial"
                  className="hover:text-brand-500 transition-colors">
                  
                  Commercial Spaces
                </Link>
              </li>
              <li>
                <Link
                  to="/listings?propertyType=Estate"
                  className="hover:text-brand-500 transition-colors">
                  
                  New Developments
                </Link>
              </li>
              <li>
                <Link
                  to="/listings?propertyType=Farm"
                  className="hover:text-brand-500 transition-colors">
                  
                  Farms & Estates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link to="#" className="hover:text-brand-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-brand-500 transition-colors">
                  Our Agents
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-brand-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-brand-500 transition-colors">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-brand-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-brand-500 flex-shrink-0 mt-0.5" />
                
                <span>
                  100 West Street
                  <br />
                  Sandton, Johannesburg
                  <br />
                  2196, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 flex-shrink-0" />
                <span>+27 11 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500 flex-shrink-0" />
                <span>hello@staysphere.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} StaySphere Property. All rights
            reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-brand-500 transition-colors">
              
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-500 transition-colors">
              
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-brand-500 transition-colors">
              
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-brand-500 hover:text-white transition-colors">
              
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>);

}