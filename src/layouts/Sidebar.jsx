import React from "react";
import { Link, NavLink } from "react-router-dom"; // NavLink for active styling

// Define our navigation links
const navLinks = [
  {
    title: "DASHBOARD",
    links: [{ name: "Ecommerce", path: "/ecommerce" }],
  },
  {
    title: "PAGES",
    links: [
      { name: "Orders", path: "/orders" },
      { name: "Employees", path: "/employees" },
      { name: "Customers", path: "/customers" },
    ],
  },
  {
    title: "APPS",
    links: [
      { name: "Calendar", path: "/calendar" },
      { name: "Kanban", path: "/kanban" },
      { name: "Editor", path: "/editor" },
      { name: "Color-Picker", path: "/color-picker" },
    ],
  },
  {
    title: "CHARTS",
    links: [
      { name: "Line", path: "/line" },
      { name: "Area", path: "/area" },
      { name: "Bar", path: "/bar" },
      { name: "Pie", path: "/pie" },
      { name: "Financial", path: "/financial" },
      { name: "Color-Mapping", path: "/color-mapping" },
      { name: "Pyramid", path: "/pyramid" },
    ],
  },
];

const Sidebar = () => {
  // We'll add logic for active links and potential sidebar toggling later.
  // For now, let's keep it simple.

  return (
    <div className="sidebar bg-gray-800 text-white min-h-screen p-4">
      {/* Logo/Title */}
      <div className="logo mb-8">
        <Link to="/" className="text-2xl font-bold text-white no-underline">
          OrderBee
        </Link>
      </div>

      {/* Navigation Sections */}
      <nav>
        {navLinks.map((section, index) => (
          <div key={index} className="mb-6">
            <p className="sidebar-title text-gray-400 uppercase text-xs mb-2">
              {section.title}
            </p>
            <ul>
              {section.links.map((link) => (
                <li key={link.name}>
                  {/* NavLink allows applying active styles */}
                  <NavLink
                    to={link.path}
                    className={
                      ({ isActive }) =>
                        isActive
                          ? "sidebar-link active text-blue-400 font-bold" // Styles for active link
                          : "sidebar-link text-white hover:text-blue-200" // Styles for inactive link
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
