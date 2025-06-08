import React from "react";
import { Outlet } from "react-router-dom";
import UserProfile from "../components/UserProfile";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import ThemeSettings from "../components/ThemeSettings";
import { useStateContext } from "../contexts/ContextProvider";
import Cart from "../components/Cart"; // Import Cart
import Notification from "../components/Notification"; // Import Notification

const MainLayout = () => {
  const { activeMenu, isClicked, handleClick, currentColor } =
    useStateContext(); // currentColor is used in Navbar via ContextProvider, not directly MainLayout

  return (
    <div className="flex relative">
      {/* Theme Settings Panel - Conditionally Rendered */}
      {isClicked.themeSettings && <ThemeSettings />}
      {/* Shopping Cart Popover */}
      {isClicked.cart && <Cart />}
      {/* Notifications Popover */}
      {isClicked.notification && <Notification />}
      {/* User Profile Popover */}
      {isClicked.userProfile && <UserProfile />}{" "}
      {/* Conditionally render UserProfile */}
      {/* Sidebar Container - Manages the collapse/expand animation */}
      {/* This div will have its width transitioned by CSS based on activeMenu */}
      <div
        className={`sidebar-container ${
          activeMenu ? "sidebar-open" : "sidebar-closed"
        }`}
      >
        <Sidebar />
      </div>
      {/* Main Content Area - Expands/Contracts with sidebar */}
      {/* This div uses flex:1 to naturally fill the remaining space */}
      <div className="main-content-area flex-1 min-h-screen">
        <Navbar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
