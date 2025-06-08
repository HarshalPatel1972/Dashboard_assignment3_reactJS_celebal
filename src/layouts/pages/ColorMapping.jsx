import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingDirective,
  RangeColorSettingsDirective, // For color mapping ranges
} from "@syncfusion/ej2-react-charts";

// Mock data for the Color-Mapping Chart (USA Climate - Weather by Month example)
const colorMappingData = [
  { x: "Jan", y: 3 },
  { x: "Feb", y: 6 },
  { x: "Mar", y: 10 },
  { x: "Apr", y: 17 },
  { x: "May", y: 22 },
  { x: "Jun", y: 25 },
  { x: "Jul", y: 29 },
  { x: "Aug", y: 29 },
  { x: "Sep", y: 25 },
  { x: "Oct", y: 21 },
  { x: "Nov", y: 15 },
  { x: "Dec", y: 8 },
];

// Define color ranges based on temperature (as per original image's legend)
const colorMappingRanges = [
  { start: "1", end: "10", colors: ["#FFF000"] }, // Yellow for 1-10°C (lightyellow in image)
  { start: "11", end: "20", colors: ["#FFB800"] }, // Orange for 11-20°C
  { start: "21", end: "30", colors: ["#FF5C8E"] }, // Red for 21-30°C
];

const ColorMapping = () => {
  const primaryXAxis = {
    valueType: "Category",
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    lineStyle: { width: 0 },
  };

  const primaryYAxis = {
    title: "Temperature (°C)",
    lineStyle: { width: 0 },
    majorGridLines: { width: 1, color: "#e0e0e0" },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelFormat: "{value}°C",
  };

  const chartArea = { border: { width: 0 } };
  const tooltip = { enable: true };
  const legendSettings = {
    visible: true,
    position: "Bottom", // Legend at bottom as per original image
    textStyle: {
      color: document.documentElement.style.getPropertyValue(
        "--text-color-primary"
      ),
    },
  };

  return (
    <div className="color-mapping-chart-page">
      <h1 className="page-title">Color Mapping Chart</h1>
      <div className="chart-container page-content">
        <ChartComponent
          id="color-mapping-chart"
          height="420px"
          primaryXAxis={primaryXAxis}
          primaryYAxis={primaryYAxis}
          chartArea={chartArea}
          tooltip={tooltip}
          legendSettings={legendSettings}
          title="USA CLIMATE - WEATHER BY MONTH"
          background={document.documentElement.style.getPropertyValue(
            "--bg-color-page-content"
          )}
        >
          <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData}
              xName="x"
              yName="y"
              name="Temperature"
              type="Column"
              // Crucial for color mapping:
              pointColorMapping="y" // Map color based on 'y' value (temperature)
              marker={{ dataLabel: { visible: false } }} // Hide data labels on bars if not needed
              columnSpacing={0.1}
            />
          </SeriesCollectionDirective>
          {/* Define the color ranges and their labels for the legend */}
          <RangeColorSettingsDirective>
            <RangeColorSettingDirective
              label="1°C to 10°C"
              start="1"
              end="10"
              colors={["#FFF000"]} // Light yellow for low temp
            />
            <RangeColorSettingDirective
              label="11°C to 20°C"
              start="11"
              end="20"
              colors={["#FFB800"]} // Orange for medium temp
            />
            <RangeColorSettingDirective
              label="21°C to 30°C"
              start="21"
              end="30"
              colors={["#FF5C8E"]} // Red for high temp
            />
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
