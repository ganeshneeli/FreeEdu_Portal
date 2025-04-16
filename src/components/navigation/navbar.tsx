import { useState } from 'react';
import { BookOpen, GraduationCap, Languages, Music, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { AuthModal } from '../auth/auth-modal';
import { CartButton } from '../cart/cart-button';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const [showAuth, setShowAuth] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/courses/${category.toLowerCase()}`);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <GraduationCap className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">EduVerse</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleCategoryClick('Academics')}
              className="text-gray-300 hover:text-white flex items-center transition-colors"
            >
              <BookOpen className="h-4 w-4 mr-1" />
              Academics
            </button>
            <button 
              onClick={() => handleCategoryClick('Languages')}
              className="text-gray-300 hover:text-white flex items-center transition-colors"
            >
              <Languages className="h-4 w-4 mr-1" />
              Languages
            </button>
            <button 
              onClick={() => handleCategoryClick('Music')}
              className="text-gray-300 hover:text-white flex items-center transition-colors"
            >
              <Music className="h-4 w-4 mr-1" />
              Music
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <CartButton />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowAuth(true)}
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              Log in
            </Button>
            <Button 
              size="sm" 
              onClick={() => setShowAuth(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <CartButton />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-white hover:text-gray-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleCategoryClick('Academics')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              >
                <BookOpen className="h-4 w-4 inline mr-2" />
                Academics
              </button>
              <button
                onClick={() => handleCategoryClick('Languages')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              >
                <Languages className="h-4 w-4 inline mr-2" />
                Languages
              </button>
              <button
                onClick={() => handleCategoryClick('Music')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              >
                <Music className="h-4 w-4 inline mr-2" />
                Music
              </button>
              <div className="pt-4 pb-3 border-t border-white/20">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowAuth(true)}
                  className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  Log in
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => setShowAuth(true)}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <AuthModal show={showAuth} onClose={() => setShowAuth(false)} />
    </nav>
  );
}