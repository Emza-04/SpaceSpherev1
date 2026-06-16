import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bell, Heart, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { cn } from '../lib/utils';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const navLinks = [
  {
    name: 'Buy',
    path: '/listings?type=buy'
  },
  {
    name: 'Rent',
    path: '/listings?type=rent'
  },
  {
    name: 'Commercial',
    path: '/listings?propertyType=Commercial'
  },
  {
    name: 'Developments',
    path: '/listings?propertyType=Estate'
  },
  {
    name: 'Agents',
    path: '#'
  },
  {
    name: 'Sell',
    path: '#'
  }];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ?
        'glass shadow-sm py-3' :
        'bg-white py-4 border-b border-transparent'
      )}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-ink-charcoal hover:text-brand-500 transition-colors">
              
                {link.name}
              </Link>
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 border-r border-hairline pr-4">
              <button className="text-gray-500 hover:text-brand-500 transition-colors relative">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              <button className="text-gray-500 hover:text-brand-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button variant="outline" size="sm">
                Register
              </Button>
              <Button variant="primary" size="sm">
                List Property
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ink p-2">
              
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-hairline shadow-lg py-4 px-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className="text-base font-medium text-ink-charcoal py-2 border-b border-surface">
            
                {link.name}
              </Link>
          )}
          </nav>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-ink-charcoal">
              Notifications
            </span>
            <Bell size={20} className="text-gray-500" />
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-sm font-medium text-ink-charcoal">
              Saved Properties
            </span>
            <Heart size={20} className="text-gray-500" />
          </div>
          <div className="flex flex-col gap-3 mt-2">
            <Button variant="outline" fullWidth>
              Login / Register
            </Button>
            <Button variant="primary" fullWidth>
              List Property
            </Button>
          </div>
        </div>
      }
    </header>);

}