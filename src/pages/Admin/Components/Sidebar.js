// src/components/Sidebar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiBook,
  FiFileText,
  FiCalendar,
  FiFlag,
  FiMessageSquare,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md';
import logo from '../../../assets/1x/icone.png';

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Tableau de Bord', icon: <FiHome />, path: '/Admin' },
    { title: 'CCCA Revue', icon: <FiBook />, path: '/Admin/ccca-revue' },
    { title: 'Actualité', icon: <FiFileText />, path: '/Admin/news' },
    { title: 'Événements', icon: <FiCalendar />, path: '/Admin/events' },
    { title: 'Activité', icon: <FiFlag />, path: '/Admin/activities' },
  ];

  const accountItems = [
    { title: 'Chat', icon: <FiMessageSquare /> },
    { title: 'Paramètres', icon: <FiSettings /> },
    { title: 'Déconnexion', icon: <FiLogOut /> },
  ];

  return (
    <>
      {/* Sidebar Drawer for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-white shadow-md transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static ${isCollapsed ? 'w-20' : 'w-64'}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 bg-gray-100">
          <div className="flex items-center justify-center w-full">
            <img src={logo} alt="Logo" className="w-14 h-8" />
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isCollapsed ? <MdOutlineArrowForwardIos /> : <MdOutlineArrowBackIosNew />}
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="mt-4">
          <div className="mt-2 space-y-1">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center ${
                  isCollapsed ? 'justify-center' : 'justify-start'
                } w-full px-4 py-2 text-gray-700 transition-all duration-200 hover:bg-gray-200 rounded-md ${
                  location.pathname === item.path ? 'bg-gray-300 font-semibold text-gray-900' : ''
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                {!isCollapsed && <span className="ml-3">{item.title}</span>}
              </Link>
            ))}
          </div>

          {/* Account Section */}
          <p className={`text-xs font-semibold px-4 mt-4 ${isCollapsed && 'hidden'}`}>COMPTE</p>
          <div className="mt-2 space-y-1">
            {accountItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center ${
                  isCollapsed ? 'justify-center' : 'justify-start'
                } w-full px-4 py-2 text-gray-700 transition-all duration-200 hover:bg-gray-200 rounded-md`}
              >
                <span className="text-xl">{item.icon}</span>
                {!isCollapsed && <span className="ml-3">{item.title}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Profile Section */}
        
      </div>

      {/* Overlay for Mobile when Sidebar is Open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Toggle Button for Mobile */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 right-4 bg-red-600 text-white p-2 rounded-lg shadow-lg lg:hidden z-50"
      >
        ☰
      </button>
    </>
  );
}

export default Sidebar;
