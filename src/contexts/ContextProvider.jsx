import React, { createContext, useContext, useState } from "react";

// 1. Create the Context
const StateContext = createContext();

// Initial settings for our theme
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// 2. Create the Provider component
export const ContextProvider = ({ children }) => {
  // State to manage visibility of specific sections (e.g., cart sidebar, notifications)
  const [activeMenu, setActiveMenu] = useState(true); // For sidebar visibility
  const [isClicked, setIsClicked] = useState(initialState); // For showing/hiding top-bar popovers
  const [screenSize, setScreenSize] = useState(undefined); // To track screen size for responsiveness

  // Theme-related states
  const [currentColor, setCurrentColor] = useState("#0F75D2"); // Default primary color (blue)
  const [currentMode, setCurrentMode] = useState("Light"); // Default theme mode

  // Function to set the color theme
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color); // Save preference to local storage
    applyThemeToCSS(color, currentMode); // Apply immediately
  };

  // Function to set the mode (Light/Dark)
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value); // Save preference to local storage
    applyThemeToCSS(currentColor, e.target.value); // Apply immediately
  };

  // Function to handle clicks on various top-bar icons (cart, notifications, etc.)
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true }); // Set only the clicked item to true
  };

  // Helper function to apply theme to CSS variables
  const applyThemeToCSS = (color, mode) => {
    // This function will update CSS variables dynamically.
    // We'll define these CSS variables in index.css in the next step.
    document.documentElement.style.setProperty("--primary-color", color);

    if (mode === "Dark") {
      document.documentElement.style.setProperty("--bg-color-main", "#1A202C"); // Dark background for main content
      document.documentElement.style.setProperty(
        "--bg-color-page-content",
        "#2D3748"
      ); // Darker background for specific content boxes
      document.documentElement.style.setProperty(
        "--text-color-primary",
        "#EDF2F7"
      ); // Light text color
      document.documentElement.style.setProperty("--sidebar-bg", "#1A202C"); // Dark sidebar background
      document.documentElement.style.setProperty("--sidebar-text", "#A0AEC0"); // Lighter sidebar text
      document.documentElement.style.setProperty("--card-bg", "#2D3748"); // Darker card background
      document.documentElement.style.setProperty(
        "--card-shadow",
        "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18)"
      );
    } else {
      // Light mode
      document.documentElement.style.setProperty("--bg-color-main", "#F7FAFC"); // Light background for main content
      document.documentElement.style.setProperty(
        "--bg-color-page-content",
        "#FFFFFF"
      ); // White background for specific content boxes
      document.documentElement.style.setProperty(
        "--text-color-primary",
        "#2D3748"
      ); // Dark text color
      document.documentElement.style.setProperty("--sidebar-bg", "#2D3748"); // Sidebar background (stays same for now)
      document.documentElement.style.setProperty("--sidebar-text", "#FFFFFF"); // Sidebar text (stays same for now)
      document.documentElement.style.setProperty("--card-bg", "#FFFFFF"); // White card background
      document.documentElement.style.setProperty(
        "--card-shadow",
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      );
    }
  };

  // On component mount, load saved theme from local storage if available
  React.useEffect(() => {
    const savedColor = localStorage.getItem("colorMode");
    const savedMode = localStorage.getItem("themeMode");

    if (savedColor) setCurrentColor(savedColor);
    if (savedMode) setCurrentMode(savedMode);

    // Apply theme on initial load
    applyThemeToCSS(savedColor || currentColor, savedMode || currentMode);
  }, []); // Empty dependency array means run once on mount

  return (
    // 3. Provide the state and functions to children components
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor, // This can be removed if setColor is preferred
        currentMode,
        setCurrentMode, // This can be removed if setMode is preferred
        setColor,
        setMode,
        applyThemeToCSS, // Expose this if needed elsewhere, otherwise keep internal
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// 4. Custom hook to consume the context easily
export const useStateContext = () => useContext(StateContext);
