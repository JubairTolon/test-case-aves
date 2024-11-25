import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiHome2Fill } from 'react-icons/ri';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 bg-gray-800 text-white h-screen shadow-lg">
      <div className="p-4 text-center font-bold border-b border-gray-700">
        Dashboard
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <NavLink
              to="/dashboard"
              className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700">
              <MdSpaceDashboard />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/settings"
              className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700"
            >
              <FaCog />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700"
            >
              <RiHome2Fill />
              <span>Go to Home</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
