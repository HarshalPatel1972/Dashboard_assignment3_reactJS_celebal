import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 p-4">
        {/* Navbar Component */}
        <Navbar />

        {/* Page Content - Rendered by React Router's Outlet */}
        <div className="page-content bg-white p-6 rounded-lg shadow-md">
          <Outlet />{" "}
          {/* This is where the specific page content will be rendered */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
