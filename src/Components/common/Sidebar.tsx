import React from "react";
import { Link } from "react-router-dom";

/**
 * Sidebar component for navigating between pages.
 * Includes links to Contacts and Dashboard pages.
 */
const Sidebar: React.FC = () => (
  <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-full p-4">
    <ul>
      <li>
        <Link to="/contacts" className="block py-2 px-4 hover:bg-gray-700">
          Contacts
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
          Dashboard
        </Link>
      </li>
    </ul>
  </div>
);

export default Sidebar;
