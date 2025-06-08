import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ContextProvider } from "./contexts/ContextProvider";

// --- Syncfusion License Registration ---
import { registerLicense } from "@syncfusion/ej2-base";

// Correct way in Vite
registerLicense(import.meta.env.VITE_SYNCFUSION_KEY);
// --------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
