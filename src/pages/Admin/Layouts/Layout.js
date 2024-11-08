// src/components/Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Main content area where nested route content will appear */}
        <main className="flex-1 p-6 mt-16 overflow-y-auto bg-gray-100">
          {/* Render the active nested route here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
