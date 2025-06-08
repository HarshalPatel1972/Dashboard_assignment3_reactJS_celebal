import React, { useState } from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

// Function to apply background color to an element
const change = (args) => {
  document.getElementById("preview-pen").style.backgroundColor =
    args.currentValue.hex;
};

// Define a rich set of preset colors for the palette
const presetColors = {
  custom: [
    "#ff0000",
    "#ff8000",
    "#ffff00",
    "#80ff00",
    "#00ff00",
    "#00ff80",
    "#00ffff",
    "#0080ff",
    "#0000ff",
    "#8000ff",
    "#ff00ff",
    "#ff0080",
    "#808080",
    "#c0c0c0",
    "#404040",
    "#000000",
    "#ffffff",
    "#a52a2a",
    "#deb887",
    "#5f9ea0",
    "#7fff00",
    "#d2691e",
    "#6495ed",
    "#dc143c",
    "#006400",
    "#ff00ff",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#e9967a",
    "#8fbc8f",
    "#483d8b",
    "#2f4f4f",
    "#ffd700",
    "#daa520",
    "#c0c0c0",
    "#808080",
  ],
};

const ColorPicker = () => {
  const [penColor, setPenColor] = useState("#00B32C"); // Default green for the pen

  return (
    <div className="color-picker-page">
      <h1 className="page-title">Color Picker</h1>
      <div className="flex justify-center items-center mb-8">
        {/* Visual element whose color will change */}
        <div
          id="preview-pen"
          style={{
            backgroundColor: penColor,
            width: "150px",
            height: "30px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          <span>🖊️</span>
        </div>
      </div>

      <div className="color-pickers-container">
        {/* Inline Palette */}
        <div className="color-picker-section">
          {" "}
          {/* This div is the white card for the palette */}
          <h2 className="section-heading mb-4 text-center">Inline Pallete</h2>
          {/* The Syncfusion ColorPickerComponent itself */}
          <ColorPickerComponent
            id="inline-palette"
            mode="Palette"
            modeSwitcher={false} // Hide mode switcher
            inline={true} // Render inline
            showButtons={false} // Hide apply/cancel buttons
            change={change} // Attach the change handler
            value={penColor} // Connect to state
            presetColors={presetColors} // Apply the rich color palette
            cssClass="custom-ej-colorpicker" // Add a custom class for CSS overrides
          />
        </div>

        {/* Inline Picker */}
        <div className="color-picker-section">
          {" "}
          {/* This div is the white card for the picker */}
          <h2 className="section-heading mb-4 text-center">Inline Picker</h2>
          {/* The Syncfusion ColorPickerComponent itself */}
          <ColorPickerComponent
            id="inline-picker"
            mode="Picker" // Use 'Picker' mode
            modeSwitcher={false} // Hide mode switcher
            inline={true} // Render inline
            showButtons={false} // Hide apply/cancel buttons
            change={change} // Attach the change handler
            value={penColor} // Connect to state
            cssClass="custom-ej-colorpicker" // Add a custom class for CSS overrides
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
