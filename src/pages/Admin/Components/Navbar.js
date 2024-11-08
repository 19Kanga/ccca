// src/components/Navbar.js
import React from 'react';
import { FaBell } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-10 flex items-center justify-between px-6 py-4">
      {/* Bouton de bascule de la barre latérale pour mobile */}
      <button onClick={toggleSidebar} className="text-gray-600 text-2xl md:hidden">
        ☰
      </button>

      {/* Icônes à droite - Notification et Avatar */}
      <div className="flex items-center">
        {/* Icône de notification avec badge */}
        <div className="relative">
          <FaBell className="text-gray-600 text-2xl cursor-pointer" />
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </div>

        {/* Icône d'avatar */}
        <div className="relative">
          <AiOutlineUser className="text-gray-600 text-3xl cursor-pointer" />
        </div>
      </div>

      {/* <header className="flex items-center justify-between h-16 px-6 bg-white shadow-md">
        <input
          className="bg-gray-100 rounded-md pl-4 pr-4 py-2 focus:outline-none"
          type="text"
          placeholder="Rechercher"
        />
      </header> */}
    </nav>
  );
}

export default Navbar;
