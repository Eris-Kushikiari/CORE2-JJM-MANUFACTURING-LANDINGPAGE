import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo.jpg";
import ThemeToggle from "../context/ThemeToggle";

function Navbar() {
  // Track the active section
  const [activeSection, setActiveSection] = useState("Home");
  // Track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const auth = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(auth === 'true');
    };
    
    // Initial check
    checkAuth();
    
    // Listen for storage events
    window.addEventListener('storage', checkAuth);
    
    // Custom event listener for auth changes within the same window
    window.addEventListener('authChange', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    
    // Dispatch custom event to notify other components about auth change
    window.dispatchEvent(new Event('authChange'));
    
    // Close mobile menu if open
    setMobileMenuOpen(false);
    
    // Optionally scroll to top after logout
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu after clicking a link
  const handleMenuItemClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { name: "About us", link: "about" },
    { name: "Features", link: "Features" },
    { name: "Service", link: "Services" },
    { name: "Market", link: "IndustriesServed" },
    ...(isAuthenticated ? [{ name: "Department", link: "Department" }] : []),
    { name: "Contact Us", link: "Footer" },
  ];

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 w-full transition-colors duration-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl flex items-center text-green-500">
              <img src={logo} alt="Logo" className="rounded-full w-8 h-8 sm:w-10 sm:h-10" />
              <h2 className="text-green-500 font-bold text-sm sm:text-base md:text-lg ml-2 hidden xs:block">
                JJM MANUFACTURING
              </h2>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <ul className="flex items-center space-x-4 xl:space-x-6 text-gray-700 dark:text-gray-300">
              {menuItems.map((item) => (
                <li key={item.link} className="relative">
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={1000}
                    className={`cursor-pointer text-sm xl:text-base ${
                      activeSection === item.link
                        ? "text-emerald-600 dark:text-emerald-400 font-bold"
                        : "text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400"
                    }`}
                    onClick={() => setActiveSection(item.link)}
                  >
                    {item.name}
                  </Link>
                  {/* Underline when active */}
                  {activeSection === item.link && (
                    <div className="absolute left-0 w-full h-[2px] bg-emerald-600 dark:bg-emerald-400 mt-1" />
                  )}
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle Button */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
            
            {/* Order Now Button */}
            <a href="https://core-2-jjm-manufacturing-rgjr.vercel.app" target="_blank" className="ml-2">
              <button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-3 py-1.5 xl:px-4 xl:py-2 rounded-full flex items-center gap-2 transition-colors text-sm xl:text-base">
                <FaCartShopping /> Order now
              </button>
            </a>
            
            {/* Logout Button (desktop) */}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white px-3 py-1.5 xl:px-4 xl:py-2 rounded-md transition-colors ml-2 text-sm xl:text-base"
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            )}
          </div>

          {/* Mobile controls */}
          <div className="flex items-center lg:hidden">
            {/* Theme Toggle Button (Mobile) */}
            <div className="mr-3">
              <ThemeToggle />
            </div>
            
            {/* Mobile Order Button */}
            <a href="https://core2.jjm-manufacturing.com" className="mr-3">
              <button className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1 transition-colors text-xs sm:text-sm">
                <FaCartShopping /> Order
              </button>
            </a>
            
            {/* Logout Button (mobile) */}
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-md transition-colors mr-3 text-xs sm:text-sm"
              >
                <FaSignOutAlt className="mr-1" /> Logout
              </button>
            )}
            
            {/* Mobile menu toggle */}
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none p-1"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes size={22} />
              ) : (
                <FaBars size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 pt-16 transition-colors duration-200">
          <div className="container mx-auto px-6 py-6 h-full overflow-y-auto">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={1000}
                    className={`block py-3 px-4 text-center text-lg font-medium rounded-lg ${
                      activeSection === item.link
                        ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => handleMenuItemClick(item.link)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              
              {/* Mobile Order Button - Bottom */}
              <li className="pt-4 pb-2">
                <a 
                  href="https://core2.jjm-manufacturing.com"
                  className="block"
                >
                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg font-medium">
                    <FaCartShopping size={18} /> Order now
                  </button>
                </a>
              </li>
              
              {/* Mobile Logout Button - Bottom */}
              {isAuthenticated && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white py-3 rounded-lg transition-colors text-lg font-medium"
                  >
                    <FaSignOutAlt className="mr-2" size={18} /> Logout
                  </button>
                </li>
              )}
            </ul>
            
            {/* Close button - Top right */}
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 p-2 text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes size={24} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;