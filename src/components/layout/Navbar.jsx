import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming React Router

// Logo Component
const Logo = () => (
  <span className="text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
    Mahder Halie
  </span>
  // If you have an SVG logo for "Mahder Halie", you can use it here:
  // <img src="/mahder-halie-logo.svg" alt="Mahder Halie Logo" className="h-7 w-auto" />
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false); // For "Pages" dropdown
  const navigate = useNavigate();

  // Navigation items - "Pages" will be a dropdown trigger
  const mainNavItems = [
    // { name: 'Pages', path: '#', isDropdown: true }, // Placeholder for dropdown logic
    { name: 'Contact', path: '/contact' } // Example path
  ];

  // Example dropdown items for "Pages"
  const pagesDropdownItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    // Add more pages as needed
  ];

  const handleNavigate = (path) => {
    if (path === '#') return; // Do nothing for placeholder paths
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsPagesDropdownOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 font-sans">
      <div className="md:px-24 ml-2 pr-3 mx-auto  py-5 flex justify-between md:items-center">
        {/* Logo/Name */}
        <Link to="/" className="cursor-pointer">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
              onBlur={() => setTimeout(() => setIsPagesDropdownOpen(false), 150)} // Close on blur with delay
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium flex items-center"
            >
              Pages
              <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isPagesDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl py-1 z-20 border dark:border-gray-700">
                {pagesDropdownItems.map(item => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigate(item.path)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Other Main Nav Items */}
          {mainNavItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigate(item.path)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-lg py-2 mx-4 border dark:border-gray-700">
          {/* Pages Dropdown for Mobile */}
          <div className="px-4 py-2">
             <button
              onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
              className="flex justify-between items-center w-full text-sm text-gray-700 dark:text-gray-300 font-medium"
            >
              Pages
              <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isPagesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isPagesDropdownOpen && (
              <div className="mt-1 pl-3">
                {pagesDropdownItems.map(item => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigate(item.path)}
                    className="block w-full text-left px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Other Mobile Nav Items */}
          {mainNavItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigate(item.path)}
              className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
