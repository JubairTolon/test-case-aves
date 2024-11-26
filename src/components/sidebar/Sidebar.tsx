import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiHome2Fill } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute top-2 left-2 z-50 p-2 rounded-md ${!isOpen ? 'visible' : 'hidden'} bg-gray-200 dark:bg-gray-800 md:hidden transition duration-300`}
      >
        <HiMenu className="text-xl text-gray-800 dark:text-white" />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 md:translate-x-0 md:relative md:flex flex-col w-72 md:w-72`}
      >
        <div className="p-4 text-center font-bold border-b border-gray-200 dark:border-gray-800">
          Dashboard
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-200 dark:bg-gray-700 mt-1' : 'mt-1'
                  }`
                }
              >
                <MdSpaceDashboard />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-200 dark:bg-gray-700 mt-1' : 'mt-1'
                  }`
                }
              >
                <FaCog />
                <span>Settings</span>
              </NavLink>

            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 ${isActive ? 'bg-gray-200 dark:bg-gray-700 mt-1' : ' mt-1'
                  }`
                }
              >
                <RiHome2Fill />
                <span>Go to Home</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        />
      )}
    </div>
  );
};

export default Sidebar;
