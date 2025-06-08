import React from "react";
// Remove Link if user-profile page is not separate, or keep if it's a fallback.
// For now, let's remove Link from the profile *area* and make it a button.
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineBell,
  AiOutlineDown,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useStateContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const { handleClick, activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="navbar bg-white p-4 shadow-md mb-4 flex items-center justify-between">
      {/* Left Section (Hamburger menu, Search) */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setActiveMenu(!activeMenu)}
          className="navbar-icon mr-4 cursor-pointer text-gray-600 menu-toggle-btn"
        >
          <AiOutlineMenu />
        </button>
        <span className="navbar-icon cursor-pointer text-gray-600">
          <AiOutlineSearch />
        </span>
      </div>

      {/* Right Section (Shopping Cart, Notifications, User Profile) */}
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => handleClick("cart")}
          className="navbar-icon relative mr-4 cursor-pointer text-gray-600"
        >
          <AiOutlineShoppingCart />
          <span className="badge absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>
        <button
          type="button"
          onClick={() => handleClick("notification")}
          className="navbar-icon relative mr-4 cursor-pointer text-gray-600"
        >
          <AiOutlineBell />
          <span className="badge absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
            5
          </span>
        </button>

        {/* Settings Icon */}
        <button
          type="button"
          onClick={() => handleClick("themeSettings")}
          className="navbar-icon mr-4 cursor-pointer text-gray-600 settings-icon-btn"
        >
          <FiSettings />
        </button>

        {/* User Profile - Now a button */}
        <button
          type="button"
          onClick={() => handleClick("userProfile")} // Add click handler for User Profile
          className="user-profile-toggle-btn flex items-center p-1 hover:bg-gray-100 rounded-lg" // Added specific styling classes
        >
          <img
            src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Harshal&size=32"
            alt="Harshal's Profile"
            className="user-avatar w-8 h-8 rounded-full mr-2"
          />
          <span className="user-name font-medium">Harshal</span>
          <span className="navbar-icon ml-1 text-gray-600">
            <AiOutlineDown />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
