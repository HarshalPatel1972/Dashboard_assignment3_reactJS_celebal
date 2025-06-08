import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./contexts/ContextProvider"; // Import ContextProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        {" "}
        {/* Wrap App with ContextProvider */}
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
