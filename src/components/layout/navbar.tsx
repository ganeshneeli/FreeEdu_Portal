import { Link } from 'react-router-dom';
import { useCartStore } from '@/store/cart';
import { Button } from '@/components/ui/button';
import { ShoppingCart, LogIn, UserPlus, ChevronDown, Video, Menu, X, BookOpen, Users, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { CartButton } from '../cart/cart-button';

export function Navbar() {
  const { items } = useCartStore();
  const cartItemCount = items.length;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: 'Academics', path: '/courses/academics' },
    { name: 'Languages', path: '/courses/languages' },
    { name: 'Music', path: '/courses/music' },
    { name: 'Programming', path: '/courses/programming' },
    { name: 'Business', path: '/courses/business' },
    { name: 'Design', path: '/courses/design' },
    { name: 'Health & Wellness', path: '/courses/health' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">FreeEdu</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/courses/academics" className="text-gray-300 hover:text-white transition-colors">
              Courses
            </Link>
            <Link to="/live-mentoring" className="text-gray-300 hover:text-white transition-colors">
              Live Mentoring
            </Link>
            <Link to="/become-tutor" className="text-gray-300 hover:text-white transition-colors">
              Become a Tutor
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <CartButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses/academics"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/live-mentoring"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Live Mentoring
              </Link>
              <Link
                to="/become-tutor"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Become a Tutor
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-3 py-2">
                <CartButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 