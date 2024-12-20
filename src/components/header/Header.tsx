import React from 'react';
import ThemeToggleButton from '../ui/buttons/theme-toggle'
import { FaBox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white sticky top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold w-1/3">
          <div className="flex items-center gap-2">
            <FaBox size={18} />
            Aves D.
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex justify-center text-lg font-semibold space-x-6 w-1/3">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link to="/dashboard" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">
            Dashboard
          </Link>
        </nav>

        {/* Theme Toggle Button */}
        <div className="flex items-center space-x-4 w-1/3 justify-end">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
