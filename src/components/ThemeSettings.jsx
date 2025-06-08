import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // For the close button
import { BsCheck } from "react-icons/bs"; // For the checkmark on selected color

// Import the context hook to access theme state and functions
import { useStateContext } from "../contexts/ContextProvider";

// Define our theme colors
const themeColors = [
  {
    name: "blue-theme",
    color: "#0F75D2", // Corresponds to --primary-color default
  },
  {
    name: "green-theme",
    color: "#00C292",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#6574CD",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "orange-theme",
    color: "#FFB800",
  },
];

const ThemeSettings = () => {
  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
    setActiveMenu,
    isClicked,
    setIsClicked,
  } = useStateContext();

  // Function to close the theme settings panel
  const handleCloseSettings = () => {
    // Reset isClicked state to close all popovers, including theme settings
    setIsClicked({
      chat: false,
      cart: false,
      userProfile: false,
      notification: false,
    });
  };

  return (
    <div className="theme-settings-panel">
      <div className="theme-settings-header">
        <p className="font-bold text-xl">Settings</p>
        <button
          type="button"
          onClick={handleCloseSettings}
          className="close-settings-btn"
        >
          <AiOutlineClose />
        </button>
      </div>

      <div className="theme-options-section border-b-1 pb-4">
        <p className="font-semibold text-lg mb-2">Theme Option</p>
        <div className="flex items-center">
          <input
            type="radio"
            id="light"
            name="theme"
            value="Light"
            className="cursor-pointer mr-2"
            onChange={setMode}
            checked={currentMode === "Light"}
          />
          <label htmlFor="light" className="ml-2 cursor-pointer text-gray-700">
            Light
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            type="radio"
            id="dark"
            name="theme"
            value="Dark"
            className="cursor-pointer mr-2"
            onChange={setMode}
            checked={currentMode === "Dark"}
          />
          <label htmlFor="dark" className="ml-2 cursor-pointer text-gray-700">
            Dark
          </label>
        </div>
      </div>

      <div className="theme-options-section mt-4">
        <p className="font-semibold text-lg mb-2">Theme Colors</p>
        <div className="flex gap-3">
          {themeColors.map((item, index) => (
            <div
              key={index}
              className="relative mt-2 cursor-pointer flex gap-5 items-center"
            >
              <button
                type="button"
                className="color-picker-circle flex justify-center items-center"
                style={{ backgroundColor: item.color }}
                onClick={() => setColor(item.color)}
              >
                {/* Checkmark for selected color */}
                {currentColor === item.color && (
                  <BsCheck className="text-white text-2xl" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
