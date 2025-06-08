import React from "react";
import { Link } from "react-router-dom";
// Import icons - You can explore different sets from react-icons
// For example, from 'react-icons/ai' (Ant Design Icons), 'react-icons/fi' (Feather Icons), 'react-icons/bs' (Bootstrap Icons)
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineBell,
  AiOutlineDown,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar bg-white p-4 shadow-md mb-4 flex items-center justify-between">
      {/* Left Section (e.g., Hamburger menu, Search) */}
      <div className="flex items-center">
        <span className="navbar-icon mr-4 cursor-pointer text-gray-600">
          <AiOutlineMenu /> {/* Replaced ☰ with icon */}
        </span>
        <span className="navbar-icon cursor-pointer text-gray-600">
          <AiOutlineSearch /> {/* Replaced 🔍 with icon */}
        </span>
      </div>

      {/* Right Section (e.g., Shopping Cart, Notifications, User Profile) */}
      <div className="flex items-center">
        <span className="navbar-icon relative mr-4 cursor-pointer text-gray-600">
          <AiOutlineShoppingCart /> {/* Replaced 🛒 with icon */}
          <span className="badge absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </span>
        <span className="navbar-icon relative mr-4 cursor-pointer text-gray-600">
          <AiOutlineBell /> {/* Replaced 🔔 with icon */}
          <span className="badge absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
            5
          </span>
        </span>

        {/* User Profile */}
        <Link
          to="/user-profile"
          className="flex items-center no-underline text-gray-800"
        >
          <img
            src="https://via.placeholder.com/32" // Placeholder for user image
            alt="User Profile"
            className="user-avatar w-8 h-8 rounded-full mr-2"
          />
          <span className="user-name font-medium">Harshal</span>{" "}
          {/* Updated name */}
          <span className="navbar-icon ml-1 text-gray-600">
            <AiOutlineDown /> {/* Replaced ▼ with icon */}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
