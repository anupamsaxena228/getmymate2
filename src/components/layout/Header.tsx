import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings, Calendar, ChevronDown } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  
  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-xl md:text-2xl font-bold ${isScrolled || location.pathname !== '/' ? 'text-primary-600' : 'text-white'}`}>
              MentorConnect
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/explore" 
              className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-100 ${
                isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white hover:text-gray-800'
              }`}
            >
              Explore
            </Link>
            <Link 
              to="/how-it-works" 
              className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-100 ${
                isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white hover:text-gray-800'
              }`}
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-100 ${
                isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white hover:text-gray-800'
              }`}
            >
              Pricing
            </Link>
            
            {!user ? (
              <>
                <Link 
                  to="/login" 
                  className={`px-4 py-2 rounded-lg font-medium hover:bg-gray-100 ${
                    isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white hover:text-gray-800'
                  }`}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className={`btn btn-primary btn-md ${
                    !isScrolled && location.pathname === '/' ? 'bg-white text-primary-600 hover:bg-primary-50' : ''
                  }`}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
                >
                  <img 
                    src={user.avatar || 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} 
                    alt={user.name} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className={isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}>
                    {user.name.split(' ')[0]}
                  </span>
                  <ChevronDown className={`w-4 h-4 ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`} />
                </button>
                
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-20">
                    <Link 
                      to="/dashboard" 
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="w-4 h-4 mr-2" />
                      Dashboard
                    </Link>
                    <Link 
                      to={`/profile/${user.username}`} 
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <User className="w-4 h-4 mr-2" />
                      My Profile
                    </Link>
                    <Link 
                      to="/dashboard/bookings" 
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      My Bookings
                    </Link>
                    <button 
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled || location.pathname !== '/' ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slide-down">
          <div className="px-4 py-4 space-y-1">
            <Link 
              to="/explore" 
              className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
            >
              Explore
            </Link>
            <Link 
              to="/how-it-works" 
              className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
            >
              How It Works
            </Link>
            <Link 
              to="/pricing" 
              className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
            >
              Pricing
            </Link>
            
            {!user ? (
              <>
                <Link 
                  to="/login" 
                  className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/dashboard" 
                  className="flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Dashboard
                </Link>
                <Link 
                  to={`/profile/${user.username}`} 
                  className="flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
                >
                  <User className="w-4 h-4 mr-2" />
                  My Profile
                </Link>
                <Link 
                  to="/dashboard/bookings" 
                  className="flex items-center px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  My Bookings
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center w-full text-left px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;