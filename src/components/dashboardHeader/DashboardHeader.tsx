import React from 'react';
import ThemeToggleButton from '../ui/buttons/theme-toggle'
import { FaBox } from 'react-icons/fa';

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white sticky top-0">
      <div className="mx-auto flex justify-between items-center py-4 px-20">
        <div className="text-xl font-bold w-1/3">
          <div className="flex items-center gap-2">
            <FaBox size={18} />
            Aves D.
          </div>
        </div>

        <div className="flex items-center space-x-4 w-1/3 justify-end">
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
