import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

/**
 * Layout component that includes the Sidebar and renders the active route's component.
 */
const SidebarLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <Outlet /> {/* Renders the active route's component */}
      </div>
    </div>
  );
};

export default SidebarLayout;
